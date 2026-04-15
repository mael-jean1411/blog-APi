const mongoose = require("mongoose")

const CommentSchema = new mongoose.Schema({
    pseudo: {
        type: String,
        default: "DEV Annonyme"
    },
    message: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now
    }


})


const PostSchema = new mongoose.Schema({
    titre: {
        type: String,
        required: true,
    },
    contenue: {
        type: String,
        required: true,
    },
    auteur: {
        type: String,
        default: "MAEL ADMIN"
    },
    tags: [String],
    Commentaire: [CommentSchema],
    date: {
        type: String,
        default: Date.now
    }
})


module.exports = mongoose.model("post", PostSchema)