const express= require("express")
const userController = require("../controllers/userController")

const Router=express.Router()

Router.get("/",userController.getAll)

Router.post("/post/:id/comment",userController. addComment);

// Router.put("/:id",userController.modif)

Router.delete("/post/:id",userController.deletePost)



module.exports= Router