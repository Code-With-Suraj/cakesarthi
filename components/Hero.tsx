import React from 'react';
import Button from './Button';
import { ChevronRight, Star } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Hero: React.FC = () => {
  const getWhatsAppLink = (message: string) => {
      return `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent(message)}`;
  };
  
  return (
    <div id="home" className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-gradient-to-b from-pink-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-100 text-pink-700 font-medium text-sm">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
              </span>
              The #1 Choice for Home Bakers
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
              Manage your <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-indigo-600">Bakery Orders</span> like a Pro! 🚀
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Kya aap diary aur WhatsApp par hisab karte-karte thak chuke hain? 
              <br className="hidden md:block"/>
              <span className="font-semibold text-gray-900">CakeSarthi</span> wo jaadui technique hai jo aapke home-business ko ek bade brand mein badal degi.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="group"
                href={getWhatsAppLink("Hello Team CakeSarthi! I want to Start a Free Trial.")}
                target="_blank"
                rel="noopener noreferrer"
              >
                Start Free Trial 
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" href="#features">
                Watch Demo
              </Button>
            </div>

            <div className="pt-4 flex items-center justify-center lg:justify-start gap-4 text-sm text-gray-500 font-medium">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <img 
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-white"
                    src={`https://picsum.photos/seed/user${i}/100/100`}
                    alt="User" 
                  />
                ))}
              </div>
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span>Loved by 500+ Bakers</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
            <div className="relative rounded-2xl shadow-2xl overflow-hidden bg-white border-8 border-white transform hover:rotate-1 transition-transform duration-500">
               <img 
                 src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=2940" 
                 alt="Professional Baker Decorating Cake" 
                 className="w-full h-auto object-cover"
               />
               
               {/* Floating Badges */}
               <div className="absolute top-6 right-6 bg-white/90 backdrop-blur px-4 py-2 rounded-lg shadow-lg flex items-center gap-2 animate-bounce-slow">
                 <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                 <span className="font-bold text-gray-800">Revenue: ₹45,000</span>
               </div>
               
               <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur px-4 py-2 rounded-lg shadow-lg">
                 <p className="text-xs text-gray-500">New Order</p>
                 <p className="font-bold text-pink-600">Chocolate Truffle (1kg)</p>
               </div>
            </div>
            
            {/* Decorative Background Elements */}
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;