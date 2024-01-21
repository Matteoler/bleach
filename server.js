import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import {Query}  from './src/Datas/resolver.mjs';
import {Character}  from './src/Datas/character.mjs';
import {Categorie}  from './src/Datas/Categorie.mjs';
import typeDefs from './src/Schema/schema.js';
import {createDbConnection} from "./src/Datas/resolver.mjs";


    const resolvers = {
        Query,
        Character,
        Categorie
    };

        const server = new ApolloServer({ typeDefs, resolvers });

        const { url } = await startStandaloneServer(server, {
            listen: { port: 4000 },
        });

        console.log(`🚀  Server ready at: ${url}`);