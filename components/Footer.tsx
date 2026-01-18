
import React from 'react';

import logo from '../Logos/DORIA NOVA logo.png';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-0">
            <img src={logo} alt="Doria Nova" className="h-28 w-auto" />
            <span className="font-bold tracking-tight text-[#44403F] -ml-0.5">Doria Nova</span>
          </div>
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Doria Grupp OÜ. Kõik õigused kaitstud.
          </p>
          <div className="flex gap-6 text-gray-500 text-sm">
            <a href="#" className="hover:text-brand transition-colors font-medium">Privaatsus</a>
            <a href="#" className="hover:text-brand transition-colors font-medium">Tingimused</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
