import React from 'react';
import "../CSS/ContactUs.css"


export default function ContactUs() {
    return (
        <div className= "contact-us-container">
            <h1 class="contact-header">Contact Us</h1>
            <h3 class="based">Based in Davis, California</h3> 
            <p class="get-in-touch">Get in touch with our team directly at <span class = "red-letters">elementarylearningcenter@gmail.com</span> or fill out the form below.
            <br></br><br></br>
                We'll get back to you as soon as possible!</p> <br></br><br></br>
            <h3 class= "red-letters">* = required</h3><br></br>

            <form>
                <label for="fname">First Name *</label>
                <input type="text" id="fname" name="fname" required minlength="1" placeholder="Type here"/>
                <label for="lname">Last Name *</label>
                <input type="text" id="lname" name="lname" required minlength="1" placeholder="Type here"/>
                <label for="mail">Email Address *</label>
                <input type="email" id="mail" name="mail" placeholder="Type here"/>
                <label for="phone">Phone Number</label>
                <input type="tel" id="phone" name="phone" placeholder="Type here"/>
                <label for="msg">Message</label>
                <textarea type="text" id="msg" name="msg" placeholder="Type here"/>
                
                <input type="submit" value="Send Message" />
                
            </form>
        </div>
    )
}