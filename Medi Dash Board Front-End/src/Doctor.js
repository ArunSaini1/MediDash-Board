import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Doctor() {
  const [doctor, setDoctor] = useState([]);

  useEffect(() => {
    getDoctor();
  }, []);

  const getDoctor = async () => {
    let result = await fetch("http://localhost:5000/doctor");
    result = await result.json();
    setDoctor(result);
  };

  const deleteDoctor = async (id) => {
    let result = await fetch(`http://localhost:5000/doctor/${id}`, {
      method: "DELETE",
    });
    result = await result.json();
    if (result) {
      getDoctor();
    }
  };

  return (
    <div className="ml-4 w-[75vw]">
      <div>
        <h1 className="alert-primary text-center">Doctor Component</h1>
      </div>
      <hr />

      <div>
        <h2> </h2>
      </div>

      <div>
        <Link to="/add-doctor">
          <button className="btn btn-success">Add New Doctor</button>
        </Link>
        <br />
        <b>Total Doctors : {doctor.length}</b>
        <table className="table mt-2">
          <thead>
            <tr>
              <th>S. No</th>
              <th>Doctor Name</th>
              <th>Department</th>
              <th>Mobile No.</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {doctor.map((ob, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{ob.Name}</td>
                <td>{ob.Department}</td>
                <td>{ob.Mobile}</td>
                <td>
                  <button
                    onClick={() => deleteDoctor(ob._id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                  &nbsp;&nbsp;
                  <Link to={"/doctor/" + ob._id}>
                    <button className="btn btn-primary">Edit</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
