const http = require("http");
const express = require("express");

const app = express();
const PORT = process.env.PORT || 8000;

const server = http.createServer();

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
