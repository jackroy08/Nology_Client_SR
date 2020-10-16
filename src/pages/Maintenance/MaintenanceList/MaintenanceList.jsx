import React from "react";
import MaintenanceDropdown from "../MaintenanceDropdown/MaintenanceDropdown";
import MaintenanceListItem from "../MaintenanceListItem/MaintenanceListItem";
import Styles from "./MaintenanceList.module.scss";

const MaintenanceList = () => {

    const fixList = [1,2,3,4,5];

    return (
        <>
        {fixList.map(() => {
            return (
                <>
                    <MaintenanceListItem />
                    <MaintenanceDropdown />
                </>
            )
        })}
        </>
    )
}

export default MaintenanceList;