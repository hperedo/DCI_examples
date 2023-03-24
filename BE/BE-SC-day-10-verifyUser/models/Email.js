import nodemailer from 'nodemailer';
import {config} from 'dotenv';

// dotenv
config();

const {EMAIL_USER, EMAIL_PASS} = process.env;
console.log(EMAIL_PASS, EMAIL_USER)
// define the transporter
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS
    }
})

/**
 * This Function to send an email
 * @param {String} to Target Email 
 * @param {String} subject Title for the message
 * @param {String} message text or HTML
 * @returns a new promise
 */
export const sendAnEmail = (to, subject, message) => {
    // as a promise (then/catch OR async/await)
    return new Promise((resolve, reject) => {
        transporter.sendMail({
            from: EMAIL_USER,
            to: to,
            subject: subject,
            html: message
        }, (err, info) =>{
            if(err){
                reject(err)
            }else{
                resolve(info)
            }
        })
    })
}

export default sendAnEmail;