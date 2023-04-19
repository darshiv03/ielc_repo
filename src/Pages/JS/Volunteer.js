import React from 'react';
import "../CSS/Volunteer.css"


export default function Volunteer() {

    return (
        <div>
            <div class="volunteer-page-container">
                <div class="top-half">
                    <div class="mob-top">
                        <div class="mission">
                            <h1 align="center">Join Our Mission</h1>
                            <p class="top-half-p" align="center">IELC’s mission is to provide a more hands-on and interactive learning experience for students, rather than the lecture style lesson plans.</p>
                            <div class="app-tut">
                                <input type="submit" class="sbm" value="Apply To Tutor"></input>
                                <p align="center" class="deadline-1">Deadline to Apply:<br></br>April 2nd at 11:59 pm PST</p>
                            </div>
                            <br></br>
                        </div>

                        <div class="benifits">
                            <h1 align="center">Benefits</h1>
                            <ul class="volunteer-ul">
                                <li class="volunteer-li">Contribute to Elementary Student Education</li>
                                <li class="volunteer-li">Gain  Leadership Experience</li>
                                <li class="volunteer-li">Learn Effective Learning Strategies</li>
                                <li class="volunteer-li">Improve Organization Skills</li>
                                <li class="volunteer-li">Build Your Network</li>
                                <li class="volunteer-li">School Credit per Hour</li>
                                <li class="volunteer-li">Recommendation Letter</li>
                            </ul>
                        </div>
                    </div>

                    <h1 class="how-it-works" align="center">How It Works</h1>
                    <h3 align="center" class="how-desc">Must be a high school or college student to apply</h3>

                    <div class="apply">
                        <div class="box box-1">
                            <h1><div class="how-num">1</div><span class="desk-h1">Apply</span></h1>
                            <p>Fill out the application form below and we'll notify you once you have been accepted.</p>
                        </div>
                        <div class="box box-sub">
                            <h1><div class="how-num">2</div><span class="desk-h1">Prep</span></h1>
                            <p>Attend tutor training and leadership team meetings.<br></br>
                            Reviw lesson plans and mock practice key teaching strategies.</p>
                        </div>
                        <div class="box box-sub">
                            <h1><div class="how-num">3</div><span class="desk-h1">Tutor</span></h1>
                            <p>Teach small groups of students via Zoom twice a week for 7 weeks during the summer.</p>
                        </div>
                    </div>
                    <div class="submit-button">
                        <input type="submit" class="sbm" value="Apply To Tutor"></input>
                        <p align="center" class="deadline">Deadline to Apply:<br></br>April 2nd at 11:59 pm PST</p>
                    </div>
                </div>
            </div>            
        </div>
    )
}