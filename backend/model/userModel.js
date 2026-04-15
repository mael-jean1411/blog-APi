const mongoose= require ("mongoose")
const { isEmail, } = require("validator")



const User= new mongoose.Schema({
    email:{
        type:String,
        required:true,
    },

    password:{
        type:String,
        required:true,
        max:1024,
        min:8

    }


})


module.exports=mongoose.model("User",User)