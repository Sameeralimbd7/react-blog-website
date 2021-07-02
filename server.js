const jsonServer = require("json-server");
const server = jsonServer.create();
const path = require('path');
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults({
  static: "./build",
});
const port = process.env.PORT || 8000;
server.use(middlewares);
server.use('/api', router);
server.get('/create', function (req, res) {
   res.sendFile(path.join(__dirname, 'build', 'index.html'));
 });
server.get('/blogs/*', function (req, res) {
   res.sendFile(path.join(__dirname, 'build', 'index.html'));
 });
server.listen(port);
