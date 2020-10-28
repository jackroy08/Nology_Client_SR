import React from 'react';
import Styles from './ManageSites.module.scss';
import sitesArr from '../../../data/sites';
import useModal from '../../../components/Modal/useModal';
import CreateSiteForm from './CreateSiteForm';



const getSiteItemJsx = (site) => {
    return (
        <li key={site} className={Styles.siteItem}>
            <p>{site}</p>
            <button>Edit...</button>
        </li>
    )
};

const ManageSites = () => {
    const {isShowing, toggle} = useModal();
    
    return (
        <section className={Styles.sitesListSection}>
            <header>
                <h3>Sites</h3>
                <button onClick={toggle}>Create New Site</button>
                <CreateSiteForm isShowing={isShowing} hide={toggle} />
            </header>                    
            <ul className={Styles.sitesList}>
                <li className={Styles.columnTitles}>
                    <h4>Site Name</h4>
                </li>
                {sitesArr.map(getSiteItemJsx)}
                </ul>
        </section>    )
}

export default ManageSites;
