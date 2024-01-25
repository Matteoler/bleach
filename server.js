import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import {Query}  from './src/Datas/resolver.mjs';
import {Character}  from './src/Datas/character.mjs';
import {Categorie}  from './src/Datas/Categorie.mjs';
import typeDefs from './src/Schema/schema.js';
import { DateResolver} from "graphql-scalars"


    const resolvers = {
        Date: DateResolver,
        Query,
        Character,
        Categorie
    };

        const server = new ApolloServer({ typeDefs, resolvers });

        const { url } = await startStandaloneServer(server, {
            listen: { port: 4000 },
        });

        console.log(`🚀  Server ready at: ${url}`);