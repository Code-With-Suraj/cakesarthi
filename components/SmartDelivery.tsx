import React from 'react';
import { Clock, Route, Sliders, MapPin, Truck, ShieldCheck } from 'lucide-react';

const SmartDelivery: React.FC = () => {
  const features = [
    {
      title: "Flexible Time Slots Management",
      desc: "Sirf wahi orders lein jo aap fulfill kar sakte hain. Apne subah aur sham ke delivery slots khud define karein aur customer ko checkout ke waqt real-time availability dikhayein.",
      icon: Clock,
      color: "bg-blue-100 text-blue-600"
    },
    {
      title: "Auto-Distance Pricing Engine",
      desc: "Confusion khatam karein! Hamara system automatically calculate karta hai ki customer aapki bakery se kitni door hai.",
      details: [
        "Zone A: Aapke set kiye gaye radius (e.g., 5KM) tak Free Delivery.",
        "Zone B: Uske baad automatic per-km charge add ho jayega."
      ],
      icon: Route,
      color: "bg-green-100 text-green-600"
    },
    {
      title: "Smart Order Throttling",
      desc: "Tyohar ke din overbooking se bachein. Har time slot ke liye ek 'Maximum Order Limit' set karein. Jaise hi slot full hoga, system automatically use 'Unavailable' mark kar dega.",
      icon: Sliders,
      color: "bg-orange-100 text-orange-600"
    },
    {
      title: "Location-Based Logic",
      desc: "Google Maps integration ke saath exact coordinates use karke delivery fees calculate hoti hai, jisse aapka nuksan na ho aur customer ko transparency mile.",
      icon: MapPin,
      color: "bg-purple-100 text-purple-600"
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] right-[5%] w-72 h-72 bg-blue-50 rounded-full blur-3xl opacity-70"></div>
        <div className="absolute bottom-[10%] left-[5%] w-72 h-72 bg-pink-50 rounded-full blur-3xl opacity-70"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 font-bold text-sm mb-6 border border-blue-100 shadow-sm">
            <Truck size={16} />
            Smart Logistics
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
            Smart Delivery Management: <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Logistics Ab Aapke Control Mein
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Delivery slots, distance calculations, aur order limits ko automate karein—taaki aap sirf baking par focus kar sakein.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {features.map((feature, idx) => (
            <div 
              key={idx} 
              className="group bg-white rounded-3xl p-8 border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 rounded-bl-full opacity-20 transition-transform group-hover:scale-110 ${feature.color.split(' ')[0]}`}></div>
              
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${feature.color}`}>
                <feature.icon size={28} />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed mb-4 text-lg">
                {feature.desc}
              </p>

              {feature.details && (
                <ul className="space-y-2 mt-4 bg-gray-50 p-4 rounded-xl border border-gray-100">
                  {feature.details.map((detail, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-2 text-sm text-gray-700 font-medium">
                      <ShieldCheck className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SmartDelivery;