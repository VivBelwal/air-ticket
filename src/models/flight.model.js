const {Schema, model} = require("mongoose");

const FlightSchema = new Schema({
    departure : {type : String, required: true},
    airline : {type : String, required: true, unique},
    flightNo : {type : String, required: true,}
})

const Flight = model("flight", UserSchema);

module.exports = Flight