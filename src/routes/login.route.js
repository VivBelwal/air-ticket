const express = require('express');
const User = require("../models/user.model");
const LoginRoute = express.Router();
LoginRoute.use(express.json());

LoginRoute.post("/login", async (req,res) =>{
    let {email,password} = req.body;

    try{

        let user = await User.findOne({email});
        console.log(user)
        
        if(user){

            if(user.password === password){

                return  res.status(201).send({status : "Success", message :  "Login successful"})
            }else {
                
                return  res.status(401).send({status : "Failed", message :  "Password is not correct"})
            }

        }else{
           
            return  res.status(401).send({status : "Not Authenticated", message :  "Not a User, You need to register first"})
        }
    }catch(e){
        return  res.status(400).send({status : "Falied", message :  "Bad Request"})
       
    }
})

module.exports = LoginRoute