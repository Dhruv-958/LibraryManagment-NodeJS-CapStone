const mongoose = require('mongoose')
const borrowSchema = new mongoose.Schema({
    username : String, 
    bookid : { type : mongoose.Schema.Types.ObjectId, ref : "Book", unique : true },
    duedate : { type : Date, default: ()=> new Date(Date.now() + 15 * 24 * 60 * 60 * 1000) },
}, { timestamps: true });

module.exports = mongoose.model('Borrow', borrowSchema)