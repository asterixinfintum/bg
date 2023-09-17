import express from 'express';
import multer from 'multer';

import Announcement from '../models/announcement';
import Admin from '../models/admin';

import authenticateToken from '../utils/authenticateToken';

const announcement = express();

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

announcement.post('/createannouncement', authenticateToken, upload.single('selectedImage'), async (req, res) => {
    const admin_id = req.query.admin;
    const announcementContent = req.body;

    Admin.findOne({ _id: admin_id }, (err, adminitem) => {
        if (err || !adminitem) {
            return res.sendStatus(401); // Unauthorized
        }

        if (req.file) {
            const announce = new Announcement(announcementContent);
            announce.image = req.file.path;

            announce.save()
                .then(annnmnt => {
                    res.json({ message: 'annnouncement saved successfully.', annnmnt });
                })
                .catch(error => {
                    console.log(error)
                    res.status(500).json({
                        message: 'An error occurred while saving annnouncement.',
                        error
                    });
                });
        }
    });
});

announcement.get('/announcements', authenticateToken, async (req, res) => {
    const annnmnts = await Announcement.find().exec();
    res.json({ message: 'annnmnts saved successfully.', annnmnts });
});

announcement.get('/announcements/assigned-to/:user_id', authenticateToken, async (req, res) => {
    const userId = req.params.user_id;
    const annnmnts = await Announcement.find({ assignedTo: userId }).exec();
    res.json({ message: 'annnmnts saved successfully.', annnmnts });
});

announcement.delete('/announcements/:id', authenticateToken, async (req, res) => {
    const id = req.params.id;
    const announcement = await Announcement.findByIdAndRemove(id).exec();

    if (!announcement) {
      return res.status(404).json({ message: 'Announcement not found' });
    }

    res.json({ message: 'Announcement deleted successfully' });
});

export default announcement;