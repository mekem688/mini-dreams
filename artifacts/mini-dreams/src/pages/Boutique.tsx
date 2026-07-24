import React, { useState, useMemo } from 'react';
import { products } from '@/data/products';
import { ProductCard } from '@/components/ProductCard';
import { SEO } from '@/components/SEO';

const CATEGORIES = ["Tous", "Supercar", "SUV Premium", "Édition Spéciale", "Quad & Moto", "Télécommandé"];
const SORT_OPTIONS = [
  { label: "Nouveautés", value: "new" },
  { label: "Prix croissant", value: "price_asc" },
  { label: "Prix décroissant", value: "price_desc" }
];

export default function Boutique() {
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [sortBy, setSortBy] = useState("new");

  const filteredProducts = useMemo(() => {
    let result = [...products];
    
    // Filter by category
    if (selectedCategory !== "Tous") {
      result = result.filter(p => p.category === selectedCategory);
    }
    
    // Sort
    if (sortBy === "price_asc") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price_desc") {
      result.sort((a, b) => b.price - a.price);
    }
    
    return result;
  }, [selectedCategory, sortBy]);

  return (
    <>
      <SEO
        title="Boutique de voitures électriques pour enfants | Mini Dreams"
        description="Parcourez la collection Mini Dreams : voitures électriques, SUV, quads et motos pour enfants, disponibles en Belgique."
        path="/boutique"
        breadcrumbs={[{ name: "Accueil", path: "/" }, { name: "Boutique", path: "/boutique" }]}
      />
      <div className="w-full bg-gray-50 min-h-screen py-16">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Header */}
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Notre Collection</h1>
          <p className="text-gray-600 text-lg font-light">
            Découvrez notre gamme de véhicules électriques pour enfants. 
            Des répliques fidèles sous licence officielle.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* Filters Sidebar */}
          <div className="w-full lg:w-64 shrink-0 bg-white p-6 border border-gray-100">
            <h3 className="font-serif text-lg font-semibold mb-6 pb-4 border-b border-gray-100">Filtres</h3>
            
            <div className="mb-8">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-900 mb-4">Catégories</h4>
              <ul className="space-y-3">
                {CATEGORIES.map(cat => (
                  <li key={cat}>
                    <button
                      onClick={() => setSelectedCategory(cat)}
                      className={`text-sm text-left w-full transition-colors ${
                        selectedCategory === cat 
                          ? 'text-accent font-medium' 
                          : 'text-gray-500 hover:text-primary'
                      }`}
                    >
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-900 mb-4">Trier par</h4>
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full border border-gray-200 p-2 text-sm text-gray-700 bg-white outline-none focus:border-accent"
              >
                {SORT_OPTIONS.map(opt => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="mb-6 flex items-center justify-between text-sm text-gray-500">
              <p>Affichage de {filteredProducts.length} véhicules</p>
            </div>
            
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="bg-white p-12 text-center border border-gray-100">
                <p className="text-lg text-gray-500">Aucun véhicule trouvé pour cette sélection.</p>
                <button 
                  onClick={() => setSelectedCategory("Tous")}
                  className="mt-4 text-accent font-medium underline"
                >
                  Voir tous les modèles
                </button>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
    </>
  );
}
