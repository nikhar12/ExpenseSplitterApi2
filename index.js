const express = require('express');

const route = require('./routes/route')
const bodyParser = require('body-parser')
const appConfig = require('./appconfig/appconfig')
const mongoose = require('mongoose');


const app = new express()
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
    next();
});

route.setRouter(app);



app.listen(appConfig.port,() => {
    console.log("meowing on 3000");
    let db = mongoose.connect(appConfig.db, { useNewUrlParser: true });
    console.log(db);
})