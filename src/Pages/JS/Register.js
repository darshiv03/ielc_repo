import React from 'react';
import "../CSS/Register.css"

export default function Register() {

    return (
        <div>
            <div class="register-page-container">
                <div class="intro">
                    <h3>Register A Student</h3>
                    <p>Fill out the form below to register a student. Once the student is registered, we will be sending our schedule to parents. <br></br>
                    Our program will take place from <span class="duration">June 19th to August 7th</span>, and include 2 classes per week excluding holidays.</p>
                    <b><h5 class="bolden">* = required</h5></b>
                </div>
                <div class="form-1">
                    <label>Student Name <span class="asterix">*</span></label><br></br>
                    <input  class="text" type="text" value="Type here"></input><br></br><br></br>
                    <label>Parent Name <span class="asterix">*</span></label><br></br>
                    <input class="text" type="text" value="Type here"></input><br></br><br></br>
                    <label>Parent email <span class="asterix">*</span></label><br></br>
                    <input class="text" type="text" value="Type here"></input><br></br><br></br>
                    <label>Parent Phone Number <span class="asterix">*</span></label><br></br>
                    <input class="text" type="text" value="Type here"></input><br></br>
                    
                    <h4 class="grade-level">Which grade level will the student be going to in the following school year?<span class="asterix">*</span></h4>
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

                    <h4 class="grade-level">Which group would the student like to join? <span class="asterix">*</span></h4>
                    <h5 class="group">Students can join the lessons for any grade level. They can review concepts from the grade they just completed or they can get a head start by joining the next grade level group.</h5>
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
                            <br></br>
                </div>
                <h4 class="grade-level">Do you have any additional comments or questions?<br></br></h4>
                <textarea id="txtArea" rows="7" cols="35" value="Type here"></textarea>
                <input type="submit" class="sbm" value="Submit Registration"></input>
                <p align="center" class="deadline">Deadline to Apply:<br></br>April 2nd at 11:50 pm PST</p>
            </div>
        </div>
    )
}