import React from 'react'
import Styles from './Login.module.scss';
import {Link} from '@reach/router'

const Login = () => {
    return (
        <div className={Styles.loginPage}>
            <h1 className={Styles.title}>Hi welcome to Login Page</h1>
            <input />
            <button>Login</button>
            <Link to='../maintenance'>Maintenance Link</Link>
            <Link to='../supervisor'>Supervisor Link</Link>
        </div>
    )
}

export default Login
