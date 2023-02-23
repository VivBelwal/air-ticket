const express = require('express');
const FlightRoute = express.Router();
const Flight = require("../models/flight.model");
FlightRoute.use(express.json());

FlightRoute.post("/flights", async (req,res) =>{
    let {airline,flightNo,departure,arrival,departureTime,arrivalTime,seats,price} = req.body;

    try{

           await Flight.create({airline,flightNo,departure,arrival,departureTime,arrivalTime,seats,price});
            return  res.status(201).send({status : "Success", message :  "Flight Added successfully"})
     
    }catch(e){
        return  res.status(400).send({status : "Falied", message :  "Bad Request"})
       
    }
})

FlightRoute.get("/flights", async (req,res) =>{
    

    try{

        // let flights = await Flight.
          
            return  res.status(201).send({status : "Success", message :  "Flight Added successfully"})
     
    }catch(e){
        return  res.status(400).send({status : "Falied", message :  "Bad Request"})
       
    }
})

module.exports = FlightRoute