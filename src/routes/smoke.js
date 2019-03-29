import Router from 'koa-router';
import smoke from '../controllers/smoke';

const router = Router()

router.post('/', smoke().index);

export default router;
