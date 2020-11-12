import React, { useState } from 'react';
import Styles from './PartItem.module.scss';
import EditPartForm  from '../EditPartForm';
import Modal from '../../../../components/Modal';
import useModal from '../../../../components/Modal/useModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { deletePart } from '../../../../services/PartsService';


const PartItem = (props) => {
    const {isShowing, toggle} = useModal();
    const part = props.part;

    const [isOpen, setIsOpen] = useState(false);
    const toggleStyles = isOpen ? Styles.confirmOpen : "";
    

    return (
        
        <li key={part.partID} className={Styles.partItem}>
            <p>{part.partID}</p>
            <p>{part.partName}</p>
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
                        deletePart(part);
                        setIsOpen(!isOpen);
                    }}
                >Confirm
                </button>
            </div>
            <Modal innerComponent={<EditPartForm part={part} hide={toggle}/>} isShowing={isShowing} hide={toggle} />
        </li>

    )
}

export default PartItem;
