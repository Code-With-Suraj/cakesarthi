import React from 'react';
import { CalendarHeart, Gift, IndianRupee, LayoutDashboard, PenTool, Sparkles } from 'lucide-react';

const usps = [
  {
    title: "Occasion Memory System",
    subtitle: "Har Order Nahi, Har Occasion Yaad Rakhne Wala System",
    description: "Hamare system me customer ka birthday, anniversary safe rehta hai. Subah ek click me dekho aaj kiska celebration hai. Aur phir WhatsApp pe ek simple message: 'Namaste ji 🙏 Aaj aapka special din hai, Cake ready kar dein?'",
    icon: CalendarHeart,
    color: "bg-red-50 text-red-600 border-red-100",
    highlight: "Business bhi, blessing bhi."
  },
  {
    title: "Smart Add-Ons Engine",
    subtitle: "Indian Celebration Combo – Sochna Nahi, Bas Select Karna",
    description: "Customer ko alag alag cheezein dhundhne ki zarurat nahi. System automatically candles, balloons, aur toppers suggest karega. Har order ka average value naturally badhta hai — bina push kiye.",
    icon: Gift,
    color: "bg-purple-50 text-purple-600 border-purple-100",
    highlight: "Average Order Value +30%"
  },
  {
    title: "UPI Recovery System",
    subtitle: "Advance Liya? Baaki Paisa System Le Aayega",
    description: "Customer ko WhatsApp karo. Ek payment link bhejo. Wo UPI se instantly pay karega. Na awkward call. Na 'bhai kal de dunga' follow up. System paisa yaad dilayega.",
    icon: IndianRupee,
    color: "bg-green-50 text-green-600 border-green-100",
    highlight: "No Payment Follow-ups"
  },
  {
    title: "Owner Control Room",
    subtitle: "Mobile Se Business Control",
    description: "Orders dekho. Revenue track karo. Aaj kiska birthday hai dekho. Pending payment check karo. Ek simple dashboard. Zero technical tension. Ye normal bakery ko 'system wali bakery' bana deta hai.",
    icon: LayoutDashboard,
    color: "bg-blue-50 text-blue-600 border-blue-100",
    highlight: "Zero Technical Tension"
  },
  {
    title: "Structured Custom Requests",
    subtitle: "WhatsApp Chat Se Professional Cake Booking Tak",
    description: "Customer apna design, budget aur details form me submit karega. Sab details clean format me aapko milengi. No confusion. No missing info. No back & forth.",
    icon: PenTool,
    color: "bg-pink-50 text-pink-600 border-pink-100",
    highlight: "No More Confusion"
  }
];

const USP: React.FC = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-pink-100 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-indigo-100 rounded-full blur-3xl opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-500 to-indigo-600 text-white font-bold text-sm mb-6 shadow-lg">
            <Sparkles size={16} />
            Game Changing Features
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
            CakeSarthi – Local Bakery Ko <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-indigo-600">Digital Banane Wala</span> Indian System
          </h2>
          <p className="text-xl text-gray-600">
            Order lo. Occasion yaad rakho. Add-ons becho. Pending collect karo. Business grow karo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {usps.map((usp, idx) => (
            <div 
              key={idx} 
              className={`group relative p-8 rounded-3xl border-2 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 bg-white ${usp.color} ${idx === 3 || idx === 4 ? 'lg:col-span-1.5' : ''}`}
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg bg-gradient-to-br ${
                usp.color.includes('red') ? 'from-red-400 to-red-600' :
                usp.color.includes('purple') ? 'from-purple-400 to-purple-600' :
                usp.color.includes('green') ? 'from-green-400 to-green-600' :
                usp.color.includes('blue') ? 'from-blue-400 to-blue-600' :
                'from-pink-400 to-pink-600'
              }`}>
                <usp.icon size={28} />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {usp.title}
              </h3>
              <h4 className="text-base font-bold text-gray-700 mb-4 opacity-80">
                "{usp.subtitle}"
              </h4>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                {usp.description}
              </p>

              <div className="inline-block px-3 py-1 rounded-md bg-white border border-gray-200 text-xs font-bold uppercase tracking-wider text-gray-800 shadow-sm">
                {usp.highlight}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default USP;