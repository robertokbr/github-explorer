import React, { useState, useEffect } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Header, RepositoryInfo, Issues } from './styles';
import logoImg from '../../assets/logo.svg';
import api from '../../services/api';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();
  const [repository, setRepository] = useState();

  useEffect(() => {
    api.get(`repos/${params.repository}`).then(ressponse => {
      console.log();
    });
  }, []);
  return (
    <>
      <Header>
        <img src={logoImg} alt="Github explorer" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>
      <RepositoryInfo>
        <header>
          <img
            src="https://avatars2.githubusercontent.com/u/60328400?s=460&u=036f9101c10b989343b18b07677ab94ae748e032&v=4"
            alt="Github Perfil"
          />
          <div>
            <strong>Nome do programador</strong>
            <p>Descrição do perfil</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>18808</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>19</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>100</strong>
            <span>Issues Abertas</span>
          </li>
        </ul>
      </RepositoryInfo>
      <Issues>
        <Link to="Repository issue">
          <div>
            <strong>Issue title</strong>
            <p>Description</p>
          </div>
          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
