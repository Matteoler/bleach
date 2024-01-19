import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import {GET_ALL_CHARACTERS} from '../Datas/Perso.js';

const HoverContent = () => {
    return (
        <Query query={GET_ALL_CHARACTERS}>
            {({ loading, error, data }) => {
                if (loading) return <p>Loading...</p>;
                if (error) return <p>Error: {error.message}</p>;

                return (
                    <div className="hoverContent">
                        {data.characters.map((Perso) => {
                            // Define PersoImage within the map function
                            const PersoImage = require(`../Assets/${Perso.imgPerso}`).default;

                            return (
                                <Link key={Perso.idPerso} to={`/character/${Perso.idPerso}`}>
                                    <img
                                        src={PersoImage}
                                        alt={Perso.NomPerso}
                                        className="imagePerso"
                                    />
                                </Link>
                            );
                        })}
                    </div>
                );
            }}
        </Query>
    );
};


const StylePerso = styled.div`
    ul {

        display: flex;
        width: 82.1875rem;
        align-items: flex-start;
        align-content: flex-start;
        flex-wrap: wrap;
        padding: 0;
        margin: auto;
        margin-top: 3.31rem;
    }

    .card {
        width: 16.4375rem; /* Largeur totale */
        height: 12.625rem; /* Hauteur totale */
        list-style: none;
        outline: 1px solid #000;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        flex-direction: column;
    }
    
`;

const StyleListe = styled.li`

    background: ${({ isprincipal }) => (isprincipal === "true" ? "#F0B24C" : "#E9E9E9")};

    &:hover {
        background: none;
        
        .nomPerso,
        .categPerso {
            display: none; /* Masquer les éléments lorsque la carte est en mode survol */
        }
        .imagePerso {
            opacity: 1;
        }
    }

    .imagePerso {
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: 0;
        transition: opacity 5s ease;
    }
    
    .hoverContent {
        width: 100%;
        height: 100%;
    }
    
    .nomPerso,
    .categPerso {
        opacity: 1; /* Définir l'opacité par défaut */
        transition: opacity 0.3s ease-in-out;
    }

    
    

    .nomPerso {
        color: #000;
        width: min-content;
        font-family: Inria Serif;
        font-size: 2.125rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        display: block;
    }

    .categPerso {
        color: #000;
        font-family: Segikan;
        font-size: 1.75rem;
        font-style: normal;
        font-weight: 300;
        line-height: normal;
    }

`;

function Personnages() {
    const [hoveredId, setHoveredId] = useState(null);

    const handleHover = (id) => {
        setHoveredId(id);
    };

    const handleLeave = () => {
        setHoveredId(null);
    };
    const { loading, error, data } = useQuery(GET_ALL_CHARACTERS);

    if (loading) return <p>Loading...</p>;
    if (error) {
        console.error("GraphQL Error:", error);  // Ajoutez cette ligne pour afficher l'erreur dans la console
        return <p>Error: {error.message}</p>;
    }

// ... le reste du code

    return (
        <StylePerso>
            <ul>
                {data.characters.map((Perso) => (
                    <StyleListe
                        key={Perso.idPerso}
                        isprincipal={Perso.persoPrincipal.toString()}
                        className="card"
                        onMouseEnter={() => handleHover(Perso.idPerso)}
                        onMouseLeave={handleLeave}
                    >
                        {hoveredId === Perso.idPerso && <HoverContent Perso={Perso} />}
                        <label className="nomPerso">{Perso.NomPerso}</label>
                        <label className="categPerso">{Perso.idCateg}</label>

                    </StyleListe>
                ))}
            </ul>
        </StylePerso>
    );
}

export default Personnages;
