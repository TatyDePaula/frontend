import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function NovoUsuario() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    cep: '',
    endereco: '',
    senha: '',
    cursos: ''
  });

  const [loadingCEP, setLoadingCEP] = useState(false);
  const [errorCEP, setErrorCEP] = useState('');

  const navigate = useNavigate();

  // Função para atualizar o estado do formulário conforme o usuário preenche
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Função para buscar o endereço pelo CEP
  const handleBuscarCEP = () => {
    const cep = formData.cep.trim();

    if (cep === '') {
      setErrorCEP('Por favor, insira um CEP.');
      return;
    }

    setLoadingCEP(true);
    setErrorCEP('');

    axios.get(`http://127.0.0.1:5001/cep/${cep}`)
      .then(response => {
        const data = response.data;
        const enderecoCompleto = `${data.logradouro}, ${data.bairro}, ${data.localidade} - ${data.uf}`;
        setFormData({ ...formData, endereco: enderecoCompleto });
      })
      .catch(error => {
        if (error.response && error.response.data && error.response.data.erro) {
          setErrorCEP(error.response.data.erro);
        } else {
          setErrorCEP('Erro ao buscar o CEP.');
        }
      })
      .finally(() => {
        setLoadingCEP(false);
      });
  };

  // Função para enviar os dados do formulário
  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:5000/api/usuarios', formData)
      .then(response => {
        alert('Usuário criado com sucesso!');

        // Reseta o formulário para campos vazios após o envio
        setFormData({
          username: '',
          email: '',
          cep: '',
          endereco: '',
          senha: '',
          cursos: ''
        });

        // Redireciona para a lista de usuários
        navigate('/usuarios');
      })
      .catch(error => {
        console.error('Erro ao criar usuário:', error);
      });
  };

  return (
    <div>
      <h1>Criar Novo Usuário</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nome de Usuário</label>
          <input
            type="text"
            className="form-control"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>CEP</label>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              name="cep"
              value={formData.cep}
              onChange={handleChange}
              required
            />
            <div className="input-group-append">
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleBuscarCEP}
                disabled={loadingCEP}
              >
                {loadingCEP ? 'Buscando...' : 'Buscar CEP'}
              </button>
            </div>
          </div>
          {errorCEP && <small className="text-danger">{errorCEP}</small>}
        </div>

        <div className="form-group">
          <label>Endereço</label>
          <input
            type="text"
            className="form-control"
            name="endereco"
            value={formData.endereco}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Senha</label>
          <input
            type="password"
            className="form-control"
            name="senha"
            value={formData.senha}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Cursos</label>
          <input
            type="text"
            className="form-control"
            name="cursos"
            value={formData.cursos}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-success">
          Criar Usuário
        </button>
      </form>
    </div>
  );
}

export default NovoUsuario;

