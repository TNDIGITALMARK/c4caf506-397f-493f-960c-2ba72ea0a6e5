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
    <header className="sticky top-0 z-50 bg-gradient-to-r from-hero-navy via-hero-gray to-hero-navy backdrop-blur-md border-b border-hero-blue/30 shadow-xl shadow-hero-blue/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex items-center space-x-1">
              <div className="w-10 h-10 hero-blue-gradient rounded-xl flex items-center justify-center shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105">
                <span className="text-white font-bold text-xl tracking-wide">H</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-300 via-purple-300 to-orange-300 bg-clip-text text-transparent tracking-wide">
                HEROIC FINDS
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="/products" className="text-sm font-semibold text-gray-200 hover:text-blue-300 transition-all duration-300 hover:scale-105 px-3 py-2 rounded-lg hover:bg-hero-blue/10">
                    Shop
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-semibold text-gray-200 hover:text-blue-300 transition-all duration-300 hover:scale-105 px-3 py-2 rounded-lg hover:bg-hero-blue/10">
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
                  <Link href="/collections" className="text-sm font-semibold text-gray-200 hover:text-blue-300 transition-all duration-300 hover:scale-105 px-3 py-2 rounded-lg hover:bg-hero-blue/10">
                    Collections
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/about" className="text-sm font-semibold text-gray-200 hover:text-blue-300 transition-all duration-300 hover:scale-105 px-3 py-2 rounded-lg hover:bg-hero-blue/10">
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
                className="pl-10 pr-4 bg-hero-gray/50 border-hero-blue/30 text-white placeholder:text-gray-400 focus:border-hero-blue focus:ring-hero-blue/20 transition-all duration-300"
              />
            </div>
          </div>

          {/* Right side buttons */}
          <div className="flex items-center space-x-2">
            {/* Mobile search */}
            <Button variant="ghost" size="sm" className="lg:hidden text-gray-200 hover:text-blue-300 hover:bg-hero-blue/10 transition-all duration-300">
              <Search className="h-4 w-4" />
            </Button>

            {/* User account */}
            <Button variant="ghost" size="sm" className="text-gray-200 hover:text-blue-300 hover:bg-hero-blue/10 transition-all duration-300">
              <User className="h-4 w-4" />
            </Button>

            {/* Shopping cart */}
            <Button variant="ghost" size="sm" className="relative text-gray-200 hover:text-blue-300 hover:bg-hero-blue/10 transition-all duration-300">
              <ShoppingCart className="h-4 w-4" />
              <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center text-xs hero-orange-gradient">
                0
              </Badge>
            </Button>

            {/* Mobile menu */}
            <Button variant="ghost" size="sm" className="md:hidden text-gray-200 hover:text-blue-300 hover:bg-hero-blue/10 transition-all duration-300">
              <Menu className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}