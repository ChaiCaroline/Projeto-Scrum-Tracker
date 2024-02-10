import create from 'zustand';

const useStore = create((set) => ({
    respostaApi: {},
    setRespostaApi: (resposta) => set({ respostaApi: resposta })
}));

export default useStore;