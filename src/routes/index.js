import path from 'path';
import fs from 'fs';
import Router from 'koa-router';

const router = new Router();

const basename = path.basename(module.filename);

fs.readdirSync(__dirname).filter(file =>
        (file.indexOf('.') !== 0) && (file.split('.').slice(-1)[0] ===  'js') && (file !== basename)
       ).forEach((file) => {
         const route = require(path.join(__dirname, file)).default;
         router.use(route.routes(), route.allowedMethods());
       });

router.prefix('/api');

export default router;
