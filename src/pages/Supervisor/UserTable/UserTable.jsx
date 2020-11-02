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

  const supervisorUsers = userData.filter(user => (user.currentTeam === supervisorTeam && user.userType === "operator"))
  .sort((a,b) => a.userID - b.userID)

  const [listHeight, setListHeight] = useState(0)

  let list;

  const headerOnClick = () => {
    listHeight ? setListHeight(0) : setListHeight(list.scrollHeight)
  }

  return (
    <section className={Styles.userListSection}>
      <header onClick={headerOnClick}>
        <h3>Team Member Info</h3>
        <div className={Styles.userSummary}>
          <p>Total Operators: {supervisorUsers.length}</p>
          <p>Operators on Shift: {supervisorUsers.filter(v => v.goStatus).length}</p>
          <p>Operators Away: {supervisorUsers.filter(v => !v.goStatus).length}</p>
        </div>
      </header>

      <ul className={Styles.userList} ref={el => {list=el}} style={{height : listHeight}}>
        <li className={Styles.columnTitles}>
          <h4>Full Name</h4>
          <h4>Assigned Vehicle</h4>
          <h4>User Type</h4>
          <h4>User ID</h4>
          <h4>Status</h4>
          <h4>Current Team</h4>
        </li>
        {supervisorUsers.map(getUserJsx)}
      </ul>
    </section>
  );
};

export default UserTable;