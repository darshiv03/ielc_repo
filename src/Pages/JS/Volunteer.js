import React from 'react';
import "../CSS/Volunteer.css";
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
                            <p align="center" class="deadline-1">Deadline to Apply:<br></br>April 2nd at 11:50 pm PST</p>
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
                        <p>Attend tutor training and leadership team meetings.<br></br>Reviw lesson plans and mock practice key teaching strategies.</p>
                    </div>
                </div>
                <div class="submit-button">
                    <input type="submit" class="sbm" value="Apply To Tutor"></input>
                    <p align="center" class="deadline">Deadline to Apply:<br></br>April 2nd at 11:59 pm PST</p>
                </div>
                </div>
        </div>   

            <div class="become-a-tutor-container">
                <div class="intro">
                    <h3>Become A Tutor</h3>
                    <p>Fill out the form below to apply to be a tutor. Tutors must be a high school or college student and are available to teach 2 classes per week on <span class="duration">June 19th to August 7th</span>. <br></br>Our tutor application will close on <span class="duration">April 2nd at 11:59 pm PST. </span></p>
                    <b><h5 class="bolden">* = required</h5></b>
                </div>
                <div class="form-1">
                    <div class="labelinput">
                        <label>First Name <span class="asterix">*</span></label><br></br>
                        <input  class="text" type="text" value="Type here"></input><br></br><br></br>
                    </div>
                    <div class="labelinput">
                        <label>Last Name <span class="asterix">*</span></label><br></br>
                        <input class="text" type="text" value="Type here"></input><br></br><br></br>
                    </div>
                    <div class="labelinput">
                        <label>Email <span class="asterix">*</span></label><br></br>
                        <input class="text" type="text" value="Type here"></input><br></br><br></br>
                    </div>
                    <div class="labelinput">
                        <label>School <span class="asterix">*</span></label><br></br>
                        <input class="text" type="text" value="Type here"></input><br></br>
                    </div>
                    <h4 class="grade-level">Why do you want to be a tutor for the Interactive Elementary Learning Center? <span class="asterix">*</span></h4>
                    <textarea id="txtArea" rows="7" cols="18" value="Type here"></textarea>
                    <p align="right" class="deadline">0/300 words limit</p>

                    <h4 class="grade-level">What are your goals as a tutor? How will you go about achieving these goals? If you have any prior experience tutoring or working with younger students, please include that in your answer. <span class="asterix">*</span></h4>
                    <textarea id="txtArea" rows="7" cols="18" value="Type here"></textarea>
                    <p align="right" class="deadline">0/300 words limit</p>
                </div>
                <div class="gradeselect">
                    <h4 class="grade-level">Which grade level would you like to tutor?<span class="asterix">*</span></h4>
                    <h6 class="gray-select">Select only one</h6>
                </div>
                    <div class="grade-form">
                        <div class="labelinputgrade">
                            <input type="radio"></input>
                            <label class="label-color">Grade 1</label><br></br>
                        </div>
                        <div class="labelinputgrade">
                            <input type="radio"></input>
                            <label class="label-color">Grade 2</label><br></br>
                        </div>
                        <div class="labelinputgrade">
                            <input type="radio"></input>
                            <label class="label-color">Grade 3</label><br></br>
                        </div>
                        <div class="labelinputgrade">
                            <input type="radio"></input>
                            <label class="label-color">Grade 4</label><br></br>
                        </div>
                        <div class="labelinputgrade">
                            <input type="radio"></input>
                            <label class="label-color">Grade 5</label><br></br>
                        </div>
                        <div class="labelinputgrade">
                            <input type="radio"></input>
                            <label class="label-color">No preference</label><br></br>
                        </div>
                        </div>
                <div class="comments">
                    <h4 class="grade-level">Do you have any additional comments or questions?<br></br></h4>
                    <textarea id="txtArea" rows="7" cols="35" value="Type here"></textarea>
                    <div class="submit-vol">
                        <input type="submit" class="sbm" value="Submit Registration"></input>
                    </div>
                    <p align="center" class="deadline">Deadline to Apply:<br></br>April 2nd at 11:59 pm PST</p>
                </div>
            </div>
        </div>
    )
}