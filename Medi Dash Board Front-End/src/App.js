import React from "react";
import Nav from "./Nav";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import Doctor from "./Doctor";
import Staff from "./Staff";
import Appointment from "./Appointment";
import AddDoctor from "./AddDoctor";
import UpdateDoctor from "./UpdateDoctor";
import AddAppointment from "./AddAppointment";
import Patient from "./Patient";

export default function App() {
  return (
    <div className="row">
      <div>
        <Nav />
      </div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/staff" element={<Staff />} />
        <Route path="/patient" element={<Patient />} />
        <Route path="/doctors" element={<Doctor />} />
        <Route path="disableslots" element={<h3>disable slots</h3>} />
        <Route path="appointment" element={<Appointment />} />
        <Route path="medicine" element={<h3>Medicine</h3>} />
        <Route path="logout" element={<h3>logout</h3>} />

        <Route path="/add-doctor" element={<AddDoctor />} />
        <Route path="/doctor/:id" element={<UpdateDoctor />} />
        <Route path="/add-appointment" element={<AddAppointment />} />
      </Routes>
    </div>
  );
}
