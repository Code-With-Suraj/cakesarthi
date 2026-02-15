import React from 'react';
import { PRICING_PLANS, SETUP_SERVICES, CONTACT_INFO, DEMO_LINK } from '../constants';
import { Check, X, ExternalLink, Smartphone, AlertCircle, Upload, Image as ImageIcon } from 'lucide-react';
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
            <br />
            <span className="text-sm text-gray-500 mt-2 block">
              Swiggy / Zomato ko har order par commission dene ke bajaye, apni bakery ka khud ka online system use kijiye.
            </span>
          </p>
          <div className="mt-8">
            <Button
              variant="outline"
              href={DEMO_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-white shadow-sm border-gray-300 text-gray-700 hover:border-pink-500 hover:text-pink-600"
            >
              Try Live Demo Before Buying 🧁
            </Button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 items-start max-w-6xl mx-auto">
          {PRICING_PLANS.map((plan, idx) => {
            const isGrowth = plan.name === 'Growth';
            const isGrowthAnnual = plan.name === 'Growth Annual';

            let borderColor = 'border-gray-200';
            let badgeColor = 'bg-gray-600';
            let shadowClass = 'shadow-lg hover:shadow-xl';
            let titleColor = 'text-gray-900';
            let descBg = 'bg-gray-50 text-gray-800 border-gray-100';
            let checkColor = 'text-green-500';

            if (isGrowth) {
              borderColor = 'border-pink-500';
              badgeColor = 'bg-pink-600';
              shadowClass = 'shadow-2xl scale-105 z-10';
              titleColor = 'text-pink-600';
              descBg = 'bg-pink-50 text-pink-800 border-pink-100';
              checkColor = 'text-pink-600';
            } else if (isGrowthAnnual) {
              borderColor = 'border-blue-500';
              badgeColor = 'bg-blue-600';
              shadowClass = 'shadow-xl hover:shadow-2xl border-2';
              titleColor = 'text-blue-600';
              descBg = 'bg-blue-50 text-blue-800 border-blue-100';
              checkColor = 'text-blue-600';
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
                  <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 rounded-full text-sm font-bold text-white shadow-md ${badgeColor} whitespace-nowrap`}>
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
                    variant={isGrowth ? 'primary' : isGrowthAnnual ? 'secondary' : 'outline'}
                    style={isGrowthAnnual ? { backgroundColor: '#2563eb', boxShadow: '0 10px 15px -3px rgba(37, 99, 235, 0.3)' } : {}}
                    href={getWhatsAppLink(planMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {isGrowthAnnual ? 'Get Annual Plan' : 'Start My Bakery'}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile App Add-on Section */}
        <div className="max-w-5xl mx-auto mt-12 px-4">
          <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-2xl border border-gray-700 flex flex-col md:flex-row items-center justify-between gap-8 group hover:border-pink-500/50 transition-colors duration-500">
            
            {/* Glow Effects */}
            <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-pink-600 rounded-full blur-[100px] opacity-30 group-hover:opacity-40 transition-opacity"></div>
            <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-64 h-64 bg-indigo-600 rounded-full blur-[100px] opacity-30 group-hover:opacity-40 transition-opacity"></div>
            
            <div className="relative z-10 flex-1 text-center md:text-left space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/20 text-pink-300 text-xs font-bold uppercase tracking-wider border border-pink-500/30 shadow-[0_0_15px_rgba(236,72,153,0.3)]">
                <Smartphone size={14} />
                Exclusive Add-on
              </div>
              <h3 className="text-2xl md:text-4xl font-extrabold text-white leading-tight">
                Want a <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">Mobile App</span> too? 📱
              </h3>
              
              <div className="space-y-4">
                <p className="text-gray-300 text-lg">
                  Get your own branded Android App on customers' phones.
                </p>
                
                {/* Clarification Box */}
                <div className="bg-white/10 border border-white/10 rounded-xl p-4 flex gap-3 items-start max-w-lg mx-auto md:mx-0 text-left">
                   <AlertCircle className="text-pink-400 shrink-0 mt-0.5" size={18} />
                   <div className="text-sm">
                      <p className="text-pink-200 font-bold mb-1">Important Note:</p>
                      <p className="text-gray-300 leading-relaxed">
                        Ye <span className="text-white font-bold">₹899</span> sirf App banane ki <span className="underline decoration-pink-500 decoration-2 underline-offset-2">One-Time Cost</span> hai.
                        <br/>
                        Monthly subscription (Basic/Growth) alag rahega.
                      </p>
                   </div>
                </div>

                <p className="text-gray-400 text-sm font-medium">
                  • Professional Icon • One-Click Access • Brand Visibility
                </p>
              </div>
            </div>

            <div className="relative z-10 flex flex-col items-center md:items-end gap-4 bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm w-full md:w-auto min-w-[300px]">
              <div className="text-center md:text-right w-full">
                <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-1">One-Time Development Fee</p>
                <div className="flex items-baseline gap-1 justify-center md:justify-end">
                  <span className="text-4xl font-extrabold text-white">₹899</span>
                  <span className="text-gray-400 text-lg">only</span>
                </div>
                <div className="mt-2 pt-2 border-t border-gray-700 text-xs text-gray-400 flex flex-col gap-1 items-center md:items-end">
                  <span>+ Monthly Plan Charges (Separate)</span>
                </div>
              </div>
              <Button 
                variant="primary"
                className="bg-white !text-gray-900 hover:bg-gray-100 border-none shadow-xl w-full font-bold"
                href={getWhatsAppLink("Hello Team CakeSarthi! I understand that ₹899 is a one-time cost for the App and subscription is separate. I want to proceed.")}
                target="_blank"
                rel="noopener noreferrer"
              >
                Get App + Plan 🚀
              </Button>
            </div>
          </div>
        </div>

        {/* Complimentary Onboarding Section */}
        <div className="mt-24 max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h4 className="text-2xl font-bold text-gray-900">Complimentary Onboarding 🤝</h4>
            <p className="text-gray-500 mt-2">Shuruat mein hum aapki puri madad karenge, bilkul FREE.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {SETUP_SERVICES.map((item, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 hover:border-pink-200 flex items-start gap-4">
                <div className="bg-pink-50 p-3 rounded-xl text-pink-600 shrink-0">
                  {idx === 0 ? <Upload size={24} /> : <ImageIcon size={24} />}
                </div>
                <div className="flex-1">
                  <h5 className="font-bold text-gray-900 text-lg mb-1">{item.service}</h5>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-gray-400 line-through text-sm">₹399</span>
                    <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">FREE NOW</span>
                  </div>
                  <p className="text-gray-500 text-sm leading-snug">{item.note.replace('Future:', 'Standard Price:')}</p>
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
          <div className="flex justify-center flex-wrap gap-4">
            <Button
              size="lg"
              className="animate-pulse"
              href={getWhatsAppLink("Hello Team CakeSarthi! I want to Start a Free Demo for my bakery.")}
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Started Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              href={DEMO_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              View Live Demo <ExternalLink size={20} />
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Pricing;