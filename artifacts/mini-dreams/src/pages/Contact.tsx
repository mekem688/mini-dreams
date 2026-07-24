import React from 'react';
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Merci pour votre message ! Notre équipe vous répondra dans les plus brefs délais.');
  };

  return (
    <div className="bg-white">

      {/* ── EN-TÊTE CLAIR ── */}
      <section className="w-full bg-gray-50 border-b border-gray-100 py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <p className="text-xs font-semibold tracking-widest text-accent uppercase mb-4">Boutique Bruxelles</p>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-gray-900 mb-6">Contactez-nous</h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto font-light leading-relaxed">
            Notre équipe de spécialistes est à votre disposition pour vous conseiller et vous accompagner
            dans le choix du véhicule idéal.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row gap-16">

          {/* ── INFOS ── */}
          <div className="lg:w-1/3 space-y-12">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-accent mb-6">Coordonnées</h3>
              <ul className="space-y-6">
                {[
                  {
                    Icon: MapPin,
                    title: 'Showroom & Atelier',
                    content: 'Avenue Louise 123\n1000 Bruxelles, Belgique',
                  },
                  {
                    Icon: Phone,
                    title: 'Téléphone & WhatsApp',
                    content: '+32 470 00 00 00',
                  },
                  {
                    Icon: Mail,
                    title: 'Email',
                    content: 'contact@minidreams.be',
                  },
                ].map(({ Icon, title, content }) => (
                  <li key={title} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gray-50 border border-gray-200 flex items-center justify-center shrink-0">
                      <Icon size={18} className="text-accent" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1 text-sm">{title}</h4>
                      <p className="text-gray-500 text-sm leading-relaxed whitespace-pre-line">{content}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-accent mb-6">Heures d'ouverture</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                {[
                  ['Lundi – Vendredi', '10:00 – 18:30'],
                  ['Samedi', '10:00 – 19:00'],
                  ['Dimanche', 'Fermé'],
                ].map(([day, hours]) => (
                  <li key={day} className="flex justify-between items-center pb-3 border-b border-gray-100">
                    <span className="font-semibold text-gray-900">{day}</span>
                    <span className={hours === 'Fermé' ? 'text-accent font-semibold' : ''}>{hours}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* WhatsApp card */}
            <div className="bg-gray-50 border border-gray-200 p-8 text-center">
              <div className="w-12 h-12 bg-[#25D366]/10 mx-auto flex items-center justify-center mb-4">
                <MessageCircle size={26} className="text-[#25D366]" />
              </div>
              <h4 className="font-serif text-xl font-bold text-gray-900 mb-2">Commande Rapide</h4>
              <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                Le moyen le plus simple pour commander est de nous contacter directement via WhatsApp.
              </p>
              <a
                href="https://wa.me/32470000000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#25D366] text-white px-6 py-3 text-sm font-bold uppercase tracking-wider hover:bg-[#20bd5a] transition-colors w-full"
              >
                Ouvrir WhatsApp
              </a>
            </div>
          </div>

          {/* ── FORMULAIRE ── */}
          <div className="lg:w-2/3 space-y-12">
            <div className="bg-white p-8 md:p-12 border border-gray-200 shadow-sm">
              <h3 className="font-serif text-3xl font-bold text-gray-900 mb-8">Envoyez-nous un message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">Nom complet</label>
                    <input
                      type="text"
                      required
                      className="w-full border-b border-gray-300 py-3 bg-transparent outline-none focus:border-gray-900 transition-colors text-sm"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">Téléphone</label>
                    <input
                      type="tel"
                      className="w-full border-b border-gray-300 py-3 bg-transparent outline-none focus:border-gray-900 transition-colors text-sm"
                      placeholder="Optionnel"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">Adresse Email</label>
                  <input
                    type="email"
                    required
                    className="w-full border-b border-gray-300 py-3 bg-transparent outline-none focus:border-gray-900 transition-colors text-sm"
                    placeholder="votre@email.com"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">Message</label>
                  <textarea
                    required
                    rows={5}
                    className="w-full border-b border-gray-300 py-3 bg-transparent outline-none focus:border-gray-900 transition-colors text-sm resize-none"
                    placeholder="Comment pouvons-nous vous aider ?"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-gray-900 text-white px-10 py-4 text-sm font-semibold uppercase tracking-widest hover:bg-accent transition-colors w-full md:w-auto"
                >
                  Envoyer le message
                </button>
              </form>
            </div>

            {/* Map placeholder */}
            <div className="bg-gray-50 h-72 w-full flex flex-col items-center justify-center border border-gray-200 relative overflow-hidden">
              <MapPin size={40} className="text-accent mb-4" />
              <h4 className="font-serif text-2xl font-bold text-gray-900 mb-1">Showroom Mini Dreams</h4>
              <p className="text-gray-500 text-sm">Avenue Louise 123 · 1000 Bruxelles</p>
              <div className="mt-6">
                <span className="inline-block px-4 py-2 bg-white border border-gray-200 text-xs font-bold uppercase tracking-widest text-gray-600">
                  Plan interactif à venir
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
