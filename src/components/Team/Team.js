import React from 'react';
import Selected from '../Selected/Selected';

const Team = (props) => {
        const teams = props.newTotal;
        let totalSalary = 0;
        teams.map(element=>totalSalary += element.salary)
       
    return (
        <div className="final-team">
            <h2>Selected Player with total salary: </h2>
           
            {
                 teams.map(team=><Selected team={team}></Selected>)
            }
            
            
            <h1>Total salary :{totalSalary} </h1>
        </div>
    );
};

export default Team;