import React, { useState } from "react";
import Styles from './Header.module.scss';
import { Link } from "@reach/router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = () => {
  const [open, setOpen] = useState(false);
  const openMenu = open ? Styles.accountMenuOpen : "";

  
  return (
    <header>
      <button 
        onClick={ () => window.history.back()} 
        className={Styles.btn}>
        <FontAwesomeIcon icon="arrow-left"/>
      </button>
      
      <nav>
        <Link to="/Operator"><button className={Styles.btn}>Operator</button></Link>
        <Link to="/Supervisor"><button className={Styles.btn}>Supervisor</button></Link>
        <Link to="/Maintenance"><button className={Styles.btn}>Maintenance</button></Link>
        <Link to="/Management"><button className={Styles.btn}>Management</button></Link>
        <Link to="/Admin"><button className={Styles.btn}>Admin</button></Link>
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
