const http = require("http");

const PORT = process.env.PORT || 8000;

const server = http.createServer();

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
