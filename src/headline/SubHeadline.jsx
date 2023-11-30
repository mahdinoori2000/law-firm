import judgePic from '../assets/judgment-and-lawyer.png'
const SubHeadline = () => {
  return (
    <div className='flex flex-col md:flex-row justify-center items-center mt-10 md:mt-20 md:mb-20 gap-3 md:gap-10 lg:gap-20 bg-custom-primary-blue py-10'>
        <div className='w-[90%] md:w-[300px]'>
            <h3 className='text-lg text-gray-200 font-semibold mb-4'>Navigating Prosperity Through Expert Legal Guidance</h3>
            <p className='text-gray-300 text-base mb-4'>At Taawon Legal Consular, our commitment goes beyond services — we offer expert guidance tailored to ensure your success. Navigate legal complexities with confidence, benefit from impactful contract drafting, and thrive with our unwavering support. Your path to prosperity starts with our insightful legal counsel.</p>
            <button type='button' className='bg-custom-primary-yellow text-white px-4 py-2 mt-2 self-start flex items-center gap-4'>Discover Our Approach</button>
        </div>
        <img src={judgePic} alt="Sub headline image" className='max-md:hidden px-3 lg:px-2 h-[250px] w-auto md:w-auto' />
    </div>
  )
}

export default SubHeadline;