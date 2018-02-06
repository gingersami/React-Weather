const mongoose = require('mongoose');
const Schema = mongoose.Schema

const CommentSchema = new Schema({
    poster:String,
    text:String
});

const Comment = mongoose.model('comment', CommentSchema)

module.exports = {CommentSchema, Comment}