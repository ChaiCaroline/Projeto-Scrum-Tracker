import { useState } from 'react'
import FecharModal from '../../../../assets/Close.svg'
import IconRegistro from '../../../../assets/IconRegistro.svg'
import api from '../../../../connections/api/api'
import './style.css'
import { roles, rolesArray } from '../../../../utils/ListRole'

// eslint-disable-next-line react/prop-types
export default function ModalCadastrarUsuario({ setModalCadastrarUsuario }) {
    const [formCadastrarUsuario, setFormCadastrarUsuario] = useState({
        nome: "",
        email: "",
        senha: "",
        role: ""
    })

    const formulario = ['nome', 'email', 'senha']

    async function registrarProjeto(e) {
        e.preventDefault()

        try {
            await api.post("/login", {
                ...formCadastrarUsuario
            })

            //console.log(response);
            setModalCadastrarUsuario(false)
        } catch (error) {
            console.log(error);
        }
    }

    function handleChange(indice) {
        setFormCadastrarUsuario({ ...formCadastrarUsuario, [indice.target.name]: indice.target.value })
    }

    function LimparFormulario() {
        setFormCadastrarUsuario({
            nome: "",
            email: "",
            senha: "",
            role: ""
        })
    }

    return (
        <div className='container-bg-registro-usuario'>
            <div className='container-modal-registro-usuario'>
                <header>
                    <div>
                        <img src={IconRegistro} alt="Icone de Registro" />
                        <h3>Cadastrar Usuário</h3>
                    </div>
                    <img src={FecharModal} alt="Botão fechar o modal" onClick={() => setModalCadastrarUsuario(false)} />
                </header>
                <main>
                    <form onSubmit={registrarProjeto}>
                        {formulario.map((valor, indice) => (
                            <div className='input-usuario' key={indice}>
                                <label htmlFor="">{valor.charAt(0).toUpperCase() + valor.slice(1)}:</label>
                                <input type={valor == 'nome' ? 'text' : valor == 'email' ? 'email' : 'password'}
                                    name={valor} value={formCadastrarUsuario.valor} onChange={handleChange} />
                            </div>
                        ))}
                        <div className='input-usuario'>
                            <label htmlFor="">Cargo:</label>
                            <select name="role" id="role" onChange={handleChange}>
                                <option value="">Selecione seu cargo</option>
                                {rolesArray.map((role) => (
                                    <option key={role} value={role}>{roles[role]}</option>
                                ))}
                            </select>
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