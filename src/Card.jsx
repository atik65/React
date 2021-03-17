import React from "react";
import { NavLink } from "react-router-dom";

const Card = (props) => {
  return (
    <>
      <div
        className="card ml-5 col-md-4 my-3"
        style={{ width: "18rem", marginLeft: "auto", marginRight: "auto" }}
      >
        <img src={props.imgsrc} className="card-img-top" alt="nothing" />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.title}</p>
          <NavLink to="/" className="btn btn-sm btn-outline-success card-btn">
            Go Home
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Card;
