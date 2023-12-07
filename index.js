//import json-server



const jsonServer = require('json-server')

//create json server using-server library

const TeeRexServer = jsonServer.create()

//set up path/rout for db.json file

const router = jsonServer.router("db.json")

//returns middlewares used by db.json server
const middleware = jsonServer.defaults()

//set up port for server app
const port = 4000 || process.env.PORT

//use middleware and router in server
TeeRexServer.use(middleware)
TeeRexServer.use(router)

//server lister for request from frontend 
TeeRexServer.listen(port,()=>{console.log(`media player server started at port ${port}, and waiting for client request !!!`);

})