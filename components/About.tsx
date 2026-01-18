
import React from 'react';
import Icon from './Icon';

const About: React.FC = () => {
    return (
        <section className="py-24 bg-white border-t border-gray-100">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="flex-1">
                        <div className="inline-flex items-center gap-2 mb-6">
                            <div className="w-10 h-10 rounded-full bg-brandSoft flex items-center justify-center">
                                <Icon name="users" className="text-brand" size={20} />
                            </div>
                            <span className="text-brand font-bold uppercase tracking-widest text-sm">Meist</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                            Tehnoloogia inimeste teenistuses
                        </h2>

                        <div className="prose prose-lg text-gray-600 leading-relaxed">
                            <p className="mb-6">
                                Doria Nova sai alguse Eesti pereettevõttest, kus õppisime oma kogemusest, kui palju aega läheb tühja töö tegemiseks, mis võiks olla hoopis automaatselt lahendatud.
                            </p>
                            <p>
                                Täna aitame ettevõtetel samm-sammult automatiseerimisega ajakulu vähendada ja töökorraldust selgemaks muuta — nii, et tehnoloogia toetab inimesi ja jätab neile ruumi teha seda, mis on päriselt oluline.
                            </p>
                        </div>
                    </div>

                    <div className="flex-1 relative group cursor-pointer">
                        <div className="absolute -inset-4 bg-brand/5 rounded-[40px] transform -rotate-3 transition-all duration-500 group-hover:rotate-0 group-hover:scale-105 group-hover:bg-brand/10"></div>
                        <img
                            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
                            alt="Meie meeskond"
                            className="relative rounded-[32px] shadow-2xl w-full object-cover aspect-[4/3] transform transition-all duration-500 group-hover:scale-[1.02] group-hover:-rotate-1 group-hover:shadow-brand/20 group-hover:shadow-3xl"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
