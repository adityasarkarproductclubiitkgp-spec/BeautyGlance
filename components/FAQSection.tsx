
import React, { useState } from 'react';
import { FAQ } from '../types';
import { generateFAQAnswer } from '../services/geminiService';

interface FAQSectionProps {
  faqs: FAQ[];
}

export const FAQSection: React.FC<FAQSectionProps> = ({ faqs }) => {
  const [openId, setOpenId] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [aiQuestion, setAiQuestion] = useState('');
  const [aiLoading, setAiLoading] = useState(false);
  const [aiResponse, setAiResponse] = useState<string | null>(null);

  const filteredFaqs = faqs.filter(f => 
    f.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    f.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAskAi = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!aiQuestion.trim()) return;
    setAiLoading(true);
    const answer = await generateFAQAnswer(aiQuestion);
    setAiResponse(answer);
    setAiLoading(false);
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-rose-900 mb-4 serif">The Knowledge Hub</h2>
        <p className="text-gray-600">Your most pressing beauty questions, answered by experts.</p>
      </div>

      <div className="mb-12">
        <div className="relative">
          <i className="fa-solid fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
          <input 
            type="text" 
            placeholder="Search FAQs..." 
            className="w-full pl-12 pr-4 py-4 bg-white border border-rose-100 rounded-2xl shadow-sm focus:ring-2 focus:ring-rose-200 outline-none transition-all"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="space-y-4 mb-20">
        {filteredFaqs.map((faq) => (
          <div key={faq.id} className="bg-white border border-rose-50 rounded-2xl overflow-hidden transition-all shadow-sm">
            <button 
              className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-rose-50/50 transition-colors"
              onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
            >
              <span className="font-semibold text-rose-900">{faq.question}</span>
              <i className={`fa-solid fa-chevron-down transition-transform duration-300 ${openId === faq.id ? 'rotate-180' : ''} text-rose-300`}></i>
            </button>
            <div className={`transition-all duration-300 overflow-hidden ${openId === faq.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-rose-50 pt-4">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
        {filteredFaqs.length === 0 && (
          <p className="text-center text-gray-400 py-10">No FAQs found matching your search.</p>
        )}
      </div>

      {/* AI Ask Feature */}
      <div className="bg-rose-900 rounded-[2.5rem] p-10 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-rose-800 rounded-full -mr-20 -mt-20 opacity-50 blur-3xl"></div>
        <div className="relative z-10">
          <h3 className="text-3xl font-bold mb-6 serif italic">Still have a question?</h3>
          <p className="mb-8 text-rose-100">Ask our Lumière AI Specialist for instant expert advice.</p>
          
          <form onSubmit={handleAskAi} className="flex flex-col md:flex-row gap-4">
            <input 
              type="text" 
              placeholder="e.g., How do I manage combination skin in summer?"
              className="flex-1 bg-white/10 border border-white/20 rounded-full px-6 py-4 outline-none focus:bg-white/20 transition-all placeholder:text-rose-200"
              value={aiQuestion}
              onChange={(e) => setAiQuestion(e.target.value)}
            />
            <button 
              disabled={aiLoading}
              className="bg-white text-rose-900 px-8 py-4 rounded-full font-bold hover:bg-rose-50 transition-all flex items-center justify-center gap-2"
            >
              {aiLoading ? (
                <i className="fa-solid fa-circle-notch animate-spin"></i>
              ) : (
                <i className="fa-solid fa-wand-magic-sparkles"></i>
              )}
              {aiLoading ? 'Thinking...' : 'Get Answer'}
            </button>
          </form>

          {aiResponse && (
            <div className="mt-8 p-6 bg-white/10 rounded-3xl border border-white/10 animate-fade-in">
              <div className="flex items-center gap-2 mb-2 text-rose-300 text-xs uppercase tracking-widest font-bold">
                <i className="fa-solid fa-robot"></i> AI Response
              </div>
              <p className="text-rose-50 leading-relaxed italic">"{aiResponse}"</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
