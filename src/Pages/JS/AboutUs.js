import React from 'react';
import "../CSS/AboutUs.css"
import MeetTeam from '../../Components/JS/MeetTeam';
import MeetTutor from '../../Components/JS/MeetTutor';
import Header from '../../Components/JS/Header';
import AboutUsDescription from '../../Components/JS/AboutUs_description';

export default function AboutUs() {

    return (
        <div>
            <Header backgroundImage = "./about_us.png"></Header>
            <AboutUsDescription></AboutUsDescription>
            <MeetTeam></MeetTeam>
            <MeetTutor></MeetTutor>
        </div>
    )
}