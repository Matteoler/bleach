// Dans votre fichier client (par exemple, typeDefs.js)
import { gql } from '@apollo/client';

export const GET_ALL_CHARACTERS = gql`
  query GetAllCharacters {
    characters {
      idPerso
      NomPerso
      Zampakuto
      description
      idCateg
      imgPerso
      persoPrincipal
    }
  }
`;

export const GET_PERSONNAGE_BY_ID = gql`
  query GetPersonnageById($id: ID!) {
    character(id: $id) {
      idPerso
      NomPerso
      Zampakuto
      description
      idCateg
      imgPerso
      persoPrincipal
    }
  }
`;
