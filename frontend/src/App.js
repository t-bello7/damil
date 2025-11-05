import React from "react";
import "./App.css";
import { LanguageProvider } from "./context/LanguageContext";
import { Toaster } from "./components/ui/toaster";
import Header from "./components/Header";
import Hero from "./components/Hero";
import WhyChooseUs from "./components/WhyChooseUs";
import Services from "./components/Services";
import Process from "./components/Process";
import CTASection from "./components/CTASection";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

function App() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <LanguageProvider>
      <div className="App">
        <Header onContactClick={scrollToContact} />
        <Hero onContactClick={scrollToContact} />
        <WhyChooseUs onContactClick={scrollToContact} />
        <Services />
        <Process />
        <CTASection onContactClick={scrollToContact} />
        <About />
        <Testimonials />
        <ContactForm />
        <Footer />
        <Toaster />
      </div>
    </LanguageProvider>
  );
}

export default App;
