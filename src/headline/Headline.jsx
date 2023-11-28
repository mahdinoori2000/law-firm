import React from 'react';
import SubHeadline from './SubHeadline';
import headlineImage from '../assets/headline-img.jpg';

const Headline = () => {
  return (
    <div>

      <div className='h-full flex flex-col mx-auto justify-center w-[90%] items-center md:flex-row md:mt-[10vh]'>
        <div className='flex flex-col justify-center items-center md:w-[500px] mx-auto mt-10'>
          <h1 className='text-black text-2xl lg:text-4xl font-semibold mb-8'>Strategic Legal Solutions for Success - Taawon  Legal Services</h1>
          <p className='text-black text-lg md:text-2xl font-nomal mb-10'>Discover tailored legal expertise at Cooperative Legal Services. From expert case management to precise contract drafting, we're dedicated to your success with a focus on quality and collaboration. Your legal journey, our priority</p>
          <button type='button' className='bg-[#082f49] text-white px-4 py-2 mt-2 rounded-full self-start'>Click Here</button>
        </div>
        <img src={headlineImage} alt="healine image" className='md:h-[200px] lg:h-[400px] w-auto max-sm:hidden' />
      </div>
      <SubHeadline />
    </div>
  )
}

export default Headline