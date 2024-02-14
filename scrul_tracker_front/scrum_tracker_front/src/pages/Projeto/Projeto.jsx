import React, { useState } from "react";
import usuarioIcon from '../../assets/cadastrarUsuario.png';
import Menu from "../components/Menu";
import ModalCadastrarUsuario from "./components/ModalCadastrarUsuario/ModalCadastrarUsuario";
import ModalRegistro from "./components/ModalRegistro/ModalRegistro";
import './style.css';
import CardsProjetos from "./components/CardsProjetos/CardsProjetos";
import ModalProjeto from "./components/ModalProjeto/ModalProjeto";
import useProjeto from "../../hook/useProjeto";

export default function Projeto() {
    const [modalRegistroProjeto, setModalRegistroProjeto] = useState(false)
    const [modalCadastrarUsuario, setModalCadastrarUsuario] = useState(false)

    const { respostaApi, modalProjeto } = useProjeto();

    return (
        <div className="container-projeto">
            {modalRegistroProjeto ?
                <ModalRegistro
                    setModalRegistroProjeto={setModalRegistroProjeto}
                />
                : " "}
            {modalCadastrarUsuario ?
                <ModalCadastrarUsuario
                    setModalCadastrarUsuario={setModalCadastrarUsuario}
                />
                : " "}
            {modalProjeto ?
                <ModalProjeto
                />
                : " "}
            <Menu />
            <div className="container-btn-projeto">
                {respostaApi.role == 'ADMIN' ?
                    <div className="container-btn">
                        <button className="btn-register-projeto" onClick={() => setModalCadastrarUsuario(true)}>
                            <img src={usuarioIcon} alt="" />
                        </button>
                    </div>
                    : null}
                {respostaApi.role == 'PO' || respostaApi.role == 'SM' ?
                    <div className="container-btn">
                        <button className="btn-register-projeto" onClick={() => setModalRegistroProjeto(true)}> + </button>
                    </div>
                    : null}
            </div>
            <main>
                {respostaApi.projetos.map((projeto, index) => (
                    <React.Fragment key={index} >
                        <CardsProjetos
                            projeto={projeto}
                        />
                    </React.Fragment>
                ))}
            </main>
        </div >
    )
}