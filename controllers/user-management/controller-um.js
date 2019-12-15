
const express  = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const model = require('../../models/models-um/usermodel');
const model1 = require('../../models/models-gm/groupmodel')
const GroupModel = mongoose.model('group');

var nodemailer = require('nodemailer');

const UserModel = mongoose.model('user');
const shortid = require('shortid');


let login = (req,res) => {

    let email = req.body.email;
    let pass = req.body.password;
    
    UserModel.findOne({'email':email,'password':pass},(err,result) => {
        if(err)
        {console.log('incorrect email/password : '+err)}
        else {
            res.send(result);
        }
    })

}


let signup = (req,res) => {

    let user = new UserModel({
        mobile: req.body.mobile,
        lastname: req.body.lastname,
        firstName: req.body.firstName,
        email: req.body.email,
        password: req.body.pass,
        userid: shortid.generate(),
        groups: []
        
    });

    user.save((err,user)=>{
        if(err){
            console.error(err)
            res.send(err);
        }
        else {
            res.send(user);
        }
    })
}

let getAllUsers = (req,res) => {

    UserModel.find((err,result)=>{
        if(err)
        {res.send(err)}
        else {
            res.send(result);
        }
    })
};

let forgotpassword = (req,res) => {
let email = req.query.email;
let found=false;
    UserModel.findOne({'email':email},(err,result) => {
        if(err){
            res.send(err);
            found=false;
        }else{
            res.send(result);
            found= true;
        }
        if(found){
             
            //nodemailer
            /* var transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                       user: 'sender@email.com',
                       pass: 'yourpassword'
                   }
               });


               const mailOptions = {
                from: 'sender@email.com', // sender address
                to: 'nikharsharma12@gmail.com', // list of receivers
                subject: 'Subject of your email', // Subject line
                html: '<p>Your html here</p>'// plain text body
              };

              transporter.sendMail(mailOptions, function (err, info) {
                if(err)
                  console.log(err)
                else
                  console.log(info);
             }); */
        }
    });
}

let getAllGroupsForUser = (req,res) =>{
    let userid = req.params.userid;

    GroupModel.find({ users: userid}, (err,result) => {
        if(err)
        {res.send(err)}
        else{
            res.send(result);

        }
    });
};


module.exports = {
    login: login,
    signup: signup,
    forgotpassword: forgotpassword,
    getAllUsers: getAllUsers,
    getAllGroupsForUser: getAllGroupsForUser
}