import React, { useState } from "react";

import Escena from "./components/Escena/Escena";
import Boto from "./components/Escena/Boto";

import frases from "./assets/data";

// import './css/App.css';

const  App = () => {
  const [pos, setPos] = useState(0);

  const
  
  ulStyles = {
    listStyleType: "none",
    padding: "0",
    margin: "0",
  },
  mainStyles = {
    padding: "0 20px",
  };

  const antFrase = () => setPos(pos === 0 ? frases.length-1 : pos-1);
  const segFrase = () => setPos(pos === frases.length-1 ? 0 : pos+1);

  return(
    <div>
      <ul style={ulStyles}>
        <Boto key="0" func="Anterior" hFunc={antFrase}/>
        <Boto key="1" func="Següent" hFunc={segFrase}/>
      </ul>
      <main style={mainStyles}>
        {frases.map((frase, index) => <Escena key={index} frase={frase} actiu={pos === index}/>)}
      </main>
    </div>
  );
};

export default App;
