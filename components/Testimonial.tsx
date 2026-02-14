import React from 'react';
import { TESTIMONIALS, DEMO_LINK, getWhatsAppLink } from '../constants';
import { Quote, ExternalLink } from 'lucide-react';
import Button from './Button';

const Testimonial: React.FC = () => {
  return (
    <section className="py-20 bg-white">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Community Love ❤️</h2>
            <p className="text-gray-500 mt-2">Dekhiye humare bakers kya kehte hain</p>
         </div>
         
         <div className="grid md:grid-cols-2 gap-8">
           {TESTIMONIALS.map((t, idx) => (
             <div key={idx} className="bg-pink-50 p-8 rounded-2xl relative">
               <Quote className="absolute top-6 right-6 text-pink-200 w-12 h-12" />
               <p className="text-lg text-gray-700 font-medium italic mb-6 relative z-10">"{t.text}"</p>
               <div className="flex items-center gap-4">
                 <div className="w-12 h-12 rounded-full bg-pink-200 flex items-center justify-center font-bold text-pink-700 text-xl">
                    {t.name[0]}
                 </div>
                 <div>
                   <h4 className="font-bold text-gray-900">{t.name}</h4>
                   <p className="text-sm text-gray-500">{t.role}</p>
                 </div>
               </div>
             </div>
           ))}
         </div>
         
         <div className="mt-16 text-center">
            <div className="bg-gray-900 text-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto relative overflow-hidden">
               <div className="relative z-10">
                 <h2 className="text-2xl md:text-3xl font-bold mb-4">
                   Kya aap taiyar hain apni bakery ko Smart Bakery banane ke liye? 🧁🚀
                 </h2>
                 <p className="mb-8 text-gray-300">
                   Aaj hi takneek ko apnayein aur apne sapno ko bake karein!
                 </p>
                 <div className="flex flex-col sm:flex-row gap-4 justify-center">
                   <Button 
                     size="lg" 
                     className="animate-pulse !px-12"
                     href={getWhatsAppLink("Namaste CakeSarthi Team! I'm ready to upgrade my bakery. Please help me choose the best plan for my home-business.")}
                     target="_blank"
                   >
                     Get CakeSarthi Now
                   </Button>
                   <a 
                     href={DEMO_LINK} 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-10 rounded-full text-lg border border-white/20 transition-all flex items-center justify-center gap-2"
                   >
                     Try Live Demo <ExternalLink size={20} />
                   </a>
                 </div>
               </div>
               <div className="absolute -left-16 -top-16 w-48 h-48 bg-pink-600/20 rounded-full blur-2xl"></div>
               <div className="absolute -right-16 -bottom-16 w-48 h-48 bg-indigo-600/20 rounded-full blur-2xl"></div>
            </div>
         </div>
       </div>
    </section>
  );
};

export default Testimonial;