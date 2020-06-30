import React, { useEffect, useState } from 'react';
import { FiArrowLeft, FiChevronRight } from 'react-icons/fi';
import { useRouteMatch, Link } from 'react-router-dom';
import {
  Header,
  InformationHeader,
  Title,
  InformationFooter,
  Body,
} from './styles';
import api from '../../services/api';
import logo from '../../assets/logo.svg';

interface RepositoryParams {
  repository: string;
}

interface Repository {
  full_name: string;
  description: string;
  forks: string;
  open_issues: string;
  stargazers_count: string;
  owner: {
    avatar_url: string;
    login: string;
  };
}

interface RepositoryIssue {
  id: number;
  html_url: string;
  title: string;
  user: {
    login: string;
  };
}

const Respository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();
  const [issues, setIssues] = useState<RepositoryIssue[]>([]);
  const [repository, setRepository] = useState<Repository | null>(null);

  useEffect(() => {
    api.get(`/repos/${params.repository}`).then((response) => {
      setRepository(response.data);
    });

    api.get(`/repos/${params.repository}/issues`).then((response) => {
      setIssues(response.data);
    });
  }, [params.repository]);

  return (
    <>
      <Header>
        <img src={logo} alt="GitHub Explorer" />
        <Link to="/">
          <FiArrowLeft size={20} />
          <span>Voltar</span>
        </Link>
      </Header>

      <div>
        <InformationHeader>
          <img src={repository?.owner.avatar_url} alt="avatar" />
          <div>
            <Title>{repository?.full_name}</Title>
            <p>{repository?.description}</p>
          </div>
        </InformationHeader>
        <InformationFooter>
          <div>
            <h2>{repository?.stargazers_count}</h2>
            <p>Stars</p>
          </div>
          <div>
            <h2>{repository?.forks}</h2>
            <p>Forks</p>
          </div>
          <div>
            <h2>{repository?.open_issues}</h2>
            <p>Issues abertos</p>
          </div>
        </InformationFooter>
      </div>

      <Body>
        {issues.map((issue) => (
          <a key={issue.id} href={issue.html_url}>
            <div>
              <h3>{issue.title}</h3>
              <p>{issue.user.login}</p>
            </div>
            <FiChevronRight size={20} />
          </a>
        ))}
      </Body>
    </>
  );
};

export default Respository;
