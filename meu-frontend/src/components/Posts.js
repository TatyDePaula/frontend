// src/components/Posts.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = () => {
    axios.get('http://localhost:5000/api/posts')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error('Erro ao buscar posts:', error);
      });
  };

  const deletePost = (id) => {
    if (window.confirm('Tem certeza que deseja excluir este post?')) {
      axios.delete(`http://localhost:5000/api/posts/${id}`)
        .then(response => {
          alert('Post excluído com sucesso!');
          fetchPosts();
        })
        .catch(error => {
          console.error('Erro ao excluir post:', error);
        });
    }
  };

  return (
    <div>
      <h1>Lista de Posts</h1>
      <div className="row">
        {posts.map(post => (
          <div className="col-md-4 mb-4" key={post.id}>
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{post.titulo}</h5>
                <p className="card-text">{post.corpo}</p>
              </div>
              <div className="card-footer">
                <small className="text-muted">Usuário ID: {post.id_usuario}</small>
                <div className="btn-group float-right">
                  <Link to={`/editar-post/${post.id}`} className="btn btn-primary btn-sm">Editar</Link>
                  <button onClick={() => deletePost(post.id)} className="btn btn-danger btn-sm">Excluir</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Posts;
