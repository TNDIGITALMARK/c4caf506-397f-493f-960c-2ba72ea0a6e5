import { Product, Category, Franchise } from '../types';

export const products: Product[] = [
  {
    id: 'spider-man-01',
    name: 'Spider-Man Advanced Suit',
    price: 79.99,
    originalPrice: 89.99,
    image: '/api/placeholder/300/400',
    category: 'Marvel',
    franchise: 'Spider-Man',
    description: 'Highly detailed Spider-Man figure featuring the Advanced Suit from the PS4 game. Premium articulation and authentic design.',
    inStock: true,
    isNew: true,
    isBestSeller: true,
    rating: 4.8,
    reviews: 247,
    features: ['30+ points of articulation', 'Interchangeable hands', 'Web accessories', 'Display stand included'],
    specifications: {
      height: '6 inches',
      weight: '0.5 lbs',
      material: 'High-quality PVC',
      articulation: '30+ points',
      accessories: ['Web effects', '4 pairs of hands', 'Display base']
    }
  },
  {
    id: 'batman-01',
    name: 'Batman Dark Knight',
    price: 84.99,
    image: '/api/placeholder/300/400',
    category: 'DC',
    franchise: 'Batman',
    description: 'Premium Batman figure from The Dark Knight trilogy. Exceptional detail and movie-accurate design.',
    inStock: true,
    isBestSeller: true,
    rating: 4.9,
    reviews: 312,
    features: ['Movie-accurate sculpt', 'Fabric cape', 'Multiple accessories', 'Premium packaging'],
    specifications: {
      height: '6 inches',
      weight: '0.6 lbs',
      material: 'High-quality PVC with fabric elements',
      articulation: '25+ points',
      accessories: ['Batarangs', 'Grappling hook', 'Interchangeable cape', 'Display base']
    }
  },
  {
    id: 'goku-01',
    name: 'Goku Super Saiyan',
    price: 67.99,
    originalPrice: 74.99,
    image: '/api/placeholder/300/400',
    category: 'Anime',
    franchise: 'Dragon Ball',
    description: 'Iconic Super Saiyan Goku figure with energy effects. Perfect for any Dragon Ball Z collection.',
    inStock: true,
    isNew: false,
    rating: 4.7,
    reviews: 189,
    features: ['Energy blast effects', 'Dynamic pose', 'Highly detailed sculpt', 'Premium paint job'],
    specifications: {
      height: '6.5 inches',
      weight: '0.4 lbs',
      material: 'High-quality PVC',
      articulation: '20+ points',
      accessories: ['Kamehameha blast effect', 'Alternate face', 'Display base']
    }
  },
  {
    id: 'wonder-woman-01',
    name: 'Wonder Woman 1984',
    price: 72.99,
    image: '/api/placeholder/300/400',
    category: 'DC',
    franchise: 'Wonder Woman',
    description: 'Wonder Woman from the 1984 movie with golden armor accessories and authentic likeness.',
    inStock: true,
    rating: 4.6,
    reviews: 156,
    features: ['Movie-accurate head sculpt', 'Golden armor pieces', 'Lasso of Truth', 'Multiple hands'],
    specifications: {
      height: '6 inches',
      weight: '0.5 lbs',
      material: 'High-quality PVC',
      articulation: '28+ points',
      accessories: ['Lasso of Truth', 'Shield', 'Sword', '3 pairs of hands', 'Display base']
    }
  },
  {
    id: 'captain-america-01',
    name: 'Captain America Endgame',
    price: 89.99,
    image: '/api/placeholder/300/400',
    category: 'Marvel',
    franchise: 'Captain America',
    description: 'Captain America from Avengers Endgame with damaged shield and Mjolnir accessories.',
    inStock: false,
    rating: 4.9,
    reviews: 298,
    features: ['Endgame accurate design', 'Damaged shield', 'Mjolnir included', 'Premium articulation'],
    specifications: {
      height: '6 inches',
      weight: '0.6 lbs',
      material: 'High-quality PVC',
      articulation: '32+ points',
      accessories: ['Damaged shield', 'Mjolnir', '4 pairs of hands', 'Display base']
    }
  },
  {
    id: 'baby-yoda-01',
    name: 'Grogu (The Child)',
    price: 54.99,
    image: '/api/placeholder/300/400',
    category: 'Star Wars',
    franchise: 'The Mandalorian',
    description: 'Adorable Grogu figure from The Mandalorian series with multiple expressions and accessories.',
    inStock: true,
    isNew: true,
    rating: 4.8,
    reviews: 445,
    features: ['Multiple expressions', 'Hoverpram included', 'Accessories', 'Show-accurate details'],
    specifications: {
      height: '3 inches',
      weight: '0.2 lbs',
      material: 'High-quality PVC',
      articulation: '15+ points',
      accessories: ['Hoverpram', 'Knob from ship', 'Frog', 'Alternate expressions']
    }
  },
  {
    id: 'iron-man-01',
    name: 'Iron Man Mark 85',
    price: 119.99,
    image: '/api/placeholder/300/400',
    category: 'Marvel',
    franchise: 'Iron Man',
    description: 'Premium Iron Man Mark 85 with light-up features and nano weapon effects.',
    inStock: true,
    isBestSeller: true,
    rating: 4.9,
    reviews: 378,
    features: ['LED light features', 'Nano weapon effects', 'Die-cast parts', 'Premium finish'],
    specifications: {
      height: '6.5 inches',
      weight: '0.8 lbs',
      material: 'Die-cast metal and PVC',
      articulation: '35+ points',
      accessories: ['Nano sword', 'Repulsor effects', '6 pairs of hands', 'Display base']
    }
  },
  {
    id: 'vegeta-01',
    name: 'Vegeta Majin',
    price: 69.99,
    image: '/api/placeholder/300/400',
    category: 'Anime',
    franchise: 'Dragon Ball',
    description: 'Majin Vegeta figure with signature M emblem and energy effects.',
    inStock: true,
    rating: 4.7,
    reviews: 203,
    features: ['Majin emblem detail', 'Energy effects', 'Signature pose', 'Premium sculpt'],
    specifications: {
      height: '6.5 inches',
      weight: '0.45 lbs',
      material: 'High-quality PVC',
      articulation: '22+ points',
      accessories: ['Energy blast effects', 'Alternate hands', 'Display base']
    }
  }
];

export const categories: Category[] = [
  {
    id: 'marvel',
    name: 'Marvel',
    slug: 'marvel',
    description: 'Marvel superhero action figures',
    productCount: 4
  },
  {
    id: 'dc',
    name: 'DC Comics',
    slug: 'dc',
    description: 'DC Comics superhero action figures',
    productCount: 2
  },
  {
    id: 'anime',
    name: 'Anime',
    slug: 'anime',
    description: 'Anime character action figures',
    productCount: 2
  },
  {
    id: 'star-wars',
    name: 'Star Wars',
    slug: 'star-wars',
    description: 'Star Wars character action figures',
    productCount: 1
  }
];

export const franchises: Franchise[] = [
  {
    id: 'spider-man',
    name: 'Spider-Man',
    slug: 'spider-man',
    description: 'Your friendly neighborhood Spider-Man',
    products: ['spider-man-01']
  },
  {
    id: 'batman',
    name: 'Batman',
    slug: 'batman',
    description: 'The Dark Knight of Gotham',
    products: ['batman-01']
  },
  {
    id: 'dragon-ball',
    name: 'Dragon Ball',
    slug: 'dragon-ball',
    description: 'Epic battles and super powers',
    products: ['goku-01', 'vegeta-01']
  },
  {
    id: 'wonder-woman',
    name: 'Wonder Woman',
    slug: 'wonder-woman',
    description: 'Amazon warrior princess',
    products: ['wonder-woman-01']
  },
  {
    id: 'captain-america',
    name: 'Captain America',
    slug: 'captain-america',
    description: 'First Avenger',
    products: ['captain-america-01']
  },
  {
    id: 'mandalorian',
    name: 'The Mandalorian',
    slug: 'mandalorian',
    description: 'This is the way',
    products: ['baby-yoda-01']
  },
  {
    id: 'iron-man',
    name: 'Iron Man',
    slug: 'iron-man',
    description: 'Genius, billionaire, playboy, philanthropist',
    products: ['iron-man-01']
  }
];