import Headline from '../headline/Headline'
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Services from '../services/Services';
import Header from "../componenets/Header";
import Navbar from "../componenets/Navbar";
import ExpertTeam from '../componenets/Expert';
import ContactForm from '../componenets/ContactForm';

const MainPage = () => {
  return (
    <div className='h-full w-full max-w-[1440px] mx-auto'>
      <Header />
      <Navbar />
      <Headline />
      <Services />
      <ExpertTeam />
      <ContactForm />
    </div>
  )
}

export default MainPage;