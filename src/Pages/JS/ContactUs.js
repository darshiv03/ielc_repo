import React from 'react';
import "../CSS/ContactUs.css"


export default function ContactUs() {
    return (
        <div className= "contact-us-container">
            <h1 className="contact-header">Contact Us</h1>
            <h3 className="based">Based in Davis, California</h3> 
            <p className="get-in-touch">Get in touch with our team directly at <span className = "red-letters">elementarylearningcenter@gmail.com</span> or fill out the form below.
            <br></br><br></br>
                We'll get back to you as soon as possible!</p> <br></br><br></br><br></br>
            <h3 className= "red-letters">* = required</h3>

            <form>
                <label className= "required" htmlFor="fname">First Name <span> </span></label><br></br>
                <input type="text" id="fname" name="fname" required minLength="1" placeholder="Type here"/><br></br>
                <label className= "required" htmlFor="lname">Last Name </label><br></br>
                <input type="text" id="lname" name="lname" required minLength="1" placeholder="Type here"/><br></br>
                <label className= "required" htmlFor="mail">Email Address </label><br></br>
                <input type="email" id="mail" name="mail" placeholder="Type here"/><br></br>
                <label htmlFor="phone">Phone Number</label><br></br>
                <input type="tel" id="phone" name="phone" placeholder="Type here"/><br></br>
                <label htmlFor="msg">Message</label><br></br>
                <textarea type="text" id="msg" name="msg" placeholder="Type here"/><br></br>
                
                <input type="submit" value="Send Message" />
                
            </form>
        </div>
    )
}