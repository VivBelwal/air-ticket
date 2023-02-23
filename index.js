const express = require("express");
require("dotenv").config();
const PORT = process.env.PORT || 8082



const app = express();
const cors = require("cors");
const login = require("./src/routes/login.route")
const register = require("./src/routes/register.route")
const flight = require("./src/routes/flights.route")
const connect = require("./src/config/db")
app.use(express.json());
app.use(cors())
app.use("/api", login);
app.use("/api", register);
app.use("/api", flight);
app.listen(PORT, async () =>{
    try{
await connect();
console.log(`listening on ${PORT}`)

    }catch(e){
        console.log(e)
    }
})