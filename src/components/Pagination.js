import React, { useState, useEffect } from "react";

function Pagination({ setPageSlice, showPerPage }) {
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    const value = showPerPage * counter;
    setPageSlice({ start: value - showPerPage, end: value });
  }, [counter]);

  const handleCounter = (e) => {
    const name = e.target.name;
    if (name === "next") {
      setCounter(counter + 1);
    } else {
      setCounter(counter - 1);
    }
  };

  return (
    <div className="my-5 d-flex justify-content-between">
      <button className="btn btn-primary" name="prev" onClick={handleCounter}>
        Prev
      </button>
      <button className="btn btn-primary" name="next" onClick={handleCounter}>
        Next
      </button>
    </div>
  );
}

export default Pagination;
