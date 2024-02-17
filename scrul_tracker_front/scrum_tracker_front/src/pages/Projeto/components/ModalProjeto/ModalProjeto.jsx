import './style.css'
import FecharModal from '../../../../assets/Close.svg'
import useProjeto from '../../../../hook/useProjeto';
import api from '../../../../connections/api/api'
import { useEffect, useRef, useState } from 'react';

export default function ModalProjeto() {

    const { setModalProjeto, projetoSelecionado, respostaApi } = useProjeto();
    //const [usuarios, SetUsuarios] = useState([]);
    const [usuariosSelecionados, setUsuariosSelecionados] = useState([])
    const [listaDeParticipantesProjeto, setListaDeParticipantesProjeto] = useState([]);
    const selectInput = useRef(null)

    const [dadosFormProjeto, setDadosFormProjeto] = useState({
        nome: "",
        cliente: "",
        descricao: "",
        visao: ""
    })

    function adicionarParticipantes() {
        const novaLista = listaDeParticipantesProjeto.concat(selectInput.current.value)
        setListaDeParticipantesProjeto(novaLista)

        console.log(listaDeParticipantesProjeto);
    }

    function handleChange(indice) {
        setDadosFormProjeto({ ...dadosFormProjeto, [indice.target.name]: indice.target.value })
    }

    async function usuariosSemProjeto() {
        try {
            const usuariosSelecionados = await api.get("/scrumUsuario/usuarios-sem-projeto", {
                params: {
                    nomeProjeto: projetoSelecionado
                }
            })

            setUsuariosSelecionados(usuariosSelecionados.data);

            console.log(usuariosSelecionados);

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        const projetoSelecionadoPeloUsuario = respostaApi.projetos.find((projeto) => projeto.nome == projetoSelecionado)
        setDadosFormProjeto({
            nome: projetoSelecionadoPeloUsuario.nome,
            cliente: projetoSelecionadoPeloUsuario.clinte,
            descricao: projetoSelecionadoPeloUsuario.descricao,
            visao: projetoSelecionadoPeloUsuario.visao
        })
    }, [])

    useEffect(() => {
        usuariosSemProjeto();
    }, [projetoSelecionado])

    return (
        <div className='container-bg-registro-projeto'>
            <div className='container-modal-projeto'>
                <header>
                    <h2>Projeto: {projetoSelecionado}</h2>
                    <img src={FecharModal} alt="Botão fechar o modal" onClick={() => setModalProjeto(false)} />
                </header>
                <main>
                    <form>
                        <div className='input-projeto'>
                            <label htmlFor="">Nome:</label>
                            <input type="text" value={dadosFormProjeto.nome} onChange={handleChange} name='nome' />
                        </div>
                        <div className='input-projeto'>
                            <label htmlFor="">Cliente:</label>
                            <input type="text" value={dadosFormProjeto.cliente} onChange={handleChange} name='cliente' />
                        </div>
                        <div className='input-projeto input-maior'>
                            <label htmlFor="">Descrição:</label>
                            <input type="text" value={dadosFormProjeto.descricao} onChange={handleChange} name='descricao' />
                        </div>
                        <div className='input-projeto input-maior'>
                            <label htmlFor="">Visão do Produto:</label>
                            <input type="text" value={dadosFormProjeto.visao} onChange={handleChange} name='visao' />
                        </div>
                        <div className='input-projeto'>
                            <label htmlFor="">Usuarios:</label>
                            <input name='usuario'/*  autoCorrect='on' */ list='usuarios' />
                            <datalist id='usuarios'>
                                {usuariosSelecionados.map((usuario, index) => (
                                    <option value={usuario} key={index} ref={selectInput}>{usuario}</option>
                                ))}
                            </datalist>
                            <button type='button' className='btn-adicionar-usuario' onClick={adicionarParticipantes}>Adicionar</button>
                        </div>
                        <div className='btns-modal-registro'>
                            <button type='submit'>Atualizar</button>
                        </div>
                    </form>
                </main>
            </div>
        </div>
    )
}