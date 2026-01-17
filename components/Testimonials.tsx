import React, { useState } from 'react';
import Icon from './Icon';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section id="success" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">Klientide edulood</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Kuulake, mida meie partnerid räägivad oma kogemusest Aura platvormi ja teenustega.
          </p>
        </div>

        <div className="max-w-5xl mx-auto relative group">
          <div className="bg-white rounded-3xl border border-gray-100 p-8 md:p-16 flex flex-col md:flex-row gap-12 items-center shadow-[0_10px_40px_rgba(0,0,0,0.04)]">
            {/* Image Side */}
            <div className="w-full md:w-1/3 flex-shrink-0">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src={current.image} 
                  alt={current.name} 
                  className="w-full h-full object-cover transition-all duration-700"
                />
              </div>
            </div>

            {/* Content Side */}
            <div className="flex-1 text-left">
              <Icon name="message-circle" className="text-brand/10 mb-8" size={64} />
              <p className="text-xl md:text-2xl font-medium leading-relaxed mb-8 text-gray-800 italic">
                "{current.content}"
              </p>
              <div>
                <h4 className="text-lg font-bold text-gray-900">{current.name}</h4>
                <p className="text-brand font-medium">{current.role}, {current.company}</p>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-8 flex">
             <button 
              onClick={handlePrev}
              className="p-4 rounded-full bg-brandDark text-white hover:bg-brand transition-all shadow-lg active:scale-90"
              aria-label="Eelmine"
            >
              <Icon name="chevron-left" />
            </button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-8 flex">
            <button 
              onClick={handleNext}
              className="p-4 rounded-full bg-brandDark text-white hover:bg-brand transition-all shadow-lg active:scale-90"
              aria-label="Järgmine"
            >
              <Icon name="chevron-right" />
            </button>
          </div>
        </div>

        {/* Dots Indicators */}
        <div className="flex justify-center gap-2 mt-12">
          {TESTIMONIALS.map((_, i) => (
            <button 
              key={i} 
              onClick={() => setCurrentIndex(i)}
              className={`w-2 h-2 rounded-full transition-all ${i === currentIndex ? 'w-8 bg-brand' : 'bg-gray-200'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;