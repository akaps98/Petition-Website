import React from "react";
import { Link } from "react-router-dom";
import thumbnail from "../../assets/ElonMusk.jpg";
import "./card.css";
import ProgressBar from "react-bootstrap/ProgressBar";

const Card = (props) => {
  return (
    <div className="col-12 col-sm-6 col-md-3 bg-light item-container ">
      <Link to={`/details/${props.id}`}>
        <div className="image-container">
          {props.billboardImg ? (
            <img
              src={`data: ${props.billboardImg.contentType};base64, ${props.billboardImg.image}`}
            />
          ) : (
            <img src={thumbnail} alt="item-thumbnail" />
          )}
        </div>
      </Link>

      <div className="title">
        <p className="title">{props.title}</p>
      </div>

      <div>
        <ProgressBar
          striped
          variant="success"
          now={Math.ceil(props.current / props.goal)}
        ></ProgressBar>
      </div>

      <div className="box-content-bottom">
        <div className="box-bottom-left">
          <strong className="petition-signer-count theme-text-variant-3 cut-text">
            {props.current}{" "}
          </strong>
          <span className="theme-text-variant-5 cut-text">signatures </span>
        </div>

        <div className="box-bottom-right cut-text">
          <strong className="petition-days-left theme-text-variant-3 cut-text">
            {props.day}{" "}
          </strong>

          <span className="theme-text-variant-5 cut-text">days remaining </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
