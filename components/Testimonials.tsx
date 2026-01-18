import React, { useState, useEffect, useRef } from 'react';
import Icon from './Icon';
import { TESTIMONIALS } from '../constants';
import { Testimonial } from '../types';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedTestimonial, setSelectedTestimonial] = useState<Testimonial | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const trackRef = useRef<HTMLDivElement>(null);

  // Clone the first 3 items to append to end for infinite loop effect on desktop (3 items visible)
  // For mobile (1 item visible), this logic might need adjustment or simpler wrap, 
  // but for now let's optimize for the 3-column "jump" fix requested.
  const extendedTestimonials = [
    ...TESTIMONIALS,
    ...TESTIMONIALS.slice(0, 3)
  ];

  const handleNext = () => {
    if (!isTransitioning) return;

    setCurrentIndex(prev => {
      const next = prev + 1;
      // If we move past the original set, we need to reset.
      // But we wait for the animation to finish first.
      return next;
    });
  };

  const handlePrev = () => {
    if (currentIndex === 0) {
      // Instant jump to end (clone) without transition
      setIsTransitioning(false);
      setCurrentIndex(TESTIMONIALS.length);

      // Then animate back one step
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsTransitioning(true);
          setCurrentIndex(TESTIMONIALS.length - 1);
        });
      });
    } else {
      setCurrentIndex(prev => prev - 1);
    }
  };

  // Watch for index changes to handle the seamless reset from End -> Start
  useEffect(() => {
    if (currentIndex >= TESTIMONIALS.length) {
      // We have scrolled into the cloned area. 
      // Wait for the transition to finish (e.g., 500ms), then snap back to 0.
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(currentIndex % TESTIMONIALS.length);

        // Re-enable transition for next click
        requestAnimationFrame(() => {
          setTimeout(() => setIsTransitioning(true), 50); // Small delay to ensure browser paints
        });
      }, 500); // Duration matches CSS

      return () => clearTimeout(timeout);
    }
  }, [currentIndex]);


  return (
    <section id="success" className="py-24 bg-white overflow-hidden relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">Klientide edulood</h2>
          <p className="text-gray-600 text-lg max-w-2xl">
            Kuulake, mida meie partnerid räägivad oma kogemusest Doria Nova platvormi ja teenustega.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-7xl mx-auto px-4 lg:px-12">

          {/* Navigation Buttons (Absolute) */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-white border border-gray-200 text-gray-900 hover:bg-brandDark hover:text-white transition-all shadow-md hover:shadow-lg active:scale-95 z-30 group"
            aria-label="Eelmine"
          >
            <Icon name="chevron-left" className="group-hover:text-white" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-white border border-gray-200 text-gray-900 hover:bg-brandDark hover:text-white transition-all shadow-md hover:shadow-lg active:scale-95 z-30 group"
            aria-label="Järgmine"
          >
            <Icon name="chevron-right" className="group-hover:text-white" />
          </button>

          {/* Viewport (Overflow Hidden) */}
          <div className="overflow-hidden -mx-4 px-4 py-8">
            <div
              ref={trackRef}
              className={`flex gap-6 lg:gap-8 ${isTransitioning ? 'transition-transform duration-500 ease-in-out' : ''}`}
              style={{
                // @ts-ignore
                '--current-index': currentIndex,
                transform: 'translateX(calc(var(--current-index) * -1 * var(--slide-size)))',
              } as React.CSSProperties}
            >

              {extendedTestimonials.map((testimonial, idx) => (
                <div
                  key={`${testimonial.id}-${idx}`}
                  className="w-full md:w-[calc(33.333%-1.33rem)] flex-shrink-0"
                  onClick={() => setSelectedTestimonial(testimonial)}
                >
                  <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 hover:shadow-xl hover:border-brand/30 hover:-translate-y-2 transition-all duration-300 flex flex-col h-full cursor-pointer group">
                    {/* Header with Image and Info */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-md group-hover:scale-105 transition-transform">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 group-hover:text-brand transition-colors">{testimonial.name}</h4>
                        <p className="text-sm text-gray-500 font-medium">{testimonial.company}</p>
                      </div>
                    </div>

                    {/* Stars or Quote Icon */}
                    <div className="mb-4">
                      <Icon name="message-circle" className="text-brand/20 group-hover:text-brand transition-colors" size={32} />
                    </div>

                    {/* Content */}
                    <p className="text-gray-600 leading-relaxed italic line-clamp-4">
                      "{testimonial.content}"
                    </p>

                    <div className="mt-6 text-brand font-semibold text-sm flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0">
                      Loe kogu lugu <Icon name="arrow-right" size={14} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Dots */}
          <div className="flex justify-center gap-2 mt-8 md:hidden">
            {TESTIMONIALS.map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full transition-all ${i === (currentIndex % TESTIMONIALS.length) ? 'w-8 bg-brand' : 'bg-gray-200'}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Inline Styles for dynamic track calculation handling gap properly */}
      {/* Ideally we use a wrapper, but style injection is reliable here given the complex gap/calculations */}
      <style>{`
          .carousel-track-container {
             /* Add styles here if needed */
          }
       `}</style>
      {/* 
         Since JSX style tag isn't standard in normal React without library, I'll use inline style on the div with window matchMedia logic or CSS variable. 
         Let's use CSS variable for --slide-index.
       */}

      {/* Modal Overlay */}
      {selectedTestimonial && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedTestimonial(null)}
        >
          <div
            className="bg-white rounded-[2rem] max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative animate-zoom-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedTestimonial(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors z-10"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            <div className="p-8 md:p-12">
              <div className="flex items-center gap-6 mb-8 border-b border-gray-100 pb-8">
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-gray-50 shadow-lg flex-shrink-0">
                  <img
                    src={selectedTestimonial.image}
                    alt={selectedTestimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{selectedTestimonial.name}</h3>
                  <p className="text-lg text-brand font-medium">{selectedTestimonial.role}, {selectedTestimonial.company}</p>
                </div>
              </div>

              <div className="prose prose-lg text-gray-600 leading-relaxed">
                <p className="text-xl italic text-gray-800 font-medium mb-6">
                  "{selectedTestimonial.content}"
                </p>
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                  <p className="whitespace-pre-wrap">
                    {(selectedTestimonial.story || selectedTestimonial.content).split('\n').map((line, i) => {
                      if (line.startsWith('###')) {
                        return <h4 key={i} className="text-xl font-bold text-gray-900 mt-8 mb-4">{line.replace('###', '').trim()}</h4>
                      }
                      if (line.trim() === '') return null;

                      return (
                        <p key={i} className="mb-4" dangerouslySetInnerHTML={{
                          __html: line
                            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                            .replace(/✅/g, '<span class="mr-2">✅</span>')
                            .replace(/🔹/g, '<span class="mr-2 text-brand">🔹</span>')
                        }} />
                      )
                    })}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};

export default Testimonials;