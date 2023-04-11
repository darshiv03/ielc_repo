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
            <li className='program-page-li' key={index}>{goal}</li>
        );
    });
    let otherGrades = [];
    for (let i = 0; i < programInfo.length; i++) {
        if (i !== gradeLevel - 1) {
            otherGrades.push(programInfo[i])
        }
    }
    const gradeButtons = otherGrades.map((grade, index) => {
        let c = grade.color;
        return (
            <button style = {{backgroundColor: c}}class="grade-button" key={index}>Grade {grade.grade}</button>
        );
    });
    return (
        <div>
            <img src={student_img} alt="Student raising their hand in classroom" class="program-page-image"/>
            <div class="component">
                <section class="program-header">
                    <h1 style={{color: props.color}} class="grade-text">Grade {gradeLevel}</h1>    
                    <h3 class="main-heading">{data.mainHeading}</h3>
                    <p class="p-medium">{data.description}</p>
                </section>
                <section class="goals">
                    <h2 class="goals-heading" style={{color: props.color}}>{data.subHeading}</h2>
                    <ul class="p-large program-page-ul">{goals}</ul>
                </section>
            </div>
            <section class="tutor-section" style={{backgroundColor: props.backgroundColor}}>
                <div class="tutor-header">
                    <div class="portrait"><img src={tutor_img} alt="Portrait of tutor Jane Rose"/></div>
                    <h3 class="tutorName" style={{color: props.color}}>Meet {data.tutorName}</h3>
                    <h4 class="tutorSchool">{data.tutorSchool}</h4>
                </div>
                <p class="p-medium bio">{data.tutorDescr}</p>
            </section>
            <section class="registration">
                <h3 class="slogan" style={{color: props.color}}>{data.slogan}</h3>
                <button style={{backgroundColor: props.color}}>{data.register_bttn}</button>
                <p class="deadline">{data.deadline}</p>
            </section>
            <section class="other-grades" style={{backgroundColor: props.backgroundColor}}>
                <h1 class="grade-heading">Our Other Grades</h1>
                <div class="grade-buttons">{gradeButtons}</div>
            </section>
        </div>
    )
}