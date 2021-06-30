import React, { useState } from "react";

// Styled Components
import { GlobalStyle } from '../../assets/GlobalStyle';
import { Navega, Escenes, Benvinguda }  from './App.styled';

// Components
import Escena from "../Escena";
import Boto from "../Boto/";

// Dades
import frases from "../../assets/data";

const  App = () => {
  const [pos, setPos] = useState(0);
  const [benvinguda, setBenvinguda] = useState(true);

  const antFrase = () => setPos(pos === 0 ? frases.length-1 : pos-1);
  const segFrase = () => setPos(pos === frases.length-1 ? 0 : pos+1);

  return benvinguda ?
  (
    <Benvinguda>
      <h1>Benvingut/da al tutorial en línea</h1>
      <h2>
        A la següent pantalla trobaràs les instruccions,<br/>
        fés-hi servir els botons "Anterior" o "Següent" per marcar la instrucció corresponent
      </h2>
      <button type="button" onClick={() => setBenvinguda(false)}>Endavant ☞</button>
    </Benvinguda>
  ) 
  :
  (
    <div>
      <GlobalStyle img={`./img/${frases[pos].img}`} />
      <Navega>
        <Boto key="0" func="Anterior" hFunc={antFrase}/>
        <Boto key="1" func="Següent" hFunc={segFrase}/>
      </Navega>
      <Escenes>
        {frases.map((frase, index) => <Escena key={index} frase={frase.txt} actiu={pos === index}/>)}
      </Escenes>
    </div>
  );
};

export default App;
