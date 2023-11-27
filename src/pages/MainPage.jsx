import Headline from '../headline/Headline'
import Header from "../componenets/Header";
import Navbar from "../componenets/Navbar";

const MainPage = () => {
  return (
    <div className='h-full w-full max-w-[1440px] mx-auto'>
      <Header />
      <Navbar />
      <Headline />
    </div>
  )
}

export default MainPage