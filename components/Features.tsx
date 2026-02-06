import React, { useState } from 'react';
import { FEATURES_CUSTOMER, FEATURES_OWNER, DEMO_LINK } from '../constants';
import { ShoppingBag, LayoutDashboard, CheckCircle2 } from 'lucide-react';

const Features: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'customer' | 'owner'>('customer');

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base font-semibold tracking-wide text-pink-600 uppercase">
            CakeSarthi Ecosystem
          </h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Customer Khush, Owner Relaxed 😌
          </p>
          <p className="mt-4 text-xl text-gray-500">
            Ek taraf premium shopping experience, dusri taraf powerful management dashboard.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 p-1 rounded-xl inline-flex">
            <button
              onClick={() => setActiveTab('customer')}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeTab === 'customer' 
                  ? 'bg-white text-pink-600 shadow-sm ring-1 ring-black/5' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <ShoppingBag size={18} />
              Customer View
            </button>
            <button
              onClick={() => setActiveTab('owner')}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeTab === 'owner' 
                  ? 'bg-white text-indigo-600 shadow-sm ring-1 ring-black/5' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <LayoutDashboard size={18} />
              Owner Dashboard
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Image Side */}
          <div className="order-2 lg:order-1 relative group">
             <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-gray-100 transition-transform duration-500 group-hover:scale-[1.02]">
               <img 
                 src={activeTab === 'customer' 
                   ? "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=2889" 
                   : "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=2940"
                 } 
                 alt={activeTab === 'customer' ? "Delicious Chocolate Cake" : "Business Analytics Dashboard"} 
                 className="w-full h-80 lg:h-[500px] object-cover"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8">
                 <h3 className="text-white text-2xl font-bold">
                   {activeTab === 'customer' ? 'Professional Menu Catalog' : 'Live Business Stats'}
                 </h3>
                 <p className="text-white/80 mt-2">
                   {activeTab === 'customer' ? 'Customers can browse and order instantly.' : 'Track your revenue and pending orders.'}
                 </p>
               </div>
             </div>
             
             {/* Decorative blob */}
             <div className={`absolute -z-10 w-3/4 h-3/4 blur-3xl rounded-full opacity-20 -top-4 -left-4 ${activeTab === 'customer' ? 'bg-pink-400' : 'bg-indigo-400'}`}></div>
          </div>

          {/* Features List Side */}
          <div className="order-1 lg:order-2 space-y-8">
            <div className="space-y-2">
              <h3 className="text-3xl font-bold text-gray-900">
                {activeTab === 'customer' ? 'Premium Shopping Experience' : 'Your Digital Manager'}
              </h3>
              <p className="text-gray-600">
                {activeTab === 'customer' 
                  ? 'Jab koi customer aapki website par aata hai, use ek badi e-commerce site jaisa experience milta hai.' 
                  : 'Dashboard password se protected hai, jahan aap apni bakery ka pura control rakhte hain.'}
              </p>
            </div>

            <div className="space-y-6">
              {(activeTab === 'customer' ? FEATURES_CUSTOMER : FEATURES_OWNER).map((feature, idx) => (
                <div key={idx} className="flex gap-4 group">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
                    activeTab === 'customer' 
                      ? 'bg-pink-100 text-pink-600 group-hover:bg-pink-200' 
                      : 'bg-indigo-100 text-indigo-600 group-hover:bg-indigo-200'
                  }`}>
                    <CheckCircle2 size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">{feature.title}</h4>
                    <p className="mt-1 text-gray-600 leading-relaxed text-sm md:text-base">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="pt-4">
              <a 
                href={DEMO_LINK} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`font-semibold text-sm border-b-2 pb-0.5 transition-colors inline-flex items-center gap-1 ${
                  activeTab === 'customer' 
                    ? 'text-pink-600 border-pink-600 hover:text-pink-700' 
                    : 'text-indigo-600 border-indigo-600 hover:text-indigo-700'
                }`}
              >
                See Live {activeTab === 'customer' ? 'Catalog' : 'Dashboard'} Demo &rarr;
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;