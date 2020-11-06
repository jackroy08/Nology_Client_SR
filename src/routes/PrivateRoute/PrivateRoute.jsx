import React, { useContext, useEffect } from 'react';
import {navigate} from "@reach/router";
import {UserContext } from "../../context/userContext"

const SupervisorPrivateRoute = (props) => {
    const { children } = props;
    const { user } = useContext(UserContext);
    let pathway = children.props.location.pathname;
    

    useEffect(() => {
        console.log(user.userType);
        console.log(pathway);

            if (pathway === "/management" || pathway === "/admin") {
                if (user.userType !== "management" && user.userType !== "admin"){
                    alert(
                        "You do not have permission to access this page"
                    );
                    navigate(`/${user.userType}`);
                };
            } else if (pathway === "/supervisor") {
                if (user.userType == "operator" || user.userType == "maintenance"){
                    alert(
                        "You do not have permission to access this page"
                    );
                    navigate(`/${user.userType}`);
                };
            } else if (pathway === "/maintenance") {
                if (user.userType === "operator") {
                    alert(
                        "You do not have permission to view this page"
                    );
                    navigate(`/${user.userType}`);
                }
            }
            // } else if (!user.userType) {
            //     alert(
            //             "You do not have permission to view this page"
            //         );
            //         navigate(`/`);
            // }
    }, [pathway]);

    return <>{children}</>;
}

export default SupervisorPrivateRoute;