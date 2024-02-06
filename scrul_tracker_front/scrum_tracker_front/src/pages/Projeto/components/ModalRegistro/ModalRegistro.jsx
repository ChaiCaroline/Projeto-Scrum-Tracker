import './style.css'
import IconRegistro from '../../../../assets/IconRegistro.svg'
import FecharModal from '../../../../assets/Close.svg'
import api from '../../../../connections/api/api'
import { useState } from 'react'

// eslint-disable-next-line react/prop-types
export default function ModalRegistro({ setModalRegistroProjeto }) {
    const [formProjeto, setFormProjeto] = useState({
        nome: "",
        cliente: "",
        descricao: "",
        visao: ""
    })

    async function registrarProjeto(e) {
        e.preventDefault()

        try {
            await api.post("/scrum", {
                ...formProjeto
            })

            //console.log(response);
            setModalRegistroProjeto(false)
        } catch (error) {
            console.log(error);
        }
    }

    function LimparFormulario() {
        setFormProjeto({
            nome: "",
            cliente: "",
            descricao: "",
            visao: ""
        })
    }

    return (
        <div className='container-bg-registro-projeto'>
            <div className='container-modal-registro-projeto'>
                <header>
                    <div>
                        <img src={IconRegistro} alt="Icone de Registro" />
                        <h3>Cadastrar Projeto</h3>
                    </div>
                    <img src={FecharModal} alt="Botão fechar o modal" onClick={() => setModalRegistroProjeto(false)} />
                </header>
                <main>
                    <form onSubmit={registrarProjeto}>
                        <div className='input-projeto'>
                            <label htmlFor="">Nome:</label>
                            <input type="text" value={formProjeto.nome} onChange={(e) => setFormProjeto({ ...formProjeto, nome: e.target.value })} />
                        </div>
                        <div className='input-projeto'>
                            <label htmlFor="">Cliente:</label>
                            <input type="text" value={formProjeto.cliente} onChange={(e) => setFormProjeto({ ...formProjeto, cliente: e.target.value })} />
                        </div>
                        <div className='input-projeto input-maior'>
                            <label htmlFor="">Descrição:</label>
                            <input type="text" value={formProjeto.descricao} onChange={(e) => setFormProjeto({ ...formProjeto, descricao: e.target.value })} />
                        </div>
                        <div className='input-projeto input-maior'>
                            <label htmlFor="">Visão do Produto:</label>
                            <input type="text" value={formProjeto.visao} onChange={(e) => setFormProjeto({ ...formProjeto, visao: e.target.value })} />
                        </div>
                        <div className='btns-modal-registro'>
                            <button type='submit'>Cadastrar</button>
                            <button type='button' onClick={LimparFormulario}>Limpar</button>
                        </div>
                    </form>
                </main>
            </div>
        </div>
    )


}