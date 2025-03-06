const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const router = express.Router();

import Registrant from '../models/registrant';
import PrivateSaleAdmin from '../models/admin';
import BtcAddress from '../models/btcaddress';

const verifyJWT = (req, res, next) => {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(403).json({ message: 'No token provided.' });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Failed to authenticate token.' });
        }

        req.userId = decoded.id;
        req.userRole = decoded.role;
        next();
    });
};

router.patch('/admin/users/:id', async (req, res) => {
    try {
        const { id } = req.params; // Get the registrant ID from the URL
        const updates = req.body; // Get the updates from the request body

        // Validate the updates
        if (!updates || Object.keys(updates).length === 0) {
            return res.status(400).json({ message: 'No updates provided' });
        }

        // Find the registrant and update the specified field(s)
        const updatedRegistrant = await Registrant.findByIdAndUpdate(
            id,
            { $set: updates }, // Use $set to update only the specified fields
            { new: true } // Return the updated document
        );

        if (!updatedRegistrant) {
            return res.status(404).json({ message: 'Registrant not found' });
        }

        res.status(200).json({
            message: 'Registrant updated successfully',
            data: updatedRegistrant,
        });
    } catch (error) {
        console.error('Error in PATCH /admin/users/:id:', error);
        res.status(500).json({ message: 'Error in server' });
    }
});

router.post('/admin/create/btc/address', verifyJWT, async (req, res) => {
    try {
        if (req.userRole !== 'admin') {
            return res.status(403).json({ message: 'Unauthorized access.' });
        }

        const { address } = req.body;

        const btcaddress = new BtcAddress({
            address
        });

        await btcaddress.save();

        res.status(200).json({
            message: 'Address created successfully',
            data: btcaddress,
        });
    } catch (error) {
        console.error('Error in /admin/users:', error);
        res.status(500).json({
            message: 'Error in server',
        });
    }
});

router.get('/admin/users', verifyJWT, async (req, res) => {
    try {
        if (req.userRole !== 'admin') {
            return res.status(403).json({ message: 'Unauthorized access.' });
        }

        const registrants = await Registrant.find({});

        res.status(200).json({
            message: 'Registrants fetched successfully',
            data: registrants,
        });
    } catch (error) {
        console.error('Error in /admin/users:', error);
        res.status(500).json({
            message: 'Error in server',
        });
    }
});

router.post('/admin/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                message: 'Email and password are required',
            });
        }

        const admin = await PrivateSaleAdmin.findOne({ email });

        if (!admin) {
            return res.status(404).json({
                message: 'Admin not found',
            });
        }

        const isPasswordValid = await bcrypt.compare(password, admin.password);

        if (!isPasswordValid) {
            return res.status(401).json({
                message: 'Invalid password',
            });
        }

        const token = jwt.sign(
            { id: admin._id, email: admin.email, role: 'admin' },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );


        res.status(200).json({
            message: 'Login successful',
            token,
        });
    } catch (error) {
        console.error('Error in /admin/login:', error);
        res.status(500).json({
            message: 'Error in server',
        });
    }
});

router.post('/admin/create', async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                message: 'Email and password are required',
            });
        }

        const existingAdmin = await PrivateSaleAdmin.findOne({ email });

        if (existingAdmin) {
            return res.status(409).json({
                message: 'Admin with this email already exists',
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newAdmin = new PrivateSaleAdmin({
            email,
            password: hashedPassword,
        });

        await newAdmin.save();

        res.status(201).json({
            message: 'Admin created successfully',
            admin: {
                id: newAdmin._id,
                email: newAdmin.email,
            },
        });
    } catch (error) {
        console.error('Error in /admin/create:', error);
        res.status(500).json({
            message: 'Error in server',
        });
    }
});


module.exports = router;