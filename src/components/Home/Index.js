import React from "react";
import "../Counter/counter.css";
import { useHistory } from "react-router-dom";

function Home() {
  const history = useHistory();

  return (
    <div className="home-outer-wrapper d-flex justify-content-center align-items-center">
      <button
        type="button"
        class="btn btn-primary btn-lg me-3"
        onClick={() => history.push("/employee")}
      >
        Employee
      </button>
      <button
        type="button"
        class="btn btn-secondary btn-lg ms-3"
        onClick={() => history.push("/counter")}
      >
        Counter
      </button>
    </div>
  );
}

export default Home;
