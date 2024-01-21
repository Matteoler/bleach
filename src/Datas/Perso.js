// Dans votre fichier client (par exemple, schema.js)
import { gql } from '@apollo/client';

export const GET_ALL_CHARACTERS = gql`
  query Characters {
    characters {
      NomPerso
      persoPrincipal
      idPerso
      imgPerso
      imgPerso2
      Categorie {
        nomCateg
      }
    }
  }
`;

export const GET_PERSONNAGE_BY_ID = gql`
  query GetPersonnageById($idPerso: ID!) {
    Perso(idPerso: $idPerso) {
      idPerso
      NomPerso
      Zampakuto
      description
      imgPerso
      imgPerso2
      persoPrincipal
    }
  }
`;
