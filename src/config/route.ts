import * as Router from 'koa-router';
import UserController from '../controllers/UserController';

const router = new Router();
router.get('/', async (ctx) => {
    ctx.body = 'Hello World!';
});

router.get('/test', async (ctx) => {
    ctx.status = 201;
    ctx.body = 'test';
});

router.get('/userInfo', async (ctx) => {
    console.log(ctx.request.query)
    ctx.status = 200;
    ctx.body = 'woqu';
});

router.post('/login', UserController.login);
router.post('/register', UserController.register);

export const routes = router.routes();
