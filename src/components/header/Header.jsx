import React, { useState } from "react";
import Styles from './Header.module.scss';
import { Link } from "@reach/router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = () => {
  const [open, setOpen] = useState(false);
  const openMenu = open ? Styles.accountMenuOpen : "";

  
  return (
    <header className={Styles.appHeader}>
      <button 
        onClick={ () => window.history.back()} 
        className={Styles.btn}>
        <FontAwesomeIcon icon="arrow-left"/>
      </button>
      
      <nav>
        <Link to="/Operator" className={Styles.link}>Operator</Link>
        <Link to="/Supervisor" className={Styles.link}>Supervisor</Link>
        <Link to="/Maintenance" className={Styles.link}>Maintenance</Link>
        <Link to="/Management" className={Styles.link}>Management</Link>
        <Link to="/Admin" className={Styles.link}>Admin</Link>
      </nav>
      
      <nav>
        <button
          className={Styles.btn}
          onClick={() => (setOpen(!open))}>
          <FontAwesomeIcon icon="user-circle"/>
        </button>
        <ul className={`${Styles.accountMenu} ${openMenu}`}>
          <li className={Styles.btn}>Change Password</li>
          <li className={Styles.btn}>Logout</li>
        </ul>
      </nav>
    </header>
)
}

export default Header
