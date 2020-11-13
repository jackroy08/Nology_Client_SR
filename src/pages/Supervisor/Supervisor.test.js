import React, {createContext} from "react";
import Supervisor from "./Supervisor";
import { shallow } from 'enzyme';

describe("Supervisor tests", () => {
    let UserContext;
    let testComponent;
    let testContext;

    beforeEach(() => {
        UserContext = createContext({});
        testContext = {
            assignedVehicle: "Test Vehicle",
            authID: "authID",
            currentSubTeam: "Test Sub Team",
            currentTeam: "Test Team",
            fullNameStr: "TestName",
            isOnShift: true,
            password: "testPassword",
            userID: "testUserID",
            userType: "testUserType",
        }
        testComponent = shallow(<UserContext.Provider value={testContext}>< Supervisor/></UserContext.Provider>);
    })

    it('should render', () => {
        expect(testComponent).toBeTruthy();
    })

    it('should render',)
});
