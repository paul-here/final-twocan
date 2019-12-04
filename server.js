const express = require("express");
const app = express();
const dateTime = require("simple-datetime-formater");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

const http = require("http").Server(app);

// const io = require("socket.io");

let port = process.env.PORT || 4000;
app.use(bodyParser.json());
//routes
// app.use("/chats", chatRouter);
// app.use("/login", loginRouter);

mongoose.connect(`mongodb://localhost:27017/`)
.then(() => {
  console.log('Connected to database');
  app.listen(port, () => {
    console.log(`Express server listening on port ${port}`);
  });
});
app.use(express.static(__dirname + "/final-twocan"));
//const socket = io(http);
//const connect = require("./dbconnect");

// socket.on("connection", (socket)=>{
//     console.log("user connected");
//     });

//     socket.on("disconnect", function() {
//         console.log("user disconnected");
//       });

// //Someone is typing
// socket.on("typing", data => {
//     socket.broadcast.emit("notifyTyping", {
//       user: data.user,
//       message: data.message
//     });
//   });

//   //when soemone stops typing
//   socket.on("stopTyping", () => {
//     socket.broadcast.emit("notifyStopTyping");
//   });

//   socket.on("chat message", function(msg) {
//     console.log("message: " + msg);

//     //broadcast message to everyone in port:5000 except yourself.
//     socket.broadcast.emit("received", { message: msg });

//     //save chat to the database
//     connect.then(db => {
//       console.log("connected correctly to the server");
//       let chatMessage = new Chat({ message: msg, sender: "Anonymous" });

//       chatMessage.save();
//     });
//   });
  // http.listen(port, () => {
  //   console.log("Running on Port: " + port);
  // });

  // to send to specific user with id
  // io.to(`${socketId}`).emit('hey', 'I just met you');