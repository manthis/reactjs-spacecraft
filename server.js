var express = require('express');
var app = express();
var path = require("path");

app.use(express.static(__dirname + '/static'));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/spacecraft.html'));
});

app.listen(8080);

