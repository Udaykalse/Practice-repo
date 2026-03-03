const http = require("http");
const server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/plain" });
  res.end("Hello from Node App\n");
});

server.listen(8080, () => {
  console.log("Server runing on port 3000");
});
