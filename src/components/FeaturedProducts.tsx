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
    <section className="py-12">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-foreground">{title}</h2>
          {showViewAll && (
            <Link href={viewAllHref}>
              <Button variant="outline" className="hover:bg-primary hover:text-primary-foreground">
                View All
              </Button>
            </Link>
          )}
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}