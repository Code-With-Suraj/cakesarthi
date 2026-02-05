import React from 'react';
import { BENEFITS } from '../constants';

const Benefits: React.FC = () => {
  return (
    <section id="benefits" className="py-24 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold">Why Choose CakeSarthi?</h2>
          <p className="mt-4 text-xl text-gray-400">Technology meets Bakery Art.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {BENEFITS.map((benefit, idx) => (
            <div key={idx} className="bg-gray-800 p-8 rounded-2xl hover:bg-gray-750 transition-colors border border-gray-700 hover:border-pink-500 group">
              <div className="w-14 h-14 bg-pink-900/30 rounded-xl flex items-center justify-center text-pink-500 mb-6 group-hover:scale-110 transition-transform">
                <benefit.icon size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {benefit.desc}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-pink-600 to-purple-600 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Powered by Google Technology 🛡️</h3>
            <p className="text-white/90 max-w-2xl mx-auto text-lg mb-8">
              Google Sheets as Database. No hosting fees. Secure Owner Lock. 
              <br/>Simple. Powerful. Free Serverless Backend.
            </p>
            <button className="bg-white text-pink-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors">
              Learn More About Tech
            </button>
          </div>
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-64 h-64 bg-black/10 rounded-full blur-3xl"></div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;