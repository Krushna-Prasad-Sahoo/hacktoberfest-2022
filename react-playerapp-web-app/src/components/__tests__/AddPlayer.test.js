 
import AddPlayer from '../AddPlayer';
import toJson from 'enzyme-to-json';
import Enzyme, { shallow, render, mount } from 'enzyme';
xdescribe("Add Player Testing",()=>{
    const wrapper = shallow(<AddPlayer/>) 
it('renders correctly Addplayer', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('Must contain text field to accept playername',()=>{
      expect(wrapper.contains(
      <label for="playername">Player Name</label>
    )).toBeTruthy();
    
  }) 
  it('form must contain textfield with id matchesPlayed',()=>{
    expect(wrapper.find('input#matchesPlayed')).toBeTruthy();
  })
  it('form must contain a submit button with caption Add Player',()=>{
    expect(wrapper.contains(<button type="submit" class="btn btn-primary"  >Add Player</button>)).toBeTruthy();  
  })
  it('form must contain a textfield with id country',()=>{
      expect(wrapper.find('input#country')).toBeTruthy();
  })
  it('form must contain a textfield with id playername',()=>{
      expect(wrapper.find('input#playername')).toBeTruthy();
  })
//   it('should fail if no credentials are provided', () => {
//     const fakeEvent = { preventDefault: () => console.log('preventDefault') };

//     expect(wrapper.find('form#addplayer')).toBeTruthy();
//     wrapper.find('form').simulate('submit', fakeEvent);
//     // expect(wrapper.find(Notification).length).toBe(1);
// });
})
