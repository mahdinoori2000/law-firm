const ServiceCard = ({ title, description, icon }) => {
  return (
    <section className="px-5">
      <div className='w-full text-center flex gap-5  justify-start sm:flex-col sm:w-full lg:w-[300px] sm:h-[250px] md:gap-5 md:justify-center items-center p-4 bg-[rgba(22,22,22,0.1)] shadow-lg cursor-pointer hover:bg-gray-100 hover:shadow-xl transition duration-300 ease-in-out'>
        <img src={icon} alt="services icon" className='w-16 h-16' />
        <div>
          <h3 className='font-bold text-lg'>{title}</h3>
          <p className="text-left sm:text-center">{description}</p>
        </div>
      </div>
    </section>
  );
};

export default ServiceCard;
