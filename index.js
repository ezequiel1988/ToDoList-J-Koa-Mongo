const Koa = require('koa');
const Router = require('@koa/router');
const mongo = require('./config/db/connectToMongo');
var bodyParser = require('koa-bodyparser');
const cors = require('@koa/cors');
const routes = require('./api/routes/toDoRoute')
const app = new Koa();
const router = new Router();

//Conexión a db
mongo();

//se conecta a las rutas
routes(router)

app
  .use(bodyParser())
  .use(router.routes())
  .use(router.allowedMethods())
  .use(cors())
  .use(async (ctx, next) => {
    ctx.set('Access-Control-Allow-Origin', '*');
    ctx.set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    ctx.set('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
    await next();
  })   

app.listen(3000, ()=> {
    console.log('servidor en el puerto 3000')
});