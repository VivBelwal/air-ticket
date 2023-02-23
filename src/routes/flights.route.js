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
FlightRoute.get("/flights/:id", async (req,res) =>{
    let id = req.params.id;

    console.log(id)
    try{
 
        let flights = await Flight.findOne({_id: id});
        console.log(flights);
          
            return  res.status(200).send({status : "Success", data : flights})
     
    }catch(e){
        return  res.status(400).send({status : "Falied", message :  "Bad Request"})
       
    }
})
FlightRoute.patch("/flights/:id", async (req,res) =>{
    let id = req.params.id;
       let {airline,flightNo,departure,arrival,departureTime,arrivalTime,seats,price} = req.body;

    
    try{
 
       await Flight.updateOne({_id : id}, {$set: {airline,flightNo,departure,arrival,departureTime,arrivalTime,seats,price}})
       
       
            return  res.status(204).send("a")
     
    }catch(e){
        return  res.status(400).send({status : "Falied", message :  "Bad Request"})
       
    }
})
FlightRoute.delete("/flights/:id", async (req,res) =>{
    let id = req.params.id;
       

    
    try{
 let flights = await Flight.deleteOne({_id: id})
       
       
       
            return  res.status(202).send({status : "Success",message :  "Flight Deleted successfuly", data : flights})
     
    }catch(e){
        return  res.status(400).send({status : "Falied", message :  "Bad Request"})
       
    }
})


// list of all available flights.
FlightRoute.get("/flights", async (req,res) =>{
    

    try{

        let flights = await Flight.find({});
        console.log(flights);
          
            return  res.status(200).send({status : "Success", message :  "All available Flights" , data : flights})
     
    }catch(e){
        return  res.status(404).send({status : "Falied", message :  "Bad Request"})
       
    }
})


module.exports = FlightRoute