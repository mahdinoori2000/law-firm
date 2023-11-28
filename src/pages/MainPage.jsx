import Headline from '../headline/Headline'
import Services from '../services/Services';
import Testimonials from '../components/Testimonials';
import ExpertTeam from '../components/Expert';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

const MainPage = () => {
  return (
    <div className='h-full w-full max-w-[1440px] mx-auto'>
      <Headline />
      <Services />
      <Testimonials />
      <ExpertTeam />
      <ContactForm />
      <Footer />
    </div>
  )
}
export default MainPage;
