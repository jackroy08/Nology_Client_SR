import React, { useState, useEffect } from 'react';
import Styles from './ManageSites.module.scss';
import useModal from '../../../components/Modal/useModal';
import Modal from '../../../components/Modal';
import CreateSiteForm from './CreateSiteForm';
import SiteItem from './SiteItem';
import { firestore } from '../../../firebase'
import { getSites, subscribeToSites } from '../../../services/SitesService';

const ManageSites = () => {
    const {isShowing, toggle} = useModal();
    const [sitesArr, setSitesArr] = useState([]);
    const [siteNamesArr, setSiteNamesArr] = useState([null]);
    const [filteredSitesArr, setFilteredSitesArr] = useState([]);
        
    useEffect(() => {
        getSites().then(response => {
            setFilteredSitesArr(response);
            setSitesArr(response);
            setSiteNamesArr([...new Set(response.map(site => site.siteName))]);
        });
        subscribeToSites(setSitesArr);
    }, [])

    useEffect(() => {
        if (sitesArr) {
            setFilteredSitesArr(sitesArr);
            setSiteNamesArr([...new Set(sitesArr.map(site => site.siteName))])
        }
    }, [sitesArr])

    const filterSites = (siteName) => {
        if (siteName) {
        setFilteredSitesArr(sitesArr.filter((each) => each.siteName === siteName))
        } else {
        setFilteredSitesArr(sitesArr)
        }
    };

    return (
        <section className={Styles.sitesListSection}>
            <header>
                <h3>Sites</h3>
                <button onClick={toggle}>Create New Site</button>
                <Modal innerComponent={<CreateSiteForm hide={toggle}/>} isShowing={isShowing} hide={toggle} />
                <select onChange={(event) => filterSites(event.target.value)}>
                        <option value="">All Sites</option>
                        {siteNamesArr ? siteNamesArr.map((site) => <option key={site} value={site}>{site}</option>) : null}
                    </select>
            </header>                    
            <ul className={Styles.sitesList}>
                <li className={Styles.columnTitles}>
                    <h4>Site ID</h4>
                    <h4>Site Name</h4>
                    <h4>Action</h4>
                </li>
                {filteredSitesArr.map((site) => <SiteItem key={site.siteID} site={site} />)}
                </ul>
        </section>    )
}

export default ManageSites;




// import React from 'react';
// import Styles from './ManageSites.module.scss';
// import sitesArr from '../../../data/sites';
// import useModal from '../../../components/Modal/useModal';
// import CreateSiteForm from './CreateSiteForm';



// const getSiteItemJsx = (site) => {
//     return (
//         <li key={site} className={Styles.siteItem}>
//             <p>{site}</p>
//             <button>Edit...</button>
//         </li>
//     )
// };

// const ManageSites = () => {
//     // const {isShowing, toggle} = useModal();
    
//     return (
//         // <section className={Styles.sitesListSection}>
//         //     <header>
//         //         <h3>Sites</h3>
//         //         <button onClick={toggle}>Create New Site</button>
//         //         <CreateSiteForm isShowing={isShowing} hide={toggle} />
//         //     </header>                    
//         //     <ul className={Styles.sitesList}>
//         //         <li className={Styles.columnTitles}>
//         //             <h4>Site Name</h4>
//         //         </li>
//         //         {sitesArr.map(getSiteItemJsx)}
//         //         </ul>
//         // </section>    )
// }

// export default ManageSites;
