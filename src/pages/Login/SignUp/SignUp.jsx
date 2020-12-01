import React, { useContext } from "react";
import Styles from "../Login.module.scss"
import { UserContext } from "../../../context/userContext";

const SignUp = (props) => {
    const { signUp } = useContext(UserContext);
    const { hide } = props;

    const signUpHandler = (e) => {
        e.preventDefault();
        signUp(document.getElementById("signUpID").value, document.getElementById("signUpPw").value);
        hide();
    }

    return (
        <form className={Styles.loginForm}>
            <h2 className={Styles.loginTitle}>Sign up..</h2>
            <label className={Styles.idnumber}>Username/email</label>
            <input placeholder="i.e 763489" id="signUpID" required/>
            <label className={Styles.password}>Password</label>
            <input type="password" id="signUpPw" placeholder="******" required />
            <button
                className={`${Styles.btn} ${Styles.btnPrimary} ${Styles.loginBtns} ${Styles.signInButton}`}
                value="login"
                onClick={signUpHandler}
            >SIGN UP
            </button>
        </form>
    )
}

export default SignUp
