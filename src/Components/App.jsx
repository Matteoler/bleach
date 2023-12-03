import '../styles/Library.scss'
import React from "react";
import {
  Routes,
  Route,
} from "react-router-dom";

import Home from './Home.jsx';
import Card from "./Card.jsx";

function App() {

  return (
    <Routes>
      <Route path="/" exact element={<Home />}/>
        <Route path="/Card" element={<Card />}/>
   </Routes>
  )
}


export default App
