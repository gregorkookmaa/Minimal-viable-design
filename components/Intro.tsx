
import React from 'react';

const Intro: React.FC = () => {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <span className="inline-block bg-brand/10 text-brand px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider mb-6">
                        Kuidas me aitame?
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                        Tehnoloogia peaks tegema elu lihtsamaks, mitte keerulisemaks.
                    </h2>
                    <div className="text-xl text-gray-600 leading-relaxed space-y-6 text-left md:text-center">
                        <p>
                            Paljud juhid tajuvad, et tehisintellekt ja automatiseerimine võivad ettevõtte tööd oluliselt kergendada — ent sageli tundub teostus liiga keeruline, kallis või lihtsalt kättesaamatu.
                        </p>
                        <p className="font-semibold text-gray-900">
                            Doria Nova teeb sellest selge ja mõistliku tööriista, mis aitab päriselt aega võita.
                        </p>
                        <p>
                            Meie roll on olla partner, kes aitab tööle panna praktilised lahendused - olgu selleks turuolukorra jälgimine, andmete kogumine ja analüüs või igapäevaste rutiinsete ülesannete kiire ja täpne tegemine.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Intro;
