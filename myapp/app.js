

var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.sendFile(__dirname+'/public/MAIN/Main.html');
});

app.use(express.static('public/MAIN'));

app.post('/input', function (req, res) {
  res.send('get request');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
