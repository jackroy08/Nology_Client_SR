import React, { useState } from 'react';
import Styles from './SiteItem.module.scss';
import EditSiteForm  from '../EditSiteForm';
import Modal from '../../../../components/Modal';
import useModal from '../../../../components/Modal/useModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { deleteSite } from '../../../../services/SitesService';


const SiteItem = (props) => {
    const {isShowing, toggle} = useModal();
    const site = props.site;

    const [isOpen, setIsOpen] = useState(false);
    const toggleStyles = isOpen ? Styles.confirmOpen : "";
    

    return (
        
        <li key={site.siteID} className={Styles.siteItem}>
            <p>{site.siteID}</p>
            <p>{site.siteName}</p>
            <span className={Styles.faIcon} onClick={toggle}><FontAwesomeIcon  icon="pencil-alt"/></span>
            <span className={Styles.faIcon} onClick={() => setIsOpen(!isOpen)}><FontAwesomeIcon  icon="trash-alt"/></span>
            <div className={`${Styles.confirmDelete} ${toggleStyles}`}>
                <button
                    className={Styles.btnSecondary}
                    onClick={() => setIsOpen(!isOpen)}
                    >Cancel
                </button>
                <button
                    className={Styles.btnPrimary}
                    onClick={() => {
                        deleteSite(site);
                        setIsOpen(!isOpen);
                    }}
                >Confirm
                </button>
            </div>
            <Modal innerComponent={<EditSiteForm site={site} hide={toggle}/>} isShowing={isShowing} hide={toggle} />
        </li>

    )
}

export default SiteItem;
