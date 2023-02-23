const express = require("express");
require("dotenv").config();
const PORT = process.env.PORT || 8082



const app = express();
const cors = require("cors");

const connect = require("./src/config/db")
app.use(express.json());
app.use(cors())

app.listen(PORT, async () =>{
    try{
await connect();
console.log(`listening on ${PORT}`)

    }catch(e){
        console.log(e)
    }
})