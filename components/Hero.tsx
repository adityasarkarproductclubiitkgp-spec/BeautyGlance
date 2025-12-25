
import React from 'react';

export const Hero: React.FC<{ onExplore: () => void }> = ({ onExplore }) => {
  return (
    <section className="relative h-[80vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=1200" 
          className="w-full h-full object-cover" 
          alt="Beauty Background"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-rose-50/90 to-transparent"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="max-w-2xl animate-fade-in-up">
          <h1 className="text-6xl md:text-8xl font-bold text-rose-900 mb-6 leading-tight">
            Elevate Your <br />
            <span className="italic text-rose-400">Radiance.</span>
          </h1>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed max-w-md">
            Discover a curated world of beauty wisdom, expert advice, and products designed to nourish your skin and soul.
          </p>
          <div className="flex gap-4">
            <button 
              onClick={onExplore}
              className="px-8 py-4 bg-rose-900 text-white rounded-full font-medium hover:bg-rose-800 transition-all shadow-xl hover:shadow-rose-200"
            >
              Shop Collection
            </button>
            <button className="px-8 py-4 bg-white text-rose-900 border border-rose-200 rounded-full font-medium hover:bg-rose-50 transition-all">
              Our Ritual
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
