const express = require('express');
const http = require('http');
const route = require('./routes/route')
const bodyParser = require('body-parser')
const appConfig = require('./appconfig/appconfig')
const mongoose = require('mongoose');

var app = require('express')();
/* var server = require('http').Server(app);
var io = require('socket.io')(server);
 
server.listen(3000);*/
let db = mongoose.connect(appConfig.db, { useNewUrlParser: true });
 
//const app = new express()
app.use(express.json());
app.use(express.urlencoded({extended: true}));


 



app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "ec2-35-154-144-121.ap-south-1.compute.amazonaws.com:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
    next();
});

route.setRouter(app);

const server = http.createServer(app);
 //start listening to http server
 //console.log(appConfig);
server.listen(appConfig.port);
const socketLib = require("./libs/socketLib");
const socketServer = socketLib.setServer(server);

/* app.listen(appConfig.port,() => {
    console.log("meowing on 3000");
    let db = mongoose.connect(appConfig.db, { useNewUrlParser: true });
    console.log(db);
})
 */


