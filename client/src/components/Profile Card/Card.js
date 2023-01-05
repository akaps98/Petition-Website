import React, { useState } from "react";
import "./Card.css";
import Card from "react-bootstrap/Card";
import ModalContact from "../Modal Form Contact/ContactForm";
import EditBillboardModal from "../Edit Billboard Modal";

const ProfileCard = (props) => {
  const [signed, setSigned] = useState(props.signed);

  return (
    <Card className="box">
      <Card.Img
        variant="top"
        src={`data: ${props.billboardImg.contentType};base64, ${props.billboardImg.image}`}
        className="image-box"
      />
      <Card.Body>
        <Card.Title className="title">{props.title}</Card.Title>
        {props.current >= props.goal ? (
          <p className="guestmsg">
            <sub>The petition has completed</sub>
          </p>
        ) : !sessionStorage.getItem("token") ? (
          <p className="guestmsg">
            <sub>Please log in to sign the petiton</sub>
          </p>
        ) : props.billboardOwnerEmail != sessionStorage.getItem("userEmail") ? (
          signed.includes(sessionStorage.getItem("userEmail")) ? (
            <p className="guestmsg">
              <sub>You have already signed the petition</sub>
            </p>
          ) : (
            <ModalContact
              current={props.current}
              _id={props._id}
              signed={props.signed}
            />
          )
        ) : (
          <div>
            <p className="guestmsg">
              <sub>You cannot sign your own petition</sub>
            </p>
            <EditBillboardModal
              _id={props._id}
              title={props.title}
              type={props.type}
              area={props.area}
              price={props.price}
              description={props.description}
            />
          </div>
        )}
      </Card.Body>
    </Card>
  );
};

export default ProfileCard;
