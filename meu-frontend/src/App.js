// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Usuarios from './components/Usuarios';
import Posts from './components/Posts';
import NovoUsuario from './components/NovoUsuario';
import NovoPost from './components/NovoPost';
import EditarPost from './components/EditarPost';

function App() {
  return (
    <Router>
      <div className="container mt-4">
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
          <Link className="navbar-brand" to="/">Minha Aplicação</Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item"><Link className="nav-link" to="/usuarios">Usuários</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/posts">Posts</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/novo-usuario">Novo Usuário</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/novo-post">Novo Post</Link></li>
            </ul>
          </div>
        </nav>
        <Routes>
          <Route path="/usuarios" element={<Usuarios />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/novo-usuario" element={<NovoUsuario />} />
          <Route path="/novo-post" element={<NovoPost />} />
          <Route path="/editar-post/:id" element={<EditarPost />} />
          <Route path="/" element={<h1>Bem-vindo ao Frontend</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
