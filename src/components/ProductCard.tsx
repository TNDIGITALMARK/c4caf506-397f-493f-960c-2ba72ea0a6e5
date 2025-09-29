'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Star, ShoppingCart } from 'lucide-react';
import { Product } from '../types';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';

interface ProductCardProps {
  product: Product;
  className?: string;
}

export default function ProductCard({ product, className = '' }: ProductCardProps) {
  const discountPercentage = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <Card className={`product-card group cursor-pointer ${className}`}>
      <CardContent className="p-0">
        <div className="relative">
          <Link href={`/products/${product.id}`}>
            <div className="aspect-[3/4] relative overflow-hidden rounded-t-lg">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyLli2khliuIkULbGjd0VEBDmZTM2g"
              />

              {/* Badges */}
              <div className="absolute top-2 left-2 flex flex-col gap-1">
                {product.isNew && (
                  <Badge className="bg-blue-600 text-white text-xs">NEW</Badge>
                )}
                {product.isBestSeller && (
                  <Badge className="bg-red-600 text-white text-xs">HOT</Badge>
                )}
                {discountPercentage > 0 && (
                  <Badge className="hero-orange-gradient text-white text-xs">
                    -{discountPercentage}%
                  </Badge>
                )}
              </div>

              {/* Out of stock overlay */}
              {!product.inStock && (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <Badge variant="destructive" className="text-sm font-semibold">
                    OUT OF STOCK
                  </Badge>
                </div>
              )}
            </div>
          </Link>

          {/* Quick add to cart button */}
          <Button
            size="sm"
            className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hero-blue-gradient"
            disabled={!product.inStock}
          >
            <ShoppingCart className="h-4 w-4" />
          </Button>
        </div>

        <div className="p-4">
          <Link href={`/products/${product.id}`}>
            <div className="space-y-2">
              {/* Product name */}
              <h3 className="font-semibold text-sm line-clamp-2 group-hover:text-primary transition-colors">
                {product.name}
              </h3>

              {/* Rating */}
              {product.rating && (
                <div className="flex items-center gap-1">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-3 w-3 ${
                          i < Math.floor(product.rating!)
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-gray-600'
                        }`}
                      />
                    ))}
                  </div>
                  {product.reviews && (
                    <span className="text-xs text-muted-foreground">
                      ({product.reviews})
                    </span>
                  )}
                </div>
              )}

              {/* Price */}
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold text-primary">
                  ${product.price.toFixed(2)}
                </span>
                {product.originalPrice && (
                  <span className="text-sm text-muted-foreground line-through">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                )}
              </div>

              {/* Category */}
              <Badge variant="secondary" className="text-xs">
                {product.category}
              </Badge>
            </div>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}