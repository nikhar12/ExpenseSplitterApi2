// connecting with sockets.
const socket = io('http://localhost:3000');

const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqd3RpZCI6InIxSGtjWEs5TSIsImlhdCI6MTUyMjI0ODE1Njc4MywiZXhwIjoxNTIyMzM0NTU2LCJzdWIiOiJhdXRoVG9rZW4iLCJpc3MiOiJlZENoYXQiLCJkYXRhIjp7Im1vYmlsZU51bWJlciI6OTg3NDU4OTk2NiwiZW1haWwiOiJ4eXpAZ21haWwuY29tIiwibGFzdE5hbWUiOiJYeXoiLCJmaXJzdE5hbWUiOiJNciIsInVzZXJJZCI6IkgxcE9RR1k5TSJ9fQ.GJPmnMkOam1MHak9UA1iXF88VoIYjuKFhHud4qJdZDQ"
const userId = "H1pOQGY9M"

let chatMessage = {
  createdOn: Date.now(),
  receiverId: 'SJ-iectqM',//putting user2's id here 
  receiverName: "Aditya Kumar",
  senderId: userId,
  senderName: "Mr Xyz"
}



let chatSocket = () => {

  /* socket.emit('hello', 'ggg');

  socket.on('verifyUser', (data) => {

    console.log("socket trying to verify user");

    socket.emit("set-user", authToken);

  });

  socket.on(userId, (data) => {

    console.log("you received a message from "+data.senderName)
    console.log(data.message)

  });

  socket.on("online-user-list", (data) => {

    console.log("Online user list is updated. some user can online or went offline")
    console.log(data)

  });

  socket.on("typing", (data) => {

    console.log(data+" is typing")
    
    
  });



  $("#messageToSend").on('keypress', function () {

    socket.emit("typing","Mr Xyz")

  })

socket.on('broadcast',(data)=>{
  $('div').html(data);
})
 */

socket.on('broadcast',(data)=>{
  console.log(data);
})

}// end chat socket function





$("#send").on('click', function () {


  socket.on('newExpenseAdded',()=>{
    console.log('new expense added');
  });



/* 
  var socket_connect = function (room) {
    return io('http://localhost:3000', {
        query: 'r_var='+room
    });
  }
  
  var random_room = 'hellogroup';
  var socket      = socket_connect(random_room);
 
  
    */
//socket.userid = userId;
    
/*     socket.emit('join',socket);

    socket.on('hell',(d)=>{
      console.log(d);
    }); */
    //socket.emit('chat message/', 'user1 hello room #'+random_room);
})

/* $("#edit").on('click', function () {

  let d1a = {
    amount: 200
  }
  socket.emit('edit-expense', d1a);
})

$("#delete").on('click', function () {

  let d1a = {
    id:1
  }
  socket.emit('delete-expense', d1a);
})
 */
chatSocket();
