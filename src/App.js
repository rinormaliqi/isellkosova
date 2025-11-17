import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LawFirmLanding from "./components/Pages/HomePage";
import AboutUs, { AboutUsSection } from "./components/AboutUs";
import { LanguageProvider } from "./contexts/language";
import { Footer } from "./components/Footer/Footer";
import ProfessionalHeader from "./components/Navbar/ProfessionalHeader";
import { PracticeAreas } from "./components/PracticeArea/PracticeAreas";
import { PracticeAreaDetail } from "./components/Pages/PracticeAreaDetail";
import { AttorneyBiography } from "./components/AttorneysSection/AttorneyBiography";
import { ScrollToTop } from "./components/ScrollToTop/ScrollToTop";
import { AttorneysSection } from "./components/AttorneysSection/AttorneysSection";
import ContactForm from "./components/Contact/ContactForm";
import TermsOfService from "./components/Pages/TermsOfService";
import PrivacyPolicy from "./components/Pages/PrivacyPolicy";
import Disclaimer from "./components/Pages/Disclaimer";
import { Careers } from "./components/Pages/Careers/CareersPage";
import CaseDetailPage from "./components/LatestNewsSection/NewsDetail";
import NotableCasesSection from "./components/LatestNewsSection/LatestNewsSection";
import LogoComp from "./components/AAA/logocomp";
function App() {
  return (
    <LanguageProvider>
      <Router>
        {/* <ProfessionalHeader/>
        <ScrollToTop /> */}
        <div className="App min-h-screen flex flex-col">
          <main className="flex-1">
            <Routes>
              LogoComp
    <Route path="/" element={<LogoComp />} />

            </Routes>
          </main>
          {/* <Footer /> */}
        </div>
      </Router>
    </LanguageProvider>

  );
}

export default App;