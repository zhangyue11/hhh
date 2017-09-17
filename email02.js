const nodemailer = require('nodemailer');

let userinfo = {
    host: "smtp.163.com",
    port: 465,
    secure: true,
    auth: {
        user: "18201897002@163.com",
        pass: "www.1129.com"
    }
}

let sendmailinfo = {
    from:"helloworld <18201897002@163.com>",
    to: "penghao11290@163.com",
    subject: "hello",
    text: "hahahhahhahah"
}

let authemail  = nodemailer.createTransport(userinfo)

authemail.sendMail(sendmailinfo,function(err,info){
    if(err){
        console.log(err)
    }
    console.log("send..")
})