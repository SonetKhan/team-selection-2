import React from 'react';
import './Bio.css';

const Bio = (props) => {
    const {name,age,position,salary,src} = props.player;
    return (
        <div className="player-details">

                <div className="img">

                    <img src={src} alt="not found"/>

                    </div>
            
                    <div className="details">
                        <h2>Name: {name}</h2>
                        <p>Position: {position}</p>
                        <p>Age: {age}</p>
                        
                        <p>Salary: {salary}</p>
                        <button className="button" onClick={()=>props.addFunctionality(props.player)}>Add+</button>
                        
                    </div>
        </div>
    );
};

export default Bio;