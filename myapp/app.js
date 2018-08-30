const mongo = require("./mongodb.js")
const ObjectId = require("mongodb").ObjectID

var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.sendFile(__dirname+'/public/MAIN/Main.html');
});

app.use(express.static('public/MAIN'));
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.post('/input', function (req, res) {
  var date = new Date();
	var monthDay = (date.getMonth() + 1) + "/" + date.getDate()
	console.log({title: req.body.title, text: req.body.text, date: monthDay, day: date.getDay()})
	mongo.insertMongo("form", {title: req.body.title, text: req.body.text, date: monthDay, day: date.getDay()})
	res.redirect("/")
});





app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
