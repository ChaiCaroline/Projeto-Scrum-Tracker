/* import { Container, FormContainer } from "./styles"; */
import "./style.css";
import Logo from '../../assets/Logo.svg';
import IconEmail from '../../assets/Email.svg';
import IconSenha from '../../assets/Senha.svg';
import { useState } from "react";
import api from '../../connections/api/api'
import { useNavigate } from "react-router-dom";
import useStore from "../../hook/store";


export default function Home() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const store = useStore()

    async function enviarLogin(e) {
        e.preventDefault()

        try {
            const response = await api.get("/login", {
                headers: {
                    email: email,
                }
            })

            store.setRespostaApi(response.data)

            navigate("/scrum");
        } catch (error) {
            console.log(error);
        }
    }



    return (
        <div className='container-principal-home'>
            <figure>
                <img src={Logo} alt="Imagem da logomarca do Scrum Tracker" />
            </figure>
            <form onSubmit={enviarLogin}>
                <div className="input">
                    <label htmlFor="">E-mail:</label>
                    <input value={email} onChange={(e) => { setEmail(e.target.value) }} type="text" placeholder="Digite seu e-mail" />
                    <img src={IconEmail} alt="Ícone de e-mail" />
                </div>
                <div className="input">
                    <label htmlFor="">Senha:</label>
                    <input value={password} type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Digite sua senha" />
                    <img src={IconSenha} alt="Ícone de senha" />
                </div>
                {/* {loading ? <Spinner /> : <button type="submit">Entrar</button>} */}
                <button type="submit">Entrar</button>
            </form>
        </div>
    )
}
