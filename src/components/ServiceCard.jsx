import React from 'react';

const ServiceCard = ({ title, description, icon }) => {
  return (
    <div className='w-[200px] sm:w-[250px] lg:w-[300px] h-auto text-center flex flex-col md:gap-3 justify-center items-center p-4 bg-[rgba(22,22,22,0.1)] shadow-lg cursor-pointer hover:bg-gray-100 hover:shadow-xl transition duration-300 ease-in-out'>
      <img src={icon} alt="services icon" className='w-16 h-16' />
      <h3 className='font-bold'>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ServiceCard;
