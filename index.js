const jsonServer=require("json-server");
const server=jsonServer.create();
const router=jsonServer.router("db.json");
const middlerwares=jsonServer.defaults();
const port= 8080;

server.use(middlerwares);
server.use(router);
server.listen(port);