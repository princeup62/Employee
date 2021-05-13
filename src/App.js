import React, { useState, useEffect } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Pagination from "./components/Pagination";
import Mod from "./components/Mod";

function App() {
  const [empData, setEmpData] = useState([]);
  const [AddInput, setAddInput] = useState({
    addName: "",
    addEmail: "",
    addPosition: "",
  });

  const [showPerPage, setShowpPerPage] = useState(4);
  const [pageSlice, setPageSlice] = useState({ start: 0, end: showPerPage });

  useEffect(() => {
    fetch("https://609a7fee0f5a13001721b38f.mockapi.io//Employee").then(
      (response) => {
        response.json().then((result) => {
          setEmpData(result);
        });
      }
    );
  }, []);

  const handleInputChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    if (name === "iname") setAddInput({ ...AddInput, addName: value });
    else if (name === "imail") setAddInput({ ...AddInput, addEmail: value });
    else setAddInput({ ...AddInput, addPosition: value });
    console.log(AddInput);
  };

  const handleSubmit = (name, email, position) => {
    const data = {
      Name: name,
      Email: email,
      Position: position,
    };

    setAddInput({ addName: "", addEmail: "", addPosition: "" });

    fetch("https://609a7fee0f5a13001721b38f.mockapi.io//Employee", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((result) => result.json())
      .then((response) => {
        setEmpData([...empData, response]);
        alert("data submitted");
      });
  };

  return (
    <div className="container text-center">
      <h1 className="my-5 text-primary">Employee</h1>
      <div className="row">
        <table className="table table table-striped table-bordered">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Position</th>
            </tr>
          </thead>
          <tbody>
            {empData.slice(pageSlice.start, pageSlice.end).map((e) => (
              <tr key={e.id}>
                <th scope="row">{e.id}</th>
                <td>{e.Name}</td>
                <td>{e.Email}</td>
                <td>{e.Position}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination
        setPageSlice={setPageSlice}
        showPerPage={showPerPage}
        empData={empData}
      />
      <Mod handleSubmit={handleSubmit} />
    </div>
  );
}

export default App;
