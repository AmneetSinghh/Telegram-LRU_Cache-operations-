var express = require('express');
var app = express();
const http = require('http').Server(app);
app.use(express.static(__dirname + '/public'));


// go to some starter screen;
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});
app.get('/single', function(req, res) {
    res.sendFile(__dirname + '/single.html');
});


http.listen(process.env.PORT || 3010, function() {
    console.log("SERVER STARTED PORT: 3000");
});