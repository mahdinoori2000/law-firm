import Headline from '../headline/Headline'
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Services from '../services/Services';

const MainPage = () => {
  return (
    <div className='h-full w-full max-w-[1440px] mx-auto'>
      <Header />
      <Navbar />
      <Headline />
      <Services />
    </div>
  )
}

export default MainPage;