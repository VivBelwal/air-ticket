# air-ticket

# To Register 
Method: POST
URL : https://air-ticket.onrender.com/api/register
BODY : {
      name : {type : String, required: true},
    email : {type : String, required: true, unique:true},
    password : {type : String, required: true,}
}
Responses
401: When User Exists : {status : "Falied", message :  "User already exists"}
201 : On Registration : {status : "Success", message :  "Registration Successfull"}
404 : On Bad Request : {status : "Falied", message :  "Bad Request"}

# To Login 
Method: POST
URL : https://air-ticket.onrender.com/api/login
BODY : {
     
    email : {type : String, required: true, unique:true},
    password : {type : String, required: true,}
}
Responses
401: When Password is wrong : {status : "Failed", message :  "Password is not correct"}
201 : On Login :  {status : "Success", message :  "Login successful"}
401: When user is not registered : {status : "Not Authenticated", message :  "Not a User, You need to register first"}
404 : On Bad Request : {status : "Falied", message :  "Bad Request"}

# To ADD NEW Fligts 
Method: POST
URL : https://air-ticket.onrender.com/api/flights
BODY : {
     
 airline : {type : String, required: true, },
    flightNo : {type : String, required: true,unique: true},
    departure : {type : String, required: true},
    arrival : {type : String, required: true},
    departureTime : {type : Date, required: true, },
    arrivalTime : {type : Date, required: true,},
    seats : {type : Number, required: true,},
    price : {type : Number, required: true,}
}
Responses
201 : {status : "Success", message :  "Flight Added successfully"}
status(400).send({status : "Falied", message :  "Bad Request"}

# list of all available flights.
Method: GET
URL : https://air-ticket.onrender.com/api/flights

Responses
res.status(200).send({status : "Success", message :  "All available Flights" , data : flights})
res.status(404).send({status : "Falied", message :  "Bad Request"})

# the details of a specific flight identified by its ID.
Method: GET
URL : https://air-ticket.onrender.com/api/flights/id

Responses
            res.status(200).send({status : "Success", data : flights})
              res.status(400).send({status : "Falied", message :  "Bad Request"})
# to update the details of a specific flight identified by its ID.
Method: PATCH
URL : https://air-ticket.onrender.com/api/flights/id
BODY : {
     
 airline : {type : String, required: true, },
    flightNo : {type : String, required: true,unique: true},
    departure : {type : String, required: true},
    arrival : {type : String, required: true},
    departureTime : {type : Date, required: true, },
    arrivalTime : {type : Date, required: true,},
    seats : {type : Number, required: true,},
    price : {type : Number, required: true,}
}
Responses
204 
status(400).send({status : "Falied", message :  "Bad Request"}

# users to delete a specific flight identified by its ID.
Method: DELETE
URL : https://air-ticket.onrender.com/api/flights/id

Responses
 res.status(202).send({status : "Success",message :  "Flight Deleted successfuly", data : flights})
status(400).send({status : "Falied", message :  "Bad Request"}

# user to book flights.
Method: POST
URL : https://air-ticket.onrender.com/api/booking
BODY : {
    email, flightNo
}
Responses
 res.status(201).send({status : "Success", message :  "Booking Successfull"})
  res.status(401).send({status : "Falied", message :  "Fill Correct Flight No."})
  res.status(400).send({status : "Falied", message :  "Bad Request"})

# list all the bookings so far with the user and flight details.
Method: GET
URL : https://air-ticket.onrender.com/api/dashboard

Responses
 res.status(200).send({status : "Success", message :  "All Bookings are here", Bookings})
 res.status(400).send({status : "Falied", message :  "Bad Request"})

       