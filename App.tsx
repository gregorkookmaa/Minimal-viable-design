import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import LogoReel from './components/LogoReel';
import ValueProps from './components/ValueProps';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-brand selection:text-white">
      <Header />
      <main>
        <Hero />
        <LogoReel />
        <ValueProps />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default App;