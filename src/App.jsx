import Header from './components/Header/Header.jsx';
import TestimonialsSection from './components/TestimonialsSection/TestimonialsSection.jsx';
import Footer from "./components/Footer/Footer.jsx";
import HeroSection from "./components/HeroSection/HeroSection.jsx";
import FeaturesSection from "./components/FeaturesSection/FeaturesSection.jsx";
import CTASection from "./components/CTASection/CTASection.jsx";

function App() {
  return (
    <div className="App">
      <Header/>
      <HeroSection/>
      <FeaturesSection/>
      <TestimonialsSection/>
      <CTASection />
      <Footer/>
    </div>
  );
}

export default App;


