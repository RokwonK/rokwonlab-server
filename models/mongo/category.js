import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const categorySchema = new mongoose.Schema({
    id : mongoose.Schema.Types.ObjectId,
    user_id: {
        type : Schema.Types.ObjectId,
        ref : 'User' 
    },
    name: String
});

module.exports = mongoose.model('Category', categorySchema);