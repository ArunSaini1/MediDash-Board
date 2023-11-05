import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function UpdateDoctor() {
  const [Name, setName] = useState("");
  const [Department, setDepartment] = useState("");
  const [Mobile, setMobile] = useState("");
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getDoctor();
  }, []);

  const getDoctor = async () => {
    console.log(params);
    let result = await fetch(`http://localhost:5000/doctor/${params.id}`);
    result = await result.json();
    setName(result.Name);
    setDepartment(result.Department);
    setMobile(result.Mobile);
  };

  const handleUpdate = async () => {
    let result = await fetch(`http://localhost:5000/doctor/${params.id}`, {
      method: "PUT",
      body: JSON.stringify({ Name, Department, Mobile }),
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
      <h2 className="alert-primary text-center">Update Component</h2>
      <hr />
      <div>
        <label>
          Doctor Name :{" "}
          <input
            type="text"
            value={Name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Doctor Name"
            className="form-control"
          />
        </label>
        <br />
        <label>
          Doctor Department :
          <input
            type="text"
            value={Department}
            onChange={(e) => setDepartment(e.target.value)}
            placeholder="Enter Doctor Name"
            className="form-control"
          />
        </label>
        <br />
        <label>
          Doctor Mobile No :{" "}
          <input
            type="text"
            value={Mobile}
            onChange={(e) => setMobile(e.target.value)}
            placeholder="Enter Doctor Name"
            className="form-control"
          />
        </label>
        <br />
        <br />
        <button className="btn btn-primary" onClick={handleUpdate}>
          Update
        </button>
      </div>
    </div>
  );
}
