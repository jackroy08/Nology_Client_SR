import React, { useState, useEffect } from "react";
import useModal from "../../../components/Modal/useModal";
import Styles from "./VehicleFeed.module.scss";

import Report from "../Report";
import Modal from "../../../components/Modal";

import { getVehicles } from "../../../services/VehiclesService";
import { getLoads } from "../../../services/LoadsService";
import { Doughnut, Bar } from 'react-chartjs-2';

const VehicleFeed = () => {
    const [loadsArr, setLoadsArr] = useState([]);
    const [vehiclesArr, setVehiclesArr] = useState([]);
    const [vehicleIssues, setVehicleIssues] = useState([]);
    const [classAIssues, setClassAIssues] = useState([]);
    const [classBIssues, setClassBIssues] = useState([]);
    const [classCIssues, setClassCIssues] = useState([]);
    const {isShowing, toggle} = useModal();
    const vehicleCountArr = [];

    vehiclesArr.map(vehicle => {
        if(vehicle.currentUser !== null) vehicleCountArr.push(vehicle);
    });

    useEffect(() => {
        getVehicles().then((response) => {
            setVehiclesArr(response);
        });
        getLoads().then((response) => {
            setLoadsArr(response);
        });
        if(vehiclesArr.checkItems !== undefined) {
            setClassAIssues(vehiclesArr.checkItems.classA);
            setClassBIssues(vehiclesArr.checkItems.classB);
            setClassCIssues(vehiclesArr.checkItems.classC);
            setVehicleIssues(vehiclesArr.checkItems);
        }
    }, []);

    const pieData = {
        datasets: [{
            // data: [vehicleCountArr.length, (vehiclesArr.length-vehicleCountArr.length)],
            data: [7, 11],
            backgroundColor: [
                "green",
                "red",
            ],
            borderColor: [
                "black",
                "black",
            ],
            borderWidth: 1
        }],

        labels: [
            "Active vehicles",
            "Inactive vehicles",
        ]
    };

    const loadData = {
        datasets: [{
            // data: [loadsArr.length],
            data: [40],
            backgroundColor: ["blue"],
            borderColor: ["black"],
            borderWidth: 1
        }],

        labels: [
            "Loads",
        ]
    }

    const siteData = {
        datasets: [{
            // data: [classAIssues.length, classBIssues.length, classCIssues.length],
            data: [5, 7, 10],
            backgroundColor: [
                "red",
                "orange",
                "green",
            ],
            borderColor: [
                "black",
                "black",
                "black",
            ],
            borderWidth: 1
        }],
        
        labels: [
            "Class A Fails",
            "Class B Fails",
            "Class C Fails",
        ]
    }

    return (
        <article className={Styles.dataFeed}>
            <h1 className={Styles.feedTitle}>Live feed for vehicles</h1>
            <button className={Styles.btn} onClick={toggle}>Report</button>
            <Modal innerComponent={<Report item={vehicleIssues} hide={toggle}/>} isShowing={isShowing} hide={toggle} />
            <h2 className={Styles.subHeading}>There are <span className={Styles.data}>{vehiclesArr.length}</span> vehicles on this site.</h2>
            <section className={Styles.feedList}>
                <div className={Styles.flexCharts}>
                    <div className={Styles.pieData}>
                        <Doughnut 
                            data={pieData} 
                            width={100}
                            height={250}
                            options={{ maintainAspectRatio: false }} />
                    </div>
                    <div className={Styles.loadData}>
                        <Bar 
                            data={loadData}
                            legend={false}
                            width={100}
                            height={250}
                            options={{maintainAspectRatio: false}}/>
                    </div>
                </div>
                <div className={Styles.siteData}>
                    <Bar data={siteData} legend={false} options={{maintainAspectRatio: false}}/>
                </div>
            </section>
        </article>
    )
}

export default VehicleFeed;