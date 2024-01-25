import React from "react";
import { useQuery } from "@apollo/client";
import { GET_PERSONNAGE_BY_ID } from "../Datas/Perso.js";
import styled from "styled-components";

const CharacterComponent = ({ characterId }) => {
    const { data, error, loading } = useQuery(GET_PERSONNAGE_BY_ID, {
        variables: { idPerso: characterId },
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error loading data: {error.message}</p>;

    const { Perso } = data || {};
    const { NomPerso, Zampakuto, Anniversaire, Hauteur , description, imgPerso2 } = Perso || {};

    const DivPerso = styled.div`

        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 10px;
        
        .imagePerso {
            grid-column: 2;
            grid-row: 2/4;
            width: 20.8125rem;
            height: 34.6875rem;
            
        }
        
        .Zampakuto {
            grid-column: 1;
            grid-row: 2;
            display: flex;
            width: 32.1875rem;
            padding: 1.3125rem 1.8125rem;
            justify-content: flex-end;
            align-items: center;
            gap: 0.625rem;

            color: #FFF;
            
            font-family: Segikan;
            font-size: 1.875rem;
            font-style: normal;
            font-weight: 500;
            line-height: normal;

            border-radius: 0rem 0.9375rem 0.9375rem 0rem;
            background: #000;
        }
        
        .nomPerso {
            grid-column: 2;
            font-family: "DM Serif Text",serif;
            font-size: 2.625rem;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
        }
    `;
    return (
        <DivPerso>
            <h2 className="nomPerso">{NomPerso}</h2>

            <p className="Anniversaire">Zampakuto: {Anniversaire}</p>
            <p className="Hauteur">Zampakuto: {Hauteur}</p>
            <img
                src={`/src/Assets/${imgPerso2}`}
                alt={NomPerso}
                className="imagePerso"
            />
            <p className="Zampakuto">Zampakuto: {Zampakuto}</p>
            <p>{description}</p>
        </DivPerso>
    );
};

export default CharacterComponent;
