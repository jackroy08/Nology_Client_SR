import React, { useState, useContext } from "react";
import Styles from './SideNav.module.scss';
import { Link } from "@reach/router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { UserContext } from "../../context/userContext";

const SideNav = (props) => {
    
  const [open, setOpen] = useState(false);
  const openMenu = open ? Styles.accountMenuOpen : "";

  return (
    <nav className={Styles.sideNav}>
      <header className={Styles.sideNavHeader}>
          <h1>SHIFT REPORTER</h1>
      </header>
      <section className={Styles.sideNavMenu}>
        
      {props.children}

      </section>
      <footer className={Styles.sideNavFooter}>
        <ul className={Styles.accountMenu}>
        <li className={`${Styles.accountMenuLogout} ${openMenu}`} onClick={() => (setOpen(!open))}>
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
            <p>User Name</p>
          </li>
        </ul>
      </footer>
    </nav>
)
}

export default SideNav
