import React from 'react';
import { MapPin, Navigation, Clock, Calculator, Settings, DollarSign, Map, ShieldCheck } from 'lucide-react';

const DeliveryFeatures: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Map Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#4f46e5 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 font-bold text-sm mb-6">
            <Navigation size={16} />
            New Feature Alert 🚚
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
            Smart & Hassle-Free <span className="text-indigo-600">Delivery Management</span>
          </h2>
          <p className="text-xl text-gray-600">
            Welcome to the future of logistics! Hamne delivery process ko smooth, transparent aur efficient banane ke liye latest features integrate kiye hain.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Customer Side */}
          <div className="space-y-8">
            <div className="bg-pink-50 rounded-3xl p-8 border border-pink-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-pink-200 rounded-bl-full opacity-50"></div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                <span className="bg-pink-600 text-white p-2 rounded-lg"><MapPin size={20} /></span>
                For Customers
              </h3>
              <p className="text-gray-600 mb-8 font-medium">Customer ke liye order place karna ab aur bhi aasaan hai.</p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white text-pink-600 shadow-sm flex items-center justify-center font-bold border border-pink-100">1</div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">📍 Smart Location Detection</h4>
                    <p className="text-gray-600 text-sm mt-1">
                      Ab lamba address type karne ki chinta nahi! "Get Current Location" button click karte hi system aapki exact GPS location fetch kar leta hai.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white text-pink-600 shadow-sm flex items-center justify-center font-bold border border-pink-100">2</div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">🏡 Complete Address Details</h4>
                    <p className="text-gray-600 text-sm mt-1">
                      Location ke saath-saath, House No., Street, Landmark, aur Area bhi enter kar sakte hain taaki delivery ekdum precise ho.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white text-pink-600 shadow-sm flex items-center justify-center font-bold border border-pink-100">3</div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">📅 Scheduled Delivery Slots</h4>
                    <p className="text-gray-600 text-sm mt-1">
                      Apne special occasion ke hisaab se Date aur Time select karein. Hum ensure karte hain ki order waqt par deliver ho.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white text-pink-600 shadow-sm flex items-center justify-center font-bold border border-pink-100">4</div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">💰 Transparent Charges</h4>
                    <p className="text-gray-600 text-sm mt-1">
                      No Hidden Costs! Distance ke base par automatic calculation. Agar shop ke paas hain (e.g., 5km), toh delivery FREE ho sakti hai!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Business Owner Side */}
          <div className="space-y-8">
            <div className="bg-indigo-50 rounded-3xl p-8 border border-indigo-100 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-200 rounded-bl-full opacity-50"></div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                <span className="bg-indigo-600 text-white p-2 rounded-lg"><Settings size={20} /></span>
                For Business Owners
              </h3>
              <p className="text-gray-600 mb-8 font-medium">Owner dashboard jo delivery operations ko automate karta hai.</p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white text-indigo-600 shadow-sm flex items-center justify-center font-bold border border-indigo-100">1</div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">⚙️ Flexible Delivery Settings</h4>
                    <p className="text-gray-600 text-sm mt-1">
                      Aaj delivery nahi karni? Toggle button se delivery off kar dein. Apni shop ki exact location set karein taaki calculation sahi ho.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white text-indigo-600 shadow-sm flex items-center justify-center font-bold border border-indigo-100">2</div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">📏 Smart Distance Calculator</h4>
                    <p className="text-gray-600 text-sm mt-1">
                      System automatically Customer aur Shop ke beech ka distance calculate karta hai. Koi manual estimation ki zaroorat nahi!
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white text-indigo-600 shadow-sm flex items-center justify-center font-bold border border-indigo-100">3</div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">💸 Dynamic Pricing Logic</h4>
                    <p className="text-gray-600 text-sm mt-1">
                      Control your profit: Decide karein ki kitne KM tak delivery free rahegi aur uske baad per KM kya charge lena hai.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white text-indigo-600 shadow-sm flex items-center justify-center font-bold border border-indigo-100">4</div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">🗺️ Seamless Navigation</h4>
                    <p className="text-gray-600 text-sm mt-1">
                      Har order card mein Google Maps Link hota hai. Delivery partner bas click karke direct navigation start kar sakta hai.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Banner */}
        <div className="mt-16 bg-gray-900 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="flex items-center gap-4">
             <div className="bg-green-500 p-3 rounded-full text-white animate-pulse">
               <ShieldCheck size={32} />
             </div>
             <div>
               <h4 className="text-white text-xl font-bold">Why This Rocks? 🚀</h4>
               <p className="text-gray-400">Zero Confusion. Exact Location. Professional Experience.</p>
             </div>
          </div>
          <div className="flex items-center gap-8 text-white/80 text-sm font-medium">
             <span className="flex items-center gap-2"><Clock size={16} /> Time Saver</span>
             <span className="flex items-center gap-2"><Map size={16} /> GPS Accuracy</span>
             <span className="flex items-center gap-2"><Calculator size={16} /> Auto Calc</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default DeliveryFeatures;