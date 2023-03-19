import React from 'react';
import "../CSS/MeetTeam.css";
import PersonTemplate from './PersonTemplate';

const data = [
    {
        name: "John Smith", 
        position: "Mentor"
    },
    {
        name: "Jack rabbit",
        position: "Teacher"
    }
]
export default function MeetTeam() {

    return (
        <div className="body">
            < div className = "title">
                <h2>Our Team</h2>
                <p>Lorem Ipsum</p>
            </div>
            {data.map((person,index)=>{
                return (<PersonTemplate name={person.name} position={person.position} key={index}> </PersonTemplate>)
            })}
            

            
                

            {/* <div class = "card">
                <img src = "/user.png" alt="Logo" />
                <p className="p-medium">First Last</p>
                <p className="p-small-grey">Position</p>
                <div className="description">
                    <p className = "p-small">Leorem ipsum,</p>
                    <p className = "p-small">Leorem ipsum,</p>
                </div>
                
            </div> */}
        </div>

    )
}