import * as mongoose from 'mongoose';
import {Schema} from 'mongoose';

const userSchema = new Schema({
    // 用户名
    userName: {
        type: Schema.Types.String,
        required: true,
    },
    // 密码
    password: {
        type: Schema.Types.String,
        required: true,
    },
    createAt: {
        type: Schema.Types.Number,
    },

})
export const User = mongoose.model('User', userSchema)
