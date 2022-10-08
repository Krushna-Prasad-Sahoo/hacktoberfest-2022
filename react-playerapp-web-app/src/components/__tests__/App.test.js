 
import  App from '../../App'
import toJson from 'enzyme-to-json';
import{Route} from 'react-router-dom';
import Header from '../Header';
import Enzyme, { shallow, render, mount } from 'enzyme';
xdescribe("App testing",()=>{
  const wrapper = shallow(<App/>) 
it('renders correctly App', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('contains Route /', () => {                                       
    expect(wrapper.find(Route).at(0).props().path).toEqual('/');
   });
   it('contains Route /AddPlayer', () => {                                       
    expect(wrapper.find(Route).at(1).props().path).toEqual('/AddPlayer');
   });
   it('contains Route /ShowPlayer', () => {                                       
    expect(wrapper.find(Route).at(2).props().path).toEqual('/ShowPlayer');
   });
   it('contains Route /ShowPlayer', () => {                                       
    expect(wrapper.contains(<Header text="PlayerApp"/>)).toBeTruthy();
   });
})
