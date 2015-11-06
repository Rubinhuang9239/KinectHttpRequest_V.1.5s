var app = require('express')();
var express = require('express');
var http = require('http').Server(app);
//var io = require('socket.io')(http); 

//---------------History-----------------//

http.listen(3000,function(){
	console.log("hi! 3000");
});

app.use(express.static('public'));

// app.get('/',function(req,res){
//     res.sendfile('public/index.html');
// });

http.on('request',function(req, res){

  console.log(req);
  res.write('yeah');
  res.end();

});

