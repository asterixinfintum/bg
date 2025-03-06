if (process.env.NODE_ENV !== 'production') {
    require("dotenv").config();
}

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose'); // Import Mongoose

const app = express();

app.use(
    cors()
);

app.use(bodyParser.json());

const UserRoutes = require('./routes/user');
const AdminRoutes = require('./routes/admin');

app.use(UserRoutes);
app.use(AdminRoutes);

const MONGODB_URI = process.env.DB;

mongoose
    .connect(MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log('Connected to MongoDB');
        const PORT = 8085;
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });