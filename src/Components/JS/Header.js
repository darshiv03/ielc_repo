import React from 'react';
import "../CSS/Header.css"


export default function Header() {

    return (
        <div className='main_container'>


            <div className='other'>    

                <div> 
                    <h2 className='Main_Heading'>Get ahead, Stay ahead</h2>
                </div>

                <div>
                    <p className='explanation'>Our 7 week summer program prepares elementary students for the upcoming school year's reading comprehension and grammar curriculum.</p>
                </div>

                <div className='buttons'>
                    <button className='button1'>
                        <p className='text1_button'>Register a Student</p>
                    </button>
                    <button className='button2'>
                        <p className='text2_button'>Become a Tutor</p>
                    </button>
                </div>


            </div>
        
        </div>
    )
}