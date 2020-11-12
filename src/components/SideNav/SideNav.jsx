import React, { useState, useContext } from "react";
import Styles from './SideNav.module.scss';
import { Link } from "@reach/router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { UserContext } from "../../context/userContext";

const SideNav = (props) => {
    
  const [open, setOpen] = useState(false);
  const openMenu = open ? Styles.accountMenuOpen : "";
  const { user, signOut } = useContext(UserContext);

  return (
    <nav className={Styles.sideNav}>
      <header className={Styles.sideNavHeader}>
          <h1>© Shift Reporter</h1>
      </header>
      <section className={Styles.sideNavMenu}>
        
      {props.children}

      </section>
    
      <ul className={Styles.accountMenu}>
      <li className={`${Styles.accountMenuLogout} ${openMenu}`}
        onClick={() => (signOut())}>
          <span className={Styles.faIcon}>
            <FontAwesomeIcon icon="sign-out-alt"/></span>
          <p>Logout</p>
        </li>
        <li className={`${Styles.accountMenuPassword} ${openMenu}`} onClick={() => (setOpen(!open))}>
          <span className={Styles.faIcon}>
            <FontAwesomeIcon icon="key"/></span>
          <p>Change Password</p>
        </li>
        <li className={Styles.accountMenuAccount} onClick={() => (setOpen(!open))}>
          <span className={Styles.faIcon} >
            <FontAwesomeIcon icon="user-circle"/></span>
          <p>{user ? user.userID : ""}</p>
        </li>
      </ul>
    
    </nav>
)
}

export default SideNav
