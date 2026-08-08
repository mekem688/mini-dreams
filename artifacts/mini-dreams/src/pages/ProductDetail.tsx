import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'wouter';
import { Heart, ChevronRight, Check, AlertCircle, MessageCircle } from 'lucide-react';
import { products } from '@/data/products';
import { useWishlist } from '@/hooks/use-wishlist';
import { SEO } from '@/components/SEO';

export default function ProductDetail() {
  const params = useParams();
  const [, setLocation] = useLocation();
  const productId = params.id;
  
  const product = products.find(p => p.id === productId);
  const [mainImage, setMainImage] = useState(product?.images[0]);
  
  const { isInWishlist, addItem, removeItem } = useWishlist();

  // Reset main image when product changes
  useEffect(() => {
    if (product) {
      setMainImage(product.images[0]);
    }
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-8 text-center">
        <AlertCircle size={48} className="text-gray-300 mb-4" />
        <h2 className="font-serif text-3xl font-bold mb-4">Véhicule introuvable</h2>
        <p className="text-gray-500 mb-8">Ce modèle n'existe pas ou n'est plus disponible.</p>
        <button 
          onClick={() => setLocation('/boutique')}
          className="bg-primary text-white px-8 py-3 text-sm font-semibold uppercase tracking-widest hover:bg-primary/90"
        >
          Retour à la boutique
        </button>
      </div>
    );
  }

  const isWished = isInWishlist(product.id);
  const productPath = `/produit/${product.id}`;
  const toggleWishlist = () => {
    if (isWished) removeItem(product.id);
    else addItem(product);
  };

  const whatsappMessage = `Bonjour, je souhaite commander le ${product.name} à ${product.price}€ sur Mini Dreams.`;
  const whatsappUrl = `https://wa.me/447848412475?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <>
      <SEO
        title={`${product.name} | Mini Dreams`}
        description={product.description}
        path={productPath}
        type="product"
        image={product.images[0]}
        breadcrumbs={[
          { name: "Accueil", path: "/" },
          { name: "Boutique", path: "/boutique" },
          { name: product.name, path: productPath },
        ]}
        product={{
          name: product.name,
          description: product.description,
          price: product.price,
          image: product.images[0],
          category: product.category,
        }}
      />
      <div className="bg-white">
      {/* Breadcrumb */}
      <div className="border-b border-gray-100 py-4">
        <div className="container mx-auto px-4 lg:px-8 flex items-center text-xs font-semibold uppercase tracking-wider text-gray-400">
          <button onClick={() => setLocation('/')} className="hover:text-primary">Accueil</button>
          <ChevronRight size={14} className="mx-2" />
          <button onClick={() => setLocation('/boutique')} className="hover:text-primary">Boutique</button>
          <ChevronRight size={14} className="mx-2" />
          <span className="text-primary truncate">{product.name}</span>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Images Gallery */}
          <div className="space-y-4">
            <div className="aspect-square bg-gray-50 border border-gray-100 flex items-center justify-center p-8">
              <img 
                src={mainImage} 
                alt={product.name} 
                className="w-full h-full object-contain mix-blend-multiply image-reveal"
              />
            </div>
            
            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((img, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setMainImage(img)}
                    className={`aspect-square bg-gray-50 border p-2 flex items-center justify-center transition-all ${
                      mainImage === img ? 'border-primary ring-1 ring-primary' : 'border-gray-100 hover:border-gray-300'
                    }`}
                  >
                    <img src={img} alt={`${product.name} vue ${idx+1}`} className="w-full h-full object-contain mix-blend-multiply" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <div className="mb-2">
              <span className="inline-block bg-primary text-white text-[10px] font-bold uppercase tracking-widest py-1 px-3 mb-4">
                {product.category}
              </span>
            </div>
            
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-primary leading-tight">
              {product.name}
            </h1>
            
            <div className="font-serif text-3xl font-semibold mb-8 text-primary">
              {product.price.toLocaleString('fr-BE')} €
            </div>

            <div className="prose prose-sm text-gray-600 font-light text-lg leading-relaxed mb-10">
              <p>{product.description}</p>
            </div>

            {/* Config & Specs */}
            <div className="bg-gray-50 p-6 border border-gray-100 mb-10 space-y-6">
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">Couleur</h4>
                <div className="flex items-center gap-3 text-sm font-medium">
                  <div className="w-6 h-6 rounded-full border border-gray-200 shadow-sm" style={{ 
                    backgroundColor: product.color.toLowerCase().includes('rouge') ? '#800000' 
                      : product.color.toLowerCase().includes('vert') ? '#004d26'
                      : product.color.toLowerCase().includes('noir') ? '#111'
                      : product.color.toLowerCase().includes('gris') ? '#808080'
                      : '#ccc'
                  }} />
                  {product.color}
                </div>
              </div>

              <div className="pt-6 border-t border-gray-200">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-4">Spécifications techniques</h4>
                <ul className="space-y-3">
                  {product.specs.map((spec, i) => (
                    <li key={i} className="flex items-start text-sm text-gray-700">
                      <Check size={16} className="text-accent mr-3 mt-0.5 shrink-0" />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 mt-auto">
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-primary hover:bg-primary/90 text-white flex items-center justify-center gap-3 py-4 px-6 text-sm font-semibold uppercase tracking-widest transition-colors"
              >
                <MessageCircle size={20} />
                Commander via WhatsApp
              </a>
              
              <button 
                onClick={toggleWishlist}
                className={`sm:w-16 h-14 flex items-center justify-center border transition-colors ${
                  isWished 
                    ? 'border-accent bg-accent/5 text-accent' 
                    : 'border-gray-200 text-gray-400 hover:border-gray-900 hover:text-gray-900'
                }`}
                aria-label="Ajouter à la liste"
              >
                <Heart size={20} className={isWished ? 'fill-accent' : ''} />
              </button>
            </div>

            <div className="mt-8 flex items-center gap-6 text-xs text-gray-500 uppercase tracking-wider font-semibold justify-center sm:justify-start">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                En stock
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                Garantie 2 ans
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
    </>
  );
}
