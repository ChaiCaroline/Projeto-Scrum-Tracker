import logo from '../../assets/Logo.svg'
import './style.css'

export default function Menu() {

    return (
        <nav>
            <img src={logo} alt="Logo Scrum Tracker" />
            <div className='container-informacoes-usuario'>
                <div className='container-informacoes-usuario-role'>
                    <h2>DEV</h2>
                </div>
                <h3>chaiene caroline</h3>
            </div>
        </nav>
    )
}