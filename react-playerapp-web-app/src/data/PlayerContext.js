import React,{useState,createContext,useEffect} from 'react' 
import axios from 'axios';
export const PlayerContext=createContext();
export const PlayerProvider=(props) =>{
     
    // declare the player hook here
    const [players , setPlayers] = useState([]);
     
        useEffect(()=>{
            // initialise player array using axios get method from json file
            // using json server api
        });
    
    return (
        <PlayerContext.Provider value={[players,setPlayers]}>
            { props.children}
        </PlayerContext.Provider>
    )
}
