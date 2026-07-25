import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'wouter';
import {
  ShieldCheck, Truck, Clock, Baby, CreditCard, RotateCcw,
  ChevronDown, MessageCircle, Star, CheckCircle2,
  Zap, Package, HeartHandshake, Award
} from 'lucide-react';
import { SEO } from '@/components/SEO';

const WHATSAPP_NUMBER = '32470000000';

const categories = [
  {
    id: 'commande',
    icon: Package,
    color: '#C9A84C',
    label: 'Commander',
    title: 'Comment passer commande ?',
    faqs: [
      {
        q: "Comment fonctionne la commande via WhatsApp ?",
        a: "La commande est simple et rapide. Cliquez sur « Commander via WhatsApp » sur la page du véhicule qui vous intéresse. Un message pré-rempli s'ouvre automatiquement avec le modèle et le prix. Notre équipe vous répond sous 1 heure en semaine pour confirmer la disponibilité, valider votre commande et vous guider pour le règlement.",
      },
      {
        q: "Puis-je voir le véhicule avant d'acheter ?",
        a: "Absolument ! Notre showroom est ouvert du lundi au vendredi de 10h à 18h30 et le samedi de 10h à 19h. Venez découvrir les véhicules de vive voix, voir la qualité des finitions et tester les fonctionnalités. Adresse : Avenue Louise 123, 1000 Bruxelles.",
      },
      {
        q: "Quels véhicules sont disponibles immédiatement ?",
        a: "La majorité de nos modèles sont disponibles en stock. En cas de rupture sur un modèle spécifique, nous vous proposons une livraison sous 7 à 10 jours ouvrables. Notre équipe vous confirmera la disponibilité exacte dès votre premier message WhatsApp.",
      },
      {
        q: "Puis-je commander pour offrir en cadeau ?",
        a: "Oui, et c'est très fréquent ! Mentionnez-le simplement dans votre message WhatsApp : nous adaptons l'emballage, pouvons planifier la livraison à une date précise, et vous donnons tous les conseils pour préparer la surprise.",
      },
    ],
  },
  {
    id: 'paiement',
    icon: CreditCard,
    color: '#25D366',
    label: 'Paiement',
    title: 'Paiement sécurisé',
    faqs: [
      {
        q: "Quels modes de paiement acceptez-vous ?",
        a: "Nous acceptons le virement bancaire, le paiement en espèces au showroom et le paiement mobile (Payconiq, Bancontact). Toutes les options sont discutées directement via WhatsApp afin de choisir ce qui vous convient le mieux.",
      },
      {
        q: "Est-ce sécurisé de commander via WhatsApp ?",
        a: "Totalement. WhatsApp utilise un chiffrement de bout en bout — vos messages sont 100 % privés. De plus, vous ne transmettez aucune donnée bancaire via WhatsApp : le règlement se fait par virement ou au showroom, après confirmation de votre commande. Aucun risque de fraude à la carte.",
      },
      {
        q: "Dois-je payer la totalité avant la livraison ?",
        a: "Pour les commandes en stock, le règlement complet est requis avant expédition. Pour les précommandes, un acompte de 30 % est demandé, le solde étant dû à la livraison. Tout est confirmé par écrit via WhatsApp.",
      },
      {
        q: "Puis-je payer en plusieurs fois ?",
        a: "Nous étudions les demandes au cas par cas pour les commandes importantes. Contactez-nous via WhatsApp et nous trouverons ensemble la solution la plus adaptée à votre situation.",
      },
    ],
  },
  {
    id: 'livraison',
    icon: Truck,
    color: '#3B82F6',
    label: 'Livraison',
    title: 'Livraison en Europe',
    faqs: [
      {
        q: "Livrez-vous partout en Belgique ?",
        a: "Oui, nous livrons dans toute la Belgique. La livraison standard prend 2 à 4 jours ouvrables après réception du paiement. Nous travaillons avec des transporteurs spécialisés pour les colis volumineux afin de garantir la sécurité de votre commande.",
      },
      {
        q: "Livrez-vous à l'international ?",
        a: "Nous livrons dans toute l'Europe : France, Luxembourg, Pays-Bas, Allemagne, Espagne, Italie et plus encore. Les délais varient de 3 à 7 jours ouvrables selon le pays. Les frais de livraison internationale sont calculés au cas par cas — contactez-nous pour un devis.",
      },
      {
        q: "Comment les véhicules sont-ils emballés ?",
        a: "Chaque véhicule est soigneusement emballé dans son carton d'origine renforcé, avec mousse de protection sur les parties fragiles. Nous prenons des photos avant expédition. En cas de dommage à la livraison, nous gérons le dossier avec le transporteur.",
      },
      {
        q: "Puis-je récupérer ma commande au showroom ?",
        a: "Bien sûr ! Le retrait en boutique est disponible et gratuit. C'est même l'occasion de vérifier votre véhicule sur place avec notre équipe, de recevoir une démonstration et de poser toutes vos questions.",
      },
    ],
  },
  {
    id: 'securite',
    icon: Baby,
    color: '#EC4899',
    label: 'Sécurité enfant',
    title: 'Sécurité & homologation',
    faqs: [
      {
        q: "Les véhicules sont-ils certifiés et homologués ?",
        a: "Tous nos véhicules portent la norme CE européenne, gage de conformité aux exigences strictes en matière de sécurité des jouets. Ils ont été testés et approuvés selon les normes EN 71. Vous achetez des produits légaux et sûrs.",
      },
      {
        q: "Comment fonctionne la télécommande parentale ?",
        a: "Chaque véhicule est équipé d'une télécommande parentale prioritaire. En cas de danger, vous prenez instantanément le contrôle : direction, accélération, arrêt d'urgence. C'est une sécurité absolue pour les plus jeunes conducteurs.",
      },
      {
        q: "À partir de quel âge peut-on utiliser ces véhicules ?",
        a: "Nos véhicules sont adaptés aux enfants de 2 à 8 ans selon les modèles. Chaque fiche produit précise les tranches d'âge et le poids maximum supporté. En cas de doute, notre équipe WhatsApp est là pour vous orienter vers le modèle idéal.",
      },
      {
        q: "Quelle est la vitesse maximale ? Est-ce dangereux ?",
        a: "Nos véhicules ont une vitesse maximale de 3 à 8 km/h selon les modèles — comparable à la marche rapide d'un adulte. La télécommande parentale permet de limiter ou bloquer la vitesse à tout moment. Des vitesses conçues pour s'amuser, pas pour prendre des risques.",
      },
    ],
  },
  {
    id: 'garantie',
    icon: ShieldCheck,
    color: '#8B5CF6',
    label: 'Garantie',
    title: 'Garantie & SAV',
    faqs: [
      {
        q: "Quelle garantie offrez-vous ?",
        a: "2 ans de garantie sur l'ensemble de nos véhicules, conformément à la législation européenne. Cette garantie couvre les défauts de fabrication, les pannes électriques et les problèmes mécaniques non liés à une mauvaise utilisation.",
      },
      {
        q: "Où se trouve votre service après-vente ?",
        a: "Notre atelier SAV est basé à Bruxelles. Vous n'envoyez pas votre véhicule à l'autre bout de l'Europe — vous venez chez nous, ou nous organisons une collecte. Réparations réalisées sur place, en général sous 48 à 72 heures.",
      },
      {
        q: "Comment contacter le SAV ?",
        a: "La façon la plus rapide est WhatsApp : envoyez une photo ou vidéo du problème, notre technicien diagnostique à distance dans la journée. Vous pouvez aussi nous écrire à minidreams84@gmail.com. Nous traitons chaque dossier avec sérieux.",
      },
      {
        q: "Les pièces de remplacement sont-elles disponibles ?",
        a: "Oui. Nous maintenons un stock de pièces détachées pour tous nos modèles : batteries, moteurs, chargeurs, télécommandes, roues. En cas de panne hors garantie, les réparations sont réalisées à des tarifs transparents communiqués avant toute intervention.",
      },
    ],
  },
  {
    id: 'retours',
    icon: RotateCcw,
    color: '#F97316',
    label: 'Retours',
    title: 'Retours & échanges',
    faqs: [
      {
        q: "Puis-je retourner un véhicule ?",
        a: "Vous disposez de 14 jours de délai de rétractation légal à compter de la réception (achats en ligne). Le véhicule doit être retourné dans son emballage d'origine, en parfait état. Contactez-nous via WhatsApp ou email pour initier le retour.",
      },
      {
        q: "Que se passe-t-il si mon véhicule arrive endommagé ?",
        a: "C'est rarissime grâce à notre emballage soigné, mais en cas de dommage lors du transport : prenez des photos immédiatement, contactez-nous dans les 24 heures. Nous gérons entièrement le dossier avec le transporteur et vous envoyons un remplacement sans frais.",
      },
      {
        q: "Puis-je échanger contre un autre modèle ?",
        a: "Oui, les échanges sont possibles dans les 14 jours suivant la réception. Si le nouveau modèle est plus cher, vous réglez la différence ; s'il est moins cher, nous vous remboursons. Contactez-nous via WhatsApp pour organiser l'échange.",
      },
    ],
  },
];

const stats = [
  { value: '500+', label: 'Familles satisfaites', icon: HeartHandshake },
  { value: '2 ans', label: 'Garantie offerte', icon: Award },
  { value: '< 1h', label: 'Réponse WhatsApp', icon: Clock },
  { value: '100%', label: 'Produits certifiés CE', icon: CheckCircle2 },
];

function AccordionItem({ q, a, isOpen, onToggle }: { q: string; a: string; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button onClick={onToggle} className="w-full text-left py-6 flex items-start justify-between gap-4 group">
        <span className="font-semibold text-gray-900 text-[15px] leading-snug group-hover:text-accent transition-colors">
          {q}
        </span>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.25 }} className="shrink-0 mt-0.5">
          <ChevronDown size={20} className={isOpen ? 'text-accent' : 'text-gray-400'} />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-gray-500 leading-relaxed text-[15px]">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState('commande');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const current = categories.find((c) => c.id === activeCategory)!;

  const handleCategoryChange = (id: string) => {
    setActiveCategory(id);
    setOpenIndex(0);
  };

  return (
    <>
      <SEO
        title="Questions fréquentes | Mini Dreams"
        description="Tout savoir sur la commande, le paiement sécurisé via WhatsApp, la livraison en Belgique et en Europe, la garantie 2 ans et la sécurité de nos véhicules électriques pour enfants."
        path="/faq"
        breadcrumbs={[{ name: 'Accueil', path: '/' }, { name: 'FAQ', path: '/faq' }]}
      />

      {/* ── HERO ── */}
      <section className="relative bg-gray-900 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'linear-gradient(to right, #C9A84C 1px, transparent 1px), linear-gradient(to bottom, #C9A84C 1px, transparent 1px)', backgroundSize: '60px 60px' }}
        />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

        <div className="relative container mx-auto px-4 lg:px-8 py-28 lg:py-36 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block px-4 py-1.5 border border-accent/40 text-accent text-xs font-semibold tracking-widest uppercase mb-6">
              Centre d'aide
            </span>
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Toutes vos <span className="text-accent">questions,</span><br />toutes nos réponses.
            </h1>
            <p className="text-gray-400 text-xl max-w-2xl mx-auto font-light leading-relaxed">
              Transparence totale sur la commande, le paiement, la livraison et la sécurité.
              Nous n'avons rien à cacher — que des bonnes nouvelles.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 mt-20 border border-white/10"
          >
            {stats.map(({ value, label, icon: Icon }) => (
              <div key={label} className="bg-gray-900 px-6 py-8 flex flex-col items-center gap-3">
                <Icon size={22} className="text-accent" />
                <p className="font-serif text-3xl font-bold text-white">{value}</p>
                <p className="text-xs text-gray-500 uppercase tracking-wider font-medium">{label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CORPS ── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">

            {/* Sidebar */}
            <aside className="lg:w-72 shrink-0">
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">Catégories</p>
              <nav className="space-y-1">
                {categories.map(({ id, icon: Icon, label, color }) => (
                  <button
                    key={id}
                    onClick={() => handleCategoryChange(id)}
                    className={`w-full flex items-center gap-3 px-4 py-3.5 text-left text-sm font-medium transition-all border-l-2 ${
                      activeCategory === id
                        ? 'border-accent bg-gray-50 text-gray-900'
                        : 'border-transparent text-gray-500 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    <Icon size={17} style={{ color: activeCategory === id ? color : undefined }} className={activeCategory === id ? '' : 'text-gray-400'} />
                    {label}
                  </button>
                ))}
              </nav>

              <div className="mt-10 bg-gray-50 border border-gray-200 p-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-3">Vous ne trouvez pas ?</p>
                <p className="text-sm text-gray-600 mb-5 leading-relaxed">Notre équipe répond en moins d'une heure via WhatsApp.</p>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Bonjour, j'ai une question concernant Mini Dreams.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#25D366] text-white px-4 py-3 text-xs font-bold uppercase tracking-wider hover:bg-[#20bd5a] transition-colors w-full"
                >
                  <MessageCircle size={16} />
                  Écrire sur WhatsApp
                </a>
              </div>
            </aside>

            {/* Accordion */}
            <div className="flex-1 min-w-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory}
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -12 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="flex items-center gap-4 mb-10 pb-6 border-b border-gray-100">
                    {React.createElement(current.icon, { size: 28, style: { color: current.color } })}
                    <h2 className="font-serif text-3xl font-bold text-gray-900">{current.title}</h2>
                  </div>

                  <div>
                    {current.faqs.map((faq, i) => (
                      <AccordionItem
                        key={i}
                        q={faq.q}
                        a={faq.a}
                        isOpen={openIndex === i}
                        onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                      />
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* ── AVIS CLIENTS ── */}
      <section className="bg-gray-50 border-y border-gray-100 py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-xs font-semibold tracking-widest text-accent uppercase mb-3">Ils nous font confiance</h2>
            <p className="font-serif text-3xl font-bold text-gray-900">Ce que disent nos clients</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'Sophie M.', city: 'Bruxelles', stars: 5, text: "Livraison en 3 jours, véhicule parfait. Mon fils de 4 ans est aux anges ! La télécommande parentale est vraiment rassurante." },
              { name: 'Thomas D.', city: 'Liège', stars: 5, text: "Service WhatsApp ultra-réactif. Question posée à 20h, réponse à 20h10. La Lamborghini est identique aux photos. Qualité au rendez-vous." },
              { name: 'Amélie K.', city: 'Gand', stars: 5, text: "Acheté pour offrir à Noël, emballage cadeau proposé, livraison planifiée. Un sans-faute. Je recommande sans hésiter." },
            ].map(({ name, city, stars, text }) => (
              <div key={name} className="bg-white border border-gray-200 p-8">
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: stars }).map((_, i) => (
                    <Star key={i} size={14} className="fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">"{text}"</p>
                <div>
                  <p className="font-bold text-gray-900 text-sm">{name}</p>
                  <p className="text-xs text-gray-400">{city}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="bg-gray-900 py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,168,76,0.12),transparent_70%)]" />
        <div className="relative container mx-auto px-4 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <div className="w-20 h-20 bg-[#25D366]/10 border border-[#25D366]/20 flex items-center justify-center mx-auto mb-8">
              <MessageCircle size={38} className="text-[#25D366]" />
            </div>
            <h2 className="font-serif text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Prêt à offrir le plus<br />
              <span className="text-accent">beau souvenir</span> de leur enfance ?
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto mb-12 font-light leading-relaxed">
              Pas besoin de carte bancaire, pas de formulaire compliqué.
              Un message WhatsApp suffit — notre équipe fait le reste.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Bonjour, je souhaite passer commande sur Mini Dreams.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white px-10 py-5 text-sm font-bold uppercase tracking-widest transition-colors"
              >
                <MessageCircle size={22} />
                Commander via WhatsApp
              </a>
              <Link
                href="/boutique"
                className="inline-flex items-center justify-center gap-3 border border-white/20 text-white hover:border-white/50 px-10 py-5 text-sm font-semibold uppercase tracking-widest transition-colors"
              >
                Voir la collection
              </Link>
            </div>
            <p className="text-gray-600 text-xs mt-8 uppercase tracking-widest">
              Réponse garantie sous 1 heure · Lun–Sam · 10h–19h
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── ENGAGEMENTS ── */}
      <section className="bg-white border-t border-gray-100 py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: ShieldCheck, label: 'Paiement 100 % sécurisé', sub: 'Virement ou espèces uniquement' },
              { icon: Zap,         label: 'Réponse express',         sub: 'Sous 1 heure en semaine' },
              { icon: Truck,       label: 'Livraison Europe',         sub: '2 à 7 jours ouvrables' },
              { icon: Award,       label: 'Garantie 2 ans',          sub: 'SAV à Bruxelles' },
            ].map(({ icon: Icon, label, sub }) => (
              <div key={label} className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 bg-gray-50 border border-gray-200 flex items-center justify-center">
                  <Icon size={20} className="text-accent" />
                </div>
                <p className="font-bold text-sm text-gray-900">{label}</p>
                <p className="text-xs text-gray-500">{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
