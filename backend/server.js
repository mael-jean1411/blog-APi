const express= require("express");
const ConnectDB=require("./config/DB.JS")
const app= express();
const adminRoute= require("./routes/routeA")
const userRoute=require("./routes/userRoute")
const user =require("./routes/user")
const cors=require("cors")
require("dotenv").config()
 const PORT= process.env.PORT


ConnectDB();
 
// midleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}))



//Route
app.use("/api/admin",adminRoute)
app.use("/api/user",userRoute)
app.use("/auth",user)




 app.listen(process.env.PORT,()=>{
    console.log(`le serveur est lancer au port ${process.env.PORT}`)
 })