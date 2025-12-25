
import { Product, FAQ } from './types';

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Glow Awakening Serum',
    brand: 'Lumière',
    price: '$68.00',
    description: 'A potent Vitamin C and hyaluronic acid blend for an instant radiant finish.',
    link: '#',
    imageUrl: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=400',
    category: 'Skincare'
  },
  {
    id: '2',
    name: 'Midnight Recovery Oil',
    brand: 'Essence',
    price: '$82.00',
    description: 'Infused with botanical extracts to repair and rejuvenate your skin while you sleep.',
    link: '#',
    imageUrl: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=400',
    category: 'Skincare'
  },
  {
    id: '3',
    name: 'Velvet Matte Lipstick',
    brand: 'Petals',
    price: '$32.00',
    description: 'High-pigment, long-wearing color with a weightless, buttery finish.',
    link: '#',
    imageUrl: 'https://images.unsplash.com/photo-1586776977607-310e9c725c37?auto=format&fit=crop&q=80&w=400',
    category: 'Makeup'
  }
];

export const INITIAL_FAQS: FAQ[] = [
  {
    id: '1',
    question: 'How do I build a beginner skincare routine?',
    answer: 'Start with three basic steps: Cleanse, Moisturize, and Sunscreen. Once consistent, you can add serums or exfoliants tailored to your skin concerns.',
    category: 'Skincare Basics'
  },
  {
    id: '2',
    question: 'What is the best way to clean makeup brushes?',
    answer: 'Use a gentle brush cleanser or baby shampoo. Swirl the brush in your palm with warm water, rinse until clear, and lay flat to dry to avoid water entering the ferrule.',
    category: 'Makeup Tips'
  }
];
