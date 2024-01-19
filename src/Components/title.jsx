import React from "react";
import styled from "styled-components";
function Title() {
    const StyleTitle = styled.div`
        
            
            text-align: center;
            text-transform: uppercase;
        h1 {
            color: #dc711c;
            font-family: DM Serif Text;
            font-size: 7.625rem;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
        }
        
        h2 {
            color: #9B3C00;
            font-family: Inria Serif;
            font-size: 2.625rem;
            font-style: italic;
            font-weight: 700;
            line-height: normal;
        }
    `;
    return (
        <StyleTitle>
            <h1>Bleach</h1>
            <h2>Le Monde des Shinigamis</h2>
        </StyleTitle>
    );
}

export default Title;