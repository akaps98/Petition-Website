import React, { useState } from "react";
import { Button, Form, FormGroup, Modal } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import { getResponse } from "../../middleware/response";
import axios from "axios";
import "./index.css";

function ModalContact() {
  const [owner] = useState(sessionStorage.getItem("userEmail"));
  const [title, setTitle] = useState("");
  const [type, setType] = useState("Sport");
  const [goal, setGoal] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const [mess, setMess] = useState("");
  const handleChangeType = (e) => {
    setType(e.target.value);
  };
  const onInputChange = (e) => {
    setFile(e.target.files[0]);
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const onFormSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("billboardImg", file);
    formData.append("owner", owner);
    formData.append("title", title);
    formData.append("type", type);
    formData.append("goal", goal);
    formData.append("description", description);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };

    await axios
      .post("http://localhost:5000/api/billboards/", formData, config)
      .then((res) => {
        alert(res.data);
      })
      .catch((err) => {
        console.log(err);
        alert(err.response.data);
      });
  };

  return (
    <>
      <Button className="btn-cus" variant="primary" onClick={handleShow}>
        Add New
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Your Petition</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={onFormSubmit}>
            <Form.Group
              className="mb-3"
              controlId="ModalContactForm.ControlInput1"
            >
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                name="billboard_tile"
                placeholder="Ex: Helping Tina"
                autoFocus
                required
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="ModalContactForm.ControlInput1"
            >
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="file"
                name="billboardImg"
                accept="image/*"
                required
                onChange={onInputChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="kindOfStand">
              <Form.Label>Category</Form.Label>
              <Form.Select
                aria-label="Default select example"
                value={type}
                required
                onChange={handleChangeType}
              >
                <option disabled>Category of the petiton</option>
                <option value="Sport">Sport</option>
                <option value="Education">Education</option>
                <option value="Environment">Environment</option>
                <option value="Animal">Animal</option>
                <option value="Health">Health</option>
              </Form.Select>
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="ModalContactForm.ControlInput1"
            >
              <Form.Label>Goal</Form.Label>
              <InputGroup>
                <Form.Control
                  type="number"
                  placeholder="Enter your goal"
                  required
                  onChange={(e) => {
                    setGoal(e.target.value);
                  }}
                />
                <InputGroup.Text>Signatures</InputGroup.Text>
              </InputGroup>
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="ModalContactForm.ControlTextarea1"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                required
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              />
            </Form.Group>
            {/* <input type="submit"/> */}
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={onFormSubmit}>
            Send
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalContact;
