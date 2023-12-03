import React from "react";
import styled from "styled-components";
import logo from '../Assets/TYBW-image.png'

const StyledHome = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f0f0f0;
    .Logo {

    }
`;

function Home() {
  return (
    <StyledHome>
        <img src={logo} alt="logo Bleach" className="Logo"/>
      <h1>Site de Mattéo !</h1>
    </StyledHome>
  );
}

export default Home;
