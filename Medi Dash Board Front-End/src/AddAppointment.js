import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddAppointment() {
  const [Name, setName] = useState("");
  const [Gender, setGender] = useState("");
  const [Date, setDate] = useState("");
  const [Time, setTime] = useState("");
  const navigate = useNavigate();

  const saveData = async () => {
    let result = await fetch("http://localhost:5000/add-appointment", {
      method: "POST",
      body: JSON.stringify({ Name, Gender, Date, Time }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.warn(result);
    navigate("/appointment");
  };

  return (
    <div className="ml-4 w-[75vw]">
      <div>
        <h2 className="alert-primary text-center">Add-Appointments</h2>
        <hr />
      </div>

      <div className="ml-[30vw] mt-[10vw]">
        <label>
          {" "}
          Patient Name :{" "}
          <input
            type="text"
            placeholder="Enter Name"
            className="form-control"
            value={Name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <input
          type="radio"
          className="form-control"
          value="Male"
          onChange={(e) => setGender(e.target.value)}
          name="gender"
        />
        Male
        <input
          type="radio"
          className="form-control"
          value="Female"
          onChange={(e) => setGender(e.target.value)}
          name="gender"
        />
        FeMale
        <label>
          {" "}
          Date :{" "}
          <input
            type="date"
            className="form-control"
            value={Date}
            onChange={(e) => setDate(e.target.value)}
          />
        </label>
        <br />
        <label>
          {" "}
          Time :{" "}
          <input
            type="time"
            className="form-control"
            value={Time}
            onChange={(e) => setTime(e.target.value)}
          />
        </label>
        <br />
        <button onClick={saveData} className="btn btn-success">
          Submit
        </button>
      </div>
    </div>
  );
}
