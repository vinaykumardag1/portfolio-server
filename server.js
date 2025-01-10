const express=require("express")
const app=express()
// const bodyParser=require("body-parser")
require("dotenv").config()
const nodemailer=require("nodemailer")
app.get("/",(req,res)=>{
    res.send("porfolio backend works")
})
app.post("/mail",(req,res)=>{
    const {email}=req.body
    try{
        const  transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: process.env.EMAIL,
              pass: process.env.EMAIL_PASSWORD,
            }
          });
          
          const  mailOptions = {
            from: email,
            to: process.env.EMAIL,
            subject: 'Sending Email using Node.js',
            text: 'That was easy!'
          };
          
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          });
    }catch(error){
        console.error("error occured",error)
    }
})
