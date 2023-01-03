import React from "react";
import { Link } from "react-router-dom";
import thumbnail from "../../assets/ElonMusk.jpg";
import "./card.css";
import ProgressBar from "react-bootstrap/ProgressBar";
import { getResponse } from "../../middleware/response";

const Card = (props) => {
  const deleteBillboard = (e, id) => {
    e.preventDefault();
    try {
      if (!window.confirm("Are you sure you want to delete this petition?")) {
        return;
      }

      fetch(`http://localhost:5000/billboards/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => getResponse(res));
    } catch (err) {
      console.error(err);
    }
  };

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

      {props.owner == sessionStorage.getItem("userEmail") ? (
        <div className="btn-contain">
          <button
            className="btn btn-danger float-right"
            onClick={(e) => deleteBillboard(e, props.id)}
          >
            Delete
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default Card;
