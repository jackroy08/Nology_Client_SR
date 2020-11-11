import React, { useState } from "react";
import Styles from "./VehicleTable.module.scss";

const VehicleTable = (props) => {

  const {filteredVehiclesArr} = props;

  const getVehicleJsx = (vehicle) => {
    return (
      <li key={vehicle.vehicleID} className={`${Styles.vehicleItem} ${vehicle.goStatus ? "" : Styles.unavailable}`}>
        <p>{vehicle.vehicleID}</p>
        <p>{vehicle.vehicleType}</p>
        <p>{vehicle.goStatus ? "Available" : "Not Available"}</p>
        <p>{vehicle.currentTeam ? vehicle.currentTeam : "No team"}</p>
        <p>{vehicle.currentUser}</p>
        {/* <p>{vehicle.checkItems}</p> */}
        {/* <p>{vehicle.lastChecked}</p> */}
        <p>{vehicle.checkedLog}</p>
      </li>
    )
  }

  const [listHeight, setListHeight] = useState(0)

  let list;

  const headerOnClick = () => {
    listHeight ? setListHeight(0) : setListHeight(list.scrollHeight)
  }

  return (
    <section className={Styles.vehicleListSection}>
      <header className={Styles.header} onClick={headerOnClick}>
        <h3>Team Vehicle Stats</h3>
        <div className={Styles.vehicleSummary}>
          <p>Total Vehicles: {filteredVehiclesArr.length}</p>
          <p>Working Vehicles: {filteredVehiclesArr.filter(v => v.goStatus).length}</p>
          <p>Broken Vehicles: {filteredVehiclesArr.filter(v => !v.goStatus).length}</p>
        </div>
      </header>

      <ul className={Styles.vehicleList} ref={element => {list=element}} style={{height : listHeight}}>
        <li key="titles" className={Styles.columnTitles}>
          <h4>Vehicle ID</h4>
          <h4>Vehicle Type</h4>
          <h4>Go Status</h4>
          <h4>Current Team</h4>
          <h4>Current User</h4>
          <h4>Check Items</h4>
          <h4>Last Checked</h4>
          <h4>Checked Log</h4>
        </li>
        {filteredVehiclesArr.map(getVehicleJsx)}
      </ul>
    </section>
  );
};

export default VehicleTable;
