
import React from 'react';
import Icon from './Icon';
import { VALUE_PROPS } from '../constants';

const ValueProps: React.FC = () => {
  const [selectedProp, setSelectedProp] = React.useState<typeof VALUE_PROPS[0] | null>(null);

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">Teenused</h2>
          <p className="text-gray-600 text-lg">
            Meie lähenemine on lihtne: leiame kohad, kus automatiseerimine toob suurimat kasu, ja teeme selle teoks.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {VALUE_PROPS.map((prop, index) => (
            <div
              key={index}
              onClick={() => setSelectedProp(prop)}
              className="group p-8 rounded-2xl border border-gray-100 bg-white hover:border-brand/20 hover:shadow-xl hover:shadow-brand/5 transition-all duration-300 cursor-pointer flex flex-col h-full"
            >
              <div className="w-12 h-12 rounded-xl bg-brandSoft flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-brand transition-all">
                <Icon name={prop.icon || 'cpu'} className="text-brand group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-brand transition-colors">{prop.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                {prop.description}
              </p>
              <div className="mt-auto flex items-center text-brand font-semibold text-sm group/link">
                Loe lähemalt <Icon name="arrow-right" size={16} className="ml-2 transform group-hover/link:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProp && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedProp(null)}
        >
          <div
            className="bg-white rounded-[2rem] max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative animate-zoom-in"
            onClick={e => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProp(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors z-10"
            >
              <Icon name="x" size={24} className="text-gray-900" />
            </button>

            <div className="p-8 md:p-12">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-brandSoft flex items-center justify-center">
                  <Icon name={selectedProp.icon || 'cpu'} size={32} className="text-brand" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">{selectedProp.title}</h3>
              </div>

              <div className="prose prose-lg text-gray-600 leading-relaxed max-w-none">
                <div className="whitespace-pre-wrap">
                  {/* Simple markdown parsing for bold text */}
                  {(selectedProp.content || selectedProp.description).split('\n').map((line, i) => {
                    if (line.startsWith('###')) {
                      return <h4 key={i} className="text-xl font-bold text-gray-900 mt-6 mb-4">{line.replace('###', '').trim()}</h4>
                    }
                    if (line.trim() === '') return null; // Skip empty lines or treat as spacers

                    return (
                      <p key={i} className="mb-4" dangerouslySetInnerHTML={{
                        __html: line
                          .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                          .replace(/✅/g, '<span class="mr-2">✅</span>')
                          .replace(/🔹/g, '<span class="mr-2 text-brand">🔹</span>')
                      }} />
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ValueProps;
