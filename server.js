const jsonServer = require("json-server");
const server = jsonServer.create();
const path = require('path');
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults({
  static: "./build",
});
const port = process.env.PORT || 8000;
server.use(middlewares);
server.get('/*', function (req, res) {
   res.sendFile(path.join(__dirname, 'build', 'index.html'));
 });
server.get('/api', function (req, res) {
   res.sendFile(router);
 });
server.listen(port);
