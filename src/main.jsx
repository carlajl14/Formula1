import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './components/Home.jsx'
import Pilotos from './components/Pilotos.jsx'
import Circuitos from './components/Circuitos.jsx'
import Circuito from './components/Circuito.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}></Route>
        <Route path='resultados'></Route>
        <Route path='pilotos' element={<Pilotos/>}></Route>
        <Route path='equipos'></Route>
        <Route path='circuitos' element={<Circuitos/>}></Route>
        <Route path='circuito/:circuit_key' element={<Circuito/>}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
)
