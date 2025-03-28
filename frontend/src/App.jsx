import { Routes, Route } from "react-router-dom";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Chatbot from "./components/Chatbot";
import Contact from "./components/Contact";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import axios from "axios";
import Cgu from "./pages/Cgu";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import About from "./components/About";
import Form from "./components/Form";
import ThankYouPage from "./pages/ThankYouPage";
import Demo from "./pages/Demo";

axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL;
axios.defaults.withCredentials = true;

const App = () => {
  return (
    <div className="pt-[4.75rem] lg:pt-[0.25rem] overflow-hidden">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Services />
              <Benefits />
              <Faq />
              {/* <Pricing /> */}
              <Contact />
              <Footer />
              {/* <Chatbot /> */}
            </>
          }
        />
        <Route path="/blog" element={<Blog />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/offres" element={<Pricing />} />
        <Route path="/formaulaire" element={<Form />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
        <Route path="/Blog/:title" element={<BlogDetails />} />
        <Route path="/cgu" element={<Cgu />} />
        <Route
          path="/politique-de-confidentialité"
          element={<PrivacyPolicy />}
        />
      </Routes>
      <ButtonGradient />
    </div>
  );
};

export default App;
