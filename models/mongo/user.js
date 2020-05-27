import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    id : mongoose.Schema.Types.ObjectId,
    user_name: {
        type:String,
        required: true,
    },
    facebook_token: String,
    google_token: String,
});

module.exports = mongoose.model('User', userSchema);