const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const path = require('path')
const middlewares = jsonServer.defaults({
  static: "./build",
});
const port = process.env.PORT || 8000;
server.use(middlewares);
server.get('/*', function (req, res) {
   res.sendFile(path.join(__dirname, 'build', 'index.html'));
 });
server.use('/api', router);
server.listen(port);
