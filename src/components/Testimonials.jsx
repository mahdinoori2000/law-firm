import { useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import lawyer from "../assets/lawyer.png";
import lawyer2 from "../assets/lawyer2.jpg";
import lawyer3 from "../assets/lawyer3.jpg";

const testimonials = [
  {
    name: "Eva Rodriguez",
    company: "Bright Ideas Inc.",
    feedback:
      "Sincere appreciation for Taawon Law Firm, especially Mohsen. His collaboration and effective communication played a crucial role in our legal success.",
    img: lawyer,
  },
  {
    name: "Andrew Thompson",
    company: "Tech Innovators Co.",
    feedback:
      "Outstanding experience with Taawon Law Firm. Mohsen's exceptional problem-solving and quick resolution of complex legal issues, along with precise and timely communication.",
    img: lawyer2,
  },
  {
    name: "Susan Martinez",
    company: "Innovate Solutions Ltd.",
    feedback:
      "Highly positive experience with Taawon Law Firm, particularly with Mohammad Mohsen Haidari. Mohsen's talent, passion, and innovative legal solutions were invaluable to our success.",
    img: lawyer3,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="py-32">
      <h2 className="text-3xl font-bold text-center text-gray-800 my-6 mb-16 md:my-10 md:mb-24 md:text-4xl">
        Clients Feedback
      </h2>
      {testimonials.length && (
        <section className="px-10 md:px-28 lg:px-40">
          <div className="flex mx-auto">
            <div className="flex flex-col justify-between items-start flex-1 p-4 sm:p-8 md:px-16 md:py-8 rounded-lg transition-all duration-300 ease-in-out">
              <div className="w-full flex items-center justify-center mb-12">
                <img
                  src={testimonials[currentIndex].img}
                  alt={`${testimonials[currentIndex].name} Image`}
                  className="h-48 w-48 rounded-[50%]"
                />
              </div>
              <p className="text-xl text-center leading-7 text-gray-500 font-base mb-8 md:text-lg md:mb-0 md:leading-8 lg:leading-14 lg:text-2xl lg:mb-2">
                {testimonials[currentIndex].feedback}
              </p>
              <div className="self-center">
                <h4 className="font-bold text-gray-400 mt-8 font-serif mb-2">
                  {testimonials[currentIndex].name}
                </h4>
                <h5 className="text-gray-400 mb-8">
                  {testimonials[currentIndex].company}
                </h5>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-3 items-center mt-4">
            <button
              type="button"
              className="group shadow-md hover:bg-custom-primary-blue hover:cursor-pointer hover:text-white rounded-full p-2 transition-transform ease-in duration-75 transform-gpu hover:scale-105"
              onClick={() =>
                handleClick(
                  currentIndex === 0
                    ? testimonials.length - 1
                    : currentIndex - 1
                )
              }
            >
              <HiChevronLeft size={30} />
            </button>

            <button
              type="button"
              className="group shadow-md hover:bg-custom-primary-blue hover:cursor-pointer hover:text-white rounded-full p-2 transition-transform ease-in duration-75 transform-gpu hover:scale-105"
              onClick={() =>
                handleClick(
                  currentIndex === testimonials.length - 1
                    ? 0
                    : currentIndex + 1
                )
              }
            >
              <HiChevronRight size={30} />
            </button>
          </div>
        </section>
      )}
    </div>
  );
};

export default Testimonials;
