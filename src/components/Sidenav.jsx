import React from "react";
import '../css/sidenav.css'

function Sidenav() {
  return <div id="sidenav">
      <div className="title">Visualizer</div>
      <div className="sidenav-container">
          <label htmlFor="array-size">
              <div className="size">Array size : </div>
          </label>
          <input type="range" name="array-size" id="array-size" />
      </div>
  </div>;
}

export default Sidenav;
