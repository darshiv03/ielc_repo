import React from 'react';
import { useParams } from 'react-router-dom';
import "../CSS/Program.css"
import student_img from './student-program-img.jpeg'

import programInfo from '../../data/programInfo'


export default function Program() {
    // Get the gradeLevel param from the URL.
    let { gradeLevel } = useParams();

    const data = programInfo[gradeLevel - 1];

    return (
        <img src={student_img} alt="Student raising hand in classroom" width="100%" height="auto"/>
    )
}