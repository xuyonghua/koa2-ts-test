"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Koa = require("koa");
const koaBodyparser = require("koa-bodyparser");
const mongoose = require("mongoose");
const serve = require("koa-static");
const route_1 = require("./src/config/route");
mongoose.connect('mongodb://localhost/mydb', { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', (callback) => {
    console.log('数据库连接成功!');
});
const app = new Koa();
app.use(serve(__dirname + '/static'));
app.use(koaBodyparser());
app.use(route_1.routes);
app.listen(8000, () => {
    console.log('Server is running at http://localhost:8000');
    console.log('Press CTRL-C to stop \n');
});
