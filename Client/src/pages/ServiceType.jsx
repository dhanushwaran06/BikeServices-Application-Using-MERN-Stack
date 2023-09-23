import { useEffect, useState } from "react";
// import axios from 'axios';
import { Button } from "@mui/material";
import ServiceCard from "./ServicesCard";

function ServiceType() {
  const [services, setServices] = useState([]);
  const [selectedService, setSelectedService] = useState("");
  const [filteredServices, setFilteredServices] = useState([]);

  const providedServices = ["General Service", "Oil Change", "Water Wash"];


  useEffect(() => {
    axios.get('http://localhost:5000/services').then((response) => {
    console.log("__services", response.data)
    setServices(response.data);
  })
  }, []);

  useEffect(() => {
    setServices([
      {
        name: "Water wash",
        serviceType: "Water Wash",
        shop: "VR Motors",
        price: "500",
        mobile: "9988776655",
        location: "Gandhipuram",
      },
      {
        name: "Oil Change",
        serviceType: "Oil Change",
        shop: "VR Motors",
        price: "500",
        mobile: "9988776655",
        location: "Gandhipuram",
      },
      {
        name: "General Service",
        serviceType: "General Service",
        shop: "VR Motors",
        price: "500",
        mobile: "9988776655",
        location: "Gandhipuram",
      },
    ]);
  }, []);

  const onServiceChange = (selectedServiceType) => {
    setSelectedService(selectedServiceType);
    setFilteredServices(
      services.filter((service) => {
        return service.serviceType === selectedServiceType;
      }),
    );
  };

  return (
    <div className="">
      <div className="">
        {providedServices.map((service) => {
          return (
            <Button key={service} onClick={() => onServiceChange(service)}>
              {service}
            </Button>
          );
        })}
        {selectedService &&
          filteredServices.map((service) => {
            return <ServiceCard key={service.name} service={service} />;
          })}
        {!selectedService &&
          services.map((service) => {
            return <ServiceCard key={service.name} service={service} />;
          })}
        
      </div>
    </div>
  );
}

export default ServiceType;
