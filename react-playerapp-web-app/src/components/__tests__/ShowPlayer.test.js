
import toJson from 'enzyme-to-json';
import {useContext} from 'react';
import Enzyme, { shallow, render, mount } from 'enzyme';
import ShowPlayer from '../ShowPlayer';
xdescribe("Show Player Testing",()=>{
    const wrapper = shallow(<ShowPlayer/>) 
it('renders correctly Showplayer', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
   
    
})