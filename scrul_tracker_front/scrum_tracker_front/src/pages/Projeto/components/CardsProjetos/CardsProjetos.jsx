import useProjeto from "../../../../hook/useProjeto";
import PropTypes from 'prop-types';
import "./style.css"

export default function CardsProjetos({ projeto }) {

    const { setModalProjeto, setProjetoSelecionado } = useProjeto();

    function dadosProjeto() {
        setModalProjeto(true)
        setProjetoSelecionado(projeto.nome)
    }

    return (
        <div className="container-card-projeto" onClick={dadosProjeto}>
            {projeto.nome}
        </div>
    )
}

CardsProjetos.propTypes = {
    projeto: PropTypes.shape({
        nome: PropTypes.string.isRequired,
        // outras propriedades do objeto projeto, se houver
    }).isRequired,
};