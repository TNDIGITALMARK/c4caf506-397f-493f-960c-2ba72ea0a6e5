export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  franchise: string;
  description: string;
  inStock: boolean;
  isNew?: boolean;
  isBestSeller?: boolean;
  rating?: number;
  reviews?: number;
  features?: string[];
  specifications?: {
    height?: string;
    weight?: string;
    material?: string;
    articulation?: string;
    accessories?: string[];
  };
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  image?: string;
  productCount: number;
}

export interface Franchise {
  id: string;
  name: string;
  slug: string;
  description: string;
  logo?: string;
  banner?: string;
  products: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface FilterOptions {
  categories: string[];
  franchises: string[];
  priceRange: [number, number];
  inStockOnly: boolean;
  sortBy: 'name' | 'price-low' | 'price-high' | 'newest' | 'rating';
}