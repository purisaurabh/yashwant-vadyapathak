import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import SocialActivities from "./pages/SocialActivities";
import VadansList from "./pages/VadansList";
import Gallery from "./pages/Gallery";
import MembersList from "./pages/MembersList";
import ContactUs from "./pages/ContactUs";
import Registration from "./pages/Registration";
import OurJourney from "./pages/OurJourney";

function App() {
  return (
    <Router basename="/yashwant-vadyapathak/">
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/journey" element={<OurJourney />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/social-activities" element={<SocialActivities />} />
          <Route path="/vadans" element={<VadansList />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/members" element={<MembersList />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/registration" element={<Registration />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
