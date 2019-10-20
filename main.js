// load the http module
var http = require('http');
var os = require('os');

// configure our HTTP server
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "application/json"});
  var platform = os.platform();
  var arch = os.arch()
  var message = "Hello from www.srinadella.com Updated To Check Image Update";
  var responseData = {
    "platform": platform,
    "arch": arch,
    "message": message
  };
  responseData = JSON.stringify(responseData);
  response.end(responseData);
});

// listen on localhost:8000
server.listen(8000);
console.log("Server listening at http://127.0.0.1:8000/");