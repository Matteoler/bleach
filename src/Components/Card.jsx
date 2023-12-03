import React from "react";
import styled from "styled-components";


const StyledCard = styled.div`
    
`;

function Card() {
    const Nom = 'Ichigo Kurosaki'
const Class = 'Shinigami'
    const flowerPrice = 15
    return (
        <StyledCard>
            <div className='Card'>
                <h1>Bleach</h1>
                <ul>
                    <li>Nom : {Nom}</li>
                    <li>Classe : {Class}</li>
                    <li>Fleurs : {flowerPrice}€</li>
                </ul>
                Total : {flowerPrice}€
            </div>
        </StyledCard>
    );
}

export default Card;