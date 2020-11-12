import React, { useContext, useState } from 'react';
import Styles from './Login.module.scss';
import { UserContext } from "../../context/userContext";
import Modal from "../../components/Modal";
import useModal from "../../components/Modal/useModal";
import SignIn from "./SignIn";
import SignUp from "./SignUp";


const Login = () => {
    const { signUp, signIn, user } = useContext(UserContext);
    const { isShowing, toggle } = useModal();
    const [modalContent, setModalContent] = useState(null);

    return (
        <>
            <main className={Styles.loginPage}>
                <h1 className={Styles.title}>Welcome back!</h1>
                <section className={Styles.loginContainer}>
                    <button className={Styles.loginBtns} onClick={() => { toggle(); setModalContent(<SignUp hide={toggle}/>) }}>SIGN UP</button>
                    <button className={Styles.loginBtns} onClick={() => { toggle(); setModalContent(<SignIn />) }}>SIGN IN</button>
                </section>
                <Modal innerComponent={modalContent} isShowing={isShowing} hide={toggle}/>
            </main>
            <footer>
                <b>Shift Reporter</b> © Copyright 2020. All rights reserved.
            </footer>
        </>
    )
}

export default Login;
