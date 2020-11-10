import React, { useContext, useState } from 'react';
import Styles from './Login.module.scss';
import backgroundImage from '../../assets/images/background-image.jpg';
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
        <main className={Styles.loginPage}>
            <h1 className={Styles.title}>Shift Reporter</h1>
            <section className={Styles.loginContainer}>
                <button className={Styles.loginBtns} onClick={() => { toggle(); setModalContent(<SignIn />) }}>SIGN IN</button>
                <button className={Styles.loginBtns} onClick={() => { toggle(); setModalContent(<SignUp hide={toggle}/>) }}>SIGN UP</button>
            </section>
            <img className={`${Styles.backgroundImage}`} src={backgroundImage} alt="2 Large Mining Trucks"/>
            <Modal innerComponent={modalContent} isShowing={isShowing} hide={toggle}/>
        </main>
    )
}

export default Login;
