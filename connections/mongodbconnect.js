// mongodbconnect.js

const mongoose = require('mongoose');
require('dotenv').config();

function mongodbconnect() {
    const MONGODB_URL = process.env.MONGODB_URL;
    mongoose.connect(MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });
}

module.exports = mongodbconnect;
