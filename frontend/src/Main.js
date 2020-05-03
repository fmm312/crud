import React from 'react';
import './Main.css';

export default props => (
    <>
        <div className="header">
            <h1 class="mt-3">Cadastro de usuários</h1>
            <p>Incluir, Listar, Alterar e Excluir</p>

        </div>
        <main className="content container-fluid" >
            <div className="p-4 mt-10" >
                {props.children}
            </div>
        </main>
    </>
)
