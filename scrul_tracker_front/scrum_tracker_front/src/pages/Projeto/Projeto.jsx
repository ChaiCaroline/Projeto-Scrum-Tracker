import { useState } from "react";
import usuarioIcon from '../../assets/cadastrarUsuario.png';
import useStore from "../../hook/store";
import Menu from "../components/Menu";
import ModalCadastrarUsuario from "./components/ModalCadastrarUsuario/ModalCadastrarUsuario";
import ModalRegistro from "./components/ModalRegistro/ModalRegistro";
import './style.css';

export default function Projeto() {
    const [modalRegistroProjeto, setModalRegistroProjeto] = useState(false)
    const [modalCadastrarUsuario, setModalCadastrarUsuario] = useState(false)
    const { respostaApi } = useStore();

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

            </main>
        </div >
    )
}