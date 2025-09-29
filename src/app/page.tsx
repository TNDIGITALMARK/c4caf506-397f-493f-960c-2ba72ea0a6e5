import HeroBanner from '@/components/HeroBanner';
import FeaturedProducts from '@/components/FeaturedProducts';
import { products } from '@/data/products';

export const dynamic = 'force-dynamic'

export default function Index() {
  // Get featured products (best sellers and new items)
  const featuredProducts = products.filter(p => p.isBestSeller || p.isNew).slice(0, 4);
  const newArrivals = products.filter(p => p.isNew).slice(0, 4);
  const bestSellers = products.filter(p => p.isBestSeller).slice(0, 4);

  return (
    <div className="min-h-screen">
      <HeroBanner />

      <FeaturedProducts
        title="FEATURED PRODUCTS"
        products={featuredProducts}
        viewAllHref="/products"
      />

      <FeaturedProducts
        title="NEW ARRIVALS"
        products={newArrivals}
        viewAllHref="/products?filter=new"
      />

      <FeaturedProducts
        title="BEST SELLERS"
        products={bestSellers}
        viewAllHref="/products?filter=bestsellers"
      />
    </div>
  );
}