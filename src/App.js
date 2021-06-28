import React, { useState } from "react";

import Escena from "./components/escena/Escena";
import Boto from "./components/escena/Boto";

import frases from "./assets/frases.json";

import './css/App.css';

const  App = () => {
  const [pos, setPos] = useState(0);
  const [benvinguda, setBenvinguda] = useState(true);

  const antFrase = () => setPos(pos === 0 ? frases.length-1 : pos-1);
  const segFrase = () => setPos(pos === frases.length-1 ? 0 : pos+1);

  return benvinguda ?
  (
    <main className="pantBenv">
      <h1>Benvingut/da al tutorial en línea</h1>
      <h2>
        A la següent pantalla trobaràs les instruccions,<br/>
        fés-hi servir els botons "Anterior" o "Següent" per marcar la instrucció corresponent
      </h2>
      <button type="button" onClick={() => setBenvinguda(false)}>Endavant ☞</button>
    </main>
  ) 
  :
  (
    <div>
      <ul>
        <Boto key="0" func="Anterior" hFunc={antFrase}/>
        <Boto key="1" func="Següent" hFunc={segFrase}/>
      </ul>
      <main>
        {frases.map((frase, index) => <Escena key={index} frase={frase} actiu={pos === index}/>)}
      </main>
    </div>
  );
};

export default App;
