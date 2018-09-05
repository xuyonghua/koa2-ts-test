import * as Router from 'koa-router';
import UserController from '../controllers/UserController';

const router = new Router();
router.get('/api/v1', async (ctx) => {
    ctx.body = 'Hello World!';
});

router.get('/api/v1/test', async (ctx) => {
    ctx.status = 201;
    ctx.body = 'test';
});

router.get('/api/v1/userInfo', async (ctx) => {
    console.log(ctx.request.query)
    ctx.status = 200;
    ctx.body = 'woqu';
});

router.post('/api/v1/login', UserController.login);
router.post('/api/v1/register', UserController.register);

export const routes = router.routes();
