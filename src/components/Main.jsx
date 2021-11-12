import React, { useEffect, useState } from "react";
import "../css/main.css";

function Main({ arrSize }) {
  const [arr, setArr] = useState([]);

  let newArr = [];
  const randomArr = () => {
    for (let i = 0; i < arrSize; i++) {
      let val = Math.floor(Math.random() * 101) + 2;
      newArr.push(val);
    }
    setArr(newArr);
  };
  let hei = "10px";

  useEffect(() => {
    randomArr();
  }, [arrSize]);

  return (
    <div id="main">
      {arr.map((val, idx) => (
        <div className="ele-container">
          <div
            key={idx}
            className="arr-ele"
            style={{
              height: `${
                (val * (document.getElementById("main").clientHeight - 100)) /
                100
              }px`,
            }}
          ></div>
          <div className="ele-label">{val}</div>
        </div>
      ))}
    </div>
  );
}

export default Main;
