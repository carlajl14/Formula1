import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './components/Home.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}></Route>
        <Route path='resultados'></Route>
        <Route path='pilotos'></Route>
        <Route path='equipos'></Route>
        <Route path='circuitos'></Route>
      </Route>
    </Routes>
  </BrowserRouter>
)
