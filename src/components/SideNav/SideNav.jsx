import React, { useState, useContext } from "react";
import Styles from './SideNav.module.scss';
import { Link } from "@reach/router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { UserContext } from "../../context/userContext";

const SideNav = (props) => {
    
  const [accountOpen, setAccountOpen] = useState(false);
  const openAccountMenu = accountOpen ? Styles.accountMenuOpen : "";
  const { user, signOut } = useContext(UserContext);
  const [isDocked, setIsDocked] = useState(false);

  return (
    <nav className={isDocked ? `${Styles.sideNav} ${Styles.docked}` : `${Styles.sideNav}`}>
      {/* <button onClick={() => setIsDocked(!isDocked)}>Close</button> */}
      <header className={Styles.sideNavHeader}>
          <h1>© Shift Reporter</h1>
      </header>
      <section className={Styles.sideNavMenu}>
        
      {props.children}

      </section>
    
      <ul className={`${Styles.accountMenu} ${openAccountMenu}`}>
        <li className={Styles.accountMenuAccount} onClick={() => (setAccountOpen(!accountOpen))}>
          <span className={Styles.faIcon} >
            <FontAwesomeIcon icon="user-circle"/></span>
          <p>{user ? user.userID : ""}</p>
        </li>
        <li className={`${Styles.accountMenuPassword} ${openAccountMenu}`} onClick={() => (setAccountOpen(!accountOpen))}>
          <span className={Styles.faIcon}>
            <FontAwesomeIcon icon="key"/></span>
          <p>Change Password</p>
        </li>
        <li className={`${Styles.accountMenuLogout} ${openAccountMenu}`}
          onClick={() => (signOut())}>
          <span className={Styles.faIcon}>
            <FontAwesomeIcon icon="sign-out-alt"/></span>
          <p>Logout</p>
        </li>
      </ul>
    
    </nav>
)
}

export default SideNav
