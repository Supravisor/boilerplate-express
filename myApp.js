let bodyParser = require('body-parser');

require("dotenv").config();

let express = require('express');
let app = express();

app.use(bodyParser.urlencoded( {extended: false} ));
app.use(bodyParser.json());

app.get("/name", function(req, res) {
    let firstName = req.query.first;
    let lastName = req.query.last;
    res.json({ name: `${firstName} ${lastName}` });
});

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

app.post("/name", function(req, res) {
    let firstName = req.body.first;
    let lastName = req.body.last;
    res.json({ name: `${firstName} ${lastName}` });
});





























 module.exports = app;
