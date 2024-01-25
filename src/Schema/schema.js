import { gql } from 'apollo-server-express';
import { DateTypeDefinition } from "graphql-scalars"


const typeDefs = gql`

${DateTypeDefinition}

  type Character {
    idPerso: ID
    NomPerso: String
    Zampakuto: String
    Hauteur: Int
    Anniversaire: Date
    description: String
    imgPerso: String
    imgPerso2: String
    persoPrincipal: Boolean
    Categorie: Categorie!
  }
  
  type Categorie {
    idCateg: ID
    nomCateg: String
    characters: [Character]
  }

  type Query {
    characters: [Character]
    Perso(idPerso: ID!): Character
    Categories: [Categorie]
    getcategbyid(idCateg: ID!): Categorie
  }
`;

export default typeDefs;