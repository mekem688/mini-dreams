import React from 'react';
import { Link } from 'wouter';
import { MapPin, Mail, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 pt-16 pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Marque */}
          <div className="space-y-4">
            <h3 className="font-serif text-2xl font-bold tracking-tight text-gray-900 uppercase">Mini Dreams</h3>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              La référence des véhicules électriques pour enfants à Bruxelles. Des répliques haut de gamme
              sous licence officielle pour des souvenirs inoubliables.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-serif text-base font-semibold text-gray-900 mb-6 uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><Link href="/" className="hover:text-accent transition-colors">Accueil</Link></li>
              <li><Link href="/boutique" className="hover:text-accent transition-colors">Notre Collection</Link></li>
              <li><Link href="/a-propos" className="hover:text-accent transition-colors">Notre Histoire</Link></li>
              <li><Link href="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-base font-semibold text-gray-900 mb-6 uppercase tracking-wider">Contact</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="shrink-0 mt-0.5 text-accent" />
                <span>Avenue Louise 123,<br />1000 Bruxelles, Belgique</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="shrink-0 text-accent" />
                <span>+32 470 00 00 00</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="shrink-0 text-accent" />
                <span>contact@minidreams.be</span>
              </li>
            </ul>
          </div>

          {/* Engagements */}
          <div>
            <h4 className="font-serif text-base font-semibold text-gray-900 mb-6 uppercase tracking-wider">Nos Engagements</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              {['Garantie 2 ans', 'Service SAV à Bruxelles', 'Véhicules sous licence', 'Norme CE européenne'].map(item => (
                <li key={item} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>© {new Date().getFullYear()} Mini Dreams Bruxelles. Tous droits réservés.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-accent transition-colors">Instagram</a>
            <a href="#" className="hover:text-accent transition-colors">Facebook</a>
            <a href="#" className="hover:text-accent transition-colors">WhatsApp</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
