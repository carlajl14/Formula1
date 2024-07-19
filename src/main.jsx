import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './components/Home.jsx'
import Pilotos from './components/Pilotos.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}></Route>
        <Route path='resultados'></Route>
        <Route path='pilotos' element={<Pilotos/>}></Route>
        <Route path='equipos'></Route>
        <Route path='circuitos'></Route>
      </Route>
    </Routes>
  </BrowserRouter>
)
