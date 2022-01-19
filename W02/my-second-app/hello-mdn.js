 // load http module
 const http = require("http");
 const hostname = "127.0.0.1";
 const port = 8000;
 // create http server
 const server = http.createServer(function(req, res) {
     // set the responst HTTP header with the HTTP status and content type
     res.writeHead(200, { "Content-Type": "text/plain" });
     // send the response body
     res.end("hello world\n");
 });
 // prints out a log once the server starts listening
 server.listen(port, hostname, function() {
     console.log('server running at http://${hostname}:${port}/');
 })