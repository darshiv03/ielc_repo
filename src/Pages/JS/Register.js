import React from 'react';
import "../CSS/Register.css"
import Header from '../../Components/JS/Header';

export default function Register() {

    return (
        <div>
            <Header backgroundImage = "./programs.jpg"></Header>
            <div class="register-page-container">
                <div class="intro">
                    <h3>Register A Student</h3>
                    <p>Fill out the form below to register a student. Once the student is registered, we will be sending our schedule to parents. <br></br>
                    Our program will take place from <span class="duration">June 19th to August 7th</span>, and include 2 classes per week excluding holidays.</p>
                    <b><h5 class="bolden">* = required</h5></b>
                </div>
                <div class="form-1">
                <div class="labelinput">
                        <label>Student Name <span class="asterix">*</span></label><br></br>
                        <input class="text input-register" type="text" value="Type here"></input><br></br><br></br>
                    </div>
                    <div class="labelinput">
                        <label>Parent Name <span class="asterix">*</span></label><br></br>
                        <input class="text input-register" type="text" value="Type here"></input><br></br><br></br>
                    </div>
                    <div class="labelinput">
                        <label>Parent Email <span class="asterix">*</span></label><br></br>
                        <input class="text input-register" type="text" value="Type here"></input><br></br><br></br>
                    </div>
                    <div class="labelinput">
                        <label>Parent Phone Number <span class="asterix">*</span></label><br></br>
                        <input class="text input-register" type="text" value="Type here"></input><br></br>
                    </div>
                </div>
                    
                <div class="gradeselect">
                    <h4 class="grade-level">Which grade level will the student be going to in the following school year?<span class="asterix">*</span></h4>
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
                        </div>
                    

                        <div class="gradeselect">
                    <h4 class="grade-level">Which group would the student like to join?<span class="asterix">*</span></h4>
                    <h6 class="gray-select">Students can join the lessons for any grade level. They can review concepts from the grade they just completed or they can get a head start by joining the next grade level group.
</h6>
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