var http = require('http')
var url = require('url')
var fs = require('fs')

http.createServer(function(request,response)
{
    response.writeHead(301, {'Location': "http://" + request.headers['host'] + '/index.html' });
    var pathName = url.parse(request.url).pathname
    var fileName = "index.html"
    var fileName2 = "read-todo.html"
    var fileName3 = "todo.json"
    fs.readFile(fileName,callback)
    fs.readFile(fileName2,callback)
    fs.readFile(fileName3,callback2)



    function callback2(err,data)
    {
        if(err)
        {
            console.log(err)
            response.writeHead(400,{'Content-type':'text/html'})
            response.write('<!DOCTYPE><html><body><div> Page Not Found </div></body></html>')
        }
        else
        {
            response.writeHead(200, ({'Content-type':'application/json'}));
            response.write(data.toString())
            
            
        }
        response.end();

    }


    function callback(err,data)
    {
        if(err)
        {
            console.log(err)
            response.writeHead(400,{'Content-type':'text/html'})
            response.write('<!DOCTYPE><html><body><div> Page Not Found </div></body></html>')
        }
        else
        {
            response.writeHead(200, ({'Content-type':'text/html'}));
            response.write(data.toString())
            
            
        }
        response.end();

    }

}).listen(3000)

console.log("Running on port 3000");