import { IService } from "../../interfaces";
import Service from "./Service";

interface IServiceProps {
  services: Array<IService>;
}

const Services = ({ services }: IServiceProps) => {
  return (
    <ul>
      {services.map((service: IService) => (
        <Service key={service.id} service={service} />
      ))}
    </ul>
  );
};

export default Services;
