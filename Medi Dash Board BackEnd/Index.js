const express = require("express");
const cors = require('cors')
require("./db/config");
const Staff = require("./db/DB/Doctor");
const Appointment = require('./db/DB/Appointment')
const Patient = require('./db/DB/Patient')
const St = require('./db/DB/Staff')
const app = express();


app.use(express.json());
app.use(cors())


// Get--------------------------------------------------------------------------------------------------------------------------------


// Doctor Api
app.get('/doctor',async(req,resp)=>{
    let doctor = await Staff.find();
    if(doctor.length>0)
    {
        resp.send(doctor)

    }else{
        resp.send({result:"No Doctor Found"})
    }
 
    // Appointment


    app.get('/appointment',async(req,resp)=>{
        let appointment = await Appointment.find()
        if(appointment.length>0)
        {
            resp.send(appointment)
        }else{
            resp.send({result : "No Appoint Found"})
        }
    })

    // Patient
    app.get('/patient',async(req,resp)=>{
        let patient = await Patient.find();
        if(patient.length>0)
        {
            resp.send(patient)
        }else{
            resp.send({result:"No Patient Found"})
        }
    })

    // Staff
    app.get('/staff',async(req,resp)=>{
        let staff = await St.find()
        if(staff.length>0)
        {
            resp.send(staff)
        }else{
            resp.send({result:"No Staff Found"})
        }
    })
// Post-----------------------------------------------------------------------------------------------------------------------------------------------------
})

// Doctor
app.post('/add-doctor',async(req,resp)=>{
    let staff = new Staff(req.body)
    let result = await staff.save()
    resp.send(result)
})

// Appointment

app.post('/add-appointment',async(req,resp)=>{
    let appointment = new Appointment(req.body)
    let result = await appointment.save()
    resp.send(result)
})

// Patient
app.post('/add-patient',async(req,resp)=>{
    let patient = new Patient(req.body)
    let result = await patient.save()
    resp.send(result)
})

// Staff
app.post('/add-staff',async(req,resp)=>{
    let st = new St(req.body)
    let result = await st.save()
    resp.send(result)
})

// Delete-----------------------------------------------------------------------------------------------------------------------------------------------------

// Doctor
app.delete('/doctor/:id',async(req,resp)=>{
    const result = await Staff.deleteOne({_id:req.params.id})
    resp.send(result)
})

// Appointment

app.delete('/appointment/:id',async(req,resp)=>{
    const result = await Appointment.deleteOne({_id:req.params.id})
    resp.send(result)
})

// Patient
app.delete('/patient/:id',async(req,resp)=>{
    const result = await Patient.deleteOne({_id:req.params.id})
    resp.send(result)
})

// Staff

app.delete('/staff/:id',async(req,resp)=>{
    const result = await St.deleteOne({_id:req.params.id})
    resp.send(result)
})
// Update-----------------------------------------------------------------------------------------------------------------------------------------------------

// Doctor
app.get('/doctor/:id',async(req,resp)=>{
    let result = await Staff.findOne({_id:req.params.id});
    if(result)
    {
        resp.send(result)
    }else{
        resp.send({result:"No Record Found"})
    }
})


app.put('/doctor/:id',async(req,resp)=>{
    let result = await Staff.updateOne(
        {_id:req.params.id},
        {
            $set :req.body
        }
    )
    resp.send(result)

})

//Search -----------------------------------------------------------------------------------------------------------------------------------------------------






app.listen(5000);
