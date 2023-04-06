import React from 'react';
import "../CSS/AboutUs.css"
import MeetTeam from '../../Components/JS/MeetTeam';
import MeetTutor from '../../Components/JS/MeetTutor';
import Header from '../../Components/JS/Header';

export default function AboutUs() {

    return (
        <div>
            <Header backgroundImage = "./about_us.png"></Header>
            <MeetTeam></MeetTeam>
            <MeetTutor></MeetTutor>
        </div>
    )
}