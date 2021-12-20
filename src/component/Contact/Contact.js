import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="row p-4  bg-dark">
        <div className="col-lg-6 col-md-6 ">
            <h5>Social Links</h5>
            <p>
              {" "}
              <Link to="/contact">Facebook</Link>{" "}
            </p>
            <p>
              {" "}
              <Link to="/contact">Twitter</Link>{" "}
            </p>
            <p>
              {" "}
              <Link to="/contact">Linkedin</Link>{" "}
            </p>
            <p>
              {" "}
              <Link to="/contact">Youtube</Link>{" "}
            </p>
          </div>

      <p className="p-4 col-md-6 col-lg-6 text-white">
              Location:Sylhet,Bangladesh <br />
              Academic contact:+088 645-747474 <br />
              Mobile Number:+088645747474 <br />          
              Hospital Contact:+088645747474 <br />
              FAX Number:+0886458774 <br />
              Email Address:info@amc.edu.bd
            </p>
    </div>
  );
};

export default Contact;
