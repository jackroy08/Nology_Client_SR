import React, { useContext, useEffect } from 'react';
import {navigate} from "@reach/router";
import {UserContext } from "../../context/userContext"

const SupervisorPrivateRoute = (props) => {
    const { children } = props;
    const { user } = useContext(UserContext);
    let pathway = children.props.location.pathname;
    

    useEffect(() => {
        const message = "You do not have permission to access this page";

            if (pathway === "/management" || pathway === "/admin") {
                if (user.userType !== "management" && user.userType !== "admin"){
                    alert(message);
                    navigate(`/${user.userType}`);
                };
            } else if (pathway === "/supervisor") {
                if (user.userType == "operator" || user.userType == "maintenance"){
                    alert(message);
                    navigate(`/${user.userType}`);
                };
            } else if (pathway === "/maintenance") {
                if (user.userType === "operator") {
                    alert(message);
                    navigate(`/${user.userType}`);
                }
            } else if (!user) {
                alert(message);
                    navigate(`/`);
            }
    }, [pathway]);

    return <>{children}</>;
}

export default SupervisorPrivateRoute;