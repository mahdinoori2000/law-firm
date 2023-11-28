import React, { useState } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

const testimonials = [
    {
      name: 'Eva Rodriguez',
      company: 'Bright Ideas Inc.',
      feedback: 'Sincere appreciation for Taawon Law Firm, especially Mohsen. His collaboration and effective communication played a crucial role in our legal success. Highly recommend for contract law, litigation, and legal research, recommended for contract negotiation.'
    },
    {
      name: 'Andrew Thompson',
      company: 'Tech Innovators Co.',
      feedback: 'Outstanding experience with Taawon Law Firm. Mohsen\'s exceptional problem-solving and quick resolution of complex legal issues, along with precise and timely communication, make them highly recommended for contract negotiation, intellectual property, and corporate law.'
    },
    {
      name: 'Susan Martinez',
      company: 'Innovate Solutions Ltd.',
      feedback: 'Highly positive experience with Taawon Law Firm, particularly with Mohammad Mohsen Haidari. Mohsen\'s talent, passion, and innovative legal solutions were invaluable to our success. Highly recommended for their legal expertise and client-focused approach.'
    }
  ];
  
  

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const handleClick = (index) => {
        setCurrentIndex(index);
    };


    return (
        <>
          <h2 className="text-center mb-8 mt-20 text-xl md:text-3xl"><span>Testimonials</span></h2>
          {testimonials.length && (
            <>
              <div className="flex w-[60vw] mx-auto shadow-md bg-[#082f49] shadow-lg rounded-lg">
                <div className="flex flex-col justify-between items-start flex-1 p-8 rounded-lg transition-all duration-300 ease-in-out">
                  <p className="text-base md:text-lg lg:text-2xl leading-6 md:leading-8 lg:leading-14 text-white font-base mb-8 md:mb-0 lg:mb-2">
                    {testimonials[currentIndex].feedback}
                  </p>
                  <div>
                    <h4 className="font-semibold text-gray-200 mt-8">{testimonials[currentIndex].name}</h4>
                    <h5 className="text-gray-200 mt-1">{testimonials[currentIndex].company}</h5>
                  </div>
                </div>
              </div>
    
              <div className="flex justify-center gap-3 items-center mt-4">
                <div className="group shadow-md hover:bg-[#082f49] rounded-full p-2 transition-transform ease-in duration-75 transform-gpu hover:scale-105" onClick={() => handleClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)}>
                    <HiChevronLeft size={30} />
                </div>

                <div className="group shadow-md hover:bg-[#082f49] rounded-full p-2 transition-transform ease-in duration-75 transform-gpu hover:scale-105" onClick={() => handleClick(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)}>
                    <HiChevronRight size={30} />
                </div>
              </div>
            </>
          )}
        </>
      );
};

export default Testimonials