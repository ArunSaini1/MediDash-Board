const mongoose = require('mongoose');

const staffSchema = new mongoose.Schema({
    Name:String,
    Department:String,
    Mobile:Number
})

module.exports = mongoose.model('doctor',staffSchema)