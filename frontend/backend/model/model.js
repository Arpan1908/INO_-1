const mongoose = require("mongoose");

const register = new mongoose.Schema({
    full_name:{
        type:String,
        required:true
    },
   
    email:{
        type:String,
        required:true 
    },
     password:{
         type:String,
         required:true
     }
 });

 module.exports = mongoose.model('myTable', register);