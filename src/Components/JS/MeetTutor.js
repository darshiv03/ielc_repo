import React from 'react';
import "../CSS/MeetTutor.css";
import TutorTemplate from './TutorTemplate';

const data = [
    {
        img: "/user.png",
        name: "John Smith", 
        grade: "1"
    },
    {
        img: "/user.png",    
        name: "Jack rabbit",
        grade: "1"
    }, 
    {
        img: "/user.png",    
        name: "Jack rabbit",
        grade: "1"
    }, 
    {
        img: "/user.png",    
        name: "Jack rabbit",
        grade: "1"
    },
    {
        img: "/user.png",    
        name: "Jack rabbit",
        grade: "1"
    },


]
export default function MeetTutor() {

    return (
        <div className="body">
            < div className = "titleName">
                <h2>Meet Our Tutors</h2>
            </div>
            {data.map((person,index)=>{
                return (<TutorTemplate img = {person.img} name={person.name} grade={person.grade} key={index}> </TutorTemplate>)
            })}
        </div>

    )
}