import React from 'react'
import SubImage from '../assets/heahline-second-image.jpg'

const SubHeadline = () => {
  return (
    <div className='flex flex-col md:flex-row justify-center items-center mt-10 md:mt-20 gap-10 md:gap-20 bg-[#082f49] py-10'>
        <div className='w-[90%] md:w-[300px]'>
            <h3 className='text-lg text-gray-200 font-semibold mb-4'>Guiding Your Path to Prosperity with Insightful Legal Consular Expertise</h3>
            <p className='text-gray-300 text-base'>At Taawon Legal Consular, we offer more than just services – we provide expert guidance tailored to your success. Navigate complexities, draft impactful contracts, and thrive with our dedicated support</p>
        </div>
        <img src={SubImage} alt="Sub headline image" className='h-[200px] w-auto md:w-auto' />
    </div>
  )
}

export default SubHeadline;