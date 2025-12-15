import React from 'react'
import ReactDOM from 'react-dom/client'

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

import '../styles/index.css'

import { Contador } from './components/Reloj';


const ReactRender = ReactDOM.createRoot(document.getElementById('root'))

let segundos = 0
const obtenerDigitos = () => {

  const horas = Math.floor(segundos / 3600);
  const minutos = Math.floor((segundos % 3600) / 60);
  const seg = segundos % 60;

  const horasStr = String(horas).padStart(2, '0');
  const minutosStr = String(minutos).padStart(2, '0');
  const segundosStr = String(seg).padStart(2, '0');

  return [
    horasStr[0], horasStr[1], ':',
    minutosStr[0], minutosStr[1], ':',
    segundosStr[0], segundosStr[1]
  ];
};

const renderizarReloj = () => {
  const contadorDigital = obtenerDigitos();

  ReactRender.render(
    <React.StrictMode>
      <Contador contadorDigital={contadorDigital} />
    </React.StrictMode>
  );
};


setInterval(() => {
  segundos++;
  renderizarReloj();
}, 1000);


