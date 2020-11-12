import React, { useState, useEffect } from 'react';
import Styles from './ManagementSummary.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faTruckPickup, faTruckLoading } from '@fortawesome/free-solid-svg-icons'
import { getVehicles } from "../../../services/VehiclesService";
import { getLoads } from "../../../services/LoadsService";
import { getTeams } from "../../../services/TeamsService";

const ManagementSummary = () => {

    const [vehiclesArr, setVehiclesArr] = useState([]);
    const [loadsArr, setLoadsArr] = useState([]);
    const [teamsArr, setTeamsArr] = useState([]);
    
    useEffect(() => {
        const promises = [getVehicles(), getLoads(), getTeams()];
        Promise.all(promises).then(response => {

            const [vehicles, loads, teams] = response;
            setVehiclesArr(vehicles);
            setLoadsArr(loads);
            setTeamsArr(teams);
            
        }) 
    }, []);

    return (
        <>
            <section className={Styles.section}>
                <h1 className={Styles.sectionNumber}>{teamsArr.length}</h1>
                <p  className={Styles.sectionTitle}>Teams</p>
                <FontAwesomeIcon className={`${Styles.sectionIcon} ${Styles.sectionIconOne}`} icon={faUsers}/>
            </section>
            
            <section className={Styles.section}>
                <h1 className={Styles.sectionNumber}>{vehiclesArr.length}</h1>
                <p  className={Styles.sectionTitle}>Vehicles</p>
                <FontAwesomeIcon className={`${Styles.sectionIcon} ${Styles.sectionIconTwo}`} icon={faTruckPickup}/>
            </section>
        
            <section className={Styles.section}>
                <h1 className={Styles.sectionNumber}>{loadsArr.length}</h1>
                <p  className={Styles.sectionTitle}>Loads</p>
                <FontAwesomeIcon className={`${Styles.sectionIcon} ${Styles.sectionIconThree}`} icon={faTruckLoading}/>
            </section>
        </>
    )
}

export default ManagementSummary;