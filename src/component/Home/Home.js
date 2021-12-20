import Carousel from "react-bootstrap/Carousel";
import Service from "../Service/Service";
import useAuth from "../../hooks/useAuth";
import "./Home.css";

const Home = () => {
  const { services } = useAuth();
  const newService = services?.slice(0, 6);

  return (
    <div>

      <div>
        <Carousel variant="white">
          <Carousel.Item>
            <img
              className="carousel-image d-block w-100"
              src="https://media.wired.com/photos/592718cfaf95806129f519ae/master/pass/elam-cuba-186287864.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h1>EXCELENT HEALTH CARE AND EDUCATION </h1>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="carousel-image d-block w-100"
              src="https://thumbs.dreamstime.com/b/emergency-hospital-building-17898688.jpg"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h1>FOREIGN STUDENTS FROM DEFFERENTS COUNTRIES</h1>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="carousel-image d-block w-100"
              src="https://c8.alamy.com/comp/EE1N3Y/dhaka-bangladesh-13th-jan-2015-graduated-students-celebrate-during-EE1N3Y.jpg"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h1>WELLCOME TO ARIF MEDICAL COLLEGE & HOSPITAL</h1>
              <h4>ENTER TO LEARN, LEAVE TO SERVE</h4>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      <div className="container">
        <div className="row ">
          <div className="first-div mt-1 col-lg-6 bg-light pt-4 ">
            <h2>Facilities of AMC</h2>
            <hr />
            <ol>
              <li> Office space for college administration and management.</li>
              <li>
                Adequate classroom for all departments compatible for small
                group teaching
              </li>
              <li>Well equipped lecture galleries of international standard</li>
              <li>
                Adequate number of books with IT facilities in library for
                students
              </li>
              <li>Library with research facilities for teachers</li>
              <li>Auditorium and common room for the students</li>
              <li>Hostel facilities for students</li>
              <li>Well equipped laboratories for different departments.</li>
              <li>Well equipped laboratories for different departments.</li>
              <li>Prayer facilities for staffs and students.</li>
              <li>
                Cafeteria for students, doctors, staff and others at hospital
                premises.
              </li>
            </ol>
          </div>
          <div className="first-div academic-wave col-lg-6">
            <h2 className="text-white"> Academic Wave of AMC</h2>
            <p className="text-white">
              Academic division is responsible for teaching medical students in
              accordance with the curriculum laid down by Bangladesh Medical Dental
              provides a structured process of institutional teaching .........Red
              More
            </p>

            <p className="text-white">
              1. Phase I (1.5 Year) including First Professional Examination.
              Subjects are Anatomy, Physiology and Biochemistry. 2. Phase II (1
              Microbiology. 4. for each written paper and two half an hour for the
              SAQ questions. Pass mark 60%. Hons. Mark 85%.....Read More
            </p>
          </div>
        </div>
      </div>

      <div className="service-container">
        {newService.map((service) => (
          <Service service={service}></Service>
        ))}
      </div>




    </div>
  );
};

export default Home;
