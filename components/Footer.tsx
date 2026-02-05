import React from 'react';
import { Cake, Instagram, Facebook, Twitter, Phone, Mail } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-gray-50 pt-16 pb-8 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Cake className="text-pink-600" size={28} />
              <span className="font-bold text-2xl text-gray-900">CakeSarthi</span>
            </div>
            <p className="text-gray-600 max-w-sm">
              CakeSarthi wo jaadui technique hai jo aapke chote se home-business ko ek bade brand mein badal degi! 🚀
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-pink-600 transition-colors"><Instagram size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors"><Facebook size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-sky-500 transition-colors"><Twitter size={24} /></a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-600 hover:text-pink-600">Home</a></li>
              <li><a href="#features" className="text-gray-600 hover:text-pink-600">Features</a></li>
              <li><a href="#benefits" className="text-gray-600 hover:text-pink-600">Benefits</a></li>
              <li><a href="#contact" className="text-gray-600 hover:text-pink-600">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-4">Contact</h4>
            <div className="space-y-3">
              <p className="text-gray-600 flex items-center gap-2">
                <Mail size={18} />
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-pink-600 transition-colors">
                  {CONTACT_INFO.email}
                </a>
              </p>
              <p className="text-gray-600 flex items-center gap-2">
                <Phone size={18} />
                <a href={`https://wa.me/${CONTACT_INFO.whatsapp}`} target="_blank" rel="noopener noreferrer" className="hover:text-pink-600 transition-colors">
                  {CONTACT_INFO.displayPhone}
                </a>
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} CakeSarthi. All rights reserved. Made with ❤️ for Bakers.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;