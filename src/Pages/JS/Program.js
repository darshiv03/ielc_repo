import React from 'react';
import { useParams } from 'react-router-dom';
import "../CSS/Program.css"
import student_img from './student-class.jpeg'
import programInfo from '../../data/programInfo'


export default function Program() {
    // Get the gradeLevel param from the URL.
    let { gradeLevel } = useParams();

    const data = programInfo[gradeLevel - 1];

    return (
        <div>
        <img src={student_img} alt="Student raising their hand in classroom" class="image"/>
        <h1>Grade {gradeLevel}</h1>
        <div>test {heading}</div>
        </div>
    )

}