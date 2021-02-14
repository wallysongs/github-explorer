import React, { useEffect, useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import api from '../../services/api';

import logoImg from '../../assets/logo.svg';
import { Header, RepositoryInfo, IssuesInfo } from './styles';

interface RepositoryParams {
    repository: string;
}

interface Repository {
    name: string;
    description: string;
    forks_count: number;
    open_issues_count: number;
    stargazers_count: number
    owner: {
        login: string;
        avatar_url: string;
    }
}

interface Issues {
    id: number;
    title: string;
    html_url: string;
    user: {
        login: string;
    }
}

const Repository: React.FC = () => {
    const { params } = useRouteMatch<RepositoryParams>();
    const [repository, setRepository] = useState<Repository | null>(null);
    const [issues, setIssues] = useState<Issues[]>([]);

    useEffect(() => {
        async function loadData(): Promise<void> {
            const [repository, issues] = await Promise.all([
                api.get<Repository>(`repos/${params.repository}`),
                api.get<Issues[]>(`repos/${params.repository}/issues`)
            ]);
            setRepository(repository.data);
            setIssues(issues.data);
        }

        loadData();
    }, [params.repository])

    return (
        <>
            <Header>
                <img src={logoImg} alt="Github Explorer" />
                <Link to="/">
                    Voltar
                <FiChevronLeft />
                </Link>
            </Header>

            {repository &&
            <RepositoryInfo>
                <header>
                    <img src={repository.owner.avatar_url} alt={repository.owner.login}/>
                    <div>
                        <strong>{repository.name}</strong>
                        <span>{repository.description}</span>
                    </div>
                </header>
                <ul>
                    <li>
                        <strong>{repository?.stargazers_count}</strong>
                        <span>Stars</span>
                    </li>
                    <li>
                        <strong>{repository?.forks_count}</strong>
                        <span>Forks</span>
                    </li>
                    <li>
                        <strong>{repository?.open_issues_count}</strong>
                        <span>Issues abertas</span>
                    </li>
                </ul>
            </RepositoryInfo> }
            {issues && <IssuesInfo>
                {issues.map(issue => (
                    <a href={issue.html_url} target="_blank" key={issue.id}>
                        <div>
                            <strong>{issue.title}</strong>
                            <p>{issue.user.login}</p>
                        </div>
                        <FiChevronRight size={20} />
                    </a>
                ))}
            </IssuesInfo>}
        </>
    )
}

export default Repository;