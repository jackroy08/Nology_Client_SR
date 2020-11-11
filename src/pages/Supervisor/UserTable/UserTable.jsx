import React, {useState} from "react";
import Styles from "./UserTable.module.scss";


//adding made up go status and Team - remove once data is from backend


//where do we get current user??
let supervisorTeam = "TeamA";
//// End of bullshit data



const UserTable = (props) => {

  const userData = props.filteredUsersArr;

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
  
  let list;
  
  const [listHeight, setListHeight] = useState(0)

  const headerOnClick = () => {
    listHeight ? setListHeight(0) : setListHeight(list.scrollHeight)
  }

  return (
    <section className={Styles.userListSection}>
      <header className={Styles.header} onClick={headerOnClick}>
        <h3>Team Members</h3>
        <div className={Styles.userSummary}>
          <p>Total:</p>
          <p>{userData.length}</p>
          <p>On Shift:</p>
          <p>{userData.filter(v => v.goStatus).length}</p>
          <p>Away:</p>
          <p>{userData.filter(v => !v.goStatus).length}</p>
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
        {userData.map(getUserJsx)}
      </ul>
    </section>
  );
};

export default UserTable;