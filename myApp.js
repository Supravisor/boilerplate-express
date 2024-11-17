require("dotenv").config();

let express = require('express');
let app = express();

app.get("/now", function(req, res, next) {
  req.time = new Date().toString();
  next();
}, function(req, res) {
     setTimeout(function() {
      res.send( {time: req.time} );
     }, 1000);
});

console.log("Hello World");

app.get("/", function(req, res) {
    res.sendFile(absolutePath = __dirname + "/views/index.html");
});

app.use("/public", express.static(__dirname + "/public"));

/*
app.get("/json", function(req, res) {
    if (process.env.MESSAGE_STYLE === "uppercase") {
      res.json({ "message": "Hello json".toUpperCase() });
    } else {
      res.json({ "message": "Hello json" });
    }
});
*/

app.use(function(req, res, next) {
  console.log(req.method + " " + req.path + " - " + req.ip);
  next();
});






























 module.exports = app;
