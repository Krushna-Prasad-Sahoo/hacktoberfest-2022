import React, { Component } from 'react'
import {PlayerContext} from '../data/PlayerContext';
import axios from 'axios';
//import ShowPlayer from './ShowPlayer';
// import Player from '../../Players.json'
export default class AddPlayer extends Component {
      //  declare state with required properties
      constructor(props){
        super(props);
        this.state={
            pName:"",
            pCountry:"",
            matchPlayed:""
        }
      }
      static contextType = PlayerContext
     submitHandler = async (e)=>{
      e.preventDefault();
      const user = this.context
      let data = {
        name:this.state.pName,
        country:this.state.pCountry,
        matchesPlayed:this.state.matchPlayed
      }
      const res = await axios.post('http://localhost:3000/players', data);
      console.log(res);

      // user[0].push(data);
      // console.log("user1" , user)
      // return <ShowPlayer user={user[0]}/>
      window.location.href = "/showplayer"
      // this.props.history.push("/showplayer")
      }
    //  submitHandler(e){
      
    
    //   // declare and initialise players ,setPlayers from context 
    //   // use axios.post to send new player data to json api
    //   // and store the same to context also using setPlayer 

    //   // reset the text fields and show acknowledgement
      
    // }
    render() {

        return (
          <div>
             {/* display form to accept name,country and matchesPlayed  of a player */}
             <form onSubmit={this.submitHandler}>
               <div className='add'>
               <div>
            <input type="text" placeholder='playername' value={this.state.pName}  onChange={(e) => this.setState({pName:e.target.value})}/>
            </div>
            <div>

           
            <input type="text" placeholder='Country' value={this.state.pCountry} onChange={(e) => this.setState({pCountry:e.target.value})} />
            </div>

            <div>
            <input type="text" placeholder='matchPlayed' value={this.state.matchPlayed} onChange={(e) => this.setState({matchPlayed:e.target.value})} />
            </div>
            <div className='sub'>
            <button>Submit</button>
            </div>
            
            
            </div>
             </form>
            </div>
        )
    }
}
AddPlayer.contextType=PlayerContext;
