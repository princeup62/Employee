import React, { useState, useEffect } from "react";

function Pagination({ setPageSlice, showPerPage, empData }) {
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    const value = showPerPage * counter;
    setPageSlice({ start: value - showPerPage, end: value });
  }, [counter]);

  const handleCounter = (e) => {
    const name = e.target.name;
    if (name === "next") {
      if (counter < Math.ceil(empData.length / showPerPage))
        setCounter(counter + 1);
    } else {
      if (counter === 1) setCounter(1);
      else setCounter(counter - 1);
    }
  };

  return (
    <div className="my-5 d-flex justify-content-between">
      <button className="btn btn-primary" name="prev" onClick={handleCounter}>
        {`<<`}
      </button>
      <button className="btn btn-primary" name="next" onClick={handleCounter}>
        {`>>`}
      </button>
    </div>
  );
}

export default Pagination;
