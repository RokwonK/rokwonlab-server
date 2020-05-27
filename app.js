import { GraphQLServer } from 'graphql-yoga';
import morgan from 'morgan';
import dotenv from 'dotenv';
import resolvers from './models/graphql/resolvers';
import db from './models/mongo/db';

db();

const server = new GraphQLServer({
    typeDefs: 'models/graphql/schema.graphql',
    resolvers
})
const server_cors = {
    port:4000,
    cors : {
        credentials : true,
        origin : ["http://localhost:3000"]
    }
}

server.start(server_cors , () => {
    console.log('start grqphql');
})