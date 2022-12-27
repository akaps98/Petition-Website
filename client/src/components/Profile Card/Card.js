import React from "react";
import "./Card.css";
import Card from "react-bootstrap/Card";
import ModalContact from "../Modal Form Contact/ContactForm";
import EditBillboardModal from "../Edit Billboard Modal";

const ProfileCard = (props) => {

  return (
    <Card className="box">
      <Card.Img
        variant="top"
        src={`data: ${props.billboardImg.contentType};base64, ${props.billboardImg.image}`}
        className="image-box"
      />
      <Card.Body>
        <Card.Title className="title">{props.title}</Card.Title>
        {/* I think 'goal status' should be here */}
        {/* <Card.Text>{card.text}</Card.Text> */}

        {/* If owner, not showing Contact button */}
        {!sessionStorage.getItem("token") ? (
            <p className="guestmsg">
            <sub>Please log in to sign</sub></p>
        ) : props.billboardOwnerEmail != sessionStorage.getItem("userEmail") ? (
          <ModalContact billboardID={props._id} billboardOwnerEmail={props.billboardOwnerEmail} />
        ) : (
          <EditBillboardModal _id={props._id} title={props.title} type={props.type} area={props.area} price={props.price} description={props.description}/>
        )}
       
      </Card.Body>
    </Card>
  );
};

export default ProfileCard;
