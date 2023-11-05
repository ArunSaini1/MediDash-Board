import React, { useEffect, useState } from "react";
import p1 from "../src/Images/p1.svg";
import { Link } from "react-router-dom";

export default function Appointment() {
  const [Name, setName] = useState([""]);

  useEffect(() => {
    getAppointment();
  }, []);

  const getAppointment = async () => {
    let result = await fetch("http://localhost:5000/appointment");
    result = await result.json();
    setName(result);
  };

  const deleteAppointment = async (id) => {
    let result = await fetch(`http://localhost:5000/appointment/${id}`, {
      method: "DELETE",
    });
    result = await result.json();
    if (result) {
      getAppointment();
    }
  };
  return (
    <>
      <div className="ml-8 mt-4 w-[75vw]">
        <div className="h-96  mt-8">
          <h2 className="alert-primary text-center">Appointment Component</h2>
          <hr />
          <br />
          <Link to="/add-appointment">
            <button className="btn btn-success">Add New Appointment</button>
          </Link>
          <br />
          <br />
          <b>Total Appointments: {Name.length}</b>
          <table className="table mt-4">
            <thead>
              <tr>
                <th>Name</th>
                <th>Gender</th>
                <th>Date</th>
                <th>Time</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {Name.map((ob, index) => (
                <tr>
                  <td>{ob.Name}</td>
                  <td>{ob.Gender}</td>
                  <td>{ob.Date}</td>
                  <td>{ob.Time}</td>

                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteAppointment(ob._id)}
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
    </>
  );
}
