import React, { useEffect, useState } from 'react';
import { ArrowRight, Star, Shield, Battery, Zap, ChevronRight, Play, Quote, Heart, CheckCircle2 } from 'lucide-react';

export function ParcDeReves() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden selection:bg-[#FFE500] selection:text-[#1A1AFF]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fredoka+One&family=Nunito:wght@700;800;900&display=swap');
        
        .font-display { font-family: 'Fredoka One', cursive; }
        .font-body { font-family: 'Nunito', sans-serif; }

        .bg-blue { background-color: #1A1AFF; }
        .text-blue { color: #1A1AFF; }
        
        .bg-yellow { background-color: #FFE500; }
        .text-yellow { color: #FFE500; }
        
        .bg-coral { background-color: #FF3366; }
        .text-coral { color: #FF3366; }

        .brutal-border { border: 4px solid #000; }
        .brutal-shadow { box-shadow: 8px 8px 0px 0px rgba(0,0,0,1); }
        .brutal-shadow-sm { box-shadow: 4px 4px 0px 0px rgba(0,0,0,1); }
        .brutal-shadow-hover:hover {
          transform: translate(-4px, -4px);
          box-shadow: 12px 12px 0px 0px rgba(0,0,0,1);
        }

        .btn-bounce {
          transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }
        .btn-bounce:hover {
          transform: translateY(-6px) rotate(-2deg) scale(1.05);
          box-shadow: 0 12px 0px 0px rgba(0,0,0,1);
        }
        .btn-shadow {
          box-shadow: 0 6px 0px 0px rgba(0,0,0,1);
        }

        .floating { animation: float 4s ease-in-out infinite; }
        .floating-delay-1 { animation: float 4s ease-in-out 1s infinite; }
        .floating-delay-2 { animation: float 4s ease-in-out 2s infinite; }
        
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(10deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }

        .wave-bottom {
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 100%;
          overflow: hidden;
          line-height: 0;
          transform: rotate(180deg);
          z-index: 10;
        }
        .wave-top {
          position: absolute;
          top: -2px;
          left: 0;
          width: 100%;
          overflow: hidden;
          line-height: 0;
          z-index: 10;
        }
        .wave-svg {
          width: calc(100% + 1.3px);
          height: 60px;
        }
        @media (min-width: 768px) {
          .wave-svg { height: 120px; }
        }
          
        html { scroll-behavior: smooth; }
      `}</style>

      {/* Navigation */}
      <nav className="fixed w-full z-50 px-4 md:px-8 py-4 flex justify-between items-center bg-white brutal-border border-x-0 border-t-0 shadow-[0_4px_0_0_#000]">
        <div className="flex items-center gap-2">
          <Zap className="w-8 h-8 text-coral" fill="#FF3366" />
          <span className="font-display text-2xl tracking-wide text-blue">MINI DREAMS</span>
        </div>
        <div className="hidden md:flex items-center gap-8 font-body font-bold text-lg">
          <a href="#models" className="hover:text-coral transition-colors">Modeles</a>
          <a href="#features" className="hover:text-coral transition-colors">La Magie</a>
          <a href="#reviews" className="hover:text-coral transition-colors">Avis</a>
        </div>
        <button className="bg-yellow font-display text-black px-6 py-2 rounded-full brutal-border btn-shadow btn-bounce flex items-center gap-2 text-lg">
          Commander <ArrowRight className="w-5 h-5" />
        </button>
      </nav>

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-48 px-4 md:px-8 bg-yellow overflow-hidden">
        {/* Floating background elements */}
        <div className="absolute top-40 left-10 text-coral floating">
          <Star size={48} fill="#FF3366" />
        </div>
        <div className="absolute top-24 right-20 text-blue floating-delay-1">
          <Star size={64} fill="#1A1AFF" />
        </div>
        <div className="absolute bottom-40 right-1/4 text-white floating-delay-2">
          <Star size={40} fill="#FFF" />
        </div>
        
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-20">
          <div className="space-y-8">
            <div className="inline-block bg-white brutal-border brutal-shadow-sm px-4 py-2 font-body font-bold text-lg rotate-2">
              Le cadeau inoubliable !
            </div>
            <h1 className="font-display text-5xl md:text-7xl leading-[1.1] text-blue tracking-wide uppercase">
              Le premier <span className="text-coral">vrai bolide</span> de votre enfant
            </h1>
            <p className="font-body font-bold text-xl md:text-2xl text-black max-w-lg">
              De l'emerveillement pur dans un format miniature. Des voitures electriques ultra-securisees pour des sourires geants.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="bg-coral text-white font-display text-xl px-8 py-4 rounded-full brutal-border btn-shadow btn-bounce flex items-center justify-center gap-3">
                Decouvrir les voitures <ArrowRight className="w-6 h-6" />
              </button>
              <button className="bg-white text-black font-display text-xl px-8 py-4 rounded-full brutal-border btn-shadow btn-bounce flex items-center justify-center gap-3">
                <Play className="w-6 h-6" fill="#000" /> Voir la video
              </button>
            </div>
          </div>
          
          <div className={`relative transition-all duration-1000 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            <div className="absolute -inset-4 bg-blue rounded-3xl brutal-border brutal-shadow rotate-3"></div>
            <div className="absolute -inset-4 bg-coral rounded-3xl brutal-border brutal-shadow -rotate-2"></div>
            <img 
              src="/__mockup/images/mini-dreams-hero-parc.jpg" 
              alt="Enfant joyeux conduisant une voiture Mini Dreams" 
              className="relative rounded-2xl brutal-border object-cover w-full aspect-square z-10 bg-white"
            />
          </div>
        </div>

        {/* Wave to transition to Features */}
        <div className="wave-bottom text-white">
          <svg className="wave-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="currentColor"></path>
          </svg>
        </div>
      </section>

      {/* WHY CHOOSE US / FEATURES */}
      <section id="features" className="py-32 px-4 md:px-8 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-display text-4xl md:text-6xl text-coral mb-6 uppercase">La Magie Sans Compromis</h2>
            <p className="font-body font-bold text-xl max-w-2xl mx-auto text-black/80">
              On ne plaisante pas avec l'amusement. Ni avec la securite. Nos bolides sont concus pour une experience parfaite.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue text-white rounded-3xl p-8 brutal-border brutal-shadow brutal-shadow-hover transition-transform duration-300">
              <div className="bg-yellow w-16 h-16 rounded-full flex items-center justify-center brutal-border mb-6">
                <Shield className="w-8 h-8 text-black" />
              </div>
              <h3 className="font-display text-2xl mb-4">Securite Totale</h3>
              <p className="font-body text-lg font-bold opacity-90">
                Vitesse limitee a 5 km/h, freins automatiques et telecommande parentale incluse. Vous gardez le controle.
              </p>
            </div>
            
            <div className="bg-coral text-white rounded-3xl p-8 brutal-border brutal-shadow brutal-shadow-hover transition-transform duration-300 transform md:translate-y-8">
              <div className="bg-yellow w-16 h-16 rounded-full flex items-center justify-center brutal-border mb-6">
                <Battery className="w-8 h-8 text-black" />
              </div>
              <h3 className="font-display text-2xl mb-4">Autonomie Geante</h3>
              <p className="font-body text-lg font-bold opacity-90">
                Jusqu'a 3 heures de conduite non-stop. De quoi faire le tour du parc, revenir et repartir de plus belle.
              </p>
            </div>

            <div className="bg-yellow text-black rounded-3xl p-8 brutal-border brutal-shadow brutal-shadow-hover transition-transform duration-300">
              <div className="bg-coral w-16 h-16 rounded-full flex items-center justify-center brutal-border mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-display text-2xl mb-4">Design Hyper-Realiste</h3>
              <p className="font-body text-lg font-bold opacity-90">
                Phares LED, klaxon, effets sonores au demarrage. L'illusion est parfaite, l'emerveillement est garanti.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SHOWCASE / MODELS */}
      <section id="models" className="relative pt-24 pb-40 px-4 md:px-8 bg-blue text-white">
        {/* Wave top */}
        <div className="wave-top text-white">
          <svg className="wave-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="currentColor"></path>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto relative z-20 pt-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="font-display text-4xl md:text-6xl text-yellow uppercase mb-4">LE PARC AUTO</h2>
              <p className="font-body text-xl font-bold max-w-xl">
                Trois modeles legendaires pour tous les styles de petits pilotes. Livres pre-montes.
              </p>
            </div>
            <button className="bg-white text-blue font-display px-6 py-3 rounded-full brutal-border btn-shadow btn-bounce whitespace-nowrap">
              Voir tous les accessoires
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {/* Model 1 */}
            <div className="bg-white rounded-3xl brutal-border brutal-shadow-sm flex flex-col overflow-hidden transform transition-all duration-300 hover:scale-105 hover:z-10 group">
              <div className="p-6 bg-yellow text-center font-display text-2xl text-black border-b-4 border-black">
                LE BOLIDE SPORTIF
              </div>
              <div className="p-4 relative">
                <div className="absolute top-6 right-6 bg-coral text-white font-display text-lg px-3 py-1 rounded-full brutal-border z-10 rotate-12">
                  TOP VENTE !
                </div>
                <img 
                  src="/__mockup/images/mini-car-red.jpg" 
                  alt="Voiture sport rouge" 
                  className="w-full h-56 object-cover rounded-xl brutal-border"
                />
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <ul className="space-y-3 mb-6 font-body font-bold text-black flex-grow">
                  <li className="flex items-center gap-2"><CheckCircle2 className="text-coral" size={20}/> 2 moteurs 12V</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="text-coral" size={20}/> Sieges simili-cuir</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="text-coral" size={20}/> Autoradio Bluetooth</li>
                </ul>
                <div className="flex items-center justify-between mt-auto">
                  <span className="font-display text-3xl text-blue">299€</span>
                  <button className="bg-blue text-white w-12 h-12 rounded-full flex items-center justify-center brutal-border btn-shadow btn-bounce">
                    <ChevronRight size={24} />
                  </button>
                </div>
              </div>
            </div>

            {/* Model 2 (Simulated with CSS filter) */}
            <div className="bg-white rounded-3xl brutal-border brutal-shadow-sm flex flex-col overflow-hidden transform transition-all duration-300 hover:scale-105 hover:z-10">
              <div className="p-6 bg-coral text-center font-display text-2xl text-white border-b-4 border-black">
                LE SUPER 4x4
              </div>
              <div className="p-4">
                <img 
                  src="/__mockup/images/mini-car-red.jpg" 
                  alt="4x4 voiture" 
                  className="w-full h-56 object-cover rounded-xl brutal-border hue-rotate-[240deg]"
                />
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <ul className="space-y-3 mb-6 font-body font-bold text-black flex-grow">
                  <li className="flex items-center gap-2"><CheckCircle2 className="text-blue" size={20}/> 4 moteurs puissants</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="text-blue" size={20}/> Pneus gomme XXL</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="text-blue" size={20}/> Amortisseurs reels</li>
                </ul>
                <div className="flex items-center justify-between mt-auto">
                  <span className="font-display text-3xl text-coral">389€</span>
                  <button className="bg-blue text-white w-12 h-12 rounded-full flex items-center justify-center brutal-border btn-shadow btn-bounce">
                    <ChevronRight size={24} />
                  </button>
                </div>
              </div>
            </div>

            {/* Model 3 (Simulated with CSS filter) */}
            <div className="bg-white rounded-3xl brutal-border brutal-shadow-sm flex flex-col overflow-hidden transform transition-all duration-300 hover:scale-105 hover:z-10">
              <div className="p-6 bg-[#000] text-center font-display text-2xl text-yellow border-b-4 border-black">
                LE CABRIOLET CHIC
              </div>
              <div className="p-4">
                <img 
                  src="/__mockup/images/mini-car-red.jpg" 
                  alt="Cabriolet chic" 
                  className="w-full h-56 object-cover rounded-xl brutal-border hue-rotate-[90deg]"
                />
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <ul className="space-y-3 mb-6 font-body font-bold text-black flex-grow">
                  <li className="flex items-center gap-2"><CheckCircle2 className="text-yellow" size={20}/> Peinture metallisee</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="text-yellow" size={20}/> Portes papillon</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="text-yellow" size={20}/> Feux LED integres</li>
                </ul>
                <div className="flex items-center justify-between mt-auto">
                  <span className="font-display text-3xl text-black">279€</span>
                  <button className="bg-blue text-white w-12 h-12 rounded-full flex items-center justify-center brutal-border btn-shadow btn-bounce">
                    <ChevronRight size={24} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave bottom */}
        <div className="wave-bottom text-coral">
          <svg className="wave-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="currentColor"></path>
          </svg>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="reviews" className="py-24 px-4 md:px-8 bg-coral text-white relative">
        <div className="max-w-6xl mx-auto relative z-20 pt-10">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-6xl text-yellow uppercase mb-6 rotate-1">Des etoiles pleins les yeux</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white text-black p-8 rounded-3xl brutal-border brutal-shadow transform -rotate-1 relative">
              <Quote className="absolute top-4 right-6 text-yellow w-12 h-12 opacity-50" />
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="text-yellow w-6 h-6" fill="#FFE500" />)}
              </div>
              <p className="font-body font-bold text-xl mb-6">
                "Le cadeau de Noel parfait. Ma fille n'en descend plus ! La telecommande me rassure tellement quand on va au parc."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue rounded-full brutal-border flex items-center justify-center font-display text-white text-xl">S</div>
                <div>
                  <div className="font-display text-lg">Sophie & Lea (4 ans)</div>
                  <div className="font-body text-sm text-gray-500 font-bold">Acheteur verifie</div>
                </div>
              </div>
            </div>

            <div className="bg-white text-black p-8 rounded-3xl brutal-border brutal-shadow transform rotate-2 md:translate-y-12 relative">
              <Quote className="absolute top-4 right-6 text-blue w-12 h-12 opacity-50" />
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="text-yellow w-6 h-6" fill="#FFE500" />)}
              </div>
              <p className="font-body font-bold text-xl mb-6">
                "Montage hyper facile (15 min chrono). La qualite est dingue, on dirait une vraie en miniature avec la radio qui marche super bien !"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-yellow rounded-full brutal-border flex items-center justify-center font-display text-black text-xl">M</div>
                <div>
                  <div className="font-display text-lg">Marc & Leo (5 ans)</div>
                  <div className="font-body text-sm text-gray-500 font-bold">Acheteur verifie</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="py-24 px-4 md:px-8 bg-yellow text-black border-y-4 border-black text-center relative overflow-hidden">
        {/* Confetti elements */}
        <div className="absolute top-10 left-10 w-4 h-4 bg-blue rounded-full brutal-border"></div>
        <div className="absolute top-20 right-20 w-6 h-6 bg-coral rotate-45 brutal-border"></div>
        <div className="absolute bottom-10 left-1/4 w-5 h-5 bg-white rounded-sm brutal-border"></div>
        <div className="absolute bottom-20 right-1/4 w-8 h-8 bg-blue rounded-full brutal-border"></div>

        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="font-display text-5xl md:text-7xl mb-8 uppercase text-blue drop-shadow-[4px_4px_0_rgba(0,0,0,1)]">
            Pret a demarrer <br/> l'aventure ?
          </h2>
          <p className="font-body text-2xl font-bold mb-10 max-w-xl mx-auto">
            Livraison gratuite en 48h. Paiement en 3x sans frais disponible.
          </p>
          <button className="bg-coral text-white font-display text-2xl px-10 py-5 rounded-full brutal-border btn-shadow btn-bounce inline-flex items-center gap-4 hover:scale-110">
            Choisir mon bolide <ArrowRight className="w-8 h-8" />
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white pt-16 pb-8 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Zap className="w-8 h-8 text-yellow" fill="#FFE500" />
              <span className="font-display text-3xl tracking-wide text-white">MINI DREAMS</span>
            </div>
            <p className="font-body font-bold text-gray-400 max-w-md">
              Créateurs de souvenirs inoubliables depuis 2024. Le plus grand choix de véhicules électriques pour enfants.
            </p>
          </div>
          
          <div>
            <h4 className="font-display text-xl text-yellow mb-4">EXPLORER</h4>
            <ul className="space-y-3 font-body font-bold text-gray-300">
              <li><a href="#" className="hover:text-white hover:underline decoration-yellow decoration-2 underline-offset-4">Tous les modèles</a></li>
              <li><a href="#" className="hover:text-white hover:underline decoration-yellow decoration-2 underline-offset-4">Guide d'achat</a></li>
              <li><a href="#" className="hover:text-white hover:underline decoration-yellow decoration-2 underline-offset-4">Pièces détachées</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-xl text-coral mb-4">SUPPORT</h4>
            <ul className="space-y-3 font-body font-bold text-gray-300">
              <li><a href="#" className="hover:text-white hover:underline decoration-coral decoration-2 underline-offset-4">FAQ</a></li>
              <li><a href="#" className="hover:text-white hover:underline decoration-coral decoration-2 underline-offset-4">Nous contacter</a></li>
              <li><a href="#" className="hover:text-white hover:underline decoration-coral decoration-2 underline-offset-4">Suivre ma commande</a></li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto pt-8 border-t border-gray-800 text-center md:text-left font-body font-bold text-gray-500 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© 2024 Mini Dreams. Tous droits réservés.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white">CGV</a>
            <a href="#" className="hover:text-white">Mentions légales</a>
            <a href="#" className="hover:text-white">Confidentialité</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
