import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Products from "./components/Products";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ChatBot from "./components/ChatBot";
import ZedChatPage from "./components/ZedChatPage";
import SBCCustomerAppPrivacyPolicy from "./pages/legal/SBCCustomerAppPrivacyPolicy";
import SBCStaffAppPrivacyPolicy from "./pages/legal/SBCStaffAppPrivacyPolicy";

const HomePage = () => (
  <>
    <Hero />
    <Services />
    <Products />
    <Team />
    <Contact />
  </>
);

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-dark-950">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/zedchat" element={<ZedChatPage />} />
          <Route path="/legal/sbc-customer-app-privacy-policy" element={<SBCCustomerAppPrivacyPolicy />} />
          <Route path="/legal/sbc-staff-app-privacy-policy" element={<SBCStaffAppPrivacyPolicy />} />
        </Routes>
        <Footer />
        <ChatBot />
      </div>
    </Router>
  );
};

export default App;
