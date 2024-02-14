
import logo from '../../assets/Logo.svg'
import useStore from '../../hook/useProjeto'
import './style.css'

export default function Menu() {

    const { respostaApi } = useStore();

    return (
        <nav>
            <img src={logo} alt="Logo Scrum Tracker" />
            <div className='container-informacoes-usuario'>
                <div className='container-informacoes-usuario-role'>
                    <h2>{respostaApi.role}</h2>
                </div>
                <h3>{respostaApi.nome}</h3>
            </div>
        </nav>
    )
}