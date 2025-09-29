import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Star, ShoppingCart, Shield, Truck, RotateCcw, Heart } from 'lucide-react';
import { products } from '@/data/products';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import FeaturedProducts from '@/components/FeaturedProducts';

interface ProductPageProps {
  params: {
    id: string;
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = products.find(p => p.id === params.id);

  if (!product) {
    notFound();
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const discountPercentage = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-8">
          <span>Home</span>
          <span>/</span>
          <span>Products</span>
          <span>/</span>
          <span className="text-foreground">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square relative overflow-hidden rounded-lg bg-card">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />

              {/* Badges */}
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                {product.isNew && (
                  <Badge className="bg-blue-600 text-white">NEW</Badge>
                )}
                {product.isBestSeller && (
                  <Badge className="bg-red-600 text-white">HOT</Badge>
                )}
                {discountPercentage > 0 && (
                  <Badge className="hero-orange-gradient text-white">
                    -{discountPercentage}%
                  </Badge>
                )}
              </div>

              {/* Out of stock overlay */}
              {!product.inStock && (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <Badge variant="destructive" className="text-lg font-semibold">
                    OUT OF STOCK
                  </Badge>
                </div>
              )}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <Badge variant="secondary" className="mb-2">
                {product.category}
              </Badge>
              <h1 className="text-4xl font-bold mb-4">{product.name}</h1>

              {/* Rating */}
              {product.rating && (
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(product.rating!)
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-gray-600'
                        }`}
                      />
                    ))}
                    <span className="ml-2 text-lg font-semibold">{product.rating}</span>
                  </div>
                  {product.reviews && (
                    <span className="text-muted-foreground">
                      ({product.reviews} reviews)
                    </span>
                  )}
                </div>
              )}

              {/* Price */}
              <div className="flex items-center gap-4 mb-6">
                <span className="text-4xl font-bold text-primary">
                  ${product.price.toFixed(2)}
                </span>
                {product.originalPrice && (
                  <span className="text-2xl text-muted-foreground line-through">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                )}
              </div>
            </div>

            {/* Description */}
            <p className="text-lg text-muted-foreground leading-relaxed">
              {product.description}
            </p>

            {/* Features */}
            {product.features && (
              <div>
                <h3 className="text-lg font-semibold mb-3">Key Features</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Actions */}
            <div className="space-y-4">
              <div className="flex gap-4">
                <Button
                  size="lg"
                  className="flex-1 hero-blue-gradient text-white font-semibold py-6 text-lg"
                  disabled={!product.inStock}
                >
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                </Button>
                <Button size="lg" variant="outline" className="px-6">
                  <Heart className="h-5 w-5" />
                </Button>
              </div>

              {/* Guarantees */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex items-center gap-2 text-sm">
                  <Shield className="h-4 w-4 text-green-400" />
                  <span>Authenticity Guaranteed</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Truck className="h-4 w-4 text-blue-400" />
                  <span>Fast Shipping</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <RotateCcw className="h-4 w-4 text-orange-400" />
                  <span>30-Day Returns</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <Card className="mb-16">
          <CardContent className="p-6">
            <Tabs defaultValue="specifications" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="specifications">Specifications</TabsTrigger>
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>

              <TabsContent value="specifications" className="space-y-4">
                {product.specifications && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between py-2 border-b">
                        <span className="font-medium capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}:
                        </span>
                        <span className="text-muted-foreground">
                          {Array.isArray(value) ? value.join(', ') : value}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </TabsContent>

              <TabsContent value="description" className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
                {product.features && (
                  <div>
                    <h4 className="font-semibold mb-3">Features:</h4>
                    <ul className="space-y-2">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </TabsContent>

              <TabsContent value="reviews" className="space-y-4">
                <div className="text-center py-8">
                  <p className="text-muted-foreground">
                    Reviews feature coming soon! This product has {product.reviews || 0} reviews.
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <FeaturedProducts
            title="Related Products"
            products={relatedProducts}
            showViewAll={false}
          />
        )}
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}