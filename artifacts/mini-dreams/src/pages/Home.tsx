import React from 'react';
import { Link } from 'wouter';
import { ArrowRight, ShieldCheck, Wrench, Truck, Star } from 'lucide-react';
import { products } from '@/data/products';
import { ProductCard } from '@/components/ProductCard';
import { SEO } from '@/components/SEO';

export default function Home() {
  const featuredProducts = products.slice(0, 4);

  return (
    <>
      <SEO
        title="Véhicules électriques pour enfants | Mini Dreams"
        description="Mini Dreams propose des voitures électriques pour enfants, quads et motos inspirés des grandes marques, avec livraison en Belgique depuis Bruxelles."
        path="/"
      />
      <div className="w-full">

      {/* ── HERO : fond blanc, image à droite ── */}
      <section className="w-full bg-white overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center min-h-[85vh] gap-8 lg:gap-0">

            {/* Texte */}
            <div className="lg:w-1/2 py-20 lg:py-0 lg:pr-16 z-10">
              <div className="inline-block px-3 py-1 mb-6 border border-accent/60 text-accent text-xs font-semibold tracking-widest uppercase">
                Boutique Premium · Bruxelles
              </div>
              <h1 className="text-5xl md:text-6xl xl:text-7xl font-serif font-bold leading-[1.08] mb-6 text-gray-900">
                Le premier{' '}
                <span className="text-accent italic">véhicule</span>{' '}
                de leurs rêves.
              </h1>
              <p className="text-lg text-gray-500 mb-10 font-light max-w-lg leading-relaxed">
                Répliques sous licence officielle Lamborghini, Mercedes, BMW.
                Parce que les petits détails créent les plus grands souvenirs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/boutique"
                  className="bg-gray-900 hover:bg-accent text-white px-8 py-4 text-sm font-semibold tracking-widest uppercase transition-colors text-center"
                >
                  Découvrir la collection
                </Link>
                <Link
                  href="/contact"
                  className="border border-gray-300 hover:border-gray-900 text-gray-900 px-8 py-4 text-sm font-semibold tracking-widest uppercase transition-colors text-center"
                >
                  Nous Contacter
                </Link>
              </div>
            </div>

            {/* Image */}
            <div className="lg:w-1/2 w-full relative flex items-center justify-center">
              <div className="w-full aspect-square lg:aspect-[4/5] max-w-xl lg:max-w-none bg-gray-50 relative overflow-hidden">
                <img
                  src={products[0].images[0]}
                  alt="Lamborghini Revuelto Mini Dreams"
                  className="w-full h-full object-cover object-center"
                />
                {/* Badge prix flottant */}
                <div className="absolute bottom-8 left-8 bg-white shadow-xl px-6 py-4 border border-gray-100">
                  <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-1">À partir de</p>
                  <p className="font-serif text-3xl font-bold text-gray-900">90 €</p>
                </div>
              </div>
              {/* Accent décoratif */}
              <div className="absolute -top-4 -right-4 w-32 h-32 border-2 border-accent/20 hidden lg:block" />
            </div>
          </div>
        </div>
      </section>

      {/* ── BANDEAU DE CONFIANCE ── */}
      <section className="bg-gray-50 border-y border-gray-100 py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: ShieldCheck, title: 'Garantie 2 Ans', sub: "Sur l'ensemble de nos véhicules" },
              { icon: Wrench,      title: 'SAV à Bruxelles', sub: 'Atelier de réparation localisé' },
              { icon: Truck,       title: 'Livraison Europe', sub: 'Expédition rapide et soignée' },
              { icon: Star,        title: 'Licences Officielles', sub: 'Répliques fidèles et certifiées CE' },
            ].map(({ icon: Icon, title, sub }) => (
              <div key={title} className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white border border-gray-200 flex items-center justify-center shrink-0">
                  <Icon className="text-accent" size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-wider mb-1 text-gray-900">{title}</h4>
                  <p className="text-xs text-gray-500">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUITS EN VEDETTE ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-xs font-semibold tracking-widest text-accent uppercase mb-3">Sélection</h2>
              <h3 className="font-serif text-4xl md:text-5xl font-bold text-gray-900">Modèles d'exception</h3>
            </div>
            <Link href="/boutique" className="group flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-gray-700 hover:text-accent transition-colors">
              Voir tout le catalogue
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION ÉDITORIALE ── */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 relative">
              <div className="aspect-[4/5] w-full overflow-hidden bg-gray-200">
                <img
                  src={products[2].images[0]}
                  alt="Enfant au volant"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Stat flottante */}
              <div className="absolute -bottom-6 -right-6 w-56 h-56 bg-accent p-8 text-white hidden md:flex flex-col justify-center shadow-xl">
                <p className="font-serif text-5xl mb-2">500+</p>
                <p className="text-xs uppercase tracking-widest font-semibold opacity-90">Familles satisfaites en Belgique</p>
              </div>
            </div>

            <div className="lg:w-1/2">
              <h2 className="text-xs font-semibold tracking-widest text-accent uppercase mb-3">Notre Promesse</h2>
              <h3 className="font-serif text-4xl lg:text-5xl font-bold mb-6 leading-tight text-gray-900">
                L'exigence au service de leur sécurité.
              </h3>
              <div className="space-y-5 text-gray-600 leading-relaxed font-light text-lg">
                <p>
                  Chez Mini Dreams, nous ne vendons pas de simples jouets. Nous proposons de véritables répliques automobiles conçues avec la même rigueur que leurs modèles originaux.
                </p>
                <p>
                  Chaque véhicule est équipé d'une télécommande parentale prioritaire. Sécurité, design et performance sont nos maîtres-mots.
                </p>
                <p>
                  Notre showroom basé à Bruxelles nous permet d'assurer un service après-vente rapide. Vous n'êtes jamais seul après votre achat.
                </p>
              </div>
              <div className="mt-10">
                <Link href="/a-propos" className="inline-block border-b-2 border-gray-900 pb-1 text-sm font-semibold uppercase tracking-widest hover:border-accent hover:text-accent transition-colors">
                  Découvrir notre histoire
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CATÉGORIES (cards lumineuses) ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-xs font-semibold tracking-widest text-accent uppercase mb-3">Explorer</h2>
            <h3 className="font-serif text-4xl font-bold text-gray-900">Nos univers</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { label: 'Supercars', img: products[0].images[0], sub: 'Lamborghini · Mercedes · Mustang' },
              { label: 'SUV Premium', img: products[3].images[0], sub: 'BMW · Mercedes GLS' },
              { label: 'Éditions Spéciales', img: products[6].images[0], sub: 'Police · Range Rover · Raptor' },
            ].map(({ label, img, sub }) => (
              <Link
                key={label}
                href="/boutique"
                className="group relative h-80 overflow-hidden bg-gray-100 border border-gray-200 hover:border-accent transition-colors block"
              >
                <img
                  src={img}
                  alt={label}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Overlay clair au lieu de sombre */}
                <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="font-serif text-2xl font-bold text-gray-900 mb-1">{label}</h3>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-3">{sub}</p>
                  <span className="text-xs font-semibold uppercase tracking-wider text-accent flex items-center gap-2 group-hover:gap-3 transition-all">
                    Explorer <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </div>
    </>
  );
}
