
import React from 'react';
import { Product } from '../types';

interface ProductGridProps {
  products: Product[];
}

export const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <h2 className="text-4xl font-bold text-rose-900 mb-2 serif">Curated Essentials</h2>
          <p className="text-gray-500">Only the finest ingredients for your daily ritual.</p>
        </div>
        <div className="flex gap-2">
          {['All', 'Skincare', 'Makeup', 'Fragrance'].map(cat => (
            <button key={cat} className="px-5 py-2 rounded-full border border-rose-100 text-sm hover:bg-rose-50 transition-colors">
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="group cursor-pointer">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden mb-6 bg-rose-50">
              <img 
                src={product.imageUrl} 
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute top-4 right-4">
                <button className="w-10 h-10 bg-white/80 backdrop-blur rounded-full flex items-center justify-center text-rose-900 hover:bg-rose-500 hover:text-white transition-colors">
                  <i className="fa-regular fa-heart"></i>
                </button>
              </div>
              <div className="absolute bottom-4 left-4 right-4 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <a 
                  href={product.link}
                  className="block w-full py-3 bg-rose-900 text-white text-center rounded-xl font-medium shadow-lg"
                >
                  Shop Now
                </a>
              </div>
            </div>
            <div className="px-2">
              <span className="text-xs uppercase tracking-widest text-rose-400 font-bold mb-1 block">{product.brand}</span>
              <h3 className="text-xl font-bold text-rose-900 mb-2 group-hover:text-rose-600 transition-colors">{product.name}</h3>
              <p className="text-gray-500 text-sm line-clamp-2 mb-3">{product.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-rose-900">{product.price}</span>
                <span className="text-xs text-rose-300 bg-rose-50 px-2 py-1 rounded">{product.category}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
