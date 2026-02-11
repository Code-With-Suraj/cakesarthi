import React from 'react';
import { Coins, Wallet, Gift, ShoppingBag, CheckCircle2 } from 'lucide-react';

const LoyaltyProgram: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-yellow-50 via-white to-yellow-50 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-200 rounded-full blur-3xl opacity-20 -mr-20 -mt-20"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-400 rounded-full blur-3xl opacity-10 -ml-20 -mb-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-100 text-yellow-800 font-bold text-sm mb-6 border border-yellow-200 shadow-sm">
            <Coins size={16} className="text-yellow-600" />
            Customer Loyalty System
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
            Sweet Coins <span className="text-yellow-500">Loyalty Program</span> 🪙
          </h2>
          <p className="text-xl text-gray-600">
            Sweet Coins mein aapka swagat hai - Har order par paayein rewards!
            <br className="hidden md:block" />
            Ab har celebration hogi aur bhi meethi.
          </p>
        </div>

        {/* How It Works Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {/* Step 1 */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-yellow-100 relative group hover:-translate-y-2 transition-transform duration-300">
            <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center text-yellow-600 mb-6 group-hover:bg-yellow-500 group-hover:text-white transition-colors">
              <ShoppingBag size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">1. Order Karein & Earn 🎂</h3>
            <p className="text-gray-600">
              Apne pasandida cakes order karein.
              <br/>
              <span className="font-bold text-yellow-600 block mt-2">Rule: ₹100 = 1 Sweet Coin</span>
              <span className="text-sm text-gray-400">(Ex: ₹500 order = 5 Coins)</span>
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-yellow-100 relative group hover:-translate-y-2 transition-transform duration-300">
            <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center text-yellow-600 mb-6 group-hover:bg-yellow-500 group-hover:text-white transition-colors">
              <Wallet size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">2. Coins Wallet Mein 💰</h3>
            <p className="text-gray-600">
              Order deliver hone par Sweet Coins turant aapke wallet mein add ho jayenge.
              <br/>
              <span className="text-sm text-gray-400 mt-2 block">Linked to Mobile Number</span>
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-yellow-100 relative group hover:-translate-y-2 transition-transform duration-300">
            <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center text-yellow-600 mb-6 group-hover:bg-yellow-500 group-hover:text-white transition-colors">
              <Gift size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">3. Redeem & Save 🎉</h3>
            <p className="text-gray-600">
              Next checkout par "Check Wallet" dabayein.
              <br/>
              <span className="font-bold text-yellow-600 block mt-2">Value: 1 Coin = ₹1 Discount</span>
              <span className="text-sm text-gray-400">(50 Coins = ₹50 OFF)</span>
            </p>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-gray-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">Why Customers Love It? ❤️</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-yellow-400 flex-shrink-0" />
                  <div>
                    <span className="font-bold block text-lg">Free Membership</span>
                    <span className="text-gray-400">Join karne ka koi charge nahi, bas order karein.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-yellow-400 flex-shrink-0" />
                  <div>
                    <span className="font-bold block text-lg">Simple Math</span>
                    <span className="text-gray-400">₹100 kharch karo = 1 Coin paao. 1 Coin = ₹1.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-yellow-400 flex-shrink-0" />
                  <div>
                    <span className="font-bold block text-lg">No Expiry</span>
                    <span className="text-gray-400">Aapke Sweet Coins kabhi expire nahi hote.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-yellow-400 flex-shrink-0" />
                  <div>
                    <span className="font-bold block text-lg">100% Redemption</span>
                    <span className="text-gray-400">Saare coins ek hi baar mein use kar sakte hain.</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm border border-white/20">
               <div className="text-center mb-6">
                 <span className="text-yellow-400 text-5xl font-bold">Earn Rewards</span>
                 <p className="text-xl mt-2">on Every Cake!</p>
               </div>
               <div className="bg-yellow-500 text-gray-900 font-bold text-center py-4 rounded-xl shadow-lg transform scale-105">
                 Get 1 Sweet Coin <br/>for every ₹100 spent
               </div>
               <p className="text-center mt-6 text-sm text-gray-400">
                 Redeem as Cash on your next order!
               </p>
            </div>
          </div>
          
          {/* Background Coins */}
          <div className="absolute top-0 right-0 -mt-10 -mr-10 opacity-10">
             <Coins size={300} />
          </div>
        </div>

      </div>
    </section>
  );
};

export default LoyaltyProgram;