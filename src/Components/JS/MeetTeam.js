import React from 'react';
import "../CSS/MeetTeam.css";
import TeamTemplate from './TeamTemplate';

const data = [
    {
        img: "/user.png",
        name: "John Smith", 
        position: "Mentor"
    },
    {
        img: "/user.png",    
        name: "Jack rabbit",
        position: "Teacher"
    }, 
    {
        img: "/user.png",    
        name: "Jack rabbit",
        position: "Teacher"
    }, 
    {
        img: "/user.png",    
        name: "Jack rabbit",
        position: "Teacher"
    },
    {
        img: "/user.png",    
        name: "Jack rabbit",
        position: "Teacher"
    },
    {
        img: "/user.png",    
        name: "Jack rabbit",
        position: "Teacher"
    }


]
export default function MeetTeam() {

    return (
        <div className="meet-team-body">
            < div className = "title">
                <h2>Our Team</h2>
                <p>Lorem Ipsum</p>
            </div>
            {data.map((person,index)=>{
                return (<TeamTemplate img = {person.img} name={person.name} position={person.position} key={index}> </TeamTemplate>)
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