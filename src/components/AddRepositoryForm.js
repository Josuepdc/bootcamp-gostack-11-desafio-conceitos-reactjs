import React, { useRef } from "react";

export default ({onAdd}) => {
    const titleRef = useRef();
    const urlRef = useRef();
    const techsRef = useRef();

    return <>
        <h2>Adicionar Repositório</h2>

        <input ref={titleRef} type="text" placeholder="Título" />
        <input ref={urlRef} type="text" placeholder="URL" />
        <br/>
        <textarea ref={techsRef} placeholder="Tecnologias (um por linha)" />
        <br/>
        <button onClick={() => onAdd({ title: titleRef.current.value, url: urlRef.current.value, techs: techsRef.current.value.split('\n') })}>
            Adicionar
        </button>
    </>
};
