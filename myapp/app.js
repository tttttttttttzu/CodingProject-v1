

var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.sendFile(__dirname+'/codepen_RJVPbz/index.html');
});

app.use(express.static('public'));

app.get('/css/style.css', function (req, res) {
  res.sendFile(__dirname+'/codepen_RJVPbz/css/style.css');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
