import '../styles/Library.scss'
import React from "react";
import Personnage from "../Components/Personnages.jsx";
import Title from "../Components/title.jsx";
import Carrousel from "../Components/Carrousel.jsx";
function Home() {
    return (
    <div>
        <Title/>
        <Personnage/>
        <Carrousel/>
    </div>
)
}


export default Home
