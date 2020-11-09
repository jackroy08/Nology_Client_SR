import React, { useState, useEffect } from "react";
import Styles from "./VehicleFeed.module.scss";
import { getVehicles } from "../../../services/VehiclesService";
import { getLoads } from "../../../services/LoadsService";
import { Doughnut, Bar } from 'react-chartjs-2';

const VehicleFeed = () => {
    const [loadsArr, setLoadsArr] = useState([]);
    const [vehiclesArr, setVehiclesArr] = useState([]);
    const [classAIssues, setClassAIssues] = useState([]);
    const [classBIssues, setClassBIssues] = useState([]);
    const [classCIssues, setClassCIssues] = useState([]);
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

        vehiclesArr.map((vehicle) => {
            if(vehicle.checkItems !== undefined) {
                for (let i = 0; i < vehiclesArr.checkItems.length; i++) {
                    const checkItem = vehiclesArr.checkItems[i];
                    if(checkItem.classType == "classA") setClassAIssues(prevArr => prevArr.concat([checkItem]));
                    else if(checkItem.classType == "classB") setClassBIssues(prevArr => prevArr.concat([checkItem]));
                    else if(checkItem.classType == "classC") setClassCIssues(prevArr => prevArr.concat([checkItem]));
                }
            }
        })
    }, []);

    const pieData = {
        datasets: [{
            data: [vehicleCountArr.length, (vehiclesArr.length-vehicleCountArr.length)],
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
            // Not working
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
            // Also not working
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