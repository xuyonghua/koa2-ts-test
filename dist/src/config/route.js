"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Router = require("koa-router");
const UserController_1 = require("../controllers/UserController");
const router = new Router();
router.get('/api/v1', (ctx) => __awaiter(this, void 0, void 0, function* () {
    ctx.body = 'Hello World!';
}));
router.get('/api/v1/test', (ctx) => __awaiter(this, void 0, void 0, function* () {
    ctx.status = 201;
    ctx.body = 'test';
}));
router.get('/api/v1/userInfo', (ctx) => __awaiter(this, void 0, void 0, function* () {
    console.log(ctx.request.query);
    ctx.status = 200;
    ctx.body = 'woqu';
}));
router.post('/api/v1/login', UserController_1.default.login);
router.post('/api/v1/register', UserController_1.default.register);
exports.routes = router.routes();
