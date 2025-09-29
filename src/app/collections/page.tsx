'use client';

import { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import { products, categories, franchises } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

export default function CollectionsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedFranchises, setSelectedFranchises] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState('name');
  const [showInStockOnly, setShowInStockOnly] = useState(false);

  // Filter products
  const filteredProducts = products
    .filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category);
      const matchesFranchise = selectedFranchises.length === 0 || selectedFranchises.includes(product.franchise);
      const matchesStock = !showInStockOnly || product.inStock;

      return matchesSearch && matchesCategory && matchesFranchise && matchesStock;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return (b.rating || 0) - (a.rating || 0);
        case 'newest':
          return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
        default:
          return a.name.localeCompare(b.name);
      }
    });

  const handleCategoryChange = (category: string, checked: boolean) => {
    if (checked) {
      setSelectedCategories([...selectedCategories, category]);
    } else {
      setSelectedCategories(selectedCategories.filter(c => c !== category));
    }
  };

  const handleFranchiseChange = (franchise: string, checked: boolean) => {
    if (checked) {
      setSelectedFranchises([...selectedFranchises, franchise]);
    } else {
      setSelectedFranchises(selectedFranchises.filter(f => f !== franchise));
    }
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedFranchises([]);
    setShowInStockOnly(false);
    setSearchTerm('');
    setSortBy('name');
  };

  const FilterPanel = () => (
    <div className="space-y-6">
      {/* Categories */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Categories</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {categories.map(category => (
            <div key={category.id} className="flex items-center space-x-2">
              <Checkbox
                id={category.id}
                checked={selectedCategories.includes(category.name)}
                onCheckedChange={(checked) =>
                  handleCategoryChange(category.name, checked as boolean)
                }
              />
              <label htmlFor={category.id} className="text-sm font-medium">
                {category.name}
                <span className="text-muted-foreground ml-1">({category.productCount})</span>
              </label>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Franchises */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Franchises</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {franchises.slice(0, 8).map(franchise => (
            <div key={franchise.id} className="flex items-center space-x-2">
              <Checkbox
                id={franchise.id}
                checked={selectedFranchises.includes(franchise.name)}
                onCheckedChange={(checked) =>
                  handleFranchiseChange(franchise.name, checked as boolean)
                }
              />
              <label htmlFor={franchise.id} className="text-sm font-medium">
                {franchise.name}
              </label>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Stock Filter */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Availability</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="inStock"
              checked={showInStockOnly}
              onCheckedChange={(checked) => setShowInStockOnly(checked as boolean)}
            />
            <label htmlFor="inStock" className="text-sm font-medium">
              In Stock Only
            </label>
          </div>
        </CardContent>
      </Card>

      {/* Clear Filters */}
      <Button variant="outline" onClick={clearFilters} className="w-full">
        Clear All Filters
      </Button>
    </div>
  );

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Action Figure Collections</h1>
          <p className="text-lg text-muted-foreground">
            Discover our complete collection of premium action figures from all your favorite franchises
          </p>
        </div>

        {/* Search and Sort Bar */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search action figures..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          <div className="flex gap-2">
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="name">Name A-Z</SelectItem>
                <SelectItem value="price-low">Price Low-High</SelectItem>
                <SelectItem value="price-high">Price High-Low</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="newest">Newest First</SelectItem>
              </SelectContent>
            </Select>

            {/* Mobile Filter Button */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="md:hidden">
                  <Filter className="h-4 w-4 mr-2" />
                  Filters
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Filters</SheetTitle>
                </SheetHeader>
                <div className="mt-6">
                  <FilterPanel />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Active Filters */}
        {(selectedCategories.length > 0 || selectedFranchises.length > 0 || showInStockOnly) && (
          <div className="flex flex-wrap gap-2 mb-6">
            {selectedCategories.map(category => (
              <Badge key={category} variant="secondary" className="cursor-pointer"
                onClick={() => handleCategoryChange(category, false)}>
                {category} ×
              </Badge>
            ))}
            {selectedFranchises.map(franchise => (
              <Badge key={franchise} variant="secondary" className="cursor-pointer"
                onClick={() => handleFranchiseChange(franchise, false)}>
                {franchise} ×
              </Badge>
            ))}
            {showInStockOnly && (
              <Badge variant="secondary" className="cursor-pointer"
                onClick={() => setShowInStockOnly(false)}>
                In Stock Only ×
              </Badge>
            )}
          </div>
        )}

        <div className="flex gap-8">
          {/* Desktop Sidebar */}
          <div className="hidden md:block w-64 shrink-0">
            <FilterPanel />
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <p className="text-sm text-muted-foreground">
                Showing {filteredProducts.length} of {products.length} products
              </p>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-lg text-muted-foreground mb-4">
                  No products found matching your criteria.
                </p>
                <Button onClick={clearFilters}>Clear Filters</Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}