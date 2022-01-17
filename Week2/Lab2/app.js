var express = require('express')
var app = express()
var path = require('path')
var port = 3000

app.get('/index', function(req, res){
    res.sendFile(path.join(__dirname+"/views/index.html"))
})
app.get('/', (req, res) => {

    res.redirect(301, '/index');
  });

app.use(express.static(__dirname+"/views"))

app.listen(port, function(){
    console.log("Connected at port: " + port);
})