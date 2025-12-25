
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-rose-50 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-rose-200 rounded-full flex items-center justify-center">
              <i className="fa-solid fa-sparkles text-rose-600 text-sm"></i>
            </div>
            <span className="text-xl font-bold tracking-tight text-rose-900 serif">Lumière</span>
          </div>
          <p className="text-gray-500 text-sm leading-relaxed mb-6">
            Crafting beauty through science and ritual. Your ultimate destination for self-care.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-rose-400 hover:text-rose-600"><i className="fa-brands fa-instagram text-xl"></i></a>
            <a href="#" className="text-rose-400 hover:text-rose-600"><i className="fa-brands fa-pinterest text-xl"></i></a>
            <a href="#" className="text-rose-400 hover:text-rose-600"><i className="fa-brands fa-tiktok text-xl"></i></a>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-rose-900 mb-6 uppercase text-xs tracking-widest">The Shop</h4>
          <ul className="space-y-4 text-sm text-gray-500">
            <li><a href="#" className="hover:text-rose-500 transition-colors">Skincare</a></li>
            <li><a href="#" className="hover:text-rose-500 transition-colors">Body Care</a></li>
            <li><a href="#" className="hover:text-rose-500 transition-colors">Makeup</a></li>
            <li><a href="#" className="hover:text-rose-500 transition-colors">Gift Cards</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-rose-900 mb-6 uppercase text-xs tracking-widest">Support</h4>
          <ul className="space-y-4 text-sm text-gray-500">
            <li><a href="#" className="hover:text-rose-500 transition-colors">Shipping</a></li>
            <li><a href="#" className="hover:text-rose-500 transition-colors">Returns</a></li>
            <li><a href="#" className="hover:text-rose-500 transition-colors">FAQ</a></li>
            <li><a href="#" className="hover:text-rose-500 transition-colors">Contact Us</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-rose-900 mb-6 uppercase text-xs tracking-widest">Newsletter</h4>
          <p className="text-sm text-gray-500 mb-4">Join our list for exclusive rituals and product launches.</p>
          <div className="relative">
            <input 
              type="email" 
              placeholder="Your email" 
              className="w-full bg-rose-50 border border-transparent rounded-full px-6 py-3 outline-none focus:border-rose-200"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-rose-900 text-white rounded-full flex items-center justify-center">
              <i className="fa-solid fa-arrow-right text-xs"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 border-t border-rose-50 pt-10 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 uppercase tracking-widest gap-4">
        <p>&copy; 2024 Lumière Beauty Space. All rights reserved.</p>
        <div className="flex gap-8">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};
