// src/components/Usuarios.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);

  // Busca os usuários ao montar o componente
  useEffect(() => {
    axios.get('http://localhost:5000/api/usuarios')
      .then(response => {
        setUsuarios(response.data);
      })
      .catch(error => {
        console.error('Erro ao buscar usuários:', error);
      });
  }, []);

  return (
    <div>
      <h1>Lista de Usuários</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Nome de Usuário</th>
            <th>Email</th>
            <th>CEP</th>
            <th>Endereço</th>
            <th>Cursos</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map(usuario => (
            <tr key={usuario.id}>
              <td>{usuario.username}</td>
              <td>{usuario.email}</td>
              <td>{usuario.cep}</td>
              <td>{usuario.endereco}</td>
              <td>{usuario.cursos}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Usuarios;
