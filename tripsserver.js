const express = require('express');
const mongoose = require('mongoose');

let webt = express();

async function connect(){
    let connection =  await mongoose.connect('mongodb://0.0.0.0:27017/login');
   
}
const loginSchema = new mongoose.Schema({
    name : { type : 
        String },
    password : { type : 
        String },

});
let loginModel = new mongoose.model("login",loginSchema);

const ReservstionSchema = new mongoose.Schema({
    sname : { type :

         String },
    phonenumber :  { type :
        String },
    tickets : { type :
        Number },
    amount :  { type :
        Number },
    date :  { type :
        Date },
    distenation :  { type :
        String }, 

});
let ReservstionModel = new mongoose.model("Reservstion",ReservstionSchema);

const contactusSchema = new mongoose.Schema({
    cname : { type : 
        String },
    email : { type : 
        String },
    message :{ type : 
        String },

});
let contactusModel = new mongoose.model("contactus",contactusSchema);


let newlogin = new loginModel({
    name : "ragheb",
    password : "ragheb1233@",

}).save();
let newReservstion = new loginModel({
    sname : "ragheb",
    phonenumber : "01063537885",
    tickets : 3,
    amount : 200,
    date : 1/ 1/ 2024,
    distenation : "dahab",
}).save();

let newcontactus = new loginModel({
    cname : "ragheb",
    email : "ra8eb889@gmail.com",
    message :"trip was boring ",
}).save();



webt.get('/login', async (Request,Response)=>{
    let alllogins =await loginModel.find();
    Response.status(200);
    Response.json(alllogins)
} )



webt.liste0n(3000, function() {
    console.log('good')
    })
 connect()