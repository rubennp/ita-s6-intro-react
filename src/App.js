import Escena from "./components/escena/Escena";

import frases from "./assets/data";

// import './css/App.css';

const  App = () => {
  return(
    <div>
      {frases.map((frase, index) => <Escena key={index} frase={frase}/>)}
    </div>
  );
};

export default App;
