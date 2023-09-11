import express from 'express';
import jwt from 'jsonwebtoken';

import User from '../models/user';

const login = express();

login.post('/login', (req, res) => {
    const { email, password } = req.body;

    User.findOne({ email, password }, (err, user) => {
        if (err || !user) {
            return res.sendStatus(401); // Unauthorized
        }

        const payload = {
            _id: user._id,
            email: user.email
        };
        const token = jwt.sign(payload, process.env.secretKeyJWT);

        user.token = token;
        user.save()
            .then(({ email, phonenumber, anonId, _id }) => {
                res.json({ message: 'Credentials saved successfully.', token, userData: { email, phonenumber, anonId, _id } });
            })
            .catch(error => {
                console.error('Error saving credentials:', error);
                res.status(500).json({ error: 'An error occurred while saving credentials.' });
            });
    })
});

export default login;