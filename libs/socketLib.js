const socketio = require('socket.io');
const mongoose = require('mongoose');

const events = require('events');
const eventEmitter = new events.EventEmitter();

let setServer = (server) =>{
    var io = require('socket.io').listen(server);
    //let io = socketio.listen(server);

    let myIo = io.of('/');

    myIo.on('connection',(socket) => {
        
        socket.on('hello',(data)=>{
            console.log('hello: '+data);
        });
    });
};


module.exports ={
    setServer:setServer
}