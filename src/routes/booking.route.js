const express = require("express");
const BookRoute = express.Router();
const Book = require("../models/booking.model");
const User = require("../models/user.model");
const Flight = require("../models/flight.model");
BookRoute.use(express.json());

BookRoute.post("/booking", async (req, res) => {
  let { email, flightNo } = req.body;

  try {
    let user = await User.findOne({ email });
    let flight = await Flight.findOne({ flightNo });
    if (flight) {
      await Book.create({ user, flight });
      return res
        .status(201)
        .send({ status: "Success", message: "Booking Successfull" });
    } else {
      return res
        .status(401)
        .send({ status: "Falied", message: "Fill Correct Flight No." });
    }
  } catch (e) {
    return res.status(400).send({ status: "Falied", message: "Bad Request" });
  }
});

module.exports = BookRoute;
