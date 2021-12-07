import React, { useState } from 'react';
import AuthContext from './AuthContext';

function AuthProvider(props){
    const [userLogin, setUserLogin] = useState(sessionStorage.getItem('login'));
    const [userInfo, setUserInfo] = useState(JSON.parse(sessionStorage.getItem('userInfo')));

    const loginUser = (userInfo) => {
        sessionStorage.setItem('login', true);
        sessionStorage.setItem('userInfo', JSON.stringify(userInfo));
        setUserLogin(true);
        setUserInfo(userInfo);
    }
    const logoutUser = () => {
        sessionStorage.removeItem('login');
        sessionStorage.removeItem('userInfo');
        setUserLogin(false);
        setUserInfo(false);
    }
    
    return(
        <AuthContext.Provider
            value = {{
                userLogin,
                loginUser,
                logoutUser,
                userInfo
            }}
        >
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;