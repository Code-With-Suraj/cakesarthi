import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { TrendingUp } from 'lucide-react';
import { getWhatsAppLink } from '../constants';
import Button from './Button';

const data = [
  { name: 'Jan', orders: 12, revenue: 5000 },
  { name: 'Feb', orders: 19, revenue: 8500 },
  { name: 'Mar', orders: 25, revenue: 12000 },
  { name: 'Apr', orders: 35, revenue: 18000 },
  { name: 'May', orders: 50, revenue: 25000 },
  { name: 'Jun', orders: 75, revenue: 38000 },
];

const Stats: React.FC = () => {
  return (
    <section id="dashboard" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              CakeSarthi aapke business ko kaise badhayega? 📈
            </h2>
            <p className="text-lg text-gray-600">
              "Ye sab toh theek hai, lekin isse meri kamai kaise badhegi?" Chaliye ganit samajhte hain.
            </p>
            
            <ul className="space-y-4 mt-6">
               <li className="flex items-start">
                 <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-500 flex items-center justify-center text-white font-bold text-xs mt-1">1</div>
                 <div className="ml-4">
                   <h4 className="text-lg font-bold text-gray-900">Zero Commission</h4>
                   <p className="text-gray-600">Zomato/Swiggy ka 20-30% commission ab aapki pocket mein.</p>
                 </div>
               </li>
               <li className="flex items-start">
                 <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-500 flex items-center justify-center text-white font-bold text-xs mt-1">2</div>
                 <div className="ml-4">
                   <h4 className="text-lg font-bold text-gray-900">Recurring Revenue</h4>
                   <p className="text-gray-600">Occasion Tracking se purane customers ko wapas layein.</p>
                 </div>
               </li>
            </ul>

            <div className="pt-6">
              <Button 
                variant="secondary" 
                size="lg" 
                className="group"
                href={getWhatsAppLink("Hello Team CakeSarthi! I want to understand how my bakery revenue can grow by 40% using your platform. Please share details.")}
                target="_blank"
              >
                Grow My Revenue <TrendingUp className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" />
              </Button>
            </div>
          </div>

          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-gray-100">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-900">Projected Growth</h3>
              <p className="text-sm text-gray-500">Revenue trend after using CakeSarthi</p>
            </div>
            <div className="h-64 md:h-80 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                  <defs>
                    <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#ec4899" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#ec4899" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#9ca3af'}} />
                  <YAxis axisLine={false} tickLine={false} tick={{fill: '#9ca3af'}} />
                  <Tooltip 
                    contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'}}
                  />
                  <Area type="monotone" dataKey="revenue" stroke="#ec4899" strokeWidth={3} fillOpacity={1} fill="url(#colorRevenue)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 text-center">
              <span className="inline-block bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-full">
                +40% Average Growth
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Stats;