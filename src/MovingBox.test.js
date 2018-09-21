import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, configure, mount  } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import MovingBox from './MovingBox';
configure({ adapter: new Adapter() });

const setup = () => shallow(<MovingBox />);

describe("MovingBox", () => {
    it('MovingBox Component should be rendered', () => {
      const wrapper = setup();
      expect(wrapper).toBeDefined();
    });

    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<MovingBox />, div);
    });

    it("renders a h1", () => {
      const wrapper = setup();
      const h1 = wrapper.find("h1");
      expect(h1.text()).toEqual("The Moving Box Problem");
    });

    it("ComponentDidMount function to be called", () => {
      const wrapper = setup();
      wrapper.instance().componentDidMount();
      expect(wrapper.find('componentDidMount')).toBeDefined();

    });

    it("moveRight function to be called", () => {
        const wrapper = setup();
        expect(wrapper.find('moveRight')).toBeDefined();
    });
    
    it("componentWillUnmount function to be called", () => {
        const wrapper = setup();
        wrapper.instance().componentWillUnmount();
    });

    it("reset function to be called", () => {
        const wrapper = mount(<MovingBox />);
        let boxIfo = wrapper.ref('movable_box');
        boxIfo = {offsetLeft:1,style:{left:0,top:0}};
        wrapper.instance().reset();
    });

    it("moveDown function to be called", () => {
        const wrapper = mount(<MovingBox />);
        let boxIfo = wrapper.ref('movable_box');
        boxIfo = {offsetLeft:1,style:{left:0,top:0}};
        wrapper.instance().moveDown();
    });

    it("moveUp function to be called", () => {
        const wrapper = mount(<MovingBox />);
        let boxIfo = wrapper.ref('movable_box');
        boxIfo = {offsetLeft:1,style:{left:0,top:0}};
        wrapper.instance().moveUp();
    });

    it("moveLeft function to be called", () => {
        const wrapper = mount(<MovingBox />);
        let boxIfo = wrapper.ref('movable_box');
        boxIfo = {offsetLeft:1,style:{left:0,top:0}};
        wrapper.instance().moveLeft();
    });

     it("moveRight function to be called", () => {
        const wrapper = mount(<MovingBox />);
        let boxIfo = wrapper.ref('movable_box');
        boxIfo = {offsetLeft:1,style:{left:0,top:0}};
        wrapper.instance().moveRight();
    });

    it("click function to be called", () => {
        const wrapper = mount(<MovingBox />);
        wrapper.find('#Arrow_right').simulate('click');
        wrapper.find('#Arrow_left').simulate('click');
        wrapper.find('#Arrow_up').simulate('click');
        wrapper.find('#Arrow_down').simulate('click');
        wrapper.find('#Reset').simulate('click');
    });
});

