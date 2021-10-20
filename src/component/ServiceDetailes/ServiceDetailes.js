import React from "react";
import { useParams } from "react-router";
import useAuth from "../../hooks/useAuth";

const ServiceDetailes = () => {
  const { serviceId } = useParams();
  const { services } = useAuth();

  const singleService = services?.find(
    (service) => service.id === parseInt(serviceId)
  );
  return (
    <div>
      <img src={singleService.picture} alt="" />
      <h2>{singleService.name} </h2>
      <p>{singleService.desc}</p>
    </div>
  );
};

export default ServiceDetailes;
