import React from "react";
import "./useServices.css";

const UseServices = (props) => {
  const { name, kind, picture, desc } = props.uService;
  return (
   
        <div className="singleServiceDiv">
         <div className="relative">
         <h5>{name}</h5>
          <h6>{kind}</h6>
          <img src={picture} alt="" />
          <p>{desc}</p>
         </div>          
            <button className="button">Details</button>         
        </div>
       
   
  );
};

export default UseServices;
