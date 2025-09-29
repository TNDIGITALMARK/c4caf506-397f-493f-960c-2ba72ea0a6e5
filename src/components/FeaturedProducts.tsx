'use client';

import Link from 'next/link';
import ProductCard from './ProductCard';
import { Button } from './ui/button';
import { Product } from '../types';

interface FeaturedProductsProps {
  title: string;
  products: Product[];
  showViewAll?: boolean;
  viewAllHref?: string;
}

export default function FeaturedProducts({
  title,
  products,
  showViewAll = true,
  viewAllHref = '/products'
}: FeaturedProductsProps) {
  return (
    <section className="py-16 bg-gradient-to-br from-hero-navy via-hero-gray to-hero-navy">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-300 via-purple-300 to-orange-300 bg-clip-text text-transparent drop-shadow-lg">{title}</h2>
          {showViewAll && (
            <Link href={viewAllHref}>
              <Button variant="outline" className="border-2 border-blue-400 text-blue-300 hover:bg-blue-400 hover:text-white transition-all duration-300 shadow-lg hover:shadow-blue-500/50 font-semibold px-6 py-3 rounded-xl">
                View All
              </Button>
            </Link>
          )}
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}