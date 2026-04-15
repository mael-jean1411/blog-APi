const userModel = require("../model/userModel");
const mongoose= require("mongoose")


module.exports.setPost= async (req,res)=>{
    const{email,password}=req.body
    if(!email||!password){
        return res.json({message:"email ou password manquant "}).status(404)

    }

    try{
        const newPost = await userModel.create({
            email:req.body.email,
            password:req.body.password
        })
        return res.status(200).json(newPost)
    }catch(err){
        console.log("erreur lors de la connexion ",err)
    }
}

