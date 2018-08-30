import * as Koa from 'koa';
import {routes} from './route';

const app = new Koa();
app.use(routes)

app.listen(8000, () => {
    console.log('Server is running at http://localhost:8000');
    console.log('Press CTRL-C to stop \n');
});


