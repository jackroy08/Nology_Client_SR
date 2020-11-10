import React, { useState, useEffect } from "react";
import Styles from "./VehicleFeed.module.scss";
import { getVehicles } from "../../../services/VehiclesService";
import { getLoads } from "../../../services/LoadsService";
import { Doughnut, Bar } from 'react-chartjs-2';

const VehicleFeed = () => {
    const [vehiclesArr, setVehiclesArr] = useState([]);
    const vehicleCountArr = [];
    const siteLoads = [];
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

            for (const [key] of Object.entries(loads[0])) {
                siteLoads.push("load");
            }
            siteData.datasets[0].data.push(classAIssues.length);
            siteData.datasets[0].data.push(classBIssues.length);
            siteData.datasets[0].data.push(classCIssues.length);
            loadData.datasets[0].data.push(siteLoads.length);
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
            data: [],
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
            data: [],
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
                            legend={{display: false}}
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