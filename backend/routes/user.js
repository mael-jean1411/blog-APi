const express= require("express");
const authController =require("../controllers/authControllers")

const Router=express.Router();




Router.post("/",authController.setPost)









module.exports= Router