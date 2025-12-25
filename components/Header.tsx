
import React from 'react';
import { ViewType } from '../types';

interface HeaderProps {
  currentView: ViewType;
  setView: (view: ViewType) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentView, setView }) => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-rose-100 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div 
          className="flex items-center gap-2 cursor-pointer group"
          onClick={() => setView('home')}
        >
          <div className="w-10 h-10 bg-rose-200 rounded-full flex items-center justify-center transition-transform group-hover:scale-110">
            <i className="fa-solid fa-sparkles text-rose-600"></i>
          </div>
          <span className="text-2xl font-bold tracking-tight text-rose-900 serif">Lumière</span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest text-gray-500">
          <button 
            onClick={() => setView('home')}
            className={`hover:text-rose-600 transition-colors ${currentView === 'home' ? 'text-rose-600' : ''}`}
          >
            Home
          </button>
          <button 
            onClick={() => setView('products')}
            className={`hover:text-rose-600 transition-colors ${currentView === 'products' ? 'text-rose-600' : ''}`}
          >
            Products
          </button>
          <button 
            onClick={() => setView('faq')}
            className={`hover:text-rose-600 transition-colors ${currentView === 'faq' ? 'text-rose-600' : ''}`}
          >
            Expert FAQ
          </button>
          <button 
            onClick={() => setView('admin')}
            className={`px-4 py-2 bg-rose-50 rounded-full hover:bg-rose-100 transition-colors ${currentView === 'admin' ? 'bg-rose-100 text-rose-900' : 'text-rose-800'}`}
          >
            Manage Space
          </button>
        </nav>

        <div className="flex md:hidden">
          <button onClick={() => setView('admin')} className="text-gray-500">
            <i className="fa-solid fa-bars text-xl"></i>
          </button>
        </div>
      </div>
    </header>
  );
};
