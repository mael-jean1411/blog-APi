const mongoose= require("mongoose")

const ConnectDB = async()=>{

    try{
        await mongoose.connect(process.env.MONGO_URI)
    console.log("connecting to mongodb ")

    }catch(err){
        process.exit(1)
    }
    
}


module.exports= ConnectDB