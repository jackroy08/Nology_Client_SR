import React, { useState } from 'react';
import Styles from './VehicleItem.module.scss';
import EditVehicleForm  from '../EditVehicleForm';
import Modal from '../../../../components/Modal';
import useModal from '../../../../components/Modal/useModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { deleteVehicle } from '../../../../services/VehiclesService';


const VehicleItem = (props) => {
    const {isShowing, toggle} = useModal();
    const vehicle = props.vehicle;
    const [isOpen, setIsOpen] = useState(false);
    const toggleStyles = isOpen ? Styles.confirmOpen : "";
    
    // this.vehicleID = vehicleID;
    // this.vehicleType = vehicleType;
    // this.goStatus = goStatus;
    // this.currentTeam = null;
    // this.currentUser = null;
    // this.checkItems = null;
    // this.lastChecked = new Date();
    // this.checkedLog = null;

    return (
        <li key={vehicle.vehicleID} className={Styles.vehicleItem}>
            <p>{vehicle.vehicleID}</p>
            <p>{vehicle.vehicleType}</p>
            <p>{vehicle.goStatus}</p>
            <p>{vehicle.currentTeam}</p>
            <p>{vehicle.currentUser}</p>
            {/* need to figure out to convert date object into a string, i cant seem to get toUTCstring() to work */}
            <p>05 Nov 2020{/*vehicle.lastChecked*/}</p>
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
                        deleteVehicle(vehicle);
                        setIsOpen(!isOpen);
                    }}
                >Confirm
                </button>
            </div>
            <Modal innerComponent={<EditVehicleForm vehicle={vehicle} hide={toggle}/>} isShowing={isShowing} hide={toggle} />
        </li>

    )
}

export default VehicleItem;
