const express = require('express');
const accoutinforoute = require('./Routes/accountsroute');
const mongoose = require('mongoose');
const cors = require('cors'); // Import the cors middleware

const mongodbconnect = require('./connections/mongodbconnect');
const app = express();
const port = 7001;

require('dotenv').config();


app.use(express.json());
app.use(cors());



app.use('/api/v1', accoutinforoute);


// Connect to MongoDB
mongodbconnect();





app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
