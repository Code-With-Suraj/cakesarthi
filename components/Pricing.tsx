import React from 'react';
import { PRICING_PLANS, SETUP_SERVICES, CONTACT_INFO } from '../constants';
import { Check, X, Star } from 'lucide-react';
import Button from './Button';

const Pricing: React.FC = () => {
  const getWhatsAppLink = (message: string) => {
    return `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent(message)}`;
  };

  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-pink-100/50 rounded-full blur-3xl"></div>
        <div className="absolute top-[40%] -right-[10%] w-[40%] h-[40%] bg-indigo-100/50 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base font-semibold tracking-wide text-pink-600 uppercase">
            Flexible Pricing
          </h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            CakeSarthi Pricing Plans 💰
          </p>
          <p className="mt-4 text-xl text-gray-600">
            No Commission • One-Time Investment • Lifetime Value
            <br/>
            <span className="text-sm text-gray-500 mt-2 block">
              Swiggy / Zomato ko har order par commission dene ke bajaye, apni bakery ka khud ka online system use kijiye.
            </span>
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 items-start">
          {PRICING_PLANS.map((plan, idx) => {
            const isStandard = plan.name === 'Standard';
            const isProfessional = plan.name === 'Professional';
            const isLifetime = plan.name === 'Lifetime';

            let borderColor = 'border-gray-200';
            let badgeColor = 'bg-gray-600';
            let shadowClass = 'shadow-lg hover:shadow-xl';
            let titleColor = 'text-gray-900';
            let descBg = 'bg-gray-50 text-gray-800 border-gray-100';
            let checkColor = 'text-green-500';

            if (isStandard) {
              borderColor = 'border-pink-500';
              badgeColor = 'bg-pink-600';
              shadowClass = 'shadow-2xl scale-105 z-10';
              titleColor = 'text-pink-600';
              descBg = 'bg-pink-50 text-pink-800 border-pink-100';
              checkColor = 'text-pink-600';
            } else if (isProfessional) {
              borderColor = 'border-blue-500';
              badgeColor = 'bg-blue-600';
              shadowClass = 'shadow-xl hover:shadow-2xl border-2';
              titleColor = 'text-blue-600';
              descBg = 'bg-blue-50 text-blue-800 border-blue-100';
              checkColor = 'text-blue-600';
            } else if (isLifetime) {
              borderColor = 'border-indigo-300';
              badgeColor = 'bg-indigo-600';
              shadowClass = 'shadow-xl bg-gradient-to-b from-white to-indigo-50';
              titleColor = 'text-indigo-600';
              descBg = 'bg-indigo-100 text-indigo-800 border-indigo-200';
              checkColor = 'text-indigo-600';
            }

            // WhatsApp Message for specific plan
            const planMessage = `Hello Team CakeSarthi! 👋\n\nI am interested in the *${plan.name} Plan* (${plan.price}${plan.period}).\n\nPlease help me get started with my bakery setup.`;

            return (
              <div 
                key={idx}
                className={`relative bg-white rounded-2xl transition-all duration-300 flex flex-col border ${borderColor} ${shadowClass}`}
              >
                {/* Badges */}
                {plan.badge && (
                  <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 rounded-full text-sm font-bold text-white shadow-md ${badgeColor}`}>
                    {plan.badge}
                  </div>
                )}

                <div className="p-6 flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className={`text-xl font-bold ${titleColor}`}>
                        {plan.name}
                      </h3>
                      <p className="text-xs text-gray-500 font-medium">{plan.subtitle}</p>
                    </div>
                    <span className="text-3xl">{plan.icon}</span>
                  </div>

                  <div className="flex items-baseline mb-2">
                    <span className="text-3xl font-extrabold text-gray-900">{plan.price}</span>
                    <span className="ml-1 text-sm text-gray-500">{plan.period}</span>
                  </div>

                  {plan.description && (
                    <p className={`text-xs mb-6 p-3 rounded-lg border ${descBg}`}>
                      {plan.description}
                    </p>
                  )}

                  <hr className="border-gray-100 my-6" />

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start">
                        {feature.included ? (
                          <Check className={`w-4 h-4 mr-2 flex-shrink-0 ${checkColor}`} />
                        ) : (
                          <X className="w-4 h-4 mr-2 text-gray-300 flex-shrink-0" />
                        )}
                        <span className={`text-sm ${feature.included ? 'text-gray-700 font-medium' : 'text-gray-400 line-through'}`}>
                          {feature.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-6 pt-0 mt-auto">
                   <Button 
                    className="w-full" 
                    variant={isStandard ? 'primary' : isProfessional ? 'secondary' : isLifetime ? 'secondary' : 'outline'}
                    style={isProfessional ? { backgroundColor: '#2563eb', boxShadow: '0 10px 15px -3px rgba(37, 99, 235, 0.3)' } : {}}
                    href={getWhatsAppLink(planMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                   >
                     {isLifetime ? 'Get Lifetime Access' : 'Start Free Demo'}
                   </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Optional Setup Section */}
        <div className="mt-16 max-w-2xl mx-auto bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
          <div className="bg-gray-50 px-6 py-4 border-b border-gray-100">
            <h4 className="font-bold text-gray-900 flex items-center gap-2">
              <Star className="text-yellow-500 w-5 h-5 fill-current" />
              Optional One-Time Setup
            </h4>
          </div>
          <div className="divide-y divide-gray-100">
            {SETUP_SERVICES.map((item, idx) => (
              <div key={idx} className="px-6 py-4 flex justify-between items-center hover:bg-gray-50 transition-colors">
                <span className="text-gray-700 font-medium">{item.service}</span>
                <div className="text-right">
                  <span className="block font-bold text-green-600">{item.price}</span>
                  <span className="text-xs text-gray-400">{item.note}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Conversion Quote */}
        <div className="mt-20 text-center px-4">
          <blockquote className="text-2xl md:text-3xl font-serif italic text-gray-700 max-w-4xl mx-auto leading-relaxed">
            “Agar sirf 1 extra cake bhi har hafte bikta hai,
            toh CakeSarthi apni cost khud nikaal leta hai.”
          </blockquote>
        </div>

        {/* Final CTA */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Ready to Grow Your Bakery? 🎂</h3>
          <div className="flex flex-wrap justify-center gap-6 text-gray-600 mb-8">
            <span className="flex items-center gap-2"><Check className="text-green-500 w-5 h-5" /> No hidden charges</span>
            <span className="flex items-center gap-2"><Check className="text-green-500 w-5 h-5" /> No commission</span>
            <span className="flex items-center gap-2"><Check className="text-green-500 w-5 h-5" /> No contracts</span>
          </div>
          <div className="flex justify-center gap-4">
            <Button 
              size="lg" 
              className="animate-pulse"
              href={getWhatsAppLink("Hello Team CakeSarthi! I want to Start a Free Demo for my bakery.")}
              target="_blank"
              rel="noopener noreferrer"
            >
              Start Free Demo
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              href={getWhatsAppLink("Hello Team CakeSarthi! I want to know more about upgrading my current plan.")}
              target="_blank"
              rel="noopener noreferrer"
            >
              Upgrade Anytime
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Pricing;