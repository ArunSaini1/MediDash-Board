import React from "react";
import { Link } from "react-router-dom";
import Vector from "../src/Images/Vector.svg";
import Dash from "../src/Images/Dash.svg";
import staff from "../src/Images/staff.svg";
import patient from "../src/Images/Patient.svg";
import doctor from "../src/Images/Doctor.svg";
import slot from "../src/Images/Disable.svg";
import appointment from "../src/Images/App.svg";
import medicine from "../src/Images/Medicine.svg";
import logout from "../src/Images/Log.svg";

export default function Nav() {
  return (
    <>
      <div className="row">
        <div className="w-[22vw] h-[800px] bg-black">
          <div className=" text-white border-b-2">
            <div className="ml-3 flex flex-col justify-center items-center mt-3">
              <h3>XYZ Clinic</h3>
            </div>
            <hr />
          </div>
          <hr />
          <div>
            <ul className="text-white text-center ml-4   ">
              <li className=" mt-2 p-1 border-l-2 border-l-white-500	">
                <Link className=" text-white flex  mr-3" to="/">
                  <img className="ml-5 mr-3" src={Dash} />
                  DashBoard
                </Link>
              </li>
              <li className="mt-2 p-1">
                <Link className="flex text-white" to="/staff">
                  <img className="  ml-5 mr-3" src={staff} />
                  Staff
                </Link>
              </li>
              <li className="mt-2 p-1">
                <Link className="flex text-white" to="/patient">
                  <img className=" ml-5 mr-3" src={patient} />
                  Patient
                </Link>
              </li>
              <li className="mt-2 p-1">
                <Link className="flex text-white" to="/doctors">
                  <img className="ml-5 mr-3" src={doctor} />
                  Doctors
                </Link>
              </li>
              <li className="mt-2 p-1">
                <Link className="flex text-white" to="/disableslots">
                  <img className="ml-5 mr-3" src={slot} />
                  Disable Slots
                </Link>
              </li>
              <li className="mt-2 p-1">
                <Link className="flex text-white " to="/appointment">
                  <img className="ml-5 mr-3" src={appointment} />
                  Appointment
                </Link>
              </li>
              <li className="mt-2 p-1">
                <Link className="flex text-white" to="/medicine">
                  <img className="ml-5 mr-3" src={medicine} />
                  Medicine
                </Link>
              </li>
              <li className="mt-2 p-1">
                <Link className="flex text-white" to="/logout">
                  <img className="ml-5 mr-3" src={logout} />
                  Logout
                </Link>
              </li>
            </ul>
          </div>
          <div className="mt-20 rounded-lg ml-[60px] mr-[30px] flex flex-col justify-center items-center w-[250px]  h-60  bg-white">
            <div className="">
              <img src={Vector} />
            </div>

            <div className="mt-2">
              <h5>Appointment</h5>
            </div>
            <span className="ml-4">Would you like to make a</span>
            <span>new appointment to ? </span>
            <br />
            <Link to="/appointment">
              {" "}
              <button className=" bg-black w-[120px] h-10 rounded-lg text-white">
                <b>Boot an App</b>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
