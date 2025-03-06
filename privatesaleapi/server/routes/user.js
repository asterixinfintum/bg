const express = require('express');
const router = express.Router();

import { Resend } from 'resend';

const resend = new Resend(process.env.REND);

import Registrant from '../models/registrant';
import Pin from '../models/pin';
import BtcAddress from '../models/btcaddress';

router.post('/verifyemail', async (req, res) => {
    try {
        const { email } = req.body;

        if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return res.status(400).json({ success: false, message: 'Invalid email address' });
        }

        await Pin.deleteMany({ email });

        const pin = generateRandomPin();

        const newPin = new Pin({
            email,
            pin,
        });
        await newPin.save();

        console.log(newPin.pin)

        res.status(200).json({
            message: 'We sent a PIN to your email',
            email
        });

        await sendEmail(email, pin);
    } catch (error) {
        console.error('Error in /verifyemail:', error);
        res.status(500).json({
            message: 'Error in server',
        });
    }
});

router.post('/loginwithpin', async (req, res) => {
    try {
        const { pin } = req.body;

        if (!pin) {
            return res.status(400).json({
                message: 'PIN is required',
            });
        }

        const foundPin = await Pin.findOne({ pin });

        if (!foundPin) {
            return res.status(404).json({
                message: 'Invalid PIN',
            });
        }

        const email = foundPin.email;

        let registrant = await Registrant.findOne({ email });

        if (!registrant) {
            const btcAddress = await BtcAddress.findOne({ registrantId: { $exists: false } });

            if (!btcAddress) {
                return res.status(404).json({
                    message: 'No available BTC address found',
                });
            }

            registrant = new Registrant({
                email,
                btcAddress: btcAddress.address,
            });

            await registrant.save();

            btcAddress.registrantId = registrant._id.toString();
            await btcAddress.save();
        }

        await Pin.deleteOne({ _id: foundPin._id });

        res.status(200).json({
            message: 'Login successful',
            registrant,
        });
    } catch (error) {
        console.error('Error in /loginwithpin:', error);
        res.status(500).json({
            message: 'Error in server',
        });
    }
});

async function sendEmail(email, pin) {
    try {
        (async function () {
            const { data, error } = await resend.emails.send({
                from: 'Private sale <privatesale@bvxtrade.com>',
                to: [`${email}`],
                subject: 'Email Otp',
                html: `<strong>${pin}</strong>`,
            });

            if (error) {
                return console.error({ error });
            }

            console.log({ data });
        })();
    } catch (error) {
        console.log(error)
    }
}

function generateRandomPin(length = 8) {
    if (length < 1) throw new Error('Length must be at least 1');

    const min = Math.pow(10, length - 1);
    const max = Math.pow(10, length) - 1;

    const pin = Math.floor(Math.random() * (max - min + 1)) + min;
    return pin.toString();
}

async function findUserByEmail(email) {
    try {
        const registrant = await Registrant.findOne({ email: email }).exec();

        if (registrant) {
            console.log(registrant)
        } else {

        }
    } catch (error) {
        console.error('Error finding user:', error);
        throw error;
    }
}

module.exports = router;