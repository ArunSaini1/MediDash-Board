const mongoose = require('mongoose');

const appSchema = new mongoose.Schema(({
    Name:String,
    Gender:String,
    Date:String,
    Time:String,
    DoctorName:String
}))



module.exports=mongoose.model('appointment',appSchema)