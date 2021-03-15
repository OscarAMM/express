var express = require('express');
var app = express();
var bodyParser = require('body-parser');
require('dotenv').config();
//11-Use body-parser to Parse POST Requests
app.use(bodyParser.urlencoded({extended: false}));

// 7 -Implement a Root-Level Request Logger Middleware  
app.use(function(req, res, next) {
  console.log(req.method + " " + req.path + " - " + req.ip);
  next();
});

//8 - time server
app.get('/now', function(req, res, next) {
  req.time = new Date().toString();
  next();
}, function(req, res) {
  res.send(req.time);
});
//9-Get Route Parameter Input from the Client
app.get('/:word/echo', function(req, res, next) {
  var word = req.params.word;
  res.json({
    echo:word
  });
});
//10-Get Query Parameter Input from the Client
app.post('/name', function(req, res, next){
 
  var string = req.body.first + " "+ req.body.last;
  res.json({
    name: string
  });
});

/**replit propblems- still not working**/
/**API REST example (json)*/

app.get("/json", (req, res) => { let message = "Hello json"; (process.env.MESSAGE_STYLE == "uppercase") ? message = message.toUpperCase() : message = message; res.json({ "message": message }); });

app.get('/', function(req, res) {
  absolutePath = __dirname + "/views/index.html";
  res.sendFile(absolutePath);
});
/**The first element is the path from where is going to recovery the file */

app.use("/public", express.static(__dirname + "/public"));




































module.exports = app;
