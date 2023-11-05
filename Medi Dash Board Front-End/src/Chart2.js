import React from "react";
import "./Chart2.css";

export default function Chart2() {
  return (
    <div>
      <div>
        <div className="barchart-Wrapper">
          <div className="barchart-TimeCol">
            <div className="barchart-Time">
              <span className="barchart-TimeText">900</span>
            </div>
            <div className="barchart-Time">
              <span className="barchart-TimeText">600</span>
            </div>
            <div className="barchart-Time">
              <span className="barchart-TimeText">300</span>
            </div>
            <div className="barchart-Time">
              <span className="barchart-TimeText">0</span>
            </div>
          </div>

          <div className="barChart-Container">
            <div className="barchart">
              <div className="barchart-Col">
                <div
                  className="barchart-Ba monday-bar"
                  style={{ height: "75%" }}
                ></div>
                <div className="barchart-BarFooter">
                  <span className="text-sm">M</span>
                </div>
              </div>
              <div className="barchart-Col">
                <div
                  className="barchart-Ba tuesday-bar"
                  style={{ height: "45%" }}
                ></div>
                <div className="barchart-BarFooter">
                  <span className="text-sm">T</span>
                </div>
              </div>
              <div className="barchart-Col">
                <div
                  className="barchart-Ba wednesday-bar"
                  style={{ height: "70%" }}
                ></div>
                <div className="barchart-BarFooter">
                  <span className="text-sm">W</span>
                </div>
              </div>
              <div className="barchart-Col">
                <div
                  className="barchart-Ba thrusday-bar"
                  style={{ height: "60%" }}
                ></div>
                <div className="barchart-BarFooter">
                  <span className="text-sm">T</span>
                </div>
              </div>

              <div className="barchart-Col">
                <div
                  className="barchart-Ba friday-bar"
                  style={{ height: "35%" }}
                ></div>
                <div className="barchart-BarFooter">
                  <span className="text-sm">F</span>
                </div>
              </div>

              <div className="barchart-Col">
                <div
                  className="barchart-Ba saturday-bar"
                  style={{ height: "15%" }}
                ></div>
                <div className="barchart-BarFooter">
                  <span className="text-sm">S</span>
                </div>
              </div>

              <div className="barchart-Col">
                <div
                  className="barchart-Ba sunday-bar"
                  style={{ height: "72%" }}
                ></div>
                <div className="barchart-BarFooter">
                  <span className="text-sm">S</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
