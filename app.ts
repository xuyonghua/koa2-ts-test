import * as Koa from 'koa';
import * as koaBodyparser from 'koa-bodyparser'
import * as mongoose from 'mongoose';
import * as serve from 'koa-static';
import {routes} from './src/config/route';

mongoose.connect('mongodb://localhost/mydb', {useNewUrlParser: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', (callback) => {
    console.log('数据库连接成功!')
});
const app = new Koa();

// 配置静态web服务的中间件
app.use(serve(__dirname + '/static'));

app.use(koaBodyparser())
app.use(routes);


app.listen(8000, () => {
    console.log('Server is running at http://localhost:8000');
    console.log('Press CTRL-C to stop \n');
});


