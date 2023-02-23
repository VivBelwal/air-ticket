const {Schema, model} = require("mongoose");
const User = require("./user.model");
const Flight = require("./flight.model");
const BookSchema = new Schema({
    user  : {type : Object, ref: User,},
    flight : {type : Object, ref: Flight },
    
   
})

const Book = model("book", BookSchema);

module.exports = Book