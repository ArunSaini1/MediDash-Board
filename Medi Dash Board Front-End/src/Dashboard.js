import React, { useEffect, useState } from "react";
import q1 from "../src/Images/q1.svg";
import q2 from "../src/Images/q2.svg";
import q3 from "../src/Images/q3.svg";
import q4 from "../src/Images/q4.svg";
import Appointment from "./Appointment";
import Chart from "./Chart";
import PatientReivew from "./PatientReivew";
import Chart2 from "./Chart2";
import d1 from "../src/Images/d1.svg";
import Doctor from "./Doctor";
import p1 from "../src/Images/p1.svg";

export default function Dashboard() {
  const [doctor, setDoctor] = useState([]);
  const [Name, setName] = useState([""]);
  const [patient, setPatient] = useState([]);
  const [staff, setStaff] = useState([]);

  useEffect(() => {
    getDoctor();
    getAppointment();
    getPatient();
    getStaff();
  }, []);

  const getDoctor = async () => {
    let result = await fetch("http://localhost:5000/doctor");
    result = await result.json();
    setDoctor(result);
  };

  const getAppointment = async () => {
    let result = await fetch("http://localhost:5000/appointment");
    result = await result.json();
    setName(result);
  };

  const getPatient = async () => {
    let result = await fetch("http://localhost:5000/patient");
    result = await result.json();
    setPatient(result);
  };

  const getStaff = async () => {
    let result = await fetch("http://localhost:5000/staff");
    result = await result.json();
    setStaff(result);
  };

  return (
    <div className="float-right ml-4">
      <div className=" w-[75vw]">
        <div className="flex justify-between">
          {/* // Serch bar start */}
          <div className="w-[380px] mt-3 ml-3 rounded-sm border">
            <div className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden ">
              <div className="grid place-items-center h-full w-12 text-gray-300  ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>

              <input
                className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
                type="text"
                id="search"
                placeholder="Search something.."
              />
            </div>
          </div>
          {/* // Search bar end */}

          <div className="mt-2 mr-4">
            <img src={d1} />
          </div>

          {/* // Total Start */}
        </div>

        <div className="flex mt-8 ml-[20px] mr-[20px] p-2 gap-10 shadow-lg rounded">
          <div className="flex items-center ">
            <div className="bg-pink-400 rounded-full p-3 flex items-center">
              <img className="w-10 h-10 ml-[2px]" src={q1} />
            </div>
            <div className="ml-[15px]">
              <span>
                Total Staff
                <br />
                <b>{staff.length}</b>
              </span>
            </div>
          </div>

          <div className="ml-[60px]">
            <div className="flex items-center">
              <div className="bg-orange-400 rounded-full w-[70px] h-[70px] flex items-center p-3">
                <img className="w-10 h-10 " src={q2} />
              </div>
              <div className="ml-[15px]">
                <span>
                  Total Patients
                  <br />
                  <b>{patient.length}</b>
                </span>
              </div>
            </div>
          </div>

          <div className="ml-[60px]">
            <div className="flex items-center">
              <div className="bg-green-400 rounded-full w-[70px] h-[70px] flex items-center p-3">
                <img className="w-10 h-10 " src={q3} />
              </div>
              <div className="ml-[15px]">
                <span>
                  Total Appointments
                  <br />
                  <b>{Name.length}</b>{" "}
                </span>
              </div>
            </div>
          </div>

          <div className="ml-[60px]">
            <div className="flex items-center">
              <div className="bg-blue-400 rounded-full w-[70px] h-[70px] flex items-center p-3">
                <img className="w-10 h-10 " src={q4} />
              </div>
              <div className="ml-[15px]">
                <span>
                  Total Doctors
                  <br />
                  <b>{doctor.length}</b>{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* // Total End */}

        {/* Graph Start */}
        <div className=" w-[75vw] h-[30vh]  flex justify-center items-center gap-6 rounded-sm border">
          <div className="w-[35vw] h-[100px]">
            <Chart />
          </div>

          <div className="w-[35vw] h-[100px]">
            <Chart2 />
          </div>
        </div>
        {/* Graph End */}

        {/* Table Start */}

        {/* <div className="row" > */}
        <div className=" w-[75vw] h-[30vh] mt-[150px] flex justify-center items-center gap-6">
          <div className="w-[35vw] h-[100px]">
            <div className="h-96 overflow-y-scroll mt-8">
              <h5 className="text-[20px]">
                <b>Appointment</b>
                <button className="ml-[200px] text-sm">
                  Latest Appointment
                </button>
              </h5>

              <table className="table mt-4">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Gender</th>
                    <th>Date</th>
                    <th>Time</th>
                  </tr>
                </thead>
                <tbody>
                  {Name.map((ob) => (
                    <tr>
                      <td className="flex gap-2">
                        <img src={p1} />
                        {ob.Name}
                      </td>
                      <td>{ob.Gender}</td>
                      <td>{ob.Date}</td>
                      <td>{ob.Time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="w-[35vw] h-[100px] ">
            <PatientReivew />
          </div>
        </div>
        {/* </div> */}

        {/* Table End */}
      </div>
    </div>
  );
}
