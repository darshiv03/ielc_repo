import React from 'react';
import "../CSS/Tutor.css"
import Header from '../../Components/JS/Header';

export default function Tutor() {

    return (
        <div>
            <Header backgroundImage = "./tutor.png"></Header>
            <div class="become-a-tutor-container">
                <div class="intro">
                    <h3>Become A Tutor</h3>
                    <p>Fill out the form below to apply to be a tutor. Tutors must be a high school or college student and are available to teach 2 classes per week on <span class="duration">June 19th to August 7th</span>. <br></br>Our tutor application will close on <span class="duration">April 2nd at 11:59 pm PST. </span></p>
                    <b><h5 class="bolden">* = required</h5></b>
                </div>
                <div class="form-1">
                    <div class="labelinput">
                        <label>First Name <span class="asterix">*</span></label><br></br>
                        <input class="text input-register" type="text" value="Type here"></input><br></br><br></br>
                    </div>
                    <div class="labelinput">
                        <label>Last Name <span class="asterix">*</span></label><br></br>
                        <input class="text input-register" type="text" value="Type here"></input><br></br><br></br>
                    </div>
                    <div class="labelinput">
                        <label>Email <span class="asterix">*</span></label><br></br>
                        <input class="text input-register" type="text" value="Type here"></input><br></br><br></br>
                    </div>
                    <div class="labelinput">
                        <label>School <span class="asterix">*</span></label><br></br>
                        <input class="text input-register" type="text" value="Type here"></input><br></br>
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
                            <input class="input-register" type="radio"></input>
                            <label class="label-color">Grade 1</label><br></br>
                        </div>
                        <div class="labelinputgrade">
                            <input class="input-register" type="radio"></input>
                            <label class="label-color">Grade 2</label><br></br>
                        </div>
                        <div class="labelinputgrade">
                            <input class="input-register" type="radio"></input>
                            <label class="label-color">Grade 3</label><br></br>
                        </div>
                        <div class="labelinputgrade">
                            <input class="input-register" type="radio"></input>
                            <label class="label-color">Grade 4</label><br></br>
                        </div>
                        <div class="labelinputgrade">
                            <input class="input-register" type="radio"></input>
                            <label class="label-color">Grade 5</label><br></br>
                        </div>
                        <div class="labelinputgrade">
                            <input class="input-register" type="radio"></input>
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