import React from 'react'
import Styles from './Login.module.scss';
import backgroundImage from '../../assets/images/background-image.jpg';

const Login = () => {
    return (
        <main className={Styles.loginPage}>
            <div className={Styles.loginContainer}>
                
                <form className={Styles.loginForm}>
                    <h1 className={Styles.title}>Shift Reporter</h1>
                    <label className={Styles.idnumber}>Username</label>
                    <input placeholder="i.e 763489" required />
                    <label className={Styles.password}>Password</label>
                    <input type="password" placeholder="******" required />
                    <button
                        className={`${Styles.btn} ${Styles.btnPrimary}`}
                        type="submit"
                        value="login"
                    >SIGN IN
                    </button>
                </form>
            </div>            
            <img className={`${Styles.backgroundImage}`} src={backgroundImage} alt="2 Large Mining Trucks"/>
        </main>
    )
}

export default Login;
