import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const commentSchema = new mongoose.Schema({
    id : mongoose.Schema.Types.ObjectId,
    post_id: {
        type : Schema.Types.ObjectId,
        ref : 'Post'
    },
    author: String,
    content: String,
    createdat: Date,
});

module.exports = mongoose.model('Comment', commentSchema);