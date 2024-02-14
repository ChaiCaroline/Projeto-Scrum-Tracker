import { create } from 'zustand';

const useProjeto = create((set) => ({
    respostaApi: {},
    setRespostaApi: (resposta) => set({ respostaApi: resposta }),
    modalProjeto: false,
    setModalProjeto: (resposta) => set({ modalProjeto: resposta }),
    projetoSelecionado: String,
    setProjetoSelecionado: (resposta) => set({ projetoSelecionado: resposta })
}));

export default useProjeto;