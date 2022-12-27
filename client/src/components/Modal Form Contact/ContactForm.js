import React, { useEffect, useState } from 'react';
import {Button} from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import {Modal} from 'react-bootstrap';
import { getResponse } from "../../middleware/response";
import './ContactForm.css';

function ModalContact(props) {
  const [show, setShow] = useState(false);
 
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      fetch(`http://localhost:5000/billboards/edit/${props._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          current: props.current + 1,
          signer: sessionStorage.getItem("userEmail")
        }),
      }).then((res) => getResponse(res));
    } catch (err) {
      console.error(err);
    }
  };


  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Sign the petition
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sign the petition</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Pressing the Sign button means you agree to support this petition <br />
          Thank you for your support
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Sign
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalContact;