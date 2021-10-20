import React from "react";
import "./useServices.css";

const UseServices = (props) => {
  const { name, kind, picture, desc } = props.uService;
  return (
    <div className="container">
      <div className="single-service">
        <div className="singleServiceDiv">
          <h5>{name}</h5>
          <h6>{kind}</h6>
          <img src={picture} alt="" />
          <p>{desc}</p>
          <button className="button">Details</button>
        </div>
      </div>
    </div>
  );
};

export default UseServices;
