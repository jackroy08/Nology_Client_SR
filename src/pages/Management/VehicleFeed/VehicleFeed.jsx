import React, { useState, useEffect } from "react";
import Styles from "./VehicleFeed.module.scss";
import { getVehicles } from "../../../services/VehiclesService";
import { Doughnut, Bar } from 'react-chartjs-2';

const VehicleFeed = () => {
    const [vehiclesArr, setVehiclesArr] = useState([]);
    const vehicleCountArr = [];
    const classAIssues = [];
    const classBIssues = [];
    const classCIssues = [];

    vehiclesArr.map(vehicle => {
        if (vehicle.currentUser !== null) vehicleCountArr.push(vehicle);
    });

    useEffect(() => {
        const promises = [getVehicles()];
        Promise.all(promises).then(response => {

            const [vehicles] = response;
            setVehiclesArr(vehicles);
            vehicles.map((vehicle) => {

                if (vehicle.checkItems !== null) {
                    for (let i = 0; i < vehicle.checkItems.length; i++) {
                        const checkItem = vehicle.checkItems[i];

                        console.log(checkItem);

                        if(checkItem.classType == "classA" && checkItem.supervisorSignoff == false) classAIssues.push(checkItem);
                        else if(checkItem.classType == "classB" && checkItem.supervisorSignoff == false) classBIssues.push(checkItem);
                        else if(checkItem.classType == "classC" && checkItem.supervisorSignoff == false) classCIssues.push(checkItem);
                    }                
                }
            })

            setSiteData(() => {
                return {
                    datasets: [{
                        data: [classAIssues.length, classBIssues.length, classCIssues.length],
                        backgroundColor: [
                            "#396AFF",
                            "#7C8FFF",
                            "#E9ECFF",
                        ],
                    }],

                    labels: [
                        "Class A Fails",
                        "Class B Fails",
                        "Class C Fails",
                    ]
                }
            })
        }) 
    }, []);

    const pieData = {
        datasets: [{
            data: [vehicleCountArr.length, (vehiclesArr.length - vehicleCountArr.length)],
            backgroundColor: [
                "#2DA488",
                "#E5F6F2",
            ],
        }],

        labels: [
            "Active vehicles",
            "Inactive vehicles",
        ]
    };

    const [siteData, setSiteData] = useState({
        datasets: [{
            data: [],
        }],
    });

    return (
        <article className={Styles.dataFeed}>
            <div className={Styles.pieData}>
                <Doughnut
                    data={pieData}
                    legend={{display: false}}
                    options={{ maintainAspectRatio: true, responsive: true }}
                />
                <article>
                    <p className={Styles.counter}>{vehicleCountArr.length}</p>
                    <p>Active Vehicles on Site</p>
                </article>
            </div>
            <div className={Styles.siteData}>
                <Bar 
                    data={siteData}
                    legend={false}
                    options={{maintainAspectRatio: true, reponsive: true}}
                />
            </div>
        </article>
    )
}

export default VehicleFeed;