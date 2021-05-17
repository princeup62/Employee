import React, { useState } from "react";
import "./counter.css";
import AddIcon from "@material-ui/icons/Add";
import RotateLeftIcon from "@material-ui/icons/RotateLeft";

function Index() {
  const [counter, setCounter] = useState(0);

  const handleCounter = (e) => {
    const name = e.target.name;
    if (name === "add") setCounter(counter + 1);
    else setCounter(0);
  };

  return (
    <div className="counter-outer-wrapper d-flex justify-content-center align-items-center text-center">
      <div className="counter-content-wrapper">
        <h1 style={{ fontSize: "6rem" }}>{counter}</h1>

        <div className="counter-btn-wrappper">
          <button
            className="btn btn-primary me-2 btn-lg "
            name="add"
            onClick={handleCounter}
          >
            <AddIcon />
          </button>
          <button
            className=" btn btn-danger ms-2 btn-lg "
            name="reset"
            onClick={handleCounter}
          >
            <RotateLeftIcon />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Index;
