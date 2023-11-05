import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Staff() {
  const [staff, setStaff] = useState([]);

  const [Name, setName] = useState("");
  const [Mobile, setMobile] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    getStaff();
  }, []);

  const getStaff = async () => {
    let result = await fetch("http://localhost:5000/staff");
    result = await result.json();
    setStaff(result);
  };

  const addStaff = async () => {
    let result = await fetch("http://localhost:5000/add-staff", {
      method: "POST",
      body: JSON.stringify({ Name, Mobile }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.warn(result);
    navigate("/staff");
  };

  const deleteStaff = async (id) => {
    let result = await fetch(`http://localhost:5000/staff/${id}`, {
      method: "DELETE",
    });
    result = await result.json();
    if (result) {
      getStaff();
    }
  };
  return (
    <div className="ml-4 w-[75vw]">
      <div>
        <h2 className="alert-primary text-center">Staff Component</h2>
        <hr />
        <div>
          <label>
            Enter Staff Name :{" "}
            <input
              type="text"
              placeholder="Enter Name"
              className="form-control"
              value={Name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <br />
          <label>
            Enter Staff Mo No. :{" "}
            <input
              type="number"
              placeholder="Enter Number"
              className="form-control"
              value={Mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
          </label>
          <br />

          <button className="btn btn-success" onClick={addStaff}>
            Add Staff
          </button>
        </div>
        <hr />
        <b>Total Staff : {staff.length}</b>
        <table className="table">
          <thead>
            <tr>
              <th>S NO.</th>
              <th>Name</th>
              <th>Mobile No</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {staff.map((ob, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{ob.Name}</td>
                <td>{ob.Mobile}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteStaff(ob._id)}
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
