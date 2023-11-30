import  { useState } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import qouteIcon from '../assets/qoute-icon.png'

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
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 my-6 md:my-10"><span>Clients Feedback</span></h2>
          {testimonials.length && (
            <section className='px-10 md:px-28 lg:px-40'>
              <div className="flex mx-auto shadow-md bg-custom-primary-blue rounded-lg">
                <div className="flex flex-col justify-between items-start flex-1 p-4 sm:p-8 md:px-16 md:py-8 rounded-lg transition-all duration-300 ease-in-out">
                  <div className='bg-custom-primary-yellow w-[60px] h-[60px] rounded-full mb-4 flex items-center justify-center '>
                    <img src={qouteIcon} alt="" className='w-[34px] h-[34px] ' />
                  </div>

                  <p className="text-base md:text-lg lg:text-2xl leading-6 md:leading-8 lg:leading-14 text-white font-base mb-8 md:mb-0 lg:mb-2">
                    {testimonials[currentIndex].feedback}
                  </p>
                  <div className='place-self-end self-end'>
                    <h4 className="font-bold text-gray-400 mt-8 font-serif">{testimonials[currentIndex].name}</h4>
                    <h5 className="text-gray-400 ">{testimonials[currentIndex].company}</h5>
                  </div>
                </div>
              </div>
    
              <div className="flex justify-center gap-3 items-center mt-4">
                <div className="group shadow-md hover:bg-custom-primary-blue hover:cursor-pointer hover:text-white rounded-full p-2 transition-transform ease-in duration-75 transform-gpu hover:scale-105" onClick={() => handleClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)}>
                    <HiChevronLeft size={30} />
                </div>

                <div className="group shadow-md hover:bg-custom-primary-blue hover:cursor-pointer hover:text-white rounded-full p-2 transition-transform ease-in duration-75 transform-gpu hover:scale-105" onClick={() => handleClick(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)}>
                    <HiChevronRight size={30} />
                </div>
              </div>
            </section>
          )}
        </>
      );
};

export default Testimonials