import React from 'react';

const Selected = (props) => {
     const {name,salary} = props.team;
     
     
   
    return (
        
        <div className="selected">

            <h4>Player-Name: {name}</h4>
            <p>Salary : {salary}</p>
        </div>
    );
};

export default Selected;
