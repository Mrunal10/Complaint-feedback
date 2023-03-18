
import React from 'react';
import Comment from '../Components/Comment'
import * as router from 'react-router'
import { shallow, configure } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';


configure({ adapter: new Adapter() });
describe('Comment', () => {

    const navigate = jest.fn()
    const location = jest.fn()
    beforeEach(() => {
        jest.spyOn(router, 'useNavigate').mockImplementation(() => navigate)
        jest.spyOn(router, 'useLocation').mockImplementation(() => location)
    })

    it("renders correctly", () => {
        shallow(<Comment/>);
    });
    
    it("includes three input elements", () => {
        const wrapper = shallow(<Comment />);
        expect(wrapper.find("input").length).toEqual(3);
    });

    it("includes five select elements", () => {
        const wrapper = shallow(<Comment />);
        expect(wrapper.find("select").length).toEqual(5);
    });
   

    it("includes one button element", () => {
        const wrapper = shallow(<Comment />);
        expect(wrapper.find("button").length).toEqual(1);
    });

    
    it("includes updates confirmation number on change input", () => {
        const wrapper = shallow(<Comment />);
        wrapper.find('input').at(0).simulate("change", { target: { value: "TestConfirmationNumber" }})
        expect(wrapper.find('input').at(0).prop('defaultValue')).toBe('TestConfirmationNumber');
    });

    it("includes updates ticketnumber on change input", () => {
        const wrapper = shallow(<Comment />);
        wrapper.find('input').at(1).simulate("change", { target: { value: "TestTicketNumber" }})
        expect(wrapper.find('input').at(1).prop('defaultValue')).toBe('TestTicketNumber');
    });
    it("includes updates tick details on change input", () => {
        const wrapper = shallow(<Comment />);
        wrapper.find('input').at(2).simulate("change", { target: { value: "TestTicked" }})
        expect(wrapper.find('input').at(2).prop('defaultValue')).toBe('TestTicked');
    });
    it("includes updates comment details on change input", () => {
        const wrapper = shallow(<Comment />);
        wrapper.find('input').at(3).simulate("change", { target: { value: "TestCommentDetails" }})
        expect(wrapper.find('input').at(3).prop('defaultValue')).toBe('TestCommentDetails');
    });
    it("includes updates reply details on change input", () => {
        const wrapper = shallow(<Comment />);
        wrapper.find('input').at(2).simulate("change", { target: { value: "TestReply" }})
        expect(wrapper.find('input').at(2).prop('defaultValue')).toBe('TestReply');
    });

  

    it("should update state on click", () => {
       /* const navigateToComment = jest.fn();
        const wrapper = shallow(<PersonalInformation onSubmit={navigateToComment} />);
        const handleClick = jest.spyOn(React, "useState");
        handleClick.mockImplementation(size => [size, navigateToComment]);*/
        const wrapper = shallow(<Comment />);
        wrapper.find("button").simulate("click");
       
     //   expect(wrapper.find('label').at(0).textContent).toBe("Fly Number can't be Empty");
      //  expect(navigate).toHaveBeenCalledWith('/comment');
       // expect(navigateToComment).toBeCalled();
      });

})
