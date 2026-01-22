import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import logo from '../Logos/Doria Nova Wide Logo.png';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: id } });
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    // If not on home page, let the Link component handle the navigation to "/"
  };

  // Handle scroll from other page navigation
  useEffect(() => {
    if (location.state && location.state.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
        // Clear state
        window.history.replaceState({}, document.title);
      }
    }
  }, [location]);


  const isHomePage = location.pathname === '/';
  const headerClass = scrolled || !isHomePage
    ? 'bg-white/80 backdrop-blur-md py-2 shadow-sm border-b border-gray-100'
    : 'bg-transparent py-4';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerClass}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" onClick={handleLogoClick} className="flex items-center gap-0">
          <img src={logo} alt="Doria Nova" className="h-12 w-auto" />
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-base font-semibold text-[#44403F]">
          <a href="#services" onClick={(e) => handleNavClick(e, 'services')} className="hover:text-brand transition-colors">Teenused</a>
          <a href="#success" onClick={(e) => handleNavClick(e, 'success')} className="hover:text-brand transition-colors">Edulood</a>
          <Link to="/blog" className="hover:text-brand transition-colors">Blogi</Link>
          <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="hover:text-brand transition-colors">Kontakt</a>
        </nav>
        <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="bg-brandDark text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-brand transition-all transform hover:scale-105 active:scale-95 shadow-md cursor-pointer">
          Võta ühendust
        </a>
      </div>
    </header>
  );
};

export default Header;