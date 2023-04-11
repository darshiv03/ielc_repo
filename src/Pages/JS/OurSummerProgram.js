import React from 'react';
import Header from '../../Components/JS/Header';
import OurSummerProgramsBottom from '../../Components/JS/OurSummerProgramsBottom';
import "../CSS/Register.css"

export default function OurSummerProgram() {

    return (
        <div>
            <Header backgroundImage = "./programs.jpg"></Header>
            <OurSummerProgramsBottom/>
        </div>
    )
}