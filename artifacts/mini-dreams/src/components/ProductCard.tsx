import React from 'react';
import { Link } from 'wouter';
import { Heart, Euro } from 'lucide-react';
import { Product } from '@/data/products';
import { useWishlist } from '@/hooks/use-wishlist';

export function ProductCard({ product }: { product: Product }) {
  const { isInWishlist, addItem, removeItem } = useWishlist();
  const isWished = isInWishlist(product.id);

  const toggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigating to product detail
    if (isWished) {
      removeItem(product.id);
    } else {
      addItem(product);
    }
  };

  return (
    <Link href={`/produit/${product.id}`} className="group flex flex-col h-full bg-white border border-gray-100 hover:shadow-xl hover:border-gray-200 transition-all duration-300">
      {/* Image Wrapper */}
      <div className="relative aspect-square overflow-hidden bg-gray-50 flex items-center justify-center p-6">
        <img 
          src={product.images[0]} 
          alt={product.name} 
          className="w-full h-full object-contain object-center mix-blend-multiply group-hover:scale-105 transition-transform duration-700"
        />
        
        {/* Badges / Wishlist button */}
        <div className="absolute top-4 left-4">
          <span className="bg-primary text-white text-[10px] font-bold uppercase tracking-widest py-1 px-3">
            {product.category}
          </span>
        </div>
        <button 
          onClick={toggleWishlist}
          className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-100 text-gray-400 hover:text-accent hover:border-accent transition-colors"
          aria-label={isWished ? "Retirer de la liste" : "Ajouter à la liste"}
        >
          <Heart size={18} className={isWished ? "fill-accent text-accent" : ""} />
        </button>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="font-serif text-xl font-semibold mb-2 group-hover:text-accent transition-colors line-clamp-2">
          {product.name}
        </h3>
        
        <div className="flex-grow">
          <p className="text-sm text-gray-500 mb-4 line-clamp-2">
            {product.description}
          </p>
        </div>

        <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
          <div className="font-serif text-lg font-bold">
            {product.price.toLocaleString('fr-BE')} €
          </div>
          <span className="text-xs font-semibold uppercase tracking-widest text-accent flex items-center gap-1 group-hover:translate-x-1 transition-transform">
            Découvrir
          </span>
        </div>
      </div>
    </Link>
  );
}
