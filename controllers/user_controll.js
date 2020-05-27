import UserCollection from '../models/mongo/user';
import dotenv from 'dotenv';

dotenv.config();
// User Table에서 token(둘 중에 하나)가 맞는지 확인하기
const user_read = (token) => {

    const user = new UserCollection({
        user_name : "Rokwon",
        facebook_token: `${process.env.FACEBOOK_ID}`,
        google_token: `${process.env.GOOGLE_ID}`,
    });

    user.save((err,user) => {
        if (err) console.log("user error 발생 : ", err);
        else console.log(user);
    });

    if(token === process.env.FACEBOOK_ID || token === process.env.GOOGLE_ID) {
        const data = UserCollection.find({});
        return {

        }
    }
};

export default user_read;