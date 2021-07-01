
const jsonServer = require('json-server');
const server = jsonServer.create();
const path = require('path');
const router = jsonServer.router('db.json');
const port = process.env.PORT || 3000;

server.use(jsonServer.defaults());
server.use(router);
server.use(server.static(path.join(__dirname, 'build')));
server.get('/*', function (req, res) {
   res.sendFile(path.join(__dirname, 'build', 'index.html'));
 });
server.listen(port);
