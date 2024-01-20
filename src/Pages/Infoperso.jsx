import React from "react";
import { useParams } from "react-router-dom";
import CharacterComponent from "../Components/infoperso.jsx";

const CharacterPage = () => {
    const { characterId } = useParams();

    return (
        <div>
            <CharacterComponent characterId={characterId} />
        </div>
    );
};

export default CharacterPage;
