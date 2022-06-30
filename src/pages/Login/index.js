import { useHistory } from 'react-router-dom'
import { useState } from 'react'

//Hook imports
import { useAuth } from '../../hooks/useAuth'

//CSS import
import './style.css'

//Img imports
import backgroundImage from '../../assets/imgs/bg.jpg'
import logo from '../../assets/imgs/logo.png'
import mailIcon from '../../assets/icons/mail.png'
import lockIcon from '../../assets/icons/lock.png'

export function Login() {
    const history = useHistory();
    const { login } = useAuth();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleLogin = async () => {
        await login(email, password)
    }

    return (
        <div className="container">
            <div className="loginContainer">
                <img src={logo} className="logo" />
                <div className="inputContainer">
                    <text>Email</text>
                    <input type="text" className="input" placeholder="seunome@email.com" onChange={(e) => { setEmail(e.target.value) }} />
                    <img src={mailIcon} className="mailIcon" />

                    <text>Password</text>
                    <input type="password" className="input" placeholder="Password" onChange={(e) => { setPassword(e.target.value) }} />
                    <img src={lockIcon} className="lockIcon" />

                    <label className="checkboxLabel">Mostrar a senha.</label>
                    <input type="checkbox" id="mostrarSenha" className="checkbox" />
                </div>

                <a>Problemas para acessar sua conta?</a>

                <button className="botaoAcessar" onClick={()=>handleLogin()}>Acessar</button>

                <div className="linhaContainer">
                    <hr width="33%" />
                    <text>ou</text>
                    <hr width="34%" />
                </div>

                <button className="botaoCadastro" onClick={() => { history.push('/register') }}>Cadastrar</button>

                <div className="footer">
                    <a>Termos de uso . Política de privacidade</a>
                </div>
            </div>
            <img src={backgroundImage} className="backgroundImage" />
        </div >
    );
}
