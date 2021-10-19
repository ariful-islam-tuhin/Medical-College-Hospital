import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <div className=" footer">
        <div className="row">
          <div className="col-lg-4 ">
            <h5>About Us</h5>
            <p>
              Arif Medical College and Hospital is a state of the art teaching
              and medical facility with a unique architectual design throughout
              its 3 high-rise buildings built on 130,00 square feet of land in
              the heart of Sylhet .....Read More
            </p>
          </div>
          <div className="col-lg-2 ">
            <h5>College Facilities</h5>
            <p>
              {" "}
              <Link to="/home">Auditorium</Link>{" "}
            </p>
            <p>
              {" "}
              <Link to="/about">Computer Lab</Link>{" "}
            </p>
            <p>
              {" "}
              <Link to="/contact">e-library</Link>{" "}
            </p>
            <p>
              {" "}
              <Link to="/contact">Hostel</Link>{" "}
            </p>
          </div>
          <div className="col-lg-2 ">
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
          <div className="col-lg-4 last-footer ">
            <h5>Contact Us</h5>
            <p>
              Location:Sylhet,Bangladesh <br />
              Academic contact:+088 645-747474 <br />
              Mobile Number:+088645747474 <br />
              Mobile Number:+088645747474 <br />
              Mobile Number:+088645747474 <br />
              Hospital Contact:+088645747474 <br />
              FAX Number:+0886458774 <br />
              Email Address:info@amc.edu.bd
            </p>
          </div>
        </div>
      </div>
      <p className="last-fotter">
        © Copyright by AMC - all rights reserved. Developed by Arif.
      </p>
    </div>
  );
};

export default Footer;
