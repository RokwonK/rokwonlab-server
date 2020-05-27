import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const postSchema = new mongoose.Schema({
    id : mongoose.Schema.Types.ObjectId,
    category_id: {
        type: Schema.Types.ObjectId,
        ref:'Category' 
    },
    title: String,
    content: String,
    createdat: Date,
    updatedat: Date,
});

module.exports = mongoose.model('Post', postSchema);