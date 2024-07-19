import React from 'react'
import inicio from '../assets/inicio.png'
import '../css/Home.css'

const Home = () => {
  return (
    <div>
      <div className='container'>
        <img className='fondo' src={inicio} style={{width:'900px', marginLeft:'100px'}}></img>

        <p className='titulo'>Bienvenidos a la Fórmula 1</p>
      </div>
    </div>
  )
}

export default Home