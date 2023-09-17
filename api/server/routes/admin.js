import express from 'express';
import jwt from 'jsonwebtoken';
import multer from 'multer';

import User from '../models/user';
import EditTracker from '../models/editTracker';
import Admin from '../models/admin';
import InHouseAsset from '../models/inHouseAsset';

import authenticateToken from '../utils/authenticateToken';

const admin = express();

/*async function deleteAllAdmins() {
    try {
        const result = await Admin.deleteMany({});
        console.log('Deleted admins:', result.deletedCount);
    } catch (err) {
        console.error('Error deleting admins:', err);
    }
}

//deleteAllAdmins();

/*
{
    "message": "Admin credentials saved successfully.",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YzMxNDk4Yzk3NTQxZDJiZjA0Zjg1ZSIsImlhdCI6MTY5MDUwNjM5Mn0.nS3tTO47v_vltzqJxbRcbXA5OvHzhgFLG8QyUdI9T1o",
    "adminData": {
        "username": "daemon",
        "password": "password",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YzMxNDk4Yzk3NTQxZDJiZjA0Zjg1ZSIsImlhdCI6MTY5MDUwNjM5Mn0.nS3tTO47v_vltzqJxbRcbXA5OvHzhgFLG8QyUdI9T1o"
    }
}
*/

/*function deleteAllInHouseAssets() {
    InHouseAsset.deleteMany({}, (err) => {
        if (err) {
            console.error('Error deleting all InHouseAsset:', err);
        } else {
            console.log('All InHouseAsset documents deleted successfully.');
        }
    });
}

deleteAllInHouseAssets();*/

/*const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads');
    },
    filename: function (req, file, cb) {
        cb(null, new Date().toISOString() + file.originalname);
    }
});

const fileFilter = (req, file, cb) => {
    // reject a file if it's not an image
    if (file.mimetype.startsWith('image/')) {
        cb(null, true);
    } else {
        cb(null, false);
    }
};

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5  // Allow images up to 5MB
    },
    fileFilter: fileFilter
});*/

const upload = multer({ dest: 'uploads/' });



admin.get('/alladmins', async (req, res) => {
    const masterkey = req.query.masterkey;

    if (masterkey && masterkey === process.env.masterKey) {
        Admin.find({}, (err, admins) => {
            if (err) {
                console.error('Error fetching Admins:', err);
            } else {
                console.log('All Admins:', admins);
                res.json({ message: 'Admins found successfully.', admins });
            }
        });
    }
});

admin.get('/admin/master', async (req, res) => {
    const { admin_id, masterkey } = req.query;

    if (masterkey && masterkey === process.env.masterKey) {
        Admin.findOne({ _id: admin_id }, (err, adminitem) => {
            if (err || !adminitem) {
                return res.sendStatus(401); // Unauthorized
            }

            res.json({ message: 'Admin found successfully.', adminitem });
        })
    }
});

admin.post('/admin/signup', async (req, res) => {
    const masterkey = req.query.masterkey;

    if (masterkey && masterkey === process.env.masterKey) {
        try {
            const receivedCredentials = req.body;
            const adminUser = new Admin(receivedCredentials);

            adminUser.save()
                .then(({ username, password }) => {
                    res.json({ message: 'Admin credentials saved successfully.', adminData: { username, password } });
                })
                .catch(error => {
                    res.status(500).json({
                        message: 'An error occurred while saving admin credentials.',
                        error
                    });
                });
        } catch (error) {
            console.log(error)
        }
    }
});

admin.post('/admin/login', async (req, res) => {
    try {
        const { user_name, password } = req.body;

        Admin.findOne({ username: user_name, password }, (err, adminitem) => {
            if (err || !adminitem) {
                return res.sendStatus(401); // Unauthorized
            }

            const token = jwt.sign({ username: adminitem.username }, process.env.secretKeyJWT);
            adminitem.token = token;

            adminitem.save()
                .then(({ _id, username, password, token }) => {
                    res.json({ message: 'Credentials saved successfully.', token, adminData: { _id, username, password, token } });
                })
                .catch(error => {
                    console.error('Error saving credentials:', error);
                    res.status(500).json({ error: 'An error occurred while saving admin credentials.' });
                });
        });
    } catch (error) {
        console.log(error)
    }
});

admin.get('/admin/', authenticateToken, async (req, res) => {
    const { admin_id } = req.query;

    Admin.findOne({ _id: admin_id }, (err, adminitem) => {
        if (err || !adminitem) {
            return res.sendStatus(401); // Unauthorized
        }

        const { token, _id, username, password } = adminitem;

        res.json({ message: 'Admin found successfully.', token, adminData: { _id, username, password, token } });
    })
});

admin.get('/getusers', authenticateToken, async (req, res) => {
    try {
        const users = await User.find();

        res.status(200).json({
            users
        })
    } catch (error) {
        console.log(error);
    }
});

admin.get('/getuser', authenticateToken, async (req, res) => {
    try {
        const userId = req.query.client_id;
        const user = await User.findById(userId);
        res.status(200).json({
            user
        })
    } catch (err) {
        console.error('Error finding user by ID:', err);
        return null;
    }
});

admin.put('/edituser', authenticateToken, async (req, res) => {
    try {
        const userId = req.query.client_id;

        const oldUserValues = await User.findOne({ _id: userId });

        const {
            password,
            phonenumber,
            verified,
            editedBy,
            customFields
        } = req.body

        let transactionFeePercentage;

        if (customFields.transactionFeePercentage) {
            transactionFeePercentage = customFields.transactionFeePercentage;
        }

        const conditions = { _id: userId };
        const update = {
            verified,
            customFields,
            password,
            phonenumber,
            transactionFeePercentage
        };
        const options = { new: true };

        User.findOneAndUpdate(conditions, update, options, (err, updatedUser) => {
            if (err) {
                console.error('Error updating user:', err);
            } else {
                const editTracker = new EditTracker({
                    oldattributes: oldUserValues,
                    newattributes: updatedUser,
                    clientEdited: updatedUser._id,
                    editedBy
                });

                editTracker.save()
                    .then(saveEditTracker => {
                        res.status(200).json({
                            updatedUser
                        })
                    });
            }
        })

    } catch (error) {
        console.log(error)
    }
});


admin.post('/createinhouseasset', authenticateToken, upload.single('selectedImage'), async (req, res) => {
    try {
        const admin_id = req.query.admin;
        const submission = req.body;

        Admin.findOne({ _id: admin_id }, (err, adminitem) => {
            if (err || !adminitem) {
                return res.sendStatus(401); // Unauthorized
            }

            if (req.file) {
                const asset = new InHouseAsset(submission);
                asset.createdBy = admin_id;
                asset.symbolImg = req.file.path;
                asset.save()
                    .then(savedAsset => {
                        res.json({ message: 'Asset credentials saved successfully.', savedAsset });
                    })
                    .catch(error => {
                        res.status(500).json({
                            message: 'An error occurred while saving asset.',
                            error
                        });
                    });
            }
        });
    } catch (error) {
        res.status(500).json({
            message: 'An error occurred while saving asset.',
            error
        });
    }
});

//seed inhouseaset db

admin.post('/seedcreateinhouseasset', authenticateToken, async (req, res) => {
    try {
        const admin_id = req.query.admin;
        const submission = req.body;

        Admin.findOne({ _id: admin_id }, (err, adminitem) => {
            if (err || !adminitem) {
                return res.sendStatus(401); // Unauthorized
            }

            const asset = new InHouseAsset(submission);
            asset.createdBy = admin_id;
            asset.save()
                .then(savedAsset => {
                    res.json({ message: 'Asset credentials saved successfully.', savedAsset });
                })
                .catch(error => {
                    res.status(500).json({
                        message: 'An error occurred while saving asset.',
                        error
                    });
                });
        });
    } catch (error) {
        res.status(500).json({
            message: 'An error occurred while saving asset.',
            error
        });
    }
});

const getAllInHouseAssets = async () => {
    try {
        const assets = await InHouseAsset.find();
        return assets;
    } catch (error) {
        console.error('Error fetching InHouseAssets:', error);
        throw error;
    }
};

admin.get('/inhouseassets', authenticateToken, async (req, res) => {
    try {
        getAllInHouseAssets()
            .then(assets => res.json({ assets }))
            .catch(error => console.error(error));
    } catch (error) {
        console.log(error)
    }
});

admin.get('/inhouseasset', authenticateToken, async (req, res) => {
    const assetId = req.query.assetId;
    const asset = await InHouseAsset.findById(assetId);

    if (asset) {
        res.json({ asset });
    } else {
        res.json({ message: 'asset not found' });
    }
});

admin.put('/inhouseasset', authenticateToken, upload.single('selectedImage'), async (req, res) => {
    const assetId = req.query.assetId;
    const adminId = req.query.adminId;

    Admin.findOne({ _id: adminId }, (err, adminitem) => {
        if (err || !adminitem) {
            return res.sendStatus(401);
        }

        if (req.file) {
            const updatesContent = req.body;
            const updates = { ...updatesContent, $push: { editedBy: adminId } };
            updates.symbolImg = req.file.path;

            InHouseAsset.findOneAndUpdate(
                { _id: assetId },
                updates,
                { new: true, useFindAndModify: false }
            )
                .then(inhouseasset => {
                    if (inhouseasset) {
                        res.json({ message: 'Asset updated successfully.', inhouseasset });
                    } else {
                        console.log('inHouseasset not found.');
                    }
                })
                .catch(err => console.error('Error:', err));

        } else {
            const updatesContent = req.body;
            const updates = { ...updatesContent, $push: { editedBy: adminId } };

            InHouseAsset.findOneAndUpdate(
                { _id: assetId },
                updates,
                { new: true, useFindAndModify: false }
            )
                .then(inhouseasset => {
                    if (inhouseasset) {
                        res.json({ message: 'Asset updated successfully.', inhouseasset });
                    } else {
                        console.log('inHouseasset not found.');
                    }
                })
                .catch(err => console.error('Error:', err));
        }
    })
});

admin.put('/delistinhouseasset', authenticateToken, (req, res) => {
    const assetId = req.query.assetId;
    const adminId = req.query.adminId;

    Admin.findOne({ _id: adminId }, (err, adminitem) => {
        if (err || !adminitem) {
            return res.sendStatus(401);
        }

        InHouseAsset.findOneAndUpdate(
            { _id: assetId },
            { delisted: true },
            { new: true, useFindAndModify: false }
        ).then(inhouseasset => {
            if (inhouseasset) {
                res.json({ message: 'Asset updated successfully.', inhouseasset });
            }
        })
    })
});

admin.put('/relistinhouseasset', authenticateToken, (req, res) => {
    const assetId = req.query.assetId;
    const adminId = req.query.adminId;

    Admin.findOne({ _id: adminId }, (err, adminitem) => {
        if (err || !adminitem) {
            return res.sendStatus(401);
        }

        InHouseAsset.findOneAndUpdate(
            { _id: assetId },
            { delisted: false },
            { new: true, useFindAndModify: false }
        ).then(inhouseasset => {
            if (inhouseasset) {
                res.json({ message: 'Asset updated successfully.', inhouseasset });
            }
        })
    })
});

export default admin;