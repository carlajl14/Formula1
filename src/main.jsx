import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './components/Home.jsx'
import Pilotos from './components/Drivers/Pilotos.jsx'
import Circuitos from './components/Circuits/Circuitos.jsx'
import Circuito from './components/Circuits/Circuito.jsx'
import Piloto from './components/Drivers/Piloto.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}></Route>
        <Route path='resultados'></Route>
        <Route path='pilotos' element={<Pilotos/>}></Route>
        <Route path='piloto/:driver_number' element={<Piloto/>}></Route>
        <Route path='equipos'></Route>
        <Route path='circuitos' element={<Circuitos/>}></Route>
        <Route path='circuito/:circuit_key' element={<Circuito/>}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
)
