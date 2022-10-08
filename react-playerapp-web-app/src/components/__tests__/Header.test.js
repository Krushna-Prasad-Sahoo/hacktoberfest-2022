 
import Header from '../Header'
import{Link} from 'react-router-dom'
import toJson from 'enzyme-to-json';
import Enzyme, { shallow, render, mount } from 'enzyme';
describe("Header testing",()=>{
  const wrapper = shallow(<Header text='Playerapp' />) 
it('renders correctly Header', () => {   
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should have nav',()=>{
    expect(wrapper.contains(<Link class="navbar-brand" to="/">Playerapp</Link>)).toBeTruthy();
  })
  it('includes link AddPlayer', () => {                                       
    // const wrapper = shallow(<MemoryRouter><Home /></MemoryRouter>);
    // expect(wrapper.find('Link')[1].prop('to')).toEqual('/Showlayer');
    expect(wrapper.find(Link).last().props().to).toEqual('/ShowPlayer');
   });
   it('includes link AddPlayer', () => {                                       
    // const wrapper = shallow(<MemoryRouter><Home /></MemoryRouter>);
    // expect(wrapper.find('Link')[1].prop('to')).toEqual('/AddPlayer');
    expect(wrapper.find(Link).at(1).props().to).toEqual('/AddPlayer');
   });
   it('includes link AddPlayer', () => {                                       
    // const wrapper = shallow(<MemoryRouter><Home /></MemoryRouter>);
    // expect(wrapper.find('Link')[1].prop('to')).toEqual('/');
    expect(wrapper.find(Link).at(0).props().to).toEqual('/');
   });
})
