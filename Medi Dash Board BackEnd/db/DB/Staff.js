const mongoose = require('mongoose')

const staffSchema = new mongoose.Schema({
    Name : String,
    Mobile:Number
})


module.exports=mongoose.model('staff',staffSchema)