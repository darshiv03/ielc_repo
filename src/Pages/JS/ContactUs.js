import React from 'react';
import "../CSS/ContactUs.css"


export default function ContactUs() {
    return (
        <div className= "contact-us-container">
            <h1 class="contact-header">Contact Us</h1>
            <h3 class="based">Based in Davis, California</h3> 
            <p class="get-in-touch">Get in touch with our team directly at <span class = "red-letters">elementarylearningcenter@gmail.com</span> or fill out the form below.
            <br></br><br></br>
                We'll get back to you as soon as possible!</p> <br></br><br></br><br></br>
            <h3 class= "red-letters">* = required</h3>

            <form>
                <label class= "required" for="fname">First Name <span> </span></label><br></br>
                <input type="text" id="fname" name="fname" required minlength="1" placeholder="Type here"/><br></br>
                <label class= "required" for="lname">Last Name </label><br></br>
                <input type="text" id="lname" name="lname" required minlength="1" placeholder="Type here"/><br></br>
                <label class= "required" for="mail">Email Address </label><br></br>                    <input type="email" id="mail" name="mail" placeholder="Type here"/><br></br>

                <label for="phone">Phone Number</label><br></br>
                <input type="tel" id="phone" name="phone" placeholder="Type here"/><br></br>
                <label for="msg">Message</label><br></br>
                <textarea type="text" id="msg" name="msg" placeholder="Type here"/><br></br>
                
                <input type="submit" value="Send Message" />
                
            </form>
        </div>
    )
}