require('dotenv').config()
const mongoose = require('mongoose')
const { sampleBooks } = require('../sampleData/sampleData')
const User = require('../models/User');
const Book = require('../models/Book')

function insertData() {
    console.log('Wait for project Setup...')
    mongoose.connect(process.env.MONGO_URI).then(()=>{
        console.log("Connected to Database");
        return Book.insertMany(sampleBooks);
    }).then(()=>{
      console.log("Sample Books added Successfully!");
      console.log("Setup complete!");
      // mongoose.disconnect()
    }).catch(err => console.log(err.message));
}

module.exports = { insertData }