import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type Character {
    idPerso: ID
    NomPerso: String
    Zampakuto: String
    description: String
    imgPerso: String
    persoPrincipal: Boolean
    Categorie: [Categorie]!
  }
  
  type Categorie {
    idCateg: ID
    nomCateg: String
    characters: [Character]
  }

  type Query {
    characters: [Character]
    Perso(idPerso: ID!): [Character]
    Categories: [Categorie]
    Categorie(idCateg: ID!): [Categorie]
    getcategbyid(idCateg: ID!): [Categorie]
  }
`;

export default typeDefs;