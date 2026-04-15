const express = require("express");
const { setPost, getPost, deletePost, editPost} = require("../controllers/Acontroller");
const router = express.Router();

router.get("/", getPost)
router.post("/",setPost)

router.put("/:id",editPost)


// On récupère la fonction addComment de ton contrôleur


// Route pour ajouter un commentaire à un article précis


router.delete("/:id",deletePost)


module.exports = router
