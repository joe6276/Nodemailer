const nodemailer = require('nodemailer')
const ejs = require('ejs')
// Creating a Transporter - needs Configurations

const mailconfigurations={
    host:'smtp.gmail.com',
    port:587,
    secure:false,
    requireTLS:true,
    auth:{
        user:'',
        pass:''
    }
}

const transporter= nodemailer.createTransport(mailconfigurations)
ejs.renderFile('templates/welcome.ejs', {name:'Ruel ngatia'}, async(error, html)=>{
  const mailoptions={
    from:'', // sender address
    to: "", // list of receivers
    subject: "Hello ✔", // Subject line
    html,
    attachments:[
         {   
            filename: 'text.txt',
            content: 'hello world!',
            contentType: 'text/plain'
        }
    ]
}

try {
 await transporter.sendMail(mailoptions)  
} catch (error) {
   console.log(error); 
}

})



