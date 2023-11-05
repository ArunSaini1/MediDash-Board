import React, { useEffect, useState } from "react";
import "./Chart.css";

export default function Chart() {
  const [doctor, setDoctor] = useState([]);


  useEffect(() => {
    getDoctor();
  }, []);

  const getDoctor = async () => {
    let result = await fetch("http://localhost:5000/doctor");
    result = await result.json();
    setDoctor(result);
  };



  return (
    <div>
      <div className="barchart-Wrapper">
        <div className="barchart-TimeCol">
          <div className="barchart-Time">
            <span className="barchart-TimeText">25</span>
          </div>
          <div className="barchart-Time">
            <span className="barchart-TimeText">15</span>
          </div>
          <div className="barchart-Time">
            <span className="barchart-TimeText">10</span>
          </div>
          <div className="barchart-Time">
            <span className="barchart-TimeText">5</span>
          </div>
        
        </div>

        <div className="barChart-Container">
          <div className="barchart">

          {/* <b>{patient.length}</b> */}

            <div className="barchart-Col">
              <div
                className="barchart-Bar html-bar"
                style={{height:"25%"}}
              ></div>
              <div className="barchart-BarFooter">
                <span className="text-sm">Total Patients</span>
              </div>
            </div>



            <div className="barchart-Col">
              <div
                className="barchart-Bar css-bar"
                style={{ height: "80%" }}
              ></div>
              <div className="barchart-BarFooter">
                <span className="text-sm">Total Appointment</span>
              </div>
            </div>
            <div className="barchart-Col">
              <div
                className="barchart-Bar js-bar"
                style={{ height: "65%" }}
              ></div>
              <div className="barchart-BarFooter">
                <span className="text-sm">Total Doctors</span>
              </div>
            </div>
            <div className="barchart-Col">
              <div
                className="barchart-Bar python-bar"
                style={{ height: "10%" }}
              ></div>
              <div className="barchart-BarFooter">
                <span className="text-sm">Total Staff</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
