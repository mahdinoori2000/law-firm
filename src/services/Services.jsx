import { services } from '../constants/services';
import ServiceCard from '../components/ServiceCard';

const Services = () => {
  return (
    <>
      <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 my-6 md:my-10">Services</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-2 md:grid-rows-2 md:grid-cols-3 justify-center justify-items-center gap-4 mt-6'>
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            icon={service.icon}
          />
        ))}
      </div>
    </>
  );
};

export default Services;
