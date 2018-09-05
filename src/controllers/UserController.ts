import UserHelper from '../helpers/UserHelper';
import {Context} from 'koa';

export default class UserController {

    static login = async (ctx: Context) => {
        const response = UserHelper.findUser(ctx.request.body)

        if (response) {
            ctx.body = response
        }
    }

    static register = async (ctx: Context) => {
        const response = await UserHelper.addUser(ctx.request.body)

        if (response) {
            ctx.body = response
        }
    }

}
