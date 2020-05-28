import React, { useEffect, useState } from "react";

import "./styles.css";
import api from "services/api";
import RepositoryListItem from "components/RepositoryListItem";
import AddRepositoryForm from "components/AddRepositoryForm";

function App() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    api.get('repositories').then(response => {
      setRepositories(response.data);
    });
  }, []);

  async function handleAddRepository(repository) {
    api.post('repositories', repository).then(response => {
      setRepositories([...repositories, response.data]);
    });
  }

  async function handleRemoveRepository(id) {
    // TODO
  }

  return (
    <div>
      <h1>Portfólio de Repositórios</h1>

      <h2>Lista</h2>

      <ul data-testid="repository-list">
        {repositories.map(repo => (
          <RepositoryListItem key={repo.id} 
                              repository={repo} 
                              onRemove={handleRemoveRepository}>
                              </RepositoryListItem>
        ))}
      </ul>
      
      <AddRepositoryForm onAdd={handleAddRepository} />
    </div>
  );
}

export default App;
