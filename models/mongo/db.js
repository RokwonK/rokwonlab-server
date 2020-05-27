import mongoose from 'mongoose';
import dotenv from 'dotenv';

module.exports = () => {
    dotenv.config();
    mongoose.Promise = global.Promise;
    const connect = () => {    
        mongoose.connect(`mongodb://${process.env.MONGO_ID}:${process.env.MONGO_PASSWORD}@localhost:27017`,
            {useNewUrlParser:true,useUnifiedTopology:true}, (err) => {
            if (err) console.log("err occur", err);
            else console.log("mongodb start");
        })
    };
    connect();
    mongoose.connection.on('disconnected', connect);
    require('./user.js');
    require('./category.js');
    require('./post.js');
    require('./comment.js');
}