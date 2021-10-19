import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-div pt-5 mt-5">
      <div className="row">
        <div className="img col-lg-3 ">
          <h3>Doctor Profile </h3>
          <hr />

          <div className="doctor-photo">
            <h3>Dr.Henry</h3>
            <p>MBBS, BCS</p>
            <img
              src="data:image/jpeg;base64,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"
              alt=""
            />
          </div>

          <div className="doctor-photo">
            <h3>Dr.Medison</h3>
            <p>MBBS, BCS</p>
            <img
              src="data:image/jpeg;base64,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"
              alt=""
            />
          </div>

          <div className="doctor-photo">
            <h3>Dr.Karina</h3>
            <p>MBBS, BCS</p>
            <img
              src="https://thumbs.dreamstime.com/b/doctor-holding-digital-tablet-meeting-room-portrait-beautiful-mature-woman-looking-camera-confident-female-using-164999229.jpg"
              alt=""
            />
          </div>

          <div className="doctor-photo">
            <h3>Dr.Lily</h3>
            <p>MBBS, BCS</p>
            <img src="https://wallpaperaccess.com/full/3750050.jpg" alt="" />
          </div>

          <div className="doctor-photo">
            <h3>Group </h3>

            <img
              src="https://www.pngfind.com/pngs/m/622-6222964_hospital-doctor-hd-png-download.png"
              alt=""
            />
          </div>
        </div>
        <div className="col-lg-9 ">
          <h3>News & Events</h3>
          <hr />
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="bg-light m-1 p-4">
                  <h5 className="text-danger">Notice</h5>
                  <p>
                    For physical Classes, students are requested to follow
                    COVID-19 Guideline <br />
                    <span className="text-danger">Post:12-09-2021</span>{" "}
                  </p>
                  <p>For physical classes, study... Read More</p>
                </div>
                <div className="bg-light m-1 p-4 ">
                  <h5 className="text-danger">Notice</h5>
                  <p>
                    1st, 2nd & 5th year Physical classes re-open on 13 September
                    2022
                    <br />
                    <span className="text-danger">Post:12-09-2021</span>{" "}
                  </p>
                  <p>For physical classes, study... Read More</p>
                </div>
                <div className="bg-light m-1 p-4">
                  <h5 className="text-danger">Notice</h5>
                  <p>
                    Inaugural Program for the students of 2020-2021 sessio, AMC
                    <br />
                    <span className="text-danger">Post:12-09-2021</span>{" "}
                  </p>
                  <p>This is to inform all the student... Read More</p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="bg-light m-1 p-4">
                  <h5 className="text-danger">Notice</h5>
                  <p>
                    16th batch MBBS students (sessin:2020-2021) are requested to
                    fill the form
                    <br />
                    <span className="text-danger">Post:31-09-2021</span>{" "}
                  </p>
                  <p>16th batch MBBS studens(S... Read More</p>
                </div>
                <div className="bg-light m-1 p-4">
                  <h5 className="text-danger">Notice</h5>
                  <p>
                    Inaugural Program for the students of 2020-2021 sessio, AMC
                    <br />
                    <span className="text-danger">Post:12-09-2021</span>{" "}
                  </p>
                  <p>This is to inform all the student... Read More</p>
                </div>
                <div className="bg-light m-1 p-4">
                  <h5 className="text-danger">Notice</h5>
                  <p>
                    Inaugural Program for the students of 2020-2021 sessio, AMC
                    <br />
                    <span className="text-danger">Post:12-09-2021</span>{" "}
                  </p>
                  <p>This is to inform all the student... Read More</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
