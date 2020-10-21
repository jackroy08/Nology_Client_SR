import React from 'react'
import Styles from './Login.module.scss';
import { Link } from '@reach/router';

const Login = () => {
    return (
        <main className={Styles.loginPage}>
            <h1 className={Styles.title}>Shift Reporter</h1>
            <form className={Styles.loginForm}>
                <label className={Styles.idnumber}>ID Number:</label>
                <input placeholder="i.e 763489" required />
                <label className={Styles.password}>Password:</label>
                <input type="password" placeholder="******" required />
                <button
                    className={`${Styles.btn} ${Styles.btnPrimary}`}
                    type="submit"
                    value="login"
                >SIGN IN
                </button>
            </form>
        </main>
    )
}

export default Login;
