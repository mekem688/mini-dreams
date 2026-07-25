import React from 'react';
import { Link, useLocation } from 'wouter';
import { ShoppingBag, Menu, X, Phone, Heart } from 'lucide-react';
import { useWishlist } from '@/hooks/use-wishlist';

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [location] = useLocation();
  const wishlistItems = useWishlist((state) => state.items);

  const navLinks = [
    { href: '/', label: 'Accueil' },
    { href: '/boutique', label: 'Boutique' },
    { href: '/a-propos', label: 'À Propos' },
    { href: '/faq', label: 'FAQ' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Mobile Menu Button */}
          <div className="flex-1 lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 -ml-2 text-gray-900 hover:text-accent transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Center Logo */}
          <div className="flex-1 lg:flex-none text-center lg:text-left">
            <Link href="/" className="inline-block">
              <span className="font-serif text-2xl lg:text-3xl font-bold tracking-tight uppercase">
                Mini Dreams
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex flex-1 items-center justify-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className={`text-sm font-medium tracking-wide uppercase transition-colors hover:text-accent ${
                  location === link.href ? 'text-accent' : 'text-gray-900'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex-1 flex items-center justify-end space-x-4 lg:space-x-6">
            <a 
              href="https://wa.me/32470000000" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden lg:flex items-center gap-2 text-sm font-medium hover:text-accent transition-colors"
            >
              <Phone size={18} />
              <span>+32 470 00 00 00</span>
            </a>
            
            <Link href="/boutique" className="relative p-2 -mr-2 text-gray-900 hover:text-accent transition-colors group">
              <Heart size={22} className="group-hover:fill-accent/20 transition-all" />
              {wishlistItems.length > 0 && (
                <span className="absolute top-1 right-0 w-4 h-4 bg-accent text-white text-[10px] font-bold flex items-center justify-center rounded-full">
                  {wishlistItems.length}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 shadow-xl py-4 animate-in slide-in-from-top-2">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-lg font-medium tracking-wide uppercase ${
                  location === link.href ? 'text-accent' : 'text-gray-900'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 mt-2 border-t border-gray-100">
              <a 
                href="https://wa.me/32470000000" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-900 font-medium"
              >
                <Phone size={20} />
                <span>+32 470 00 00 00</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
