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
const User_1 = require("../models/User");
class UserHelper {
}
UserHelper.findUser = (user) => __awaiter(this, void 0, void 0, function* () {
    console.log(user);
    const response = yield User_1.User.findOne({ userName: user.userName });
    return {
        message: '登陆成功,您现在是游客',
        user: response,
    };
});
UserHelper.addUser = (user) => __awaiter(this, void 0, void 0, function* () {
    const response = yield User_1.User.create({
        userName: user.userName,
        password: user.password,
    }).then(res => {
        console.log(res);
        return res;
    }, err => {
        console.log(err);
        throw err;
    });
    return {
        message: 'create ok',
        user: response,
    };
});
exports.default = UserHelper;
