import React from 'react';
import Icon from './Icon';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[95vh] flex items-center pt-24 pb-12 overflow-hidden bg-white grid-bg">
      {/* Background Glows */}
      <div className="blur-glow w-[600px] h-[600px] bg-brand/10 -top-40 -left-40"></div>
      
      <div className="container mx-auto px-6 z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Left Column: Content */}
          <div className="flex-1 text-left max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-200 text-[10px] uppercase tracking-widest font-bold text-gray-500 mb-10 bg-white/80 backdrop-blur-sm shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse"></span>
              Võtame vastu uusi kliente
            </div>
            
            <h1 className="text-6xl md:text-[5.5rem] font-normal tracking-tight text-[#0E131F] mb-10 leading-[1.02]">
              Tulude <span className="font-serif italic text-gray-400 font-light">Kasvatamine</span> <br />
              läbi <span className="font-semibold text-gradient">Intelligentse Turunduse.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-500 mb-12 leading-relaxed max-w-xl">
              Me ühendame loova strateegia <b className="text-gray-900 font-semibold">AI automatiseerimisega</b>, et tagada prognoositav kasv. Moodne agentuur ambitsioonikatele brändidele.
            </p>

            <div className="flex flex-wrap items-center gap-8">
              <a href="#contact" className="bg-brandDark text-white px-10 py-5 rounded-full font-bold flex items-center justify-center gap-3 hover:bg-brand transition-all transform hover:scale-105 active:scale-95 shadow-2xl shadow-gray-200">
                Telli audit
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                  <Icon name="arrow-right" size={14} />
                </div>
              </a>
              <a href="#success" className="group flex items-center gap-3 text-gray-600 font-bold hover:text-brand transition-colors py-2">
                Vaata edulugusid
                <Icon name="chevron-down" size={18} className="group-hover:translate-y-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Column: Visual Mockup */}
          <div className="flex-1 relative w-full lg:w-auto">
            <div className="relative group max-w-md mx-auto lg:max-w-none">
              {/* Decorative Shadow/Background behind image */}
              <div className="absolute -inset-6 bg-gray-50/50 rounded-[48px] -z-10 transform -rotate-2"></div>
              
              {/* Main Image */}
              <div className="aspect-[4/5] rounded-[40px] overflow-hidden border-[12px] border-white shadow-2xl relative">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800" 
                  alt="Team working" 
                  className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
                />
                
                {/* Floating Results Card */}
                <div className="absolute bottom-8 left-6 right-6 bg-white/95 backdrop-blur-md shadow-2xl rounded-2xl p-6 border border-white/40 transform group-hover:translate-y-[-8px] transition-transform duration-500">
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Keskmised tulemused</span>
                    <div className="text-brand">
                      <Icon name="trending-up" size={18} />
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-brandSoft flex items-center justify-center border border-brand/10">
                      <Icon name="cpu" size={24} className="text-brand" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-gray-900 tracking-tight">+240% ROI kasv</h4>
                      <p className="text-xs text-gray-500 font-medium">Kliendiportfellide lõikes Q1</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;