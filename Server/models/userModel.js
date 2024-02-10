const mongoose = require('mongoose');

const loginSignup = new mongoose.Schema( {
    name: {
        type: String,
        required:true,
        trim:true
    },
    email: {
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    mobile: {
        type:Number,
        required:true
    },
    password: {
        type:String,
        required:true, 
    },
   
    isAdmin:{
        type: Boolean,
        default:false
    },
   
},
 { timestamps: true });

module.exports = mongoose.model('loginSignup', loginSignup)