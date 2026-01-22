import React from 'react';
import Icon from './Icon';
import heroImage from '../Images/hero-picture.jpg';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[95vh] flex items-center pt-24 pb-12 overflow-hidden bg-white grid-bg">
      {/* Background Glows */}
      <div className="blur-glow w-[600px] h-[600px] bg-brand/10 -top-40 -left-40"></div>

      <div className="container mx-auto px-6 z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* Left Column: Content */}
          <div className="flex-1 text-left max-w-3xl">


            <h1 className="text-4xl md:text-[3.5rem] lg:text-[4.5rem] font-bold tracking-tight text-[#0E131F] mb-10 leading-[1.05]">
              Ettevõtte töö <span className="font-semibold text-[#0E131F]">Sujuvaks</span> – <br />
              <span className="font-serif italic text-gradient font-light">Nutikas Automaatika</span> <br />
              teeb ära üksluised ülesanded.
            </h1>

            <p className="text-lg md:text-xl text-gray-500 mb-12 leading-relaxed max-w-xl">
              Aitame luua ettevõttele nutikaid süsteeme, kus vaevaline rutiin asendub kiiruse ja täpsusega ning meeskond saab pühenduda sellele, mis on päriselt oluline.
            </p>

            <div className="flex flex-wrap items-center gap-8">
              <a href="#services" className="bg-brandDark text-white px-10 py-5 rounded-full font-bold flex items-center justify-center gap-3 hover:bg-brand transition-all transform hover:scale-105 active:scale-95 shadow-2xl shadow-gray-200">
                Teenused
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
            <div className="relative group max-w-md mx-auto lg:max-w-none perspective-1000">
              {/* Decorative Shadow/Background behind image */}
              <div className="absolute -inset-6 bg-gray-50/50 rounded-[48px] -z-10 transform -rotate-2 transition-transform duration-700 group-hover:rotate-0 group-hover:scale-105"></div>

              {/* Main Image */}
              <div className="aspect-[4/5] rounded-[40px] overflow-hidden border-[12px] border-white shadow-2xl relative transform transition-all duration-700 group-hover:rotate-1 group-hover:scale-[1.02] group-hover:shadow-3xl group-hover:border-brand/60">
                <img
                  src={heroImage}
                  alt="Office Team Meeting"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />


              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;