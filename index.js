const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!');
});

const port = process.env.PORT || 3000;

// server.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}/`);
// });

server.listen(port, "0.0.0.0", function () {
   console.log(`server running at ${port}`);
});
