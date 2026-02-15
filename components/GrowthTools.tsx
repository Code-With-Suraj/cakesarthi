import React from 'react';
import { Users, TrendingUp, MessageCircle, RefreshCw, Ticket, Percent, ShieldAlert, Timer, BarChart3, ArrowRight } from 'lucide-react';
import { getWhatsAppLink } from '../constants';
import Button from './Button';

const GrowthTools: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
            Grow Faster with <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-indigo-600">Smart Tools</span> 🚀
          </h2>
          <p className="text-xl text-gray-600">
            Advanced Analytics aur Coupon Engine ke saath apne business ko next level par le jayein.
          </p>
        </div>

        {/* 1. Smart Customer Analytics */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          <div className="order-2 lg:order-1 relative">
             {/* Visual representation of Analytics */}
             <div className="relative bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden p-6 md:p-8">
                <div className="absolute top-0 right-0 w-40 h-40 bg-pink-100 rounded-bl-full opacity-50"></div>
                
                <div className="space-y-4 relative z-10">
                   {/* Dummy Customer Row */}
                   <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100">
                      <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center text-pink-600 font-bold">RK</div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900">Rahul Kumar</h4>
                        <p className="text-xs text-gray-500">Last Order: 2 days ago</p>
                      </div>
                      <div className="text-right">
                        <span className="block font-bold text-green-600">₹12,500</span>
                        <span className="text-[10px] text-gray-400 uppercase tracking-wide">Total Spend</span>
                      </div>
                   </div>

                   {/* VIP Badge */}
                   <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-indigo-50 to-white rounded-xl border border-indigo-100">
                      <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold">SP</div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900">Sneha Patel</h4>
                        <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-indigo-100 text-indigo-800">
                          VIP Customer 👑
                        </span>
                      </div>
                      <div className="text-right">
                         <button className="p-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors">
                           <MessageCircle size={16} />
                         </button>
                      </div>
                   </div>
                   
                   {/* Chart placeholder */}
                   <div className="h-32 bg-gray-50 rounded-xl border border-gray-100 flex items-end justify-between p-4 px-8 gap-2">
                      <div className="w-full bg-pink-200 rounded-t-lg h-[40%]"></div>
                      <div className="w-full bg-pink-300 rounded-t-lg h-[70%]"></div>
                      <div className="w-full bg-pink-500 rounded-t-lg h-[50%]"></div>
                      <div className="w-full bg-pink-400 rounded-t-lg h-[90%]"></div>
                      <div className="w-full bg-pink-600 rounded-t-lg h-[60%]"></div>
                   </div>
                </div>
             </div>
             {/* Decorative blob */}
             <div className="absolute -z-10 w-full h-full bg-pink-500/10 blur-3xl rounded-full top-10 left-10"></div>
          </div>
          
          <div className="order-1 lg:order-2">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-100 text-pink-700 font-bold text-xs uppercase tracking-wider mb-4">
                <BarChart3 size={14} />
                Smart Customer Analytics
             </div>
             <h3 className="text-3xl font-bold text-gray-900 mb-4">
               Apne Customers Ko Behtar Samjhein aur Sales Badhayein 📈
             </h3>
             <p className="text-gray-600 text-lg mb-8 leading-relaxed">
               Sirf orders deliver mat kijiye, apne customers ke saath rishta banayein. Hamara Smart Analytics Dashboard aapko batata hai ki aapka business kaun drive kar raha hai.
             </p>
             
             <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-pink-600 border border-pink-100">
                    <Users size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">Know Your VIPs</h4>
                    <p className="text-gray-600 text-sm mt-1">
                      Ek nazar mein dekhein ki kaunse customers ne sabse zyada spending ki hai aur kaun baar-baar order karta hai.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-pink-600 border border-pink-100">
                    <TrendingUp size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">Track Loyalty</h4>
                    <p className="text-gray-600 text-sm mt-1">
                       Har customer ki Total Spending aur Total Orders history track karein, taaki aap loyal customers ko pehchaan sakein.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-pink-600 border border-pink-100">
                    <MessageCircle size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">One-Click Marketing</h4>
                    <p className="text-gray-600 text-sm mt-1">
                       Dashboard se hi direct apne customers ko WhatsApp par personalized offers aur "Thank You" messages bhejein.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-pink-600 border border-pink-100">
                    <RefreshCw size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">Retention Strategy</h4>
                    <p className="text-gray-600 text-sm mt-1">
                       Data ka use karke inactive customers ko wapas layein aur loyal customers ko retain karein.
                    </p>
                  </div>
                </div>
             </div>
             
             <div className="mt-8 pt-6 border-t border-gray-100">
               <p className="text-pink-600 font-bold italic flex items-center gap-2">
                 "Data-driven decisions ab aapki ungliyon par!"
               </p>
             </div>
          </div>
        </div>

        {/* 2. Advanced Coupon Management */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-1">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-700 font-bold text-xs uppercase tracking-wider mb-4">
                <Ticket size={14} />
                Advanced Coupon Management
             </div>
             <h3 className="text-3xl font-bold text-gray-900 mb-4">
               Powerful Discount Engine – Offers Chalayein, Seconds Mein 🎟️
             </h3>
             <p className="text-gray-600 text-lg mb-8 leading-relaxed">
               Festivals ho ya weekends, sale boost karna ab bohot aasaan hai. Hamara Coupon Module aapko discounts par poora control deta hai.
             </p>
             
             <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-purple-600 border border-purple-100">
                    <Percent size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">Flexible Discount Types</h4>
                    <p className="text-gray-600 text-sm mt-1">
                       Apni marzi ke hisaab se Percentage (%) ya Flat Amount (₹) discounts create karein.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-purple-600 border border-purple-100">
                    <ShieldAlert size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">Smart Rules & Limits</h4>
                    <p className="text-gray-600 text-sm mt-1">
                       Loss se bachne ke liye Minimum Order Amount set karein aur percentage discounts par Max Discount Cap lagayein.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-purple-600 border border-purple-100">
                    <Timer size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">Expiry & Usage Control</h4>
                    <p className="text-gray-600 text-sm mt-1">
                       Coupons ki Expiry Date aur Usage Limit set karein (e.g., First 100 users only) taaki offers ka misuse na ho.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-purple-600 border border-purple-100">
                    <BarChart3 size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">Live Tracking</h4>
                    <p className="text-gray-600 text-sm mt-1">
                       Real-time mein dekhein ki kaunsa coupon kitni baar use hua hai aur active status ko ek click mein toggle karein.
                    </p>
                  </div>
                </div>
             </div>
             
             <div className="mt-8 pt-6 border-t border-gray-100">
               <p className="text-purple-600 font-bold italic flex items-center gap-2">
                 "Sahi offer, sahi waqt par – Sales badhane ka smart tareeka!"
               </p>
             </div>
          </div>

          <div className="order-2 relative">
             {/* Visual representation of Coupons */}
             <div className="relative bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden p-6 md:p-10 flex flex-col items-center justify-center gap-6 min-h-[400px]">
                <div className="absolute top-0 left-0 w-40 h-40 bg-purple-100 rounded-br-full opacity-50"></div>
                <div className="absolute bottom-0 right-0 w-40 h-40 bg-indigo-100 rounded-tl-full opacity-50"></div>
                
                {/* Coupon Card 1 */}
                <div className="relative z-10 w-full max-w-sm bg-gradient-to-r from-purple-500 to-indigo-600 rounded-2xl p-6 text-white shadow-lg transform rotate-[-2deg] hover:rotate-0 transition-transform duration-300">
                    <div className="flex justify-between items-start mb-4">
                       <div>
                          <p className="text-purple-100 text-xs font-bold uppercase tracking-wider">Summer Sale</p>
                          <h4 className="text-2xl font-bold">FLAT ₹150 OFF</h4>
                       </div>
                       <div className="bg-white/20 p-2 rounded-lg backdrop-blur-sm">
                          <Ticket size={24} className="text-white" />
                       </div>
                    </div>
                    <div className="border-t border-white/20 my-4 border-dashed"></div>
                    <div className="flex justify-between items-center">
                       <code className="bg-white/20 px-3 py-1 rounded text-sm font-mono tracking-wider">SUMMER150</code>
                       <span className="text-xs text-purple-100">Min Order: ₹999</span>
                    </div>
                </div>

                {/* Coupon Card 2 */}
                <div className="relative z-10 w-full max-w-sm bg-white border-2 border-dashed border-gray-300 rounded-2xl p-6 text-gray-800 shadow-sm transform rotate-[2deg] hover:rotate-0 transition-transform duration-300">
                    <div className="flex justify-between items-start mb-4">
                       <div>
                          <p className="text-gray-500 text-xs font-bold uppercase tracking-wider">New User</p>
                          <h4 className="text-2xl font-bold text-gray-900">20% Discount</h4>
                       </div>
                       <div className="bg-gray-100 p-2 rounded-lg">
                          <Ticket size={24} className="text-gray-600" />
                       </div>
                    </div>
                    <div className="flex justify-between items-center mt-2">
                       <code className="bg-gray-100 px-3 py-1 rounded text-sm font-mono tracking-wider font-bold text-gray-700">WELCOME20</code>
                       <span className="text-xs text-red-500 font-bold flex items-center gap-1">
                         <Timer size={12} /> Expires in 2 days
                       </span>
                    </div>
                </div>
                
                <div className="mt-4">
                   <Button 
                     size="sm" 
                     className="bg-gray-900 text-white hover:bg-black border-none"
                     href={getWhatsAppLink("Hello! I want to try the Advanced Coupon Engine for my bakery. How do I create offers?")}
                     target="_blank"
                   >
                     Create Your First Coupon
                   </Button>
                </div>
             </div>
             {/* Decorative blob */}
             <div className="absolute -z-10 w-full h-full bg-purple-500/10 blur-3xl rounded-full bottom-10 right-10"></div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default GrowthTools;