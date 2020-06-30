import React, { useState, useEffect } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Title, Form, Repositories, InputError } from './styles';
import logo from '../../assets/logo.svg';
import api from '../../services/api';

interface Repository {
  full_name: string;
  description: string;
  owner: {
    avatar_url: string;
    login: string;
  };
}

const Dashboard: React.FC = () => {
  const [repositoryValue, setRepositoryValue] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>(() => {
    const storageRepositories = localStorage.getItem(
      '@GithubExplorer:repositories',
    );

    if (storageRepositories) {
      return JSON.parse(storageRepositories);
    }
    return [];
  });
  const [inputError, setInputError] = useState('');

  useEffect(() => {
    localStorage.setItem(
      '@GithubExplorer:repositories',
      JSON.stringify(repositories),
    );
  }, [repositories]);

  async function handleAddNewRepository(
    e: React.FormEvent<HTMLFormElement>,
  ): Promise<void> {
    e.preventDefault();

    if (!repositoryValue) {
      setInputError('Digite o autor/repositório para buscar');
      return;
    }

    try {
      const response = await api.get<Repository>(`/repos/${repositoryValue}`);
      const repository = response.data;

      setRepositories([...repositories, repository]);
      setRepositoryValue('');
      setInputError('');
    } catch (err) {
      setInputError('Repositório não encontrado, tente novamente');
    }
  }

  return (
    <>
      <img src={logo} alt="" />
      <Title>Explore repositórios no GitHub.</Title>

      <Form hasError={!!inputError} onSubmit={handleAddNewRepository}>
        <input
          placeholder="Digite o nome do repositorio"
          value={repositoryValue}
          onChange={(e): void => setRepositoryValue(e.target.value)}
        />
        <button type="submit">Pesquisar</button>
      </Form>

      {inputError && <InputError>{inputError}</InputError>}

      <Repositories>
        {repositories.map((repository) => (
          <Link
            key={repository.full_name}
            to={`/repository/${repository.full_name}`}
          >
            <img src={repository.owner.avatar_url} alt="" />
            <div>
              <h3>{repository.full_name}</h3>
              <p>{repository.description}</p>
            </div>
            <FiChevronRight size={20} />
          </Link>
        ))}
      </Repositories>
    </>
  );
};

export default Dashboard;
