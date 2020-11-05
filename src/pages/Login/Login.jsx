import React, { useContext, useEffect } from 'react'
import Styles from './Login.module.scss';
import backgroundImage from '../../assets/images/background-image.jpg';
import { UserContext } from "../../context/userContext";


const Login = () => {
    const { signUp, signIn, user } = useContext(UserContext);

    const signInHandler = (e) => {
        e.preventDefault();
        signIn(document.getElementById("signInID").value, document.getElementById("signInPw").value);
    }

    const signUpHandler = (e) => {
        e.preventDefault();
        signUp(document.getElementById("signUpID").value, document.getElementById("signUpPw").value);
        console.log(user);
    }

    return (
        <main className={Styles.loginPage}>
            <h1 className={Styles.title}>Shift Reporter</h1>
            <div className={Styles.loginContainer}>
                
                <form className={Styles.loginForm}>
                    <label className={Styles.idnumber}>Username/email</label>
                    <input placeholder="i.e 763489" id="signInID" required/>
                    <label className={Styles.password}>Password</label>
                    <input type="password" id="signInPw" placeholder="******" required />
                    <button
                        className={`${Styles.btn} ${Styles.btnPrimary}`}
                        value="login"
                        onClick={signInHandler}
                    >SIGN IN
                    </button>
                </form>
            </div>
            <div className={Styles.loginContainer}>
                <form>
                    <label className={Styles.idnumber}>Username/email</label>
                    <input type="text" id="signUpID"/>
                    <label className={Styles.password}>Password</label>
                    <input type="password" id="signUpPw"/>
                    <button
                        className={`${Styles.btn} ${Styles.btnPrimary}`}
                        value="login"
                        onClick={signUpHandler}
                    >SIGN UP
                    </button>
                </form>
            </div>            
            <img className={`${Styles.backgroundImage}`} src={backgroundImage} alt="2 Large Mining Trucks"/>
        </main>
    )
}

export default Login;
