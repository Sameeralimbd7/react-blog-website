const jsonServer = require("json-server");
const server = require('express');

const middlewares = jsonServer.defaults({
  static: "./build",
});

server.use(middlewares);
server.use("/api", jsonServer.router("db.json"));
server.get('*', function(req, res) {
  res.sendFile(path.resolve(__dirname + '/../dist/index.html'));
});
