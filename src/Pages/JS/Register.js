import React from 'react';
import "../CSS/Register.css"

export default function Register() {

    return (
        <div>
            <div class="container">
                <div class="intro">
                    <h3 align="center">Register A Student</h3>
                    <h5 align="center">Fill out the form below to register a student. Once the student is registered, we will be sending our schedule to parents. <br></br>Our program will take place from june 19th to August 7th, and include 2 classes per week excluding holidays.</h5>
                    <b><h5 class="bolden" align="center">* = required</h5></b>
                </div>
                <div class="form-1">
                    <label>Student Name *</label><br></br>
                    <input  class="text" type="text"></input><br></br>
                    <label>Parent Name *</label><br></br>
                    <input class="text" type="text"></input><br></br>
                    <label>Parent Email *</label><br></br>
                    <input class="text" type="text"></input><br></br>
                    <label>Parent Phone Number *</label><br></br>
                    <input class="text" type="text"></input><br></br>
                    <h4 class="grade-level">Which grade level will the student be going to in the following school year?*</h4><br></br>
                    <input type="radio"></input>
                    <label>Grade 1</label><br></br>
                    <input type="radio"></input>
                    <label>Grade 2</label><br></br>
                    <input type="radio"></input>
                    <label>Grade 3</label><br></br>
                    <input type="radio"></input>
                    <label>Grade 4</label><br></br>
                    <input type="radio"></input>
                    <label>Grade 5</label><br></br>
                    <input type="radio"></input>
                    <label>Grade 6</label><br></br>
                    <h4 class="group">Which group would the student like to join? *</h4>
                    <h5 class="group">Students can join the lessons for any grade level. They can relearn concepts from the grade they just completed. They can get a head start by joining the next grade level group.</h5>
                    <div class="options-box">
                        <div class="column1">
                            <input type="radio"></input>
                            <label>Grade 1</label><br></br>
                            <input type="radio"></input>
                            <label>Grade 2</label><br></br>
                            <input type="radio"></input>
                            <label>Grade 3</label>
                        </div>
                        <div class="column2">
                            <input type="radio"></input>
                            <label>Grade 4</label><br></br>
                            <input type="radio"></input>
                            <label>Grade 5</label><br></br>
                            <br></br>
                        </div>
                    </div>
                    </div>
                    <h4 class="group">Do you have any additional comments or questions?<br></br></h4>
                    <textarea id="txtArea" rows="7" cols="35"></textarea>
                    <input type="submit" class="sbm" value="Submit Registration"></input>
            </div>
        </div>
    )
}