
export interface Product {
  id: string;
  name: string;
  brand: string;
  price: string;
  description: string;
  link: string;
  imageUrl: string;
  category: 'Skincare' | 'Makeup' | 'Haircare' | 'Fragrance';
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export type ViewType = 'home' | 'products' | 'faq' | 'admin';
