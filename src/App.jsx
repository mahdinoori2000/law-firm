import MainPage from "./pages/MainPage";
import Navbar from "./components/navbar/Navbar";
import AboutUs from "./pages/AboutUs";
import LegalServices from "./pages/LegalServices";
import Expertise from "./pages/Expertise";
import AskALawyer from "./components/AskALawyer";
import MultiMedia from "./pages/MultiMedia";
import ContactUs from "./pages/ContactUs";

import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/legalServices" element={<LegalServices />} />
        <Route path="/expertise" element={<Expertise />} />
        <Route path="/ask-a-lawyer" element={<AskALawyer />} />
        <Route path="/multiMedia" element={<MultiMedia />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </>
  );
}

export default App;
