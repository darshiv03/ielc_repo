import React from 'react';
import { useParams } from 'react-router-dom';
import "../CSS/Program.css"
import student_img from './student-class.jpeg'
import tutor_img from './tutor-portrait.jpg'
import programInfo from '../../data/programInfo'




export default function Program(props) {
    // Get the gradeLevel param from the URL.
    let { gradeLevel } = useParams();

    const data = programInfo[gradeLevel - 1];

    const goals = data.learningGoals.map((goal, index) => {
        return (
            <li key={index}>{goal}</li>
        );
    });

    return (
        <div>
            <img src={student_img} alt="Student raising their hand in classroom" class="image"/>
            <section class="program-header">
                <h1 style={{color: props.color}}>Grade {gradeLevel}</h1>
                <h3>{data.mainHeading}</h3>
                <p class="p-medium">{data.description}</p>
            </section>
            <section class="goals">
                <h2 class="goals-heading" style={{color: props.color}}>{data.subHeading}</h2>
                <ul class="p-large">{goals}</ul>
            </section>
            <section class="tutor-section" style={{backgroundColor: props.backgroundColor}}>
                <div class="tutor-header">
                    <div class="portrait"><img src={tutor_img} alt="Portrait of tutor Jane Rose"/></div>
                    <h3 style={{color: props.colo}}>Meet {data.tutorName}</h3>
                    <h4 class="tutorSchool">{data.tutorSchool}</h4>
                </div>
                <p class="p-medium">{data.tutorDescr}</p>
            </section>
            <section class="registration">
                <h3 style={{color: props.color}}>{data.slogan}</h3>
                <button style={{backgroundColor: props.color}}>{data.register_bttn}</button>
                <p class="deadline">{data.deadline}</p>
            </section>
        </div>
    )

}