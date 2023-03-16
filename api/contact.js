/*commented code is stuff i found online 
https://strapengine.com/contact-form-with-nodemailer-gmail-and-node-js/
but idk if its useful/applies here*/

import axios from "axios"
import nodemailer from "nodemailer"

export default async function handler(req, res){
    if (req.method !== 'POST'){
        res.render(contact.html) //front-end html page file
    } else {
        {
            /*const transporter = nodemailer.createTransport({
                service: "gmail",
                auth: {
                  user: process.env.GMAIL_USER,
                  pass: process.env.PASSWORD,
                }
            })*/

            const transporter= nodemailer.createTransport({
                host: 'smtp.ethereal.email',
                port: 587,
                auth: {
                    user: 'kiana.nolan@ethereal.email',
                    pass: 'A1rGv9rgK6KfWC3ZUw'
                }
            })
            
            const firstname= req.body.firstname
            const lastname= req.body.lastname
            const email= req.body.email
            const question= req.body.question;
            
            const mailOption = {
                from: "senderemail@gmail.com",
                to: "recipientemail@gmail.com",
                subject: 'You have a message!',
                html: `You have a message from 
                Name: ${firstname} ${lastname}
                Email : ${email}
                Question: ${question}`,
            }
              
            transporter.sendMail(mailOption, function (error, info){
                if (error) {
                  console.log(error)
                  res.send({
                    message: "Couldn't send email; try again in a few moments.",
                  })
                  return
                } else {
                  console.log("sent " + info.response)
                  res.send({ message: "Email sent!" });
                }
            });
        }
    }
}