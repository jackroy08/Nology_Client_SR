import React, {useState} from "react";
import Styles from "./UserTable.module.scss";
import userData from "../../../data/users";

//adding made up go status and Team - remove once data is from backend


//where do we get current user??
let supervisorTeam = "TeamA";
//// End of bullshit data


const UserTable = () => {

  const getUserJsx = (user) => {
    return (
      <li key={user.userID} className={`${Styles.userItem} ${user.isOnShift ? "" : Styles.unavailable}`}>
        <p>{user.fullNameStr}</p>
        <p>{user.assignedVehicle}</p>
        <p>{user.userType}</p>
        <p>{user.userID}</p>
        <p>{user.isOnShift ? "On Shift" : "Not On Shift"}</p>
        <p>{user.currentTeam ? user.currentTeam : "No team"}</p>
      </li>
    )
  }

  const supervisorUsers = userData.filter(user => (user.currentTeam === supervisorTeam && user.userType === "operator"));

  const [isUserDataOpen, setIsUserDataOpen] = useState(false)

  return (
    <section className={Styles.userListSection}>
      <header onClick={() => {setIsUserDataOpen(!isUserDataOpen)}}>
        <h3>Team user Stats</h3>
        <div className={Styles.userSummary}>
          <p>Total users: {supervisorUsers.length}</p>
          <p>Working users: {supervisorUsers.filter(v => v.goStatus).length}</p>
          <p>Broken users: {supervisorUsers.filter(v => !v.goStatus).length}</p>
        </div>
      </header>

      <ul className={`${Styles.userList} ${isUserDataOpen ? Styles.shown : null}`}>
        <li className={Styles.columnTitles}>
          <h4>Plant ID</h4>
          <h4>Plant Type</h4>
          <h4>Go Status</h4>
          <h4>Current Team</h4>
          <h4>Current User</h4>
          <h4>Check Items</h4>
          <h4>Last Checked</h4>
          <h4>Checked Log</h4>
        </li>
        {supervisorUsers.map(getUserJsx)}
      </ul>
    </section>
  );
};

export default UserTable;