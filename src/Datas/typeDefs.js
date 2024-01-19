import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type Character {
    idPerso: ID
    NomPerso: String
    Zampakuto: String
    description: String
    idCateg: Int
    imgPerso: String
    persoPrincipal: Boolean
  }

  type Query {
    characters: [Character]
  }
`;

export default typeDefs;