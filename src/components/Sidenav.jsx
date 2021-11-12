import React, { useState } from "react";
import "../css/sidenav.css";

function Sidenav(props) {
  const [arrSize, setarrSize] = useState(20);
  const [sizenum, setsizenum] = useState(20);
  const [sortvalue, setsortvalue] = useState("bubble");
  const handleArrSize = (e) => {
    const value = e.target.value;
    setarrSize(value);
    props.setArr(value);
    setsizenum(value);
  };

  const handlesortchange = (e) => {
    const value = e.target.value;
    setsortvalue(value);
  };

  const handlesizenum = (e) => {
    const value = e.target.value;
    setarrSize(value);
    props.setArr(value);
    setsizenum(value);
  };

  const startEvent = () => {
    console.log("hey");
    let elements = document.querySelectorAll(".arr-ele");
    const temp = elements[0].style.height;
    elements[0].style.height = elements[1].style.height;
    elements[1].style.height = temp;
  };

  return (
    <div id="sidenav">
      <div className="title">Visualizer</div>
      <div className="sidenav-container">
        <div className="setarrsize">
          <label htmlFor="array-size">
            <div className="size">Array size : </div>
          </label>
          <input
            type="range"
            name="arrSize"
            id="array-size"
            min="2"
            max="150"
            value={arrSize}
            onChange={handleArrSize}
          />
          <input
            type="number"
            name="sizenum"
            id="sizenum"
            value={sizenum}
            onChange={handlesizenum}
          />
        </div>
        <select
          name="sorting"
          id="sorting"
          className="sort-type"
          value={sortvalue}
          onChange={handlesortchange}
        >
          <option value="bubble">Bubble Sort</option>
          <option value="selection">Selection Sort</option>
          <option value="insertion">Insertion Sort</option>
          <option value="merge">Merge Sort</option>
        </select>
      </div>
      <div className="start-btn" onClick={startEvent}>
        Start
      </div>
    </div>
  );
}

export default Sidenav;
