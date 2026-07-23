import React, { useState, useEffect } from 'react';
import { ChevronRight, Menu, ArrowRight, Star } from 'lucide-react';

export function LuxeJunior() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-[100dvh] bg-[#0A0A0A] text-[#F5F5F0] font-sans overflow-x-hidden selection:bg-[#C9A84C] selection:text-[#0A0A0A]">
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Inter:wght@300;400;500&display=swap');
        
        .font-serif { font-family: 'Playfair Display', serif; }
        .font-sans { font-family: 'Inter', sans-serif; }
        .text-gold { color: #C9A84C; }
        .bg-gold { background-color: #C9A84C; }
        .border-gold { border-color: #C9A84C; }
        
        .gold-divider {
          height: 1px;
          background: linear-gradient(90deg, rgba(201,168,76,0) 0%, rgba(201,168,76,0.5) 50%, rgba(201,168,76,0) 100%);
        }

        .fade-up {
          animation: fadeUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
          transform: translateY(20px);
        }

        .delay-100 { animation-delay: 100ms; }
        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 300ms; }
        .delay-500 { animation-delay: 500ms; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'py-4 bg-[#0A0A0A]/90 backdrop-blur-md border-b border-white/5' : 'py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
          <button className="text-[#F5F5F0] hover:text-[#C9A84C] transition-colors focus:outline-none">
            <Menu size={24} strokeWidth={1.5} />
          </button>
          
          <a href="#" className="font-serif text-2xl tracking-wider text-[#F5F5F0] hover:text-[#C9A84C] transition-colors">
            MINI DREAMS
          </a>
          
          <button className="text-sm tracking-widest uppercase hover:text-[#C9A84C] transition-colors hidden md:block focus:outline-none">
            Boutique
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full bg-[#050505]">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/40 via-transparent to-[#0A0A0A] z-10"></div>
          <img 
            src="/__mockup/images/mini-dreams-hero-luxe.jpg" 
            alt="Luxurious miniature electric car" 
            className="w-full h-full object-cover scale-105 transform transition-transform duration-[10s] hover:scale-100 opacity-90"
          />
        </div>
        
        <div className="relative z-20 text-center px-6 mt-32 max-w-4xl mx-auto">
          <p className="fade-up text-gold tracking-[0.3em] uppercase text-xs md:text-sm mb-6">L'Excellence, dès le premier âge</p>
          <h1 className="fade-up delay-100 font-serif text-5xl md:text-7xl lg:text-8xl leading-tight mb-8">
            Le Premier Moteur<br/>De Leurs Rêves
          </h1>
          <div className="fade-up delay-200">
            <button className="group relative inline-flex items-center gap-4 px-8 py-4 bg-transparent text-[#F5F5F0] transition-colors hover:text-[#C9A84C] focus:outline-none">
              <span className="absolute inset-0 border border-[#C9A84C]/30 group-hover:border-[#C9A84C] transition-colors duration-500"></span>
              <span className="relative text-sm tracking-widest uppercase">Découvrir la collection</span>
              <ChevronRight size={16} className="relative transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 fade-up delay-500 flex flex-col items-center gap-4">
          <span className="text-[10px] tracking-[0.3em] uppercase text-white/40">Défiler</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/40 to-transparent"></div>
        </div>
      </section>

      {/* Craftsmanship Section */}
      <section className="py-32 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1 relative group">
            <div className="absolute -inset-4 border border-[#C9A84C]/20 z-0 hidden lg:block opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="bg-[#111] aspect-[4/5] relative z-10 overflow-hidden">
              <img 
                src="/__mockup/images/mini-dreams-detail-luxe.jpg" 
                alt="Craftsmanship details" 
                className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 opacity-90"
              />
            </div>
          </div>
          <div className="order-1 lg:order-2 flex flex-col justify-center">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-8 leading-tight">Un héritage<br/>de précision.</h2>
            <div className="space-y-6 text-white/70 font-light leading-relaxed text-lg mb-12">
              <p>
                Chaque véhicule Mini Dreams est assemblé à la main, avec la même exigence que les plus grandes manufactures automobiles. 
                Du cuir Nappa surpiqué aux inserts en bois précieux, aucun compromis n'est fait sur la qualité.
              </p>
              <p>
                Parce que le goût du raffinement ne s'apprend pas, il se transmet.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-10">
              <div>
                <p className="text-3xl font-serif text-gold mb-2">120h</p>
                <p className="text-xs uppercase tracking-widest text-white/50">D'assemblage manuel</p>
              </div>
              <div>
                <p className="text-3xl font-serif text-gold mb-2">100%</p>
                <p className="text-xs uppercase tracking-widest text-white/50">Matériaux nobles</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spotlight Flagship */}
      <section className="py-32 relative bg-[#050505]">
        <div className="gold-divider absolute top-0 w-full"></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-20 text-center">
          <p className="text-gold tracking-[0.2em] uppercase text-xs mb-4">Le Modèle Phare</p>
          <h2 className="font-serif text-5xl md:text-6xl mb-6">M-Type Signature</h2>
        </div>

        <div className="w-full relative h-[50vh] md:h-[70vh] flex items-center justify-center">
          <div className="absolute inset-0 bg-[#0A0A0A]">
             <img 
              src="/__mockup/images/mini-dreams-spotlight-luxe.jpg" 
              alt="M-Type Signature Side Profile" 
              className="w-full h-full object-cover opacity-70"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]"></div>
          
          {/* Hotspots */}
          <div className="absolute top-1/3 left-1/4 group hidden md:block">
            <div className="w-3 h-3 rounded-full bg-gold shadow-[0_0_15px_rgba(201,168,76,0.6)] cursor-pointer hover:scale-150 transition-transform"></div>
            <div className="absolute top-6 left-1/2 -translate-x-1/2 w-48 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-xs uppercase tracking-widest text-gold mb-1">Peinture</p>
              <p className="text-sm font-light text-white/80">Noir Carbone finition céramique</p>
            </div>
          </div>
          
          <div className="absolute bottom-1/4 right-1/3 group hidden md:block">
            <div className="w-3 h-3 rounded-full bg-gold shadow-[0_0_15px_rgba(201,168,76,0.6)] cursor-pointer hover:scale-150 transition-transform"></div>
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-48 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-xs uppercase tracking-widest text-gold mb-1">Jantes</p>
              <p className="text-sm font-light text-white/80">Alliage forgé, liseré or</p>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-6 lg:px-12 mt-16 relative z-10">
          <div className="flex flex-col md:flex-row justify-center gap-12 md:gap-24">
            <div className="text-center">
              <p className="text-2xl font-serif mb-1">8 km/h</p>
              <p className="text-[10px] uppercase tracking-widest text-white/40">Vitesse de pointe</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-serif mb-1">4 heures</p>
              <p className="text-[10px] uppercase tracking-widest text-white/40">Autonomie</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-serif mb-1">iOS & Android</p>
              <p className="text-[10px] uppercase tracking-widest text-white/40">Contrôle parental</p>
            </div>
          </div>
        </div>
      </section>

      {/* Collection Gallery */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-16 flex justify-between items-end">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl mb-4">La Collection</h2>
            <p className="text-white/50 font-light max-w-md">Chaque modèle est conçu en édition limitée. Réservez le vôtre avant épuisement des allocations.</p>
          </div>
          <div className="hidden md:flex gap-4">
            <button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:border-gold hover:text-gold transition-colors focus:outline-none">
              <ArrowRight className="rotate-180" size={20} strokeWidth={1.5} />
            </button>
            <button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:border-gold hover:text-gold transition-colors focus:outline-none">
              <ArrowRight size={20} strokeWidth={1.5} />
            </button>
          </div>
        </div>

        <div className="flex overflow-x-auto gap-8 px-6 lg:px-12 pb-12 hide-scrollbar snap-x snap-mandatory">
          {/* Card 1 */}
          <div className="min-w-[85vw] md:min-w-[420px] snap-center group cursor-pointer">
            <div className="relative aspect-[4/3] overflow-hidden mb-6 border border-white/5 group-hover:border-gold/30 transition-colors duration-500">
              <div className="absolute inset-0 bg-[#0F0F0F] z-0"></div>
              <img src="/__mockup/images/mini-dreams-hero-luxe.jpg" alt="M-Type Noir" className="absolute inset-0 w-full h-full object-cover z-10 opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" />
            </div>
            <div className="flex justify-between items-start">
              <div>
                <p className="text-xs uppercase tracking-widest text-gold mb-2">Édition Limitée</p>
                <h3 className="font-serif text-2xl mb-1 group-hover:text-gold transition-colors">M-Type Noir</h3>
                <p className="text-white/50 text-sm font-light">À partir de 3 450 €</p>
              </div>
              <button className="text-white/40 group-hover:text-gold transition-colors focus:outline-none">
                <ChevronRight size={24} strokeWidth={1} />
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="min-w-[85vw] md:min-w-[420px] snap-center group cursor-pointer">
            <div className="relative aspect-[4/3] overflow-hidden mb-6 border border-white/5 group-hover:border-gold/30 transition-colors duration-500">
              <div className="absolute inset-0 bg-[#0F0F0F] z-0"></div>
              <img src="/__mockup/images/mini-dreams-collection-1.jpg" alt="Classic Roadster Blanc" className="absolute inset-0 w-full h-full object-cover z-10 opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" />
            </div>
            <div className="flex justify-between items-start">
              <div>
                <p className="text-xs uppercase tracking-widest text-white/50 mb-2">Héritage</p>
                <h3 className="font-serif text-2xl mb-1 group-hover:text-gold transition-colors">Classic Roadster</h3>
                <p className="text-white/50 text-sm font-light">À partir de 2 800 €</p>
              </div>
              <button className="text-white/40 group-hover:text-gold transition-colors focus:outline-none">
                <ChevronRight size={24} strokeWidth={1} />
              </button>
            </div>
          </div>

          {/* Card 3 (Placeholder for layout) */}
          <div className="min-w-[85vw] md:min-w-[420px] snap-center group cursor-pointer">
            <div className="relative aspect-[4/3] overflow-hidden mb-6 border border-white/5 group-hover:border-gold/30 transition-colors duration-500 bg-[#111]">
              <div className="absolute inset-0 flex items-center justify-center opacity-40 group-hover:opacity-100 transition-opacity">
                <p className="font-serif text-white/40 text-xl tracking-wider">G-Series</p>
              </div>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <p className="text-xs uppercase tracking-widest text-gold mb-2">Bientôt Disponible</p>
                <h3 className="font-serif text-2xl mb-1 group-hover:text-gold transition-colors">G-Series All-Terrain</h3>
                <p className="text-white/50 text-sm font-light">Sur liste d'attente</p>
              </div>
              <button className="text-white/40 group-hover:text-gold transition-colors focus:outline-none">
                <ChevronRight size={24} strokeWidth={1} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-32 px-6 lg:px-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#0F0F0F] to-[#0A0A0A] -z-10"></div>
        <div className="max-w-4xl mx-auto text-center relative">
          <div className="text-gold opacity-10 text-9xl font-serif absolute -top-16 left-1/2 -translate-x-1/2 select-none">"</div>
          <p className="font-serif text-3xl md:text-4xl lg:text-5xl leading-snug relative z-10 mb-12 text-[#F5F5F0]">
            Une finition qui rivalise avec ma propre voiture. Un véritable chef-d'œuvre de l'ingénierie miniature.
          </p>
          <div className="flex flex-col items-center gap-3">
            <div className="flex gap-1 mb-2">
              {[1,2,3,4,5].map(i => <Star key={i} size={12} className="fill-gold text-gold" />)}
            </div>
            <p className="uppercase tracking-widest text-sm text-white/90">Charles D.</p>
            <p className="text-xs text-white/40 font-light">Propriétaire d'un M-Type Noir</p>
          </div>
        </div>
      </section>

      {/* Newsletter / Contact */}
      <section className="py-32 border-t border-white/5 bg-[#050505]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl mb-6">Rejoignez le Cercle</h2>
          <p className="text-white/50 font-light mb-12">
            Inscrivez-vous pour recevoir nos invitations privées et être informé en avant-première de nos nouvelles collections.
          </p>
          
          <form className="relative max-w-md mx-auto group" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Votre adresse email" 
              className="w-full bg-transparent border-b border-white/20 py-4 pl-0 pr-12 text-[#F5F5F0] placeholder:text-white/30 focus:outline-none focus:border-gold transition-colors font-light"
            />
            <button type="submit" className="absolute right-0 top-1/2 -translate-y-1/2 text-white/30 group-focus-within:text-gold hover:text-gold transition-colors focus:outline-none">
              <ArrowRight size={20} strokeWidth={1.5} />
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="pt-20 pb-10 px-6 lg:px-12 bg-[#050505] border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
            <div className="md:col-span-2">
              <a href="#" className="font-serif text-2xl tracking-wider text-[#F5F5F0] mb-6 block hover:text-gold transition-colors">
                MINI DREAMS
              </a>
              <p className="text-white/40 text-sm font-light max-w-sm leading-relaxed">
                L'artisanat d'exception au service du premier âge. 
                Des véhicules électriques miniatures conçus sans aucun compromis.
              </p>
            </div>
            
            <div>
              <h4 className="uppercase tracking-widest text-xs font-semibold mb-6 text-white/80">Collections</h4>
              <ul className="space-y-4 text-sm text-white/40 font-light">
                <li><a href="#" className="hover:text-gold transition-colors block">M-Type Signature</a></li>
                <li><a href="#" className="hover:text-gold transition-colors block">Classic Roadster</a></li>
                <li><a href="#" className="hover:text-gold transition-colors block">G-Series All-Terrain</a></li>
                <li><a href="#" className="hover:text-gold transition-colors block">Bespoke (Sur-mesure)</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="uppercase tracking-widest text-xs font-semibold mb-6 text-white/80">La Maison</h4>
              <ul className="space-y-4 text-sm text-white/40 font-light">
                <li><a href="#" className="hover:text-gold transition-colors block">Notre Héritage</a></li>
                <li><a href="#" className="hover:text-gold transition-colors block">Savoir-Faire</a></li>
                <li><a href="#" className="hover:text-gold transition-colors block">Conciergerie</a></li>
                <li><a href="#" className="hover:text-gold transition-colors block">Contact</a></li>
              </ul>
            </div>
          </div>
          
          <div className="gold-divider mb-8"></div>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/30 font-light">
            <p>© {new Date().getFullYear()} Mini Dreams. Tous droits réservés.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Mentions Légales</a>
              <a href="#" className="hover:text-white transition-colors">Confidentialité</a>
              <a href="#" className="hover:text-white transition-colors">CGV</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
