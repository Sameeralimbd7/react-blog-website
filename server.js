const jsonServer = require("json-server");
const server = require('express');

const middlewares = jsonServer.defaults({
  static: "./build",
});
server.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'path/to/your/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})
server.use(middlewares);
server.use("/api", jsonServer.router("db.json"));
