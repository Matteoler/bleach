import React from "react";
import { useQuery } from "@apollo/client";
import { GET_PERSONNAGE_BY_ID } from "../Datas/Perso.js";

const CharacterComponent = ({ characterId }) => {
    const { data, error, loading } = useQuery(GET_PERSONNAGE_BY_ID, {
        variables: { idPerso: characterId },
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error loading data: {error.message}</p>;

    const { Perso } = data || {};
    const selectedCharacter = Perso && Perso[0];
    const { idPerso, NomPerso, Zampakuto, description, imgPerso, persoPrincipal } = selectedCharacter || {};


    return (
        <div>
            <h2>{NomPerso}</h2>
            <img
                src={`/src/Assets/${imgPerso}`}
                alt={NomPerso}
                className="imagePerso"
            />
            <p>Zampakuto: {Zampakuto}</p>
            <p>{description}</p>
        </div>
    );
};

export default CharacterComponent;
