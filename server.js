// const express = require("express");
// const app = express();
// const dateTime = require("simple-datetime-formater");
// const bodyParser = require("body-parser");
// //const mongoose = require('mongoose');

// const http = require("https").Server(app);

// // const io = require("socket.io");

// let port = process.env.PORT || 4000;
// //app.use(bodyParser.json());
// //routes
// // app.use("/chats", chatRouter);
// // app.use("/login", loginRouter);

// // mongoose.connect(`mongodb://localhost:27017/`)
// // .then(() => {
// //   console.log('Connected to database');
// //   app.listen(port, () => {
// //     console.log(`Express server listening on port ${port}`);
// //   });
// // });
// app.use(express.static(__dirname + "/final-twocan"));

// // default Heroku PORT
// // app.listen(process.env.PORT || 3000);
// app.listen(process.env.PORT || 3000, function(){
//     console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
//   });

const express = require('express');
const path = require('path');
const app = express();

//serve static files
app.use(express.static(__dirname + '/dist/final-twocan'));

// Send all requests to index.html
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/final-twocan/index.html'));
  });
  
// default Heroku PORT
// app.listen(process.env.PORT || 3000);
app.listen(process.env.PORT || 3000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  }); 
  
