import React from 'react'
import Styles from './Header.module.scss';
import { Link } from "@reach/router";

const Header = () => {
    return (
        <header>
          <button className={Styles.back}>Back</button>
          <nav>
            <Link to="/Operator"><button className={Styles.back}>Operator</button></Link>
            <Link to="/Supervisor"><button className={Styles.back}>Supervisor</button></Link>
            <Link to="/Maintenance"><button className={Styles.back}>Maintenance</button></Link>
            <Link to="/Management"><button className={Styles.back}>Management</button></Link>
          </nav>
          <button className={Styles.back}>Account</button>
        </header>
    )
}

export default Header
