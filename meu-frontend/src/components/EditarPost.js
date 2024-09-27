// src/components/EditarPost.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function EditarPost() {
  const [formData, setFormData] = useState({
    titulo: '',
    corpo: ''
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:5000/api/posts/${id}`)
      .then(response => {
        setFormData({
          titulo: response.data.titulo,
          corpo: response.data.corpo
        });
      })
      .catch(error => {
        console.error('Erro ao buscar post:', error);
      });
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:5000/api/posts/${id}`, formData)
      .then(response => {
        alert('Post atualizado com sucesso!');
        navigate('/posts');
      })
      .catch(error => {
        console.error('Erro ao atualizar post:', error);
      });
  };

  return (
    <div>
      <h1>Editar Post</h1>
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
        <button type="submit" className="btn btn-primary">Salvar Alterações</button>
      </form>
    </div>
  );
}

export default EditarPost;
