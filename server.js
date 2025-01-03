const { insertData }  = require('./utils/sample_data_insert')
insertData();

require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const userRoutes = require("./routes/userRoutes");
const bookRoutes = require("./routes/bookRoutes");
const borrowRoutes = require("./routes/borrowRoutes");
const returnRoutes = require("./routes/returnRoutes");

const port = 3000;
const app = express()
app.use(bodyParser.json())

mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("mongoDB connected");
}).catch(err => console.log(err));


app.use("/users", userRoutes);
app.use("/books", bookRoutes);
app.use("/borrow", borrowRoutes);
app.use("/return", returnRoutes);

app.listen(port, ()=>{
    console.log(`Listening on port : ${port}`);
})