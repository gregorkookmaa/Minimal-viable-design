
import React from 'react';

import logo from '../Logos/DORIA NOVA logo.png';

const Footer: React.FC = () => {
  return (
    <footer className="py-16 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-0 mb-6">
              <img src={logo} alt="Doria Nova" className="h-24 w-auto" />
              <span className="font-bold tracking-tight text-[#44403F] text-xl -ml-0.5">Doria Nova</span>
            </div>
            <p className="text-gray-500 mb-6 max-w-sm">
              Aitame ettevõtetel kasvada läbi nutika automatiseerimise ja strateegilise turunduse.
            </p>
            <div className="flex flex-col gap-2 text-gray-600">
              <a href="mailto:info@dorianova.ee" className="hover:text-brand transition-colors font-medium">info@dorianova.ee</a>
              <a href="tel:+37255531727" className="hover:text-brand transition-colors font-medium">+372 5553 1727</a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6">Turvalisus</h4>
            <p className="text-gray-500 text-sm leading-relaxed mb-4">
              Meie lahendused on üles ehitatud nii, et teie andmed püsiksid teie kontrolli all. Järgime GDPR-i nõudeid ning tagame parimad turvastandardid.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6">Viited</h4>
            <div className="flex flex-col gap-3 text-sm text-gray-500">
              <a href="#services" className="hover:text-brand transition-colors">Teenused</a>
              <a href="#success" className="hover:text-brand transition-colors">Edulood</a>
              <a href="/blog" className="hover:text-brand transition-colors">Blogi</a>
              <a href="#contact" className="hover:text-brand transition-colors">Kontakt</a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Doria Grupp OÜ. Kõik õigused kaitstud.
          </p>
          <div className="flex gap-6 text-gray-500 text-sm">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              GDPR Compliant
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
