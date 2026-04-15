const postModel = require("../model/postmodel.js")

module.exports.setPost = async (req, res) => {
    const { titre, contenue,password } = req.body
    if(password!==process.env.SECRET_KEY){
        return res.status(404).json({message:"tu n'es pas l'admin "})
    }
    if (!titre || !contenue) {

        return res.status(400).json({ message: "le titre et le contenue sont onligatoire " })
    }
    try {
        const newPost = await postModel.create({
            titre: req.body.titre,
            contenue: req.body.contenue,

        })
        
        return res.status(201).json(newPost)

    } catch (err) {
        console.log("erreur de connexion" + err)
    }
}

module.exports.getPost = async (req, res) => {
    try {
        const post = await postModel.find();
        return res.status(201).json(post)

    } catch (err) {
        console.log(`erreur lors du chargement ${err}`)
    }
}

module.exports.deletePost = async (req, res) => {
    tr y {
        const post = await postModel.findByIdAndDelete(req.params.id)
        if (!post) {
            return res.status(400).json({ message: "le post n'existe pas ! " })
        }
        await post.deleteOne();
        return res.status(200).json({ message: "post supprimer avec success " })

    } catch (err) {
        console.log(`errur lors de la suppression du post${err}`)
    }
}
module.exports.editPost = async (req, res) => {
    const post = await postModel.findById(req.params.id)
    if (!post) {
        return res.status(400).json({ message: "le post n'existe pas " })
    }
    const update = await postModel.findOneAndUpdate(post,
        req.body,
        { new: true }
    )
    return res.status(200).json(update)
}

