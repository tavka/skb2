var http = require("http");

function zzz(a, b) {
  console.log("Request received.");
  b.writeHead(200, {"Content-Type": "text/plain"});
  x1=a.url;

  b.write(x1);
  console.log(x1);
  b.end();
}

http.createServer(zzz).listen(8888);

console.log("Server has started.");
