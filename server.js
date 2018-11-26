var express = require('express');
var app = express();
const path = require('path');

app.use(express.static(__dirname + '/public'));


app.get('/getjson', function (req, res) {
    res.sendFile(path.join(__dirname, '/', 'data.json'));
})

app.listen(3000, function(){
    console.log('start at port: 3000 ');
    
})