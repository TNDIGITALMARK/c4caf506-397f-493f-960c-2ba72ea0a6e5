'use client';

import Link from 'next/link';
import { Search, ShoppingCart, User, Menu } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from './ui/navigation-menu';

const categories = [
  { name: 'Marvel', href: '/collections/marvel' },
  { name: 'DC Comics', href: '/collections/dc' },
  { name: 'Anime', href: '/collections/anime' },
  { name: 'Star Wars', href: '/collections/star-wars' },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex items-center space-x-1">
              <div className="w-8 h-8 hero-blue-gradient rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-lg">H</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
                HEROIC FINDS
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="/products" className="text-sm font-medium hover:text-primary transition-colors">
                    Shop
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium">
                    Categories
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-64 gap-1 p-4">
                      {categories.map((category) => (
                        <Link
                          key={category.name}
                          href={category.href}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">{category.name}</div>
                        </Link>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/collections" className="text-sm font-medium hover:text-primary transition-colors">
                    Collections
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">
                    About
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Search Bar */}
          <div className="hidden lg:flex items-center flex-1 max-w-sm mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search heroes & figures..."
                className="pl-10 pr-4"
              />
            </div>
          </div>

          {/* Right side buttons */}
          <div className="flex items-center space-x-2">
            {/* Mobile search */}
            <Button variant="ghost" size="sm" className="lg:hidden">
              <Search className="h-4 w-4" />
            </Button>

            {/* User account */}
            <Button variant="ghost" size="sm">
              <User className="h-4 w-4" />
            </Button>

            {/* Shopping cart */}
            <Button variant="ghost" size="sm" className="relative">
              <ShoppingCart className="h-4 w-4" />
              <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center text-xs hero-orange-gradient">
                0
              </Badge>
            </Button>

            {/* Mobile menu */}
            <Button variant="ghost" size="sm" className="md:hidden">
              <Menu className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}