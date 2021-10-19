import React from "react";
import "./Service.css";

const Service = (props) => {
  const { name, picture, desc, kind } = props.service;
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
        </div>
      </div>
    </div>
  );
};

export default Service;
