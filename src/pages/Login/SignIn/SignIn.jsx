import React, { useContext } from "react";
import Styles from "../Login.module.scss"
import { UserContext } from "../../../context/userContext";

const SignIn = () => {
    const { signIn } = useContext(UserContext);

    const signInHandler = (e) => {
        e.preventDefault();
        signIn(document.getElementById("signInID").value, document.getElementById("signInPw").value);
    }

    return (
        <form className={Styles.loginForm}>
            <p>If you have previously signed up, please enter your details here.</p>
            <label className={Styles.idnumber}>Username/email</label>
            <input placeholder="i.e 763489" id="signInID" required/>
            <label className={Styles.password}>Password</label>
            <input type="password" id="signInPw" placeholder="******" required />
            <button
                className={`${Styles.btn} ${Styles.btnPrimary} ${Styles.loginBtns} ${Styles.signInButton}`}
                value="login"
                onClick={signInHandler}
            >SIGN IN
            </button>
        </form>
    )
}

export default SignIn
