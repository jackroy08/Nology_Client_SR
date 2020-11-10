import React, { useState, useEffect } from "react";
import Styles from "./VehicleFeed.module.scss";
import { getVehicles } from "../../../services/VehiclesService";
import { getLoads } from "../../../services/LoadsService";
import { Doughnut, Bar } from 'react-chartjs-2';

const VehicleFeed = () => {
    const [vehiclesArr, setVehiclesArr] = useState([]);
    const vehicleCountArr = [];
    const classAIssues = [];
    const classBIssues = [];
    const classCIssues = [];

    vehiclesArr.map(vehicle => {
        if(vehicle.currentUser !== null) vehicleCountArr.push(vehicle);
    });

    useEffect(() => {
        const promises = [getVehicles(), getLoads()];
        Promise.all(promises).then(response => {

            const [vehicles, loads] = response;
            setVehiclesArr(vehicles);
            vehicles.map((vehicle) => {
                
                if(vehicle.checkItems !== null) {
                    for (let i = 0; i < vehicle.checkItems.length; i++) {
                        const checkItem = vehicle.checkItems[i];

                        if(checkItem.classType == "classA") classAIssues.push(checkItem);
                        else if(checkItem.classType == "classB") classBIssues.push(checkItem);
                        else if(checkItem.classType == "classC") classCIssues.push(checkItem);
                    }                
                }
            })

            setSiteData(prevData => {
                return {
                    datasets: [{
                        data: [classAIssues.length, classBIssues.length, classCIssues.length],
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
            })


            setLoadData(prevData => {
                return {
                    datasets: [{
                        data: [loads.length],
                        backgroundColor: ["blue"],
                        borderColor: ["black"],
                        borderWidth: 1
                    }],
                    labels: [
                        "Loads"
                    ]
                }
            })
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

    const [loadData, setLoadData] = useState({
        datasets: [{
            data: [],
        }],
    });

    const [siteData, setSiteData] = useState({
        datasets: [{
            data: [],
        }],
    });

    return (
        <article className={Styles.dataFeed}>
            <h1 className={Styles.feedTitle}>Live feed for vehicles</h1>
            <h2 className={Styles.subHeading}>There are <span className={Styles.data}>{vehiclesArr.length}</span> vehicles on this site.</h2>
            <section className={Styles.feedList}>
                <div className={Styles.flexCharts}>
                    <div className={Styles.pieData}>
                        <p>Chart of Vehicles on Site</p>
                        <Doughnut 
                            data={pieData} 
                            options={{ maintainAspectRatio: true, responsive: true }}
                        />
                    </div>
                    <div className={Styles.loadData}>
                        <p>Graph of Site Loads</p>
                        <Bar 
                            data={loadData}
                            legend={{display: false}}
                            options={{maintainAspectRatio: true, responsive: true}}
                        />
                    </div>
                </div>
                <div className={Styles.siteData}>
                    <p>Graph of Site Issues</p>
                    <Bar data={siteData} legend={false} options={{maintainAspectRatio: false}}/>
                </div>
            </section>
        </article>
    )
}

export default VehicleFeed;