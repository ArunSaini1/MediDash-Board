import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Patient() {
  const [Name, setName] = useState("");
  const [Gender, setGender] = useState("");
  const [DOB, setDOB] = useState("");
  const [City, setCity] = useState("");
  const navigate = useNavigate();

  const [patient, setPatient] = useState([]);

  useEffect(() => {
    getPatient();
  }, []);

  const getPatient = async () => {
    let result = await fetch("http://localhost:5000/patient");
    result = await result.json();
    setPatient(result);
  };

  const addPatient = async () => {
    let result = await fetch("http://localhost:5000/add-patient", {
      method: "POST",
      body: JSON.stringify({ Name, Gender, DOB, City }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.warn(result);
    navigate("/patient");
  };

  const deletePatient = async (id) => {
    let result = await fetch(`http://localhost:5000/patient/${id}`, {
      method: "DELETE",
    });
    result = await result.json();
    if (result) {
      getPatient();
    }
  };
  return (
    <div className="ml-4 w-[75vw]">
      <h2 className="alert-primary text-center">Patients</h2>
      <hr />
      <div>
        <div>
          <label>
            Enter Name :{" "}
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
            className="form-control"
            type="radio"
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
          <br />
          <br />
          <label>
            Select Your DOB :{" "}
            <input
              className="form-control"
              type="date"
              value={DOB}
              onChange={(e) => setDOB(e.target.value)}
            />
          </label>
          <br />
          <label>
            {" "}
            Enter Your City :{" "}
            <input
              className="form-control"
              type="text"
              placeholder="Enter City"
              value={City}
              onChange={(e) => setCity(e.target.value)}
            />
          </label>
          <br />
          <button className="btn btn-success" onClick={addPatient}>
            Add Patient
          </button>
        </div>
        <hr />
        <b>Total Patients : {patient.length}</b>
        <table className="table">
          <thead>
            <tr>
              <th>S No.</th>
              <th>Name</th>
              <th>Gender</th>
              <th>DOB</th>
              <th>City</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {patient.map((ob, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{ob.Name}</td>
                <td>{ob.Gender}</td>
                <td>{ob.DOB}</td>
                <td>{ob.City}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => deletePatient(ob._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
