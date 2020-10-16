import React from 'react'
import Styles from './Login.module.scss';
import {Link} from '@reach/router'

const Login = () => {
    return (
        <div className={Styles.loginPage}>
            <h1 className={Styles.title}>Hi welcome to Login Page</h1>
            <input />
            <button>Login</button>
            <Link path='/maintenance'>Maintenance Link</Link>
        </div>
    )
}

export default Login
