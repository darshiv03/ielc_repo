import React from 'react';
import "../CSS/Volunteer.css"

export default function Volunteer() {

    return (
        <div>
            <div class="volunteer-page-container">
            <div class="top-half">
                <h1 align="center">Join Our Mission</h1>
                <p class="top-half-p" align="center">IELC’s mission is to provide a more hands-on and interactive learning experience for students, rather than the lecture style lesson plans.</p>
                <input type="submit" class="sbm" value="Apply To Tutor"></input>
                <p align="center" class="deadline-1">Deadline to Apply:<br></br>April 2nd at 11:50 pm PST</p>
                <br></br>
                <h1 align="center">Benefits</h1>
                <ul>
                    <li class="volunteer-li">Contribute to Elementary Student Education</li>
                    <li class="volunteer-li">Gain Leadership Experience</li>
                    <li class="volunteer-li">Learn Effective Learning Strategies</li>
                    <li class="volunteer-li">Improve Organization Skills</li>
                    <li class="volunteer-li">Build Your Network</li>
                    <li class="volunteer-li">School Credit per Hour</li>
                    <li class="volunteer-li">Recommendation Letter</li>
                </ul>
                <h1 align="center">How It Works</h1>
                <h3 align="center" class="how-desc">Must be a high school or college student to apply</h3>
                <div class="apply">
                    <div class="box box-1">
                        <h1><div class="how-num">1</div>Apply</h1>
                        <p>Fill out the application form below and we'll notify you once you have been accepted.</p>
                    </div>
                    <div class="box box-sub">
                        <h1><div class="how-num">2</div>Apply</h1>
                        <p>Attend tutor training and leadership team meetings.<br></br>
                        Reviw lesson plans and mock practice key teaching strategies.</p>
                    </div>
                    <div class="box box-sub">
                        <h1><div class="how-num">3</div>Apply</h1>
                        <p>Attend tutor training and leadership team meetings.<br></br>Reviw lesson plans and mock practice key teaching strategies.</p>
                    </div>
                </div>
                <input type="submit" class="sbm" value="Submit Registration"></input>
                <p align="center" class="deadline">Deadline to Apply:<br></br>April 2nd at 11:50 pm PST</p>
                </div>

                <div class="intro">
                    <h3>Become A Tutor</h3>
                    <p>Fill out the form below to apply to be a tutor. Tutors must be a high school or college student and are available to teach 2 classes per week on <span class="duration">June 19th to August 7th</span>. <br></br>Our tutor application will close on <span class="duration">April 2nd at 11:59 pm PST. </span></p>
                    <b><h5 class="bolden">* = required</h5></b>
                </div>
                <div class="form-1">
                    <label>First Name <span class="asterix">*</span></label><br></br>
                    <input  class="text" type="text" value="Type here"></input><br></br><br></br>
                    <label>Last Name <span class="asterix">*</span></label><br></br>
                    <input class="text" type="text" value="Type here"></input><br></br><br></br>
                    <label>Email <span class="asterix">*</span></label><br></br>
                    <input class="text" type="text" value="Type here"></input><br></br><br></br>
                    <label>School <span class="asterix">*</span></label><br></br>
                    <input class="text" type="text" value="Type here"></input><br></br>
                    <h4 class="grade-level">Why do you want to be a tutor for the Interactive Elementary Learning Center? <span class="asterix">*</span></h4>
                    <textarea id="txtArea" rows="7" cols="18" value="Type here"></textarea>
                    <p align="right" class="deadline">0/300 words limit</p>

                    <h4 class="grade-level">Why do you want to be a tutor for the Interactive Elementary Learning Center? <span class="asterix">*</span></h4>
                    <textarea id="txtArea" rows="7" cols="18" value="Type here"></textarea>
                    <p align="right" class="deadline">0/300 words limit</p>


                    <h4 class="grade-level">Which grade level would you like to tutor?<span class="asterix">*</span></h4>
                    <input type="radio"></input>
                    <label class="label-color">Grade 1</label><br></br>
                    <input type="radio"></input>
                    <label class="label-color">Grade 2</label><br></br>
                    <input type="radio"></input>
                    <label class="label-color">Grade 3</label><br></br>
                    <input type="radio"></input>
                    <label class="label-color">Grade 4</label><br></br>
                    <input type="radio"></input>
                    <label class="label-color">Grade 5</label><br></br>
                    <input type="radio"></input>
                    <label class="label-color">No preference</label><br></br>
                </div>

                <h4 class="grade-level">Do you have any additional comments or questions?<br></br></h4>
                <textarea id="txtArea" rows="7" cols="35" value="Type here"></textarea>
                <input type="submit" class="sbm" value="Submit Registration"></input>
                <p align="center" class="deadline">Deadline to Apply:<br></br>April 2nd at 11:50 pm PST</p>
            </div>
        </div>
    )
}