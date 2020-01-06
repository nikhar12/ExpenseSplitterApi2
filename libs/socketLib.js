const socketio = require('socket.io');
const mongoose = require('mongoose');

const events = require('events');
const eventEmitter = new events.EventEmitter();

const ExpenseModel = mongoose.model('expense')
const controllerem = require('../controllers/expense-management/controller-em')
const gmail = require('../libs/mailLib');
let userlist = [];
let counter = 0;
let roomname1="";

let setServer = (server) =>{
    var io = require('socket.io').listen(server);
    //let io = socketio.listen(server);

    let myIo = io.of('/');
   
    myIo.on('connection',(socket) => {

        socket.on('join',(roomname)=>{
        console.log('joined user');
       
            socket.join(roomname);

            socket.on('user',(data) => {
                console.log('user on data: '+ JSON.stringify(data));
                let temp = data.split(':');
                let userinfo = {};
                userinfo.userid = temp[0];
                userinfo.lastname = temp[1];
                userlist.push(userinfo);
                console.log('userlist in user on: '+ JSON.stringify(userlist));
                                socket.emit('OnlineList',userlist);

            });
           // roomname1 = roomname;
            //io.to(roomname).emit('broadcast', 'You are all part pf this expense room');
            //socket.broadcast.to(socket.room).emit('broadcast','hiii frim server with roomname:'+roomname);
            //io.sockets.in(socket.room).emit('broadcast','hello from server');
            socket.on('newmsg',(message)=>{
                //console.log('newmsg - '+message);
                socket.broadcast.to(roomname).emit('broadcast', message);
    
            });
        
            socket.on
           
        })
        




       /*    var room = socket.handshake['query']['r_var'];

      socket.join(room);
        console.log('user joined room #'+room);
      
        socket.on('disconnect', function() {
          socket.leave(room)
          console.log('user disconnected');
        });
      
        socket.on('chat message', function(msg){
            console.log(msg);
          io.to(room).emit('chat message', msg);
        });

 */

    /*    socket.on('add-expense',(data)=>{

           socket.broadcast.emit('broadcast','New expense added. Please check.');
          // gmail.gmail('nikharsharma12@gmail.com','firstEmail','This is the first email froim socket');
          
       })

       socket.on('edit-expense',(data)=>{

        socket.broadcast.emit('broadcast','Expense Edited. Please check');
    })

    socket.on('delete-expense',(data)=>{

        socket.broadcast.emit('broadcast','Expense deleted');
    }) */
       
    });
};


module.exports ={
    setServer:setServer
}