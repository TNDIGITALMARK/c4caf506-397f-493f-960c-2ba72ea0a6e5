import Link from 'next/link';
import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export default function ProductsPage() {
  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-4xl font-bold mb-4">All Action Figures</h1>
          <p className="text-lg text-muted-foreground">
            Browse our complete collection of premium action figures and collectibles
          </p>
        </div>

        {/* Products Grid */}
        <div className="mb-6">
          <p className="text-sm text-muted-foreground">
            Showing all {products.length} products
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 py-12 bg-card rounded-lg">
          <h3 className="text-2xl font-bold mb-4">Looking for Something Specific?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Use our advanced filtering system to find exactly what you're looking for by category, franchise, price range, and more.
          </p>
          <Link href="/collections">
            <Button size="lg" className="hero-blue-gradient">
              Browse by Collection
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}