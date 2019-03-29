import Koa from 'koa';
import router from './src/routes';
import bodyParser from 'koa-bodyparser';
import Cors from '@koa/cors'
import cassandra from 'cassandra-driver';
import routes from './src/routes';

const app = new Koa();

app.use(Cors())
app.use(bodyParser())

app
  .use(router.routes())
  .use(router.allowedMethods());

export default app;
