import './style.css'
import FecharModal from '../../../../assets/Close.svg'
import useProjeto from '../../../../hook/useProjeto';
import { useEffect, useState } from 'react';

export default function ModalProjeto() {

    const { setModalProjeto, projetoSelecionado, respostaApi } = useProjeto();

    const [dadosFormProjeto, setDadosFormProjeto] = useState({
        nome: "",
        cliente: "",
        descricao: "",
        visao: ""
    })

    function handleChange(indice) {
        setDadosFormProjeto({ ...dadosFormProjeto, [indice.target.name]: indice.target.value })
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
                        <div className='btns-modal-registro'>
                            <button type='submit'>Atualizar</button>
                        </div>
                    </form>
                </main>
            </div>
        </div>
    )
}