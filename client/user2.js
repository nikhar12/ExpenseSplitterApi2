// connecting with sockets.
const socket = io('http://localhost:3000');

const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqd3RpZCI6IkIxWXN4NXRxeiIsImlhdCI6MTUyMjI3NDQ2NDkwNSwiZXhwIjoxNTIyMzYwODY0LCJzdWIiOiJhdXRoVG9rZW4iLCJpc3MiOiJlZENoYXQiLCJkYXRhIjp7Im1vYmlsZU51bWJlciI6OTg3NDU4OTk2NiwiZW1haWwiOiJzb21ldGhpbmdAZWR3aXNvci5jb20iLCJsYXN0TmFtZSI6Ikt1bWFyIiwiZmlyc3ROYW1lIjoiQWRpdHlhIiwidXNlcklkIjoiU0otaWVjdHFNIn19.0C2GL6kFuEp--EPFrxDL2qvP_Jc8UChNGEb6YNCcXKQ"
const userId= "SJ-iectqM"

let chatMessage = {
  createdOn: Date.now(),
  receiverId: 'H1pOQGY9M',//putting user2's id here 
  receiverName: "Mr Xyz",
  senderId: userId,
  senderName: "Aditya Kumar"
}



$("#send").on('click', function () {
/* 
var socket_connect = function (room) {
  return io('http://localhost:3000', {
      query: 'r_var='+room
  });
}

var random_room = 'hellogroup';
var socket      = socket_connect(random_room);

socket.emit('chat message', 'user2 hello room #'+random_room); */

  //socket.emit('message','newmsg2');
  
  /* let messageText = $("#messageToSend").val()
  chatMessage.message = messageText;
  socket.emit("newmsg",messageText) */

  var roomname = $('#messageToSend').val();

  socket.emit('join',roomname);




});

let chatSocket = () => {
  socket.on('broadcast',(data)=>{
    console.log(data);
  })
}// end chat socket function




$("#send").on('click', function () {

  let d1a = {
    amount: 100,
    name: 'Domino hut',
    id: 1
  }
  socket.emit('add-expense', d1a);
})

$("#edit").on('click', function () {

  let d1a = {
    amount: 100
  }
  socket.emit('edit-expense', d1a);
})

$("#delete").on('click', function () {

  let d1a = {
    id:1
  }
  socket.emit('delete-expense', d1a);
})



chatSocket();
