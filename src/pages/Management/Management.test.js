import React from "react";
import Management from "./Management";
import { shallow } from 'enzyme';
import SideNav from "../../components/SideNav";
import TeamFeed from "./TeamFeed";
import VehicleFeed from "./VehicleFeed";
import ManagementSummary from "./ManagementSummary";
// import { iteratee } from "lodash";

describe("Management tests", () => {
    let component;

    beforeEach(() => {
        component = shallow(<Management />);
        })
        
        it('should render', () => {
            expect(component).toBeTruthy();
        })

        
        it('renders a <SideNav /> component', () => {
            expect(component.find(SideNav)).toHaveLength(1);
            });

        it('renders a <TeamFeed /> component', () => {
            expect(component.find(TeamFeed)).toHaveLength(1);
        })

        it('renders a <VehicleFeed /> component', () => {
            expect(component.find(VehicleFeed)).toHaveLength(1)
        })

        it('renders a <ManagementSummary /> component', () => {
            expect(component.find(ManagementSummary)).toHaveLength(1);
        })

        


});