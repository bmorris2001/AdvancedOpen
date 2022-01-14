var http = require('http')
var url = require('url')

http.createServer(function(request,response)
{
    var pathName = url.parse(request.url).pathname
    response.writeHead(200, ({'Content-type':'text/html'}));
    response.write('<!DOCTYPE><html><body><div>Request for' + pathName + ' recieved </div></body></html>')
    response.end();
}).listen(3000)

console.log("Running on port 3000");