// req -> incoming request
// res -> response
const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our homepage");
  } else if (req.url === "/about") {
    res.end("Welcome to our about page");
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end(`
      <h1>404 Not Found</h1>
      <p>Sorry, the page you're looking for cannot be found.</p>
      <a href="/">Back to Home</a>
    `);
  }
});

server.listen(5000);
