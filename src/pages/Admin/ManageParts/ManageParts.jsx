import React, { useState, useEffect } from 'react';
import Styles from './ManageParts.module.scss';
import useModal from '../../../components/Modal/useModal';
import Modal from '../../../components/Modal';
import CreatePartForm from './CreatePartForm';
import PartItem from './PartItem';
import { firestore } from '../../../firebase'
import { getParts, subscribeToParts } from '../../../services/PartsService';

const ManageParts = () => {
    const {isShowing, toggle} = useModal();
    const [partsArr, setPartsArr] = useState([]);
    const [partNamesArr, setPartNamesArr] = useState([null]);
    const [filteredPartsArr, setFilteredPartsArr] = useState([]);
        
    useEffect(() => {
        getParts().then(response => {
            setFilteredPartsArr(response);
            setPartsArr(response);
            setPartNamesArr([...new Set(response.map(part => part.partName))]);
        });
        const unsubscribe = subscribeToParts(setPartsArr);
        return unsubscribe;
    }, [])

    useEffect(() => {
        if (partsArr) {
            setFilteredPartsArr(partsArr);
            setPartNamesArr([...new Set(partsArr.map(part => part.partName))])
        }
    }, [partsArr])

    const filterParts = (partName) => {
        if (partName) {
        setFilteredPartsArr(partsArr.filter((each) => each.partName === partName))
        } else {
        setFilteredPartsArr(partsArr)
        }
    };

    return (
        <section className={Styles.partsListSection}>
            <header>
                <h3>Parts</h3>
                <button className={Styles.btnPrimary} onClick={toggle}>Create New Part</button>
                <Modal innerComponent={<CreatePartForm hide={toggle}/>} isShowing={isShowing} hide={toggle} />
                <select className={Styles.selectPrimary} onChange={(event) => filterParts(event.target.value)}>
                        <option value="">All Parts</option>
                        {partNamesArr ? partNamesArr.map((part) => <option key={part} value={part}>{part}</option>) : null}
                    </select>
            </header>                    
            <ul className={Styles.partsList}>
                <li className={Styles.columnTitles}>
                    <h4>ID</h4>
                    <h4>Part Name</h4>
                    <h4>Action</h4>
                </li>
                {filteredPartsArr.map((part) => <PartItem key={part.partID} part={part} />)}
                </ul>
        </section>    )
}

export default ManageParts;
