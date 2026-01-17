
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-brand rounded flex items-center justify-center">
              <div className="w-3 h-3 border border-white rounded-full"></div>
            </div>
            <span className="font-bold tracking-tight text-gray-900">Aura</span>
          </div>
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Aura AI Agency. Kõik õigused kaitstud.
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
