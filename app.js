const mongoose = require("mongoose");
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const home = require("./routers/home");
const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'))

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

const port =process.env.port || 3001;

app.use('/',home)

app.listen(port)

mongoose.connect('mongodb+srv://Registration:2111087@cluster0.wexksa1.mongodb.net/mernstacks?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true})

    const db =mongoose.connection;

    db.on('error',() =>{console.log("err");})
    db.once('open',() =>{console.log("connected");})
app.use(express.static('views'));
app.use('/images', express.static('images'));