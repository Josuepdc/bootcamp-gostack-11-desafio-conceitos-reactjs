import React, { useEffect, useState } from "react";

import "./styles.css";
import api from "services/api";
import RepositoryListItem from "components/RepositoryListItem";

function App() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    api.get('repositories').then(response => {
      setRepositories(response.data);
    });
  }, []);

  async function handleAddRepository() {
    // TODO
  }

  async function handleRemoveRepository(id) {
    // TODO
  }

  return (
    <div>
      <ul data-testid="repository-list">
        {repositories.map(repo => (
          <RepositoryListItem key={repo.id} 
                              repository={repo} 
                              onRemove={handleRemoveRepository}>
                              </RepositoryListItem>
        ))}
      </ul>

      <button onClick={handleAddRepository}>Adicionar</button>
    </div>
  );
}

export default App;
