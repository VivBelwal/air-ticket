const express = require('express');
const DashboardRoute = express.Router();
const Book = require("../models/booking.model");

DashboardRoute.use(express.json());

DashboardRoute.get("/dashboard", async (req,res) =>{
    

    try{

    
            let Bookings = await Book.find({});
            return  res.status(200).send({status : "Success", message :  "All Bookings are here", Bookings})
    
       
    }catch(e){
        return  res.status(400).send({status : "Falied", message :  "Bad Request"})
       
    }
})

module.exports = DashboardRoute