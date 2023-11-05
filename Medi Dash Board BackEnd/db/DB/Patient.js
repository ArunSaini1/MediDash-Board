const mongoose = require('mongoose');


const patSchema = new mongoose.Schema({
    Name:String,
    Gender:String,
    DOB:String,
    City:String
})


module.exports=mongoose.model('patient',patSchema)