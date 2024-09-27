// src/components/NovoPost.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function NovoPost() {
  const [formData, setFormData] = useState({
    titulo: '',
    corpo: '',
    id_usuario: ''
  });

  const [usuarios, setUsuarios] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:5000/api/usuarios')
      .then(response => {
        setUsuarios(response.data);
      })
      .catch(error => {
        console.error('Erro ao buscar usuários:', error);
      });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/posts', formData)
      .then(response => {
        alert('Post criado com sucesso!');
        navigate('/posts');
      })
      .catch(error => {
        console.error('Erro ao criar post:', error);
      });
  };

  return (
    <div>
      <h1>Criar Novo Post</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Título</label>
          <input
            type="text"
            className="form-control"
            name="titulo"
            value={formData.titulo}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Corpo do Post</label>
          <textarea
            className="form-control"
            name="corpo"
            value={formData.corpo}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label>Usuário</label>
          <select
            className="form-control"
            name="id_usuario"
            value={formData.id_usuario}
            onChange={handleChange}
            required
          >
            <option value="">Selecione um Usuário</option>
            {usuarios.map(usuario => (
              <option key={usuario.id} value={usuario.id}>
                {usuario.username}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="btn btn-success">Criar Post</button>
      </form>
    </div>
  );
}

export default NovoPost;
