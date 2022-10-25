const express = require('express');
const User = require("../models/User");
const bcryptjs = require('bcryptjs');
const authRouter  = express.Router();
// authRouter.get('/User', (req, res) =>
// {
//    res.json(
//     {
//         msg: "bhu"
//     }
   
//    );
// });

//SIGNUP

authRouter.post('/api/signup',async(req,res) =>
{
    try{
// get data from cilent,post that data in db 
// return data to the user
//short hand syntax for accessing the body with object
const {name,email,password}=req.body; //destructing,this can be done only using object.
//{ object inside the body structure would be 
//'name': 'name', 'email':'email','password':'password'
//} 
const existingUser = await User.findOne({email});
//find one is a default function available in moongoose.
//Find one is a promise.its an async
if(existingUser)
{
    return res.status(400).json({
        msg: 'User with same email already exists!'
    })
}
const hashedPassword = await bcryptjs.hash(password, 8);

//salt is a random String that makes hash unpredictable.
//let => we are using it bcz of scope functionality
let user = new User({
email,
password: hashedPassword,
name,
})
user = await user.save();
res.json(user); 
}
catch (e)
{
  res.status(500).json({error:e.message});  
}

});
   
//All are private file.if we want to access it outside we need export it.
module.exports = authRouter;
//After exporting we can use it anywhere in the project


