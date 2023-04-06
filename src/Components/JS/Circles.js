import React from 'react';
import "../CSS/Circles.css"
import {ReactComponent as Ellipse1SVG} from "../../../src/Ellipse1.svg"
import {ReactComponent as Ellipse2SVG} from "../../../src/Ellipse2.svg"
import {ReactComponent as Ellipse3SVG} from "../../../src/Ellipse3.svg"
import {ReactComponent as Ellipse4SVG} from "../../../src/Ellipse4.svg"

export default function Circles() {

    return (

        <div className='circle_container'>

            <div className='circle_heading'>
                <h2 className='Learning_Methods'>Learning Methods</h2>
                <p className='p-large circle_texts'>Our tutors are up-to-date in the most effective teaching strategies</p>
            </div>
            
            <div className='circles'>

                <div className='individual_circles'>
                    <Ellipse1SVG/>
                    <h3 className='Explicit_Thinking'>Explicit Thinking</h3>
                    <p className='p-large circle_texts'>Tutors define and explain important reading comprehension and grammar concepts</p>
                </div>

                <div className='individual_circles'>
                    <Ellipse2SVG/>
                    <h3 className='Model_Thinking'>Model Thinking</h3>
                    <p className='p-large circle_texts'>Monitor and self-evaluate learning, recognize and praise effort, and celebrate mistakes as learning oppurtunities.</p>
                </div>

                <div className='individual_circles'>
                    <Ellipse3SVG/>
                    <h3 className='Questioning' >Questioning</h3>
                    <p className='p-large circle_texts'>Verbalize reasoning and engage in critical thinking and problem solving</p>
                </div>
            
                <div className='individual_circles'>
                    <Ellipse4SVG/>
                    <h3 className='Collaborative_Learning' >Collaborative Learning</h3>
                    <p className='p-large circle_texts'>Discussion between tutor and students focused on explaining how to approach reading comprehension questions and providing explanations for answers.</p>
                </div>

            </div>

            <div>
                <h3 className='Get_Ahead'>Get Ahead, Stay Ahead</h3>
                <button>Register a Student</button>
                <p className='Deadline_Apply p-medium'>Deadline to Apply: June 4th at 11:59 pm PST</p>
            </div>

        </div>

        

    )
}