import React, { useEffect, useState } from 'react';
import './Player.css';
import data from '../../data/data.json';
import Bio from '../Bio/Bio';
import Team from '../Team/Team';
const Player = () => {
    const [players,setPlayers] = useState([]);
    
  useEffect(()=>{
      setPlayers(data);

  },[]);
  const [totalPlayer,setTotalPlayer] = useState([]);
  const addFunctionality = (information) =>{
      
      const newTotal = [...totalPlayer,information];
      
      setTotalPlayer(newTotal);

  }  
    
    return (
        <div className ="player-details"> 

           <div className="Bio-container">
                {
                    players.map(player=><Bio player={player} addFunctionality={addFunctionality}></Bio>)
                }
           </div>
           <div className="team-container">
                <Team newTotal={totalPlayer}></Team>
           </div>
                
           
        </div>
        
    );
};

export default Player;