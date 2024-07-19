import React from 'react'
import Nav from 'react-bootstrap/Nav';
import { Link, Outlet } from 'react-router-dom';
import f1 from '../assets/logo.png'
import '../css/Layout.css'

const Layout = () => {
  return (
    <div>
        <Nav className="nav">
          <Nav.Item style={{marginLeft:'10px'}}><img style={{width:'110px'}} src={f1}></img></Nav.Item>
          <Nav.Item className='item'>
            <Nav.Link><Link className='link' to="/">Inicio</Link></Nav.Link>
          </Nav.Item>
          <Nav.Item className='item'>
            <Nav.Link><Link className='link' to="/resultados">Resultados</Link></Nav.Link>
          </Nav.Item>
          <Nav.Item className='item'>
            <Nav.Link><Link className='link' to="/pilotos">Pilotos</Link></Nav.Link>
          </Nav.Item>
          <Nav.Item className='item'>
            <Nav.Link><Link className='link' to="/equipos">Equipos</Link></Nav.Link>
          </Nav.Item>
          <Nav.Item className='item'>
            <Nav.Link><Link className='link' to="/circuitos">Circuitos</Link></Nav.Link>
          </Nav.Item>
        </Nav>

        <section className='body'>
            <Outlet></Outlet>
        </section>
    </div>
  )
}

export default Layout