import React from "react";
import { Link } from "react-router-dom";
import "./Service.css";

const Service = (props) => {
  const { id, name, picture, desc, kind } = props.service;
  return (
    
        <div className="single-div">
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
     
  );
};

export default Service;
