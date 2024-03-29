const express = require("express");
const RegisterRoute = express.Router();
const User = require("../models/user.model");
RegisterRoute.use(express.json());

RegisterRoute.post("/register", async (req, res) => {
  let { name, email, password } = req.body;

  try {
    let user = await User.find({ email });
    console.log(user);
    if (user.length > 0) {
      return res
        .status(401)
        .send({ status: "Falied", message: "User already exists" });
    } else {
      await User.create({ name, email, password });
      return res
        .status(201)
        .send({ status: "Success", message: "Registration Successfull" });
    }
  } catch (e) {
    return res.status(404).send({ status: "Falied", message: "Bad Request" });
  }
});

module.exports = RegisterRoute;
