import React from "react";
import { Link } from "react-router-dom";
import "./Service.css";

const Service = (props) => {
  const { id, name, picture, desc, kind } = props.service;
  return (
    <div className="row ">
      <div className="single-servic">
        <div className="singleServiceDiv">
          <div className="lineHeight">
            <h4>{name}</h4>
            <p>{kind}</p>
          </div>
          <img src={picture} alt="" />
          <p>{desc}</p>
          <Link to={`/serviceDetailes/${id}`}>
            <button className="button">Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
