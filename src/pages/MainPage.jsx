import Headline from '../headline/Headline'
import Header from "../componenets/Header";
import Navbar from "../componenets/Navbar";
import ExpertTeam from '../componenets/Expert';

const MainPage = () => {
  return (
    <div className='h-full w-full max-w-[1440px] mx-auto'>
      <Header />
      <Navbar />
      <Headline />
      <ExpertTeam />
    </div>
  )
}

export default MainPage