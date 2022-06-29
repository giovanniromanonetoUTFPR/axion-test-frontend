import { useHistory } from 'react-router-dom'

//CSS import
import './style.css'

//Img imports
import backgroundImage from '../../assets/imgs/bg.jpg'
import logo from '../../assets/imgs/logo.png'
import mailIcon from '../../assets/icons/mail.png'
import lockIcon from '../../assets/icons/lock.png'

export function Cadastro() {
    const history = useHistory();

    return (
        <div className="container">
            <div className="loginContainer">
                <img src={logo} className="logo" />
                <div className="inputContainer">
                    <text>Username</text>
                    <input type="text" className="input" placeholder="seu username" />

                    <text>Email</text>
                    <input type="text" className="input" placeholder="seunome@email.com" />

                    <text>Password</text>
                    <input type="password" className="input" placeholder="Password" />

                </div>

                <button className="btCadastro">Cadastrar</button>

                <div className="footer">
                    <a>Termos de uso . Política de privacidade</a>
                </div>
            </div>
            <img src={backgroundImage} className="backgroundImage" />
        </div >
    );
}
