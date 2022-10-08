import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import AddPlayer from './components/AddPlayer';
// import { useState, createContext, useContext } from "react";
// import { PlayerContext } from './data/PlayerContext';
import {
  BrowserRouter,
  Routes,
  Route,
 } from 'react-router-dom';
import ShowPlayer from './components/ShowPlayer';
function App() {
  // const user = useContext(PlayerContext);
  // console.log(user);
  return (
    <div className="App">
     {/* <Header/> */}
      <BrowserRouter>
      <Routes>
       <Route path="/" element={<Header/>} />
       <Route path="/addplayer" element={<AddPlayer/>} />
      <Route path="/showplayer" element={<ShowPlayer/> } />
      </Routes>
        
       </BrowserRouter>
    </div>
  );
}

export default App;
