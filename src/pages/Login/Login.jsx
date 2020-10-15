import React from 'react'
import Styles from './Login.module.scss';

const Login = () => {
    return (
        <div className={Styles.loginPage}>
            <h1 className={Styles.title}>Hi welcome to Login Page</h1>
            <input />
            <button>Login</button>
        </div>
    )
}

export default Login
