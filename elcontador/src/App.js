import './App.css';
import React,{useState,useEffect} from 'react';
import { entradaDeTexto } from './hepers/helpers';
function App() {
  const [salida,setSalida] = useState({});

  function groupWords(event){
  setSalida(entradaDeTexto(event.target.value))
  }

  useEffect(()=>{
  
  },[salida.numPalabras,salida.numVocales])

    return (
      <>Número de vocales {salida.numVocales} , número de palabras {salida.numPalabras}
      <textarea name="textarea" rows="10" cols="50" onChange={(event)=>{groupWords(event)}}/>
      </>
    )
}

export default App;
