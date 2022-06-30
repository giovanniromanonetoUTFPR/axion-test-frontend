import { useHistory } from 'react-router-dom';
import { useState } from 'react';

//Hook imports
import { useAuth } from '../../hooks/useAuth'

//CSS import
import './style.css'

//Img imports
import backgroundImage from '../../assets/imgs/bg.jpg'
import logo from '../../assets/imgs/logo.png'
import mailIcon from '../../assets/icons/mail.png'
import lockIcon from '../../assets/icons/lock.png'

export function Cadastro() {
    const history = useHistory();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { register } = useAuth();

    const handleCadastro = async() => {
        await register(username, email, password)
    }

    return (
        <div className="container">
            <div className="loginContainer">
                <img src={logo} className="logo" />
                <div className="inputContainer">
                    <text>Username</text>
                    <input type="text" className="input" placeholder="seu username" onChange={(e) => { setUsername(e.target.value) }} />

                    <text>Email</text>
                    <input type="text" className="input" placeholder="seunome@email.com" onChange={(e) => { setEmail(e.target.value) }} />

                    <text>Password</text>
                    <input type="password" className="input" placeholder="Password" onChange={(e) => { setPassword(e.target.value) }} />

                </div>

                <button className="btCadastro" onClick={() => handleCadastro()}>Cadastrar</button>

                <div className="footer">
                    <a>Termos de uso . Política de privacidade</a>
                </div>
            </div>
            <img src={backgroundImage} className="backgroundImage" />
        </div >
    );
}
