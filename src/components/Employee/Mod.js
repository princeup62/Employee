import { Button, Modal } from "react-bootstrap";
import React, { useState } from "react";

function Mod({ handleSubmit }) {
  const [show, setShow] = useState(false);

  const [AddInput, setAddInput] = useState({
    addName: "",
    addEmail: "",
    addPosition: "",
  });

  const [isDataBlank, setIsDataBlank] = useState(false);

  const handleInputChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    if (name === "iname") setAddInput({ ...AddInput, addName: value });
    else if (name === "imail") setAddInput({ ...AddInput, addEmail: value });
    else setAddInput({ ...AddInput, addPosition: value });
    console.log(AddInput);
  };

  const handleModalSubmit = () => {
    if (
      AddInput.addName.trim() !== "" &&
      AddInput.addEmail.trim() !== "" &&
      AddInput.addPosition.trim() !== ""
    ) {
      handleSubmit(AddInput.addName, AddInput.addEmail, AddInput.addPosition);
      setAddInput({ addName: "", addEmail: "", addPosition: "" });
      setShow(false);
    } else {
      setIsDataBlank(true);
    }
  };

  const handleClose = () => {
    setIsDataBlank(false);
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
    setIsDataBlank(false);
  };

  return (
    <>
      <Button variant="dark" onClick={handleShow}>
        New
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Enter employee details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div class="form-group">
            <label for="exampleInputEmail1">Name</label>
            <input
              name="iname"
              type="text"
              class="form-control"
              value={AddInput.addName}
              placeholder="name"
              onChange={handleInputChange}
            />
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Email</label>
            <input
              name="imail"
              type="text"
              class="form-control"
              value={AddInput.addEmail}
              placeholder="Email"
              onChange={handleInputChange}
            />
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">position</label>
            <input
              name="iposition"
              type="text"
              class="form-control"
              value={AddInput.addPosition}
              placeholder="Position"
              onChange={handleInputChange}
            />
          </div>
          {isDataBlank && (
            <h5 className="mx-auto my-3 text-danger">Can't save on blank</h5>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleModalSubmit}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Mod;
