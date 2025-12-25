
import React, { useState } from 'react';
import { Product, FAQ } from '../types';
import { suggestProductDescription } from '../services/geminiService';

interface AdminControlsProps {
  onAddProduct: (p: Product) => void;
  onAddFAQ: (f: FAQ) => void;
}

export const AdminControls: React.FC<AdminControlsProps> = ({ onAddProduct, onAddFAQ }) => {
  const [activeTab, setActiveTab] = useState<'product' | 'faq'>('product');
  const [isSuggesting, setIsSuggesting] = useState(false);

  // Form states
  const [pName, setPName] = useState('');
  const [pBrand, setPBrand] = useState('');
  const [pPrice, setPPrice] = useState('');
  const [pDesc, setPDesc] = useState('');
  const [pImg, setPImg] = useState('https://picsum.photos/400/500');
  const [pLink, setPLink] = useState('');
  const [pCat, setPCat] = useState<Product['category']>('Skincare');

  const [fQues, setFQues] = useState('');
  const [fAns, setFAns] = useState('');
  const [fCat, setFCat] = useState('');

  const handleSuggestDescription = async () => {
    if (!pName) return;
    setIsSuggesting(true);
    const suggestion = await suggestProductDescription(pName);
    setPDesc(suggestion);
    setIsSuggesting(false);
  };

  const submitProduct = (e: React.FormEvent) => {
    e.preventDefault();
    onAddProduct({
      id: Date.now().toString(),
      name: pName,
      brand: pBrand,
      price: pPrice,
      description: pDesc,
      imageUrl: pImg,
      link: pLink,
      category: pCat
    });
    // Reset
    setPName(''); setPBrand(''); setPPrice(''); setPDesc(''); setPLink('');
    alert('Product added successfully!');
  };

  const submitFAQ = (e: React.FormEvent) => {
    e.preventDefault();
    onAddFAQ({
      id: Date.now().toString(),
      question: fQues,
      answer: fAns,
      category: fCat || 'General'
    });
    setFQues(''); setFAns(''); setFCat('');
    alert('FAQ added successfully!');
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-rose-100">
        <div className="flex border-b border-rose-50">
          <button 
            onClick={() => setActiveTab('product')}
            className={`flex-1 py-6 font-bold transition-all ${activeTab === 'product' ? 'bg-rose-50 text-rose-900 border-b-2 border-rose-900' : 'text-gray-400 hover:text-rose-300'}`}
          >
            Add New Product
          </button>
          <button 
            onClick={() => setActiveTab('faq')}
            className={`flex-1 py-6 font-bold transition-all ${activeTab === 'faq' ? 'bg-rose-50 text-rose-900 border-b-2 border-rose-900' : 'text-gray-400 hover:text-rose-300'}`}
          >
            Add Knowledge Base FAQ
          </button>
        </div>

        <div className="p-8 md:p-12">
          {activeTab === 'product' ? (
            <form onSubmit={submitProduct} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Product Name</label>
                  <input 
                    required 
                    value={pName} 
                    onChange={e => setPName(e.target.value)} 
                    className="w-full px-4 py-3 rounded-xl border border-rose-100 focus:ring-2 focus:ring-rose-200 outline-none" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Brand</label>
                  <input 
                    required 
                    value={pBrand} 
                    onChange={e => setPBrand(e.target.value)} 
                    className="w-full px-4 py-3 rounded-xl border border-rose-100 focus:ring-2 focus:ring-rose-200 outline-none" 
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Price (e.g. $45.00)</label>
                  <input 
                    required 
                    value={pPrice} 
                    onChange={e => setPPrice(e.target.value)} 
                    className="w-full px-4 py-3 rounded-xl border border-rose-100 focus:ring-2 focus:ring-rose-200 outline-none" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Category</label>
                  <select 
                    value={pCat} 
                    onChange={e => setPCat(e.target.value as Product['category'])}
                    className="w-full px-4 py-3 rounded-xl border border-rose-100 focus:ring-2 focus:ring-rose-200 outline-none bg-white"
                  >
                    <option>Skincare</option>
                    <option>Makeup</option>
                    <option>Haircare</option>
                    <option>Fragrance</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-bold text-gray-700">Description</label>
                  <button 
                    type="button" 
                    onClick={handleSuggestDescription}
                    className="text-xs text-rose-600 hover:text-rose-800 font-bold flex items-center gap-1"
                  >
                    <i className={`fa-solid fa-wand-sparkles ${isSuggesting ? 'animate-spin' : ''}`}></i>
                    {isSuggesting ? 'Generating...' : 'Suggest with AI'}
                  </button>
                </div>
                <textarea 
                  required 
                  rows={3}
                  value={pDesc} 
                  onChange={e => setPDesc(e.target.value)} 
                  className="w-full px-4 py-3 rounded-xl border border-rose-100 focus:ring-2 focus:ring-rose-200 outline-none resize-none" 
                ></textarea>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Store Link (URL)</label>
                <input 
                  required 
                  type="url"
                  placeholder="https://..."
                  value={pLink} 
                  onChange={e => setPLink(e.target.value)} 
                  className="w-full px-4 py-3 rounded-xl border border-rose-100 focus:ring-2 focus:ring-rose-200 outline-none" 
                />
              </div>

              <button 
                type="submit"
                className="w-full py-4 bg-rose-900 text-white rounded-xl font-bold hover:bg-rose-800 transition-all shadow-xl shadow-rose-100"
              >
                Publish to Space
              </button>
            </form>
          ) : (
            <form onSubmit={submitFAQ} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Question</label>
                <input 
                  required 
                  value={fQues} 
                  onChange={e => setFQues(e.target.value)} 
                  className="w-full px-4 py-3 rounded-xl border border-rose-100 focus:ring-2 focus:ring-rose-200 outline-none" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Expert Answer</label>
                <textarea 
                  required 
                  rows={5}
                  value={fAns} 
                  onChange={e => setFAns(e.target.value)} 
                  className="w-full px-4 py-3 rounded-xl border border-rose-100 focus:ring-2 focus:ring-rose-200 outline-none resize-none" 
                ></textarea>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Category</label>
                <input 
                  required 
                  placeholder="e.g., Routine, Science, Maintenance"
                  value={fCat} 
                  onChange={e => setFCat(e.target.value)} 
                  className="w-full px-4 py-3 rounded-xl border border-rose-100 focus:ring-2 focus:ring-rose-200 outline-none" 
                />
              </div>
              <button 
                type="submit"
                className="w-full py-4 bg-rose-900 text-white rounded-xl font-bold hover:bg-rose-800 transition-all shadow-xl shadow-rose-100"
              >
                Add to Knowledge Base
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
