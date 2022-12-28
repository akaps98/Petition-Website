import React from "react";
import { Link } from "react-router-dom";
import { getResponse } from "../../middleware/response";
import thumbnail from "../../assets/ElonMusk.jpg";
import "./card.css";

const CardAd = (props) => {
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

  const approve = (e, id) => {
    e.preventDefault();
    try {
      if (!window.confirm("Are you sure you want to approve this petition?")) {
        return;
      }

      fetch(`http://localhost:5000/billboards/approve`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: props.id,
          status: "Checked"
        }),
      }).then((res) => getResponse(res));
    } catch (err) {
      console.error(err);}
  }

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

      <div className="btn-contain">
        <button
          className="btn btn-danger float-left"
          onClick={(e) => deleteBillboard(e, props.id)}
        >
          Delete
        </button>
        {props.status == "Unchecked" ? (
          <button
            className="btn btn-success float-right"
            onClick={(e) => approve(e, props.id)}
          >
            Approve
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default CardAd;
