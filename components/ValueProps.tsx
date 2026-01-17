
import React from 'react';
import Icon from './Icon';
import { VALUE_PROPS } from '../constants';

const ValueProps: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">Kuidas me aitame sul võita</h2>
          <p className="text-gray-600 text-lg">
            Me ei paku lihtsalt teenuseid, vaid strateegilist partnerlust, mis põhineb uusimal tehnoloogial ja tulemustel.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {VALUE_PROPS.map((prop, index) => (
            <div 
              key={index} 
              className="group p-8 rounded-2xl border border-gray-100 bg-white hover:border-brand/20 hover:shadow-xl hover:shadow-brand/5 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-brandSoft flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-brand transition-all">
                <Icon name={prop.icon} className="text-brand group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">{prop.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {prop.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProps;
