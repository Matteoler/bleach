// CharacterComponent.jsx
import { useQuery } from 'react-query';


const CharacterComponent = ({ characterId }) => {
    const { data, error, isLoading } = useQuery(['character', characterId], () => fetchCharacter(characterId));

    if (isLoading) return <p>Chargement...</p>;
    if (error) return <p>Erreur de chargement des données : {error.message}</p>;

    const { name, description, zampakuto} = data;

    return (
        <div>
            <h2>{name}</h2>
            <p>Zampakuto : {zampakuto}</p>
            <p>{description}</p>
        </div>
    );
};

export default CharacterComponent;
