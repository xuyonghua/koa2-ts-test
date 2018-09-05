import {User} from '../models/User';

export default class UserHelper {
    static findUser = async (user: any) => {
        console.log(user)
        const response: any = await User.findOne({userName: user.userName})
        return {
            message: '登陆成功,您现在是游客',
            user: response,
        }
    }

    static addUser = async (user: any) => {
        const response: any = await User.create({
            userName: user.userName,
            password: user.password,
            createAt: (new Date()).getTime(),
        }).then(res => {
            console.log(res)
            return res;
        }, err => {
            console.log(err)
            throw err
        })
        return {
            message: 'create ok',
            user: response,
        }
    }

}
