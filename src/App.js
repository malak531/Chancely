import React from 'react';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';
import Logo from './components/Logo/Logo';
import EventsSection from './components/EventsSection/EventsSection';
import ContactSection from './components/ContactSection/ContactSection';
import TrustedCompanies from './components/TrustedCompanies/TrustedCompanies';
import OrganizationCTA from './components/OrganizationCTA/OrganizationCTA';
import Navigation from './components/Navigation/Navigation';


function App() {
  return (
    <div>
        <Logo />
        <Navigation/>
        <Hero />
        <EventsSection />
        <TrustedCompanies />
        <OrganizationCTA/>
        <ContactSection />
        <Footer />
    </div>
        
  );
}

export default App;
