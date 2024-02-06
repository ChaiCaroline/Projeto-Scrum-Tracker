import { useState } from "react";
import Menu from "../components/Menu";
import './style.css'
import ModalRegistro from "./components/ModalRegistro/ModalRegistro";

export default function Projeto() {
    const [modalRegistroProjeto, setModalRegistroProjeto] = useState(false)

    return (
        <div className="container-projeto">
            {modalRegistroProjeto ?
                <ModalRegistro
                    setModalRegistroProjeto={setModalRegistroProjeto}
                />
                : " "}
            <Menu />
            <div className="container-btn">
                <button className="btn-register-projeto" onClick={() => setModalRegistroProjeto(true)}> + </button>
            </div>
        </div>
    )
}