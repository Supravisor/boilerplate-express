require("dotenv").config();

let express = require('express');
let app = express();

app.get("/:word/echo", function(req, res) {
    res.json({ echo: req.params.word });
});

app.get("/now", function(req, res, next) {
  const time = new Date();
  req.time = new Date(Number(time)+26000)

  next();
}, function(req, res) {
    res.send( {time: req.time} );
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
