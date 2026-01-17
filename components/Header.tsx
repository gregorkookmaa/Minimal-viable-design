import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md py-4 shadow-sm border-b border-gray-100' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-brand rounded-lg flex items-center justify-center">
            <div className="w-4 h-4 border-2 border-white rounded-full"></div>
          </div>
          <span className="text-xl font-bold tracking-tight text-gray-900">Aura</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <a href="#services" className="hover:text-brand transition-colors">Teenused</a>
          <a href="#success" className="hover:text-brand transition-colors">Edulood</a>
          <a href="#contact" className="hover:text-brand transition-colors">Kontakt</a>
        </nav>
        <a href="#contact" className="bg-brandDark text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-brand transition-all transform hover:scale-105 active:scale-95 shadow-md">
          Alusta kohe
        </a>
      </div>
    </header>
  );
};

export default Header;