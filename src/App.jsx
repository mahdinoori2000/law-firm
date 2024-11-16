import MainPage from "./pages/MainPage";
import Navbar from "./components/navbar/Navbar";
import About from "./pages/About";
import AskALawyer from "./components/AskALawyer";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/ask-a-lawyer" element={<AskALawyer />} />
      </Routes>
    </>
  );
}

export default App;
