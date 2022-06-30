import React, { useState } from 'react';
import axios from 'axios';

export const AuthContext = React.createContext({});

export function AuthProvider(props) {
    const [currentUser, setCurrentUser] = useState();

    const login = async (email, password) => {
        axios
            .post('http://localhost:1337/api/auth/local', {
                identifier: email,
                password: password,
            })
            .then((response) => {
                console.log('Well done!');
                console.log('data: ', response.data);
            })
            .catch((error) => {
                console.log('Erro:', error.response);
            });
    };

    const register = async (username, email, password) => {
        axios
            .post('http://localhost:1337/api/auth/local/register', {
                username: username,
                email: email,
                password: password,
            })
            .then((response) => {
                console.log('Well done!');
                console.log('data: ', response.data);
            })
            .catch((error) => {
                console.log('Erro:', error.response);
            });
    };

    return (
        <AuthContext.Provider
            value={{
                currentUser,
                login,
                register,
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
}
