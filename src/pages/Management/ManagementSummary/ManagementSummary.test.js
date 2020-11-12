import React from "react";
import ManagementSummary from "./ManagementSummary";
import { shallow } from 'enzyme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



describe("ManagementSummary tests", () => {
    let component;

    beforeEach(() => {
        component = shallow(<ManagementSummary />);
    })

    it('should render', () => {
        expect(component).toBeTruthy();
    })

    it('renders a FontAwesomeIcon', () => {
        expect(component.find(FontAwesomeIcon)).toHaveLength[3];
    })

    it('renders a section container', () => {
        expect(component.find(<section></section>)).toHaveLength[3];
    })

    it('renders a h1 tag', () => {
        expect(component.find(<h1></h1>)).toHaveLength[3];
    })

})