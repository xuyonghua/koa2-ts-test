import * as Router from 'koa-router';

const router = new Router();
router.get('/', async (ctx) => {
    ctx.body = 'Hello World!';
});

router.get('/test', async (ctx) => {
    ctx.status = 201;
    ctx.body = 'test';
});

router.get('/user', async (ctx) => {
    ctx.status = 200;
    ctx.body = 'user';
});

export const routes = router.routes();
