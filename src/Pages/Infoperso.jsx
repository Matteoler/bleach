import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';
import CharacterComponent from '../Components/infoperso';

// Définissez la requête GraphQL pour récupérer les détails du personnage
const GET_CHARACTER = gql`
  query GetCharacter($characterId: Int!) {
    character(id: $characterId) {
      id
      name
      category
      imagepresentation
      description
      zampakuto
      dateAnniversaire
      hauteurs
    }
  }
`;

const CharacterPage = () => {
    const { id } = useParams(); // Récupère l'ID du personnage depuis l'URL

    // Effectuez la requête GraphQL pour obtenir les détails du personnage
    const { loading, error, data } = useQuery(GET_CHARACTER, {
        variables: { characterId: parseInt(id) }, // Assurez-vous que l'ID est un entier
    });

    if (loading) return <p>Chargement...</p>;
    if (error) return <p>Erreur de chargement des données : {error.message}</p>;

    const characterDetails = data.character;

    return (
        <div>
            <CharacterComponent {...characterDetails} />
        </div>
    );
};

export default CharacterPage;
