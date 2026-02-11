import http from "http";

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello from Node.js Server");
  } 
  else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("About Page");
  } 
  else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Page Not Found");
  }
});

server.listen(4000, () => {
  console.log("Server running at http://localhost:4000");
});