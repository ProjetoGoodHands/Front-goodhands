import './App.css'
import Login from './pages/login/login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './componentes/footer/footer';
import Navbar from './componentes/navbar/navbar';
import Sobrenos from './pages/sobrenos/sobrenos';
import Home from './pages/inicio/home';
import CadastroUsuario from './pages/cadastroUsuario/CadastroUsuario';
import Contato from './pages/contato/Contato';
import ListaTema from './componentes/temas/listatema/ListaTema';
import ListaPostagem from './componentes/postagens/listapostagem/ListaPostagem';
import CadastroPostagem from './componentes/postagens/cadastrarPostagem/CadastrarPostagem';
import CadastroTema from './componentes/temas/cadastrarTema/CadastrarTema';
import DeletarPostagem from './componentes/postagens/deletarPostagem/DeletarPostagem';
import DeletarTema from './componentes/temas/deletarTema/DeletarTema';
import CadastrarTema from './componentes/temas/cadastrarTema/CadastrarTema';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import store from './store/store';


function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
    <ToastContainer/>
      <Navbar />
      <div style={{ minHeight: '100vh' }}>
        <Routes> // Antigo Switch

          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/sobre" element={<Sobrenos />} />
          <Route path="/cadastro" element={<CadastroUsuario />} />
          <Route path="/posts" element={<ListaPostagem />} />
          <Route path="/formularioPostagem" element={<CadastroPostagem />} />
          <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />
          <Route path="/formularioPostagem/:id" element={<CadastroPostagem />} />
          <Route path="/temas" element={<ListaTema />} />
          <Route path="/formularioTema" element={<CadastroTema />} />
          <Route path="/formularioTema/:id" element={<CadastrarTema />} />
          <Route path="/deletarTema/:id" element={<DeletarTema />} />
          
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
    </Provider>
  );
}

export default App;