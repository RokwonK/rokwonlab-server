import {user_read} from '../../controllers/user_controll';

const resolvers = {
    Query : {
        test : () => { return("connect success") },
        user_confirm : (_, { token} ) => { 
            console.log(token);
            return user_read(token);
        },

    }

}

export default resolvers;