const jsonServer = require("json-server");
const server = require('express');

const middlewares = jsonServer.defaults({
  static: "./build",
});

server.use(middlewares);
server.use("/api", jsonServer.router("db.json"));
server.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  });
});
