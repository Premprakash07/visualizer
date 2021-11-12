import "./App.css";
import React, { useEffect, useState } from "react";
import Main from "./components/Main";
import Sidenav from "./components/Sidenav";

function App() {
  const [arrSize, setArrSize] = useState(20);

  return (
    <div className="App">
      <Sidenav
        setArr={(value) => {
          setArrSize(value);
        }}
      />
      <Main arrSize={arrSize} />
    </div>
  );
}

export default App;
