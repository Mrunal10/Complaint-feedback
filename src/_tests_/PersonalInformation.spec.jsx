
import React from 'react';
import PersonalInformation from '../components/PersonalInformation'
import * as router from 'react-router'
import { shallow, configure } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
describe('PersonalInformation', () => {

    const navigate = jest.fn()
    const location = jest.fn()
    beforeEach(() => {
        jest.spyOn(router, 'useNavigate').mockImplementation(() => navigate)
        jest.spyOn(router, 'useLocation').mockImplementation(() => location)
    })

    it("renders correctly", () => {
        shallow(<PersonalInformation />);
    });
    
    it("includes ten input elements", () => {
        const wrapper = shallow(<PersonalInformation />);
        expect(wrapper.find("input").length).toEqual(10);
    });

    it("includes three select elements", () => {
        const wrapper = shallow(<PersonalInformation />);
        expect(wrapper.find("select").length).toEqual(4);
    });

    it("includes one button element", () => {
        const wrapper = shallow(<PersonalInformation />);
        expect(wrapper.find("button").length).toEqual(1);
    });

    
    it("includes updates fly number on change input", () => {
        const wrapper = shallow(<PersonalInformation />);
        wrapper.find('input').at(0).simulate("change", { target: { value: "TestFlyNumber" }})
        expect(wrapper.find('input').at(0).prop('defaultValue')).toBe('TestFlyNumber');
    });

    it("includes updates firstname on change input", () => {
        const wrapper = shallow(<PersonalInformation />);
        wrapper.find('input').at(1).simulate("change", { target: { value: "TestFirstName" }})
        expect(wrapper.find('input').at(1).prop('defaultValue')).toBe('TestFirstName');
    });
    it("includes updates middlename on change input", () => {
        const wrapper = shallow(<PersonalInformation />);
        wrapper.find('input').at(2).simulate("change", { target: { value: "TestMiddleName" }})
        expect(wrapper.find('input').at(2).prop('defaultValue')).toBe('TestMiddleName');
    });

    it("includes updates middlename on change input", () => {
        const wrapper = shallow(<PersonalInformation />);
        wrapper.find('input').at(3).simulate("change", { target: { value: "TestMiddleName" }})
        expect(wrapper.find('input').at(3).prop('defaultValue')).toBe('TestMiddleName');
    });

    it("includes updates lastname on change input", () => {
        const wrapper = shallow(<PersonalInformation />);
        wrapper.find('input').at(4).simulate("change", { target: { value: "TestLastName" }})
        expect(wrapper.find('input').at(4).prop('defaultValue')).toBe('TestLastName');
    });
    it("includes updates phonenumber on change input", () => {
        const wrapper = shallow(<PersonalInformation />);
        wrapper.find('input').at(5).simulate("change", { target: { value: "TestPhoneNumber" }})
        expect(wrapper.find('input').at(5).prop('defaultValue')).toBe('TestPhoneNumber');
    });
    it("includes updates address1 on change input", () => {
        const wrapper = shallow(<PersonalInformation />);
        wrapper.find('input').at(6).simulate("change", { target: { value: "TestAddress1" }})
        expect(wrapper.find('input').at(6).prop('defaultValue')).toBe('TestAddress1');
    });
    it("includes updates address2 on change input", () => {
        const wrapper = shallow(<PersonalInformation />);
        wrapper.find('input').at(7).simulate("change", { target: { value: "TestAddress6" }})
        expect(wrapper.find('input').at(7).prop('defaultValue')).toBe('TestAddress6');
    });

    it("includes updates city on change input", () => {
        const wrapper = shallow(<PersonalInformation />);
        wrapper.find('input').at(8).simulate("change", { target: { value: "City" }})
        expect(wrapper.find('input').at(8).prop('defaultValue')).toBe('City');
    });
    it("includes updates postalcode on change input", () => {
        const wrapper = shallow(<PersonalInformation />);
        wrapper.find('input').at(9).simulate("change", { target: { value: "Postalcode" }})
        expect(wrapper.find('input').at(9).prop('defaultValue')).toBe('Postalcode');
    });

   
    



    it("should update state on click", () => {
       /* const navigateToComment = jest.fn();
        const wrapper = shallow(<PersonalInformation onSubmit={navigateToComment} />);
        const handleClick = jest.spyOn(React, "useState");
        handleClick.mockImplementation(size => [size, navigateToComment]);*/
        const wrapper = shallow(<PersonalInformation />);
        wrapper.find("button").simulate("click");
       
     //   expect(wrapper.find('label').at(0).textContent).toBe("Fly Number can't be Empty");
      //  expect(navigate).toHaveBeenCalledWith('/comment');
       // expect(navigateToComment).toBeCalled();
      });

})
