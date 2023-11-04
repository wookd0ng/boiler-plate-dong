const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
    name:{
        type:String,
        maxlength: 50
    },

    email:{
        type:String,
        trim:true, //이메일 입력시 공백 존재할경우 공백을 자동으로 채워주는 역할
        unique:1
    },

    password:{
        type:String,
        minlenght:5
    },

    lastname:{
        type:String,
        maxlength: 50
    },

    role:{ //로그인 하는 사용자에 따라 숫자를 부여해 일반사용자와 개발자, 이렇게 구분가능하게 함.
        type:Number,
        default:0
    },

    image:String,
    token:{
        type:String,
    },

    tokenExp:{
        type:Number
    }

    
    
})

const User = mongoose.model('User', userSchema)
module.exports={User}


