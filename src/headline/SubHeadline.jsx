import judgePic from '../assets/judgment-and-lawyer.png';
import { useTranslation } from 'react-i18next';

const SubHeadline = () => {
  const { t } = useTranslation();

  return (
    <div className='flex flex-col md:flex-row justify-center items-center mt-10 md:mt-20 md:mb-20 gap-3 md:gap-10 lg:gap-20 bg-custom-primary-blue py-10'>
        <div className='w-[90%] md:w-[300px]'>
            <h3 className='text-lg text-gray-200 font-semibold mb-4'>{t('subHeadline.title')}</h3>
            <p className='text-gray-300 text-base mb-4'>{t('subHeadline.description')}</p>
            <button type='button' className='bg-custom-primary-yellow text-white px-4 py-2 mt-2 self-start flex items-center gap-4'>{t('subHeadline.buttonText')}</button>
        </div>
        <img src={judgePic} alt="Sub headline image" className='max-md:hidden px-3 lg:px-2 h-[250px] w-auto md:w-auto' />
    </div>
  );
}

export default SubHeadline;
