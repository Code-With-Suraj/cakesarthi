import React from 'react';
import { Share2, FileText, PenTool, TrendingUp, CheckCircle2, ArrowRight } from 'lucide-react';
import Button from './Button';
import { DEMO_LINK } from '../constants';

const WhatsAppFeatures: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-pink-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-block py-1 px-3 rounded-full bg-green-100 text-green-700 text-sm font-bold tracking-wide uppercase mb-4">
            India-First Technology 🇮🇳
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
            WhatsApp-Powered Growth Engine 🚀
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Less manual work, more automation. Small bakery ke liye Big Brand experience.
          </p>
        </div>

        <div className="space-y-24">
          
          {/* Feature 1: Share Items */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="absolute inset-0 bg-green-200 rounded-3xl transform rotate-3 scale-95 opacity-50 blur-lg"></div>
              <div className="relative bg-white border border-gray-100 rounded-3xl shadow-xl overflow-hidden p-2">
                 <img 
                   src="https://images.unsplash.com/photo-1535141192574-5d4897c12636?auto=format&fit=crop&q=80&w=1000" 
                   alt="Taking photo of cake to share" 
                   className="rounded-2xl w-full h-64 md:h-80 object-cover"
                 />
                 <div className="absolute bottom-6 right-6">
                    <button className="bg-[#25D366] text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center gap-2 font-bold px-6">
                      <Share2 size={20} /> Share
                    </button>
                 </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center text-green-600">
                <Share2 size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">📲 Share Items on WhatsApp</h3>
                <p className="text-lg text-pink-600 font-medium mt-1">Ek Click Mein Cake Share Karo – Sales Apne Aap Aayengi</p>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Customers ko cake pasand aaya? Bas "Share on WhatsApp" dabao aur product turant image, price aur description ke saath share ho jaata hai. Free word-of-mouth marketing!
              </p>
              
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <TrendingUp className="text-green-600" size={18} /> Result:
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle2 className="text-green-500 w-4 h-4" /> Zyada Reach & Enquiries
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle2 className="text-green-500 w-4 h-4" /> Zyada Orders (Bina Extra Ads Ke)
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle2 className="text-green-500 w-4 h-4" /> Perfect for Birthdays & Party Planning
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Feature 2: Invoice */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
                <FileText size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">🧾 Share Invoice on WhatsApp</h3>
                <p className="text-lg text-pink-600 font-medium mt-1">Professional Invoice – WhatsApp Par Direct</p>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Ab order details ya payment ke liye confusion nahi. Complete order ya custom cake ka proper invoice ek click mein WhatsApp par share karo. No manual bill screenshots!
              </p>
              
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <TrendingUp className="text-blue-600" size={18} /> Benefits:
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle2 className="text-blue-500 w-4 h-4" /> Customer ko Full Clarity
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle2 className="text-blue-500 w-4 h-4" /> Payment Follow-up Easy
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle2 className="text-blue-500 w-4 h-4" /> Trust & Professionalism Increase
                  </li>
                </ul>
              </div>
            </div>
             <div className="relative">
              <div className="absolute inset-0 bg-blue-200 rounded-3xl transform -rotate-3 scale-95 opacity-50 blur-lg"></div>
              <div className="relative bg-white border border-gray-100 rounded-3xl shadow-xl overflow-hidden p-2">
                 <img 
                   src="https://images.unsplash.com/photo-1556742031-c6961e8560b0?auto=format&fit=crop&q=80&w=1000" 
                   alt="Digital Payment and Invoice" 
                   className="rounded-2xl w-full h-64 md:h-80 object-cover"
                 />
                 <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/90 backdrop-blur px-6 py-4 rounded-xl shadow-2xl border border-gray-100 text-center">
                    <p className="text-xs text-gray-500 uppercase tracking-wider font-bold">Invoice Sent</p>
                    <p className="text-2xl font-bold text-gray-900">₹1,499.00</p>
                    <div className="mt-2 flex justify-center text-green-500">
                      <CheckCircle2 size={24} />
                    </div>
                 </div>
              </div>
            </div>
          </div>

          {/* Feature 3: Custom Cake */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
             <div className="order-2 lg:order-1 relative">
              <div className="absolute inset-0 bg-pink-200 rounded-3xl transform rotate-3 scale-95 opacity-50 blur-lg"></div>
              <div className="relative bg-white border border-gray-100 rounded-3xl shadow-xl overflow-hidden p-2">
                 <img 
                   src="https://images.unsplash.com/photo-1535254973040-607b474cb50d?auto=format&fit=crop&q=80&w=1000" 
                   alt="Custom Unicorn Themed Cake" 
                   className="rounded-2xl w-full h-64 md:h-80 object-cover"
                 />
                 <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                    <p className="font-bold">Theme: Unicorn Fantasy</p>
                    <p className="text-sm opacity-80">Size: 3kg • Flavour: Strawberry Vanilla</p>
                 </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <div className="w-14 h-14 bg-pink-100 rounded-xl flex items-center justify-center text-pink-600">
                <PenTool size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">🎨 Custom Cake Request</h3>
                <p className="text-lg text-pink-600 font-medium mt-1">Customer Ka Idea → Bakery Ka Masterpiece</p>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Har customer ko ready-made cake nahi chahiye. Is feature se customer direct custom cake request (Size, Theme, Budget, Delivery Date) bhej sakta hai.
              </p>
              
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <TrendingUp className="text-pink-600" size={18} /> Bakery Ke Liye Fayda:
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle2 className="text-pink-500 w-4 h-4" /> Clear Requirements Pehle Hi
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle2 className="text-pink-500 w-4 h-4" /> High-Value Custom Orders
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle2 className="text-pink-500 w-4 h-4" /> Professional Workflow
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>

        {/* Final CTA */}
        <div className="mt-24 text-center">
          <div className="inline-block p-1 rounded-full bg-gradient-to-r from-pink-500 to-indigo-500">
            <div className="bg-white rounded-full px-8 py-4">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                "Ab sirf cake hi nahi, experience bhi deliver karo." 🍰
              </h3>
            </div>
          </div>
          <div className="mt-8">
            <Button size="lg" href={DEMO_LINK} target="_blank" rel="noopener noreferrer" className="group">
              Start Using Smart Features <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhatsAppFeatures;