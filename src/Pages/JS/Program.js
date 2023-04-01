import React from 'react';
import { useParams } from 'react-router-dom';
import "../CSS/Program.css"
import student_img from './student-class.jpeg'
import tutor_img from './tutor-portrait.jpg'
import programInfo from '../../data/programInfo'




export default function Program() {
    // Get the gradeLevel param from the URL.
    let { gradeLevel } = useParams();

    const data = programInfo[gradeLevel - 1];

    const goals = data.learningGoals.map((goal) => {
        return (
            <li>{goal}</li>
        );
    });

    return (
        <div>
            <img src={student_img} alt="Student raising their hand in classroom" class="image"/>
            <div class="page-content">
                <h1>Grade {gradeLevel}</h1>
                <h3>{data.mainHeading}</h3>
                <p class="p-medium">{data.description}</p>
                <h2 class="goals-heading">{data.subHeading}</h2>
                <ul class="p-large">{goals}</ul>
                <div class="tutor-header">
                    <div class="portrait"><img src={tutor_img} alt="Portrait of tutor Jane Rose"/></div>
                    <h3>Meet {data.tutorName}</h3>
                    <h4>{data.tutorSchool}</h4>
                </div>
                <p class="p-medium">{data.tutorDescr}</p>
                <h3>{data.slogan}</h3>
                <button>{data.register_bttn}</button>
                <p class="deadline">{data.deadline}</p>
                </div>
        </div>
    )

}