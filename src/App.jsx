import MainPage from "./pages/MainPage";
import Navbar from "./components/navbar/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import { Route, Routes } from 'react-router-dom';
import Header from "./components/Header";

function App() {
  return (
    <>
    <Header />
    <Navbar />
    <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    
    </>
  )
}

export default App
