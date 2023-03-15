import React from 'react';
import "../CSS/ContactUs.css"


export default function ContactUs() {
    return(
        <div>
            <h1>Contact Us</h1>
            <h3>Based in Davis, California</h3>
            <h4>Get in touch with our team directly at elementarylearningcenter@gmail.com or fill out the form below.
                We'll get back to you as soon as possible!
            </h4>
            <form action="/action_page.php">
                <label for="fname">First Name</label><br>
                <input type="text" id="fname" name="fname" required minlength="1" placeholder="Type here" ><br>
                <label for="lname">Last Name</label><br>
                <input type="text" id="lname" name="lname" required minlength="1" placeholder="Type here"><br>
                <label for="mail">Email Address</label><br>
                <input type="email" id="mail" name="mail" placeholder="Type here"><br>
                <label for="phone">Phone Number</label><br>
                <input type="tel" id="phone" name="phone" placeholder="Type here"><br>
                <label for="msg">Message</label><br>
                <input type="text" id="msg" name="msg" placeholder="Type here"><br><br>
                
                <div>
                    <button>Send Message</button>
                    <input type="submit" value="Submit">
                </div>
            </form>
        </div>
    )
}