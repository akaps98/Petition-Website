import React from "react";
import { Link } from "react-router-dom";
import thumbnail from "../../assets/ElonMusk.jpg";
import "./card.css";

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

      <p className="title">{props.title}</p>
      <div class="box-content-bottom">
        <div class="box-bottom-left">
          <strong class="petition-signer-count theme-text-variant-3 cut-text">
            4,211{" "}
          </strong>
          <span class="theme-text-variant-5 cut-text">signatures </span>
        </div>

        <div class="box-bottom-right cut-text">
          <strong class="petition-days-left theme-text-variant-3 cut-text">
            197 days{" "}
          </strong>

          <span class="theme-text-variant-5 cut-text">remaining </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
