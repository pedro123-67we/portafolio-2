import './App.css'
import { useState } from 'react';
import * as Icon from 'react-bootstrap-icons';
//import {FontAwesomeIcon} from'../node_modules/@fortawesome/react-fontawesome'
//import{faTwitter, faLinkedinIn,faVuejs,faAngular,faJs,faHtml5,faCss3Alt} from '../node_modules/@fortawesome/free-brands-svg-icons'


function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
    <header className="App-header">
      <div class="navbar">
        <a href="Home" >Home</a>
        <a href="Ingles">Ingles</a>
        <a href="Español">Español</a>
        <Icon.Linkedin className='icono-nav'/>
        <Icon.Twitter className='icono-nav'/>
        </div>
    </header>
    <h1  className="nombre">Pedro Alejandro Gomez Dominguez</h1>
    <div className="descripcion">
    <p>
      Me considero una persona alegre que le gusta aprender cosas nuesvas, me gusta tambien escuchar 
      musica y salir a distraerme ya sea viendo peliculas o caminar, lo que espero cuando termine mi carrera
      es encontrar un empleo en el cual pueda desarrollar todas mis habilidades adquiridas y en donde pueda aprender
      mas acerca de la programacion
    </p>
    </div>
    <a className="boton" href="#" onClick={() =>setCount((current) => current + 1)}>Contar visitas</a>
    <h2>contador de visitas: {count}</h2>
    <a className="botones" href="#">Vuejs</a>
    <a className="botones" href="#">Angular</a>
    <a className="botones" href="#">Javascript</a>
    <a className="botones" href="#">Html5</a>
    <a className="botones" href="#">Css</a>
  </div>
  )
  
}

export default App
