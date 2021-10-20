import { useEffect, useState } from "react";
import UseServices from "../component/UseServices/UseServices";
import "./services.css";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <div className="services-container">
        {services.map((uService) => (
          <UseServices uService={uService}></UseServices>
        ))}
      </div>
    </div>
  );
};

export default Services;
