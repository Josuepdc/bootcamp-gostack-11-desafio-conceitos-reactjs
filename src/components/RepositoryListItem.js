import React from "react";

export default ({repository, onRemove}) => <>
	<li>
		<div>{repository.title}</div>
		<div><a href={repository.url} target="_blank">{repository.url}</a></div>
		<div>{repository.techs.join(', ')}</div>

		<button onClick={() => onRemove(repository.id)}>
			Remover
		</button>
	</li>
</>;
