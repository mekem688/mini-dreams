import React from 'react';
import { SEO } from '@/components/SEO';
import { products } from '@/data/products';
import { ShieldCheck, Wrench, Star, ThumbsUp } from 'lucide-react';

export default function About() {
  return (
    <>
      <SEO
        title="À propos de Mini Dreams | Mobilité électrique pour enfants"
        description="Découvrez Mini Dreams, la boutique bruxelloise de véhicules électriques premium pour enfants, pensée pour créer des souvenirs en famille."
        path="/a-propos"
        breadcrumbs={[{ name: "Accueil", path: "/" }, { name: "À propos", path: "/a-propos" }]}
      />
      <div className="bg-white">

      {/* ── EN-TÊTE CLAIR ── */}
      <section className="w-full bg-gray-50 border-b border-gray-100 py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <p className="text-xs font-semibold tracking-widest text-accent uppercase mb-4">Notre Histoire</p>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            L'Histoire Mini Dreams
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto font-light leading-relaxed">
            Né d'une passion pour l'automobile et d'un désir d'offrir l'excellence aux plus jeunes,
            Mini Dreams s'est imposé comme la référence bruxelloise du véhicule pour enfant.
          </p>
        </div>
      </section>

      {/* ── TEXTE ÉDITORIAL ── */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-12">
            <div>
              <h2 className="font-serif text-3xl font-bold text-gray-900 mb-6">L'exigence du détail</h2>
              <p className="text-gray-600 leading-relaxed text-lg font-light mb-6">
                Lorsque nous avons fondé Mini Dreams à Bruxelles, nous avions un constat simple : il était
                difficile de trouver des véhicules pour enfants qui alliaient véritablement sécurité, design
                réaliste et fiabilité mécanique. La plupart des jouets sur le marché manquaient de finitions
                et tombaient rapidement en panne.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg font-light">
                Nous avons donc décidé de collaborer avec les meilleurs fabricants pour proposer exclusivement
                des modèles sous licence officielle (Mercedes, BMW, Lamborghini, Ford…). Des véhicules approuvés
                par les constructeurs automobiles eux-mêmes, reproduisant à l'identique les lignes des modèles
                originaux.
              </p>
            </div>

            <div className="pl-8 border-l-4 border-accent">
              <p className="font-serif text-2xl font-bold text-gray-900 italic leading-snug">
                "Notre mission n'est pas de vendre un jouet, mais d'offrir une première expérience de
                conduite inoubliable, en toute sécurité."
              </p>
            </div>

            <div>
              <h2 className="font-serif text-3xl font-bold text-gray-900 mb-6">Le choix de la sécurité</h2>
              <p className="text-gray-600 leading-relaxed text-lg font-light">
                Chaque modèle proposé dans notre showroom bruxellois répond aux normes européennes CE les plus
                strictes. Parce que le conducteur est souvent un apprenti, tous nos véhicules sont équipés
                d'une télécommande parentale prioritaire, de ceintures de sécurité, et de systèmes de freinage
                automatique.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── IMAGE PLEINE LARGEUR ── */}
      <section className="h-96 w-full overflow-hidden">
        <img
          src={products[4].images[0]}
          alt="Showroom Mini Dreams"
          className="w-full h-full object-cover object-center"
        />
      </section>

      {/* ── PILIERS DE VALEUR (fond clair) ── */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold tracking-widest text-accent uppercase mb-3">Nos Engagements</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900">
              Pourquoi choisir Mini Dreams ?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                Icon: ShieldCheck,
                title: 'Expertise Locale',
                text: "Une équipe basée à Bruxelles qui connaît parfaitement ses produits et vous conseille selon l'âge et les besoins de votre enfant.",
              },
              {
                Icon: Star,
                title: 'Licences Officielles',
                text: 'Une sélection rigoureuse de modèles validés par les marques constructeurs garantissant des finitions premium.',
              },
              {
                Icon: Wrench,
                title: 'SAV & Garantie',
                text: '2 ans de garantie avec un atelier de réparation et un stock de pièces détachées situé à Bruxelles.',
              },
              {
                Icon: ThumbsUp,
                title: 'Satisfaction Client',
                text: "Plus de 500 familles nous ont fait confiance en Belgique pour l'achat du véhicule de leurs enfants.",
              },
            ].map(({ Icon, title, text }) => (
              <div key={title} className="text-center">
                <div className="w-16 h-16 mx-auto bg-white border border-gray-200 flex items-center justify-center mb-6 shadow-sm">
                  <Icon className="text-accent" size={28} />
                </div>
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-3">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
