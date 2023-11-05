import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddDoctor() {
  const [Name, setName] = useState("");
  const [Department, setDepartment] = useState("");
  const [Mobile, setMobile] = useState("");
  const navigate = useNavigate();

  const saveData = async () => {
    let data = { Name, Department, Number };
    let result = await fetch("http://localhost:5000/add-doctor", {
      method: "POST",
      body: JSON.stringify({ Name, Mobile, Department }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.warn(result);
    navigate("/doctors");
  };

  return (
    <div className="ml-4 w-[75vw]">
      <h2 className="alert-primary text-center">Add Doctor</h2>
      <hr />

      <div className="ml-[25vw] mt-[5vw] w-[75vw]">
        <label>
          Enter Doctor Name :{" "}
          <input
            type="text"
            value={Name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Name"
            className="form-control"
          />
        </label>
        <br />
        <label>
          Enter Department :{" "}
          <input
            type="text"
            value={Department}
            onChange={(e) => setDepartment(e.target.value)}
            placeholder="Enter Department"
            className="form-control"
          />
        </label>
        <br />
        <label>
          Enter Mobile Number :{" "}
          <input
            type="number"
            value={Mobile}
            onChange={(e) => setMobile(e.target.value)}
            placeholder="Enter Number"
            className="form-control"
          />
        </label>
        <br />
        <button onClick={saveData} className="btn btn-success">
          Add{" "}
        </button>
      </div>
    </div>
  );
}
