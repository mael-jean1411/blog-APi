const postModel = require("../model/postmodel");
const { post } = require("../routes/userRoute");
const mongoose =require("mongoose")
exports.addComment = async (req, res) => {
    try {
        const { pseudo, message } = req.body;
        const postId = req.params.id; // L'ID du post passé dans l'URL

        // On cherche le post et on "pousse" le nouveau commentaire dans le tableau
        const updatedPost = await postModel.findByIdAndUpdate(
            postId,
            {
                $push: { // la methode push permet d'ajouter des valeurs sans ecrasser les autres 
                    Commentaire: { pseudo, message }
                }
            },
            { new: true } // Pour renvoyer le document modifié
        );

        if (!updatedPost) {
            return res.status(404).json({ message: "Post introuvable" });
        }

        res.status(201).json(updatedPost);
    } catch (err) {
        res.status(400).json({ message: "Erreur lors de l'ajout", error: err });
    }
};

module.exports.getAll = async (req, res) => {

    try {
        const post = await postModel.find()
        return res.status(201).json(post)

    } catch (err) {
        console.log("erreur lors de l'affichage des donnees " + err)
    }
}

module.exports.deletePost=async(req,res)=>{
    try{
        const postId=req.params.id;
         const commentId=req.body.commentId;
        
       const post =  await postModel.findByIdAndDelete(postId,
            {
                $pull:{Commentaire:{
                    _id:new mongoose.Types.ObjectId(commentId)
                }}
            },
            {new:true}
      
        )
          if(!post){
            return res.json({message:"POST NON TROUVER "}).status(400)
          }
        res.status(200).json({message:"commentaire supprime ",post})

    }catch(err){
        console.log("erreur",err)
        res.status(400)
    }
}