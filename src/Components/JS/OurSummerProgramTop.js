import React from 'react';
import { useParams } from 'react-router-dom';
import "../CSS/OurSummerProgramTop.css"
import Buttons from './Button';
import programInfo from '../../data/programInfo'


export default function Program() {
    // Get the gradeLevel param from the URL.
    let { gradeLevel } = useParams();

    const data = programInfo[gradeLevel - 1];

    return (
        <div class="all">
            <div class="image-1">
                <img src="/programs1.png"></img>
                <h1 class="image-text">Our Summer <br></br>
                    Program 2023</h1>
                <p class="image-subtext">7 weeks • 2 Hours per Week</p>
            </div>
            <div class = "our-summer-page-top-text-container">
                <div class="text">
                    <div class="column">
                        <h3>Designed to prepare & reinforce literacy concepts.</h3>
                        <p>Our tutors prepare students from grades 1 to 5 with reading comprehension and grammar skills in accordance with the Common Core Standards in 60-minute sessions conducted over Zoom.</p>
                    </div>
                    <div class="column">
                        <h3>Our Interactive
                            Learning Culture</h3>
                        <p>Through our 7-week program, we encourage curiosity, engagement, and academic excellence. We create an active learning environment through our interactive activities. We are dedicated to creating a supportive and inclusive environment where students can thrive and unlock their full potential.</p>
                    </div>
                </div>
                <div class="save-spot">
                    <div class="button-wrapper">
                        <button>Save your Free Spot</button>
                    </div>
                    <h3 class="red">Starts June 19, 2023</h3>
                </div>
            </div>
            <div class="grade-finder">
                <img src="/grade-finder-icon.png"></img>
                <h1>Find Your Grade</h1>
                <div class="button-wrapper">
                    <Buttons type = "grade1">Grade 1</Buttons>
                    <Buttons type = "grade2">Grade 2</Buttons>
                    <Buttons type = "grade3">Grade 3</Buttons>
                    <Buttons type = "grade4">Grade 4</Buttons>
                    <Buttons type = "grade5">Grade 5</Buttons>
                </div>
            </div>
            <img src="/programs2.png" className = "image-2"></img>
            <div class="our-summer-page-bottom-text-container">
                <h3>Our Interactive<br></br>
                    Learning Culture</h3>
                <p>Through our 7-week program, we encourage curiosity, engagement, and academic excellence. We create an active learning environment through our interactive activities. We are dedicated to creating a supportive and inclusive environment where students can thrive and unlock their full potential.</p>
            </div>
            </div>
    )
}