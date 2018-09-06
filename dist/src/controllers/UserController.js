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
const UserHelper_1 = require("../helpers/UserHelper");
class UserController {
}
UserController.login = (ctx) => __awaiter(this, void 0, void 0, function* () {
    const response = UserHelper_1.default.findUser(ctx.request.body);
    if (response) {
        ctx.body = response;
    }
});
UserController.register = (ctx) => __awaiter(this, void 0, void 0, function* () {
    const response = yield UserHelper_1.default.addUser(ctx.request.body);
    if (response) {
        ctx.body = response;
    }
});
exports.default = UserController;
