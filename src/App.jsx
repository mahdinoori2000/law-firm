import { Route, Routes } from "react-router-dom";

// Pages
import MainPage from "./pages/MainPage";
import Navbar from "./components/navbar/Navbar";
import AboutUs from "./pages/AboutUs";
import LegalServices from "./pages/LegalServices";
import Expertise from "./pages/Expertise";
import AskALawyer from "./components/AskALawyer";
import MultiMedia from "./pages/MultiMedia";
import ContactUs from "./pages/ContactUs";
import MissionStatement from "./pages/MissionStatement";
import CompanyProfile from "./pages/CompanyProfile";
import OurTeam from "./pages/OurTeam";
import PresidentMessage from "./pages/PresidentMessage";
import AwardAndCertificate from "./pages/AwardAndCertificate";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/mission-statement" element={<MissionStatement />} />
        <Route path="/our-team" element={<OurTeam />} />
        <Route path="/president-message" element={<PresidentMessage />} />
        <Route
          path="/award-and-certificate"
          element={<AwardAndCertificate />}
        />
        <Route path="/company-profile" element={<CompanyProfile />} />
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
