import React from 'react'
import './App.css'
import {Grid} from '@material-ui/core'

import Login from './pages/login/login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './componentes/footer/footer';
import Navbar from './componentes/navbar/navbar';
import Sobrenos from './pages/sobre-nós/sobrenos';
import Postagem from './pages/home/postagem';
import Home from './pages/inicio/home';
import CadastroUsuario from './pages/cadastroUsuario/CadastroUsuario';


function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <div style={{ minHeight: '60vh' }}>
    <Routes> // Antigo Switch
      
  <Route path="/" element={<Login />} />
     <Route path="/home" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/postagem" element={<Postagem />} />
    <Route path="/sobre" element={<Sobrenos />} />
    <Route path="/cadastro" element={<CadastroUsuario />} />
    {/*<Route path="/cadastro" element={<CadastroUsuario />} />*/}
    </Routes>
    </div>
    <Footer />
    </BrowserRouter>
  );
}

export default App;