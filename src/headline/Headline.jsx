import { useTranslation } from 'react-i18next';
import SubHeadline from './SubHeadline';
import headlineImage from '../assets/headline-img.jpg';

const Headline = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div className='h-full flex mb-16 flex-col mx-auto justify-center w-[90%] items-center md:flex-row md:mb-40 md:mt-[10vh]'>
        <div className='m-auto flex mt-20 gap-4 items-center'>

          <div className='flex flex-col justify-center items-start md:w-[500px] mx-auto mt-10'>
            <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold mb-8 leading-12'>
              {t('headline.title')}
            </h1>
            <p className='text-zinc-800 text-[16px] font-normal mb-10'>
              {t('headline.description')}
            </p>
            <button type='button' className='bg-custom-primary-blue hover:bg-custom-secondary-blue text-white px-6 py-2 mt-2 self-start flex items-center gap-4'>
              {t('headline.buttonText')}
            </button>
          </div>
          <img src={headlineImage} alt="healine image" className='h-[200px] md:h-[200px] lg:h-[280px] w-auto max-sm:hidden' />
        </div>
      </div>
      <SubHeadline />
    </div>
  );
};

export default Headline;
