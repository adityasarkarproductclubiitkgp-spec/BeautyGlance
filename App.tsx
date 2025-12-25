
import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProductGrid } from './components/ProductGrid';
import { FAQSection } from './components/FAQSection';
import { AdminControls } from './components/AdminControls';
import { Footer } from './components/Footer';
import { Product, FAQ, ViewType } from './types';
import { INITIAL_PRODUCTS, INITIAL_FAQS } from './constants';

const App: React.FC = () => {
  const [view, setView] = useState<ViewType>('home');
  const [products, setProducts] = useState<Product[]>([]);
  const [faqs, setFaqs] = useState<FAQ[]>([]);

  // Load data from localStorage on mount
  useEffect(() => {
    const savedProducts = localStorage.getItem('lumiere_products');
    const savedFaqs = localStorage.getItem('lumiere_faqs');

    if (savedProducts) {
      setProducts(JSON.parse(savedProducts));
    } else {
      setProducts(INITIAL_PRODUCTS);
    }

    if (savedFaqs) {
      setFaqs(JSON.parse(savedFaqs));
    } else {
      setFaqs(INITIAL_FAQS);
    }
  }, []);

  // Save data to localStorage when state changes
  useEffect(() => {
    if (products.length > 0) {
      localStorage.setItem('lumiere_products', JSON.stringify(products));
    }
  }, [products]);

  useEffect(() => {
    if (faqs.length > 0) {
      localStorage.setItem('lumiere_faqs', JSON.stringify(faqs));
    }
  }, [faqs]);

  const addProduct = (newProduct: Product) => {
    setProducts(prev => [newProduct, ...prev]);
  };

  const addFAQ = (newFaq: FAQ) => {
    setFaqs(prev => [newFaq, ...prev]);
  };

  const renderContent = () => {
    switch (view) {
      case 'home':
        return (
          <>
            <Hero onExplore={() => setView('products')} />
            <div className="max-w-7xl mx-auto px-6 py-20 text-center">
              <h2 className="text-5xl font-bold text-rose-900 mb-6 serif">A Space for Self-Care</h2>
              <p className="max-w-2xl mx-auto text-gray-600 text-lg leading-relaxed">
                Welcome to Lumière, where we believe beauty is a ritual, not a routine. 
                Explore our curated collections and expert knowledge designed to empower your glow.
              </p>
            </div>
            <ProductGrid products={products.slice(0, 3)} />
            <div className="bg-rose-50 py-20">
               <FAQSection faqs={faqs.slice(0, 2)} />
               <div className="text-center mt-12">
                 <button 
                  onClick={() => setView('faq')}
                  className="px-8 py-4 border-2 border-rose-900 text-rose-900 font-bold rounded-full hover:bg-rose-900 hover:text-white transition-all"
                 >
                   View All Expert Advice
                 </button>
               </div>
            </div>
          </>
        );
      case 'products':
        return <ProductGrid products={products} />;
      case 'faq':
        return <FAQSection faqs={faqs} />;
      case 'admin':
        return <AdminControls onAddProduct={addProduct} onAddFAQ={addFAQ} />;
      default:
        return <Hero onExplore={() => setView('products')} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header currentView={view} setView={setView} />
      <main className="flex-grow">
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
