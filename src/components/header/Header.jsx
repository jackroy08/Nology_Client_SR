import React, { useState, useContext } from "react";
import Styles from './Header.module.scss';
import { Link } from "@reach/router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { UserContext } from "../../context/userContext";

const Header = () => {
  const [open, setOpen] = useState(false);
  const openMenu = open ? Styles.accountMenuOpen : "";
  const { signOut, user } = useContext(UserContext);

  
  return (
    <header className={Styles.appHeader}>
      <button 
        onClick={ () => window.history.back()} 
        className={Styles.btn}>
        <FontAwesomeIcon icon="arrow-left"/>
      </button>
      
      <nav>
        <Link to="/operator" className={Styles.link}>Operator</Link>
        <Link to="/supervisor" className={Styles.link}>Supervisor</Link>
        <Link to="/maintenance" className={Styles.link}>Maintenance</Link>
        <Link to="/management" className={Styles.link}>Management</Link>
        <Link to="/admin" className={Styles.link}>Admin</Link>
      </nav>
      
      <nav>
        <button
          className={Styles.btn}
          onClick={() => (setOpen(!open))}>
          <FontAwesomeIcon icon="user-circle"/>
        </button>
        <ul className={`${Styles.accountMenu} ${openMenu}`}>
          <li> 
            {user ? <p>User: {user.userID}</p> : <></>}
          </li>
          <li> 
            <button onClick={signOut}className={Styles.btn}>Logout</button>
          </li>
        </ul>
      </nav>
    </header>
)
}

export default Header
