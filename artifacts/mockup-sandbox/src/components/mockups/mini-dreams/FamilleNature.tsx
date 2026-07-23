import React from 'react';
import { Leaf, ShieldCheck, BatteryCharging, Heart, Sun, Star, ArrowRight, CheckCircle2, Menu } from 'lucide-react';

export function FamilleNature() {
  return (
    <div className="font-nunito bg-[#FFF8EC] text-slate-800 min-h-screen">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,400;0,600;0,700;0,800&display=swap');
        .font-nunito { font-family: 'Nunito', sans-serif; }
        html { scroll-behavior: smooth; }
      `}</style>

      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 bg-[#FFF8EC]/90 backdrop-blur-md border-b border-[#2D6A4F]/10">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2 text-[#2D6A4F] font-extrabold text-2xl tracking-tight">
            <Leaf className="w-6 h-6" />
            <span>Mini Dreams</span>
          </div>
          <div className="hidden md:flex items-center gap-8 font-semibold text-[#2D6A4F]/80">
            <a href="#modeles" className="hover:text-[#E07A5F] transition-colors">Nos Modèles</a>
            <a href="#eco" className="hover:text-[#E07A5F] transition-colors">Pourquoi l'électrique ?</a>
            <a href="#securite" className="hover:text-[#E07A5F] transition-colors">Sécurité</a>
          </div>
          <button className="hidden md:flex items-center gap-2 bg-[#E07A5F] hover:bg-[#c96a51] text-white px-6 py-2.5 rounded-full font-bold transition-all transform hover:scale-105 shadow-md shadow-[#E07A5F]/20">
            Offrir un Mini Dream
          </button>
          <button className="md:hidden text-[#2D6A4F] p-2 rounded-xl bg-[#2D6A4F]/5">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-20">
        <div className="flex-1 space-y-8 text-center md:text-left z-10">
          <div className="inline-flex items-center gap-2 bg-[#2D6A4F]/10 text-[#2D6A4F] px-4 py-2 rounded-full font-bold text-sm mb-2">
            <Sun className="w-4 h-4 text-[#E07A5F]" />
            <span>Une enfance au grand air</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#2D6A4F] leading-[1.1]">
            Des souvenirs <br/>
            <span className="text-[#E07A5F]">grandeur nature.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed max-w-lg mx-auto md:mx-0">
            Offrez à vos enfants la joie de l'exploration responsable. Des petites voitures électriques conçues pour l'aventure en famille, en harmonie avec l'environnement.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
            <button className="w-full sm:w-auto bg-[#2D6A4F] hover:bg-[#22503b] text-white px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:-translate-y-1 shadow-lg shadow-[#2D6A4F]/30 flex items-center justify-center gap-2">
              Découvrir la collection
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
          <div className="flex items-center justify-center md:justify-start gap-4 pt-4 text-sm font-semibold text-slate-500">
             <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-[#E07A5F] flex items-center justify-center text-white text-xs border-2 border-[#FFF8EC]">M</div>
                <div className="w-8 h-8 rounded-full bg-[#2D6A4F] flex items-center justify-center text-white text-xs border-2 border-[#FFF8EC]">S</div>
                <div className="w-8 h-8 rounded-full bg-slate-300 flex items-center justify-center text-slate-700 text-xs border-2 border-[#FFF8EC]">C</div>
             </div>
             <p>Rejoint par +2000 familles</p>
          </div>
        </div>
        <div className="flex-1 relative w-full max-w-lg mx-auto mt-10 md:mt-0">
          <div className="absolute inset-0 bg-[#E07A5F]/20 rounded-[3rem] transform rotate-3 scale-105 transition-transform hover:rotate-6 duration-500"></div>
          <img 
            src="/__mockup/images/mini-dreams-hero-famille.jpg" 
            alt="Famille avec enfant en voiture électrique"
            className="relative rounded-[3rem] w-full h-[500px] object-cover shadow-2xl z-10"
          />
          {/* Badge */}
          <div className="absolute -bottom-6 -left-6 md:-left-12 z-20 bg-white p-4 rounded-3xl shadow-xl flex items-center gap-3 animate-[bounce_3s_ease-in-out_infinite]">
            <div className="bg-[#2D6A4F]/10 p-2 rounded-2xl">
              <Leaf className="w-6 h-6 text-[#2D6A4F]" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Émission</p>
              <p className="text-lg font-extrabold text-[#2D6A4F]">Zéro CO2</p>
            </div>
          </div>
        </div>
      </section>

      {/* Wave Divider to Green */}
      <div className="w-full overflow-hidden leading-none mt-12 mb-[-1px]">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-[60px] md:h-[120px]">
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" fill="#2D6A4F"/>
        </svg>
      </div>

      {/* Eco Benefits Section */}
      <section id="eco" className="bg-[#2D6A4F] text-[#FFF8EC] py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 max-w-2xl mx-auto space-y-6">
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Pour eux, et pour <span className="text-[#E07A5F]">la planète.</span>
            </h2>
            <p className="text-[#FFF8EC]/80 text-lg md:text-xl font-medium">
              Nous avons repensé le jouet motorisé. Plus propre, plus silencieux, et pensé pour durer, de génération en génération.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {[
              {
                icon: <BatteryCharging className="w-8 h-8 text-[#E07A5F]" />,
                title: "Recharge Solaire",
                desc: "Batteries optimisées se rechargeant facilement. Moins d'électricité, plus d'autonomie pour les longues balades au parc."
              },
              {
                icon: <Leaf className="w-8 h-8 text-[#E07A5F]" />,
                title: "Matériaux Durables",
                desc: "Plastiques recyclés et bois issu de forêts gérées durablement. Un jouet qui respecte la nature."
              },
              {
                icon: <Heart className="w-8 h-8 text-[#E07A5F]" />,
                title: "Zéro Bruit, Zéro Gaz",
                desc: "Le seul bruit que vous entendrez sera celui de leurs rires. Profitez du calme de la nature sans pollution."
              }
            ].map((feature, i) => (
              <div key={i} className="bg-[#FFF8EC]/10 p-8 rounded-[2rem] border border-[#FFF8EC]/20 hover:bg-[#FFF8EC]/20 transition-all hover:-translate-y-2 cursor-default">
                <div className="bg-[#FFF8EC] w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-[#2D6A4F]/50">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-[#FFF8EC]/80 leading-relaxed font-medium">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wave Divider to Cream */}
      <div className="w-full overflow-hidden leading-none bg-[#2D6A4F] mb-12">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-[60px] md:h-[120px]">
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z" fill="#FFF8EC"/>
        </svg>
      </div>

      {/* Product Showcase */}
      <section id="modeles" className="py-20 px-6 max-w-6xl mx-auto">
        <div className="bg-white rounded-[3rem] p-8 md:p-16 shadow-2xl border border-[#2D6A4F]/10 flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#2D6A4F] leading-tight">
              Le SUV des <br/>petits explorateurs.
            </h2>
            <p className="text-lg text-slate-600 font-medium">
              L'édition "Forêt" est notre modèle le plus populaire. Pensée pour l'extérieur, ses pneus souples n'abîment pas l'herbe et offrent une conduite douce sur les chemins de terre.
            </p>
            <ul className="space-y-4">
              {[
                "Vitesse bridée réglable par les parents (2 à 6 km/h)",
                "Autonomie de 3 heures en utilisation continue",
                "Assise ergonomique pour le maintien du dos",
                "Fabriqué avec 40% de plastique recyclé"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#E07A5F] flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 font-semibold">{item}</span>
                </li>
              ))}
            </ul>
            <button className="bg-[#E07A5F] hover:bg-[#c96a51] text-white px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:-translate-y-1 shadow-lg shadow-[#E07A5F]/30 w-full sm:w-auto">
              Voir tous les détails
            </button>
          </div>
          <div className="flex-1 relative w-full max-w-md mx-auto">
             <div className="absolute inset-0 bg-[#2D6A4F]/10 rounded-[3rem] transform -rotate-3 scale-105 transition-transform hover:-rotate-6 duration-500"></div>
             <img 
               src="/__mockup/images/mini-car-green.jpg" 
               alt="Voiture électrique verte pour enfant"
               className="relative rounded-[3rem] w-full h-[400px] object-cover shadow-lg border-4 border-white z-10"
             />
          </div>
        </div>
      </section>

      {/* Safety & Peace of Mind */}
      <section id="securite" className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-[#2D6A4F]/5 rounded-t-[4rem]"></div>
        <div className="max-w-4xl mx-auto text-center space-y-12 relative z-10 pt-12">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#E07A5F]/20 text-[#E07A5F] mb-6 shadow-inner">
            <ShieldCheck className="w-10 h-10" />
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#2D6A4F]">
            Une aventure en toute sécurité.
          </h2>
          <p className="text-xl text-slate-600 font-medium max-w-2xl mx-auto">
            Nous savons que rien n'est plus important que la sécurité de vos enfants. C'est pourquoi nous avons intégré des fonctionnalités rassurantes.
          </p>
          <div className="grid sm:grid-cols-2 gap-8 text-left mt-12">
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-[#2D6A4F]/10 hover:shadow-md transition-shadow">
              <h4 className="text-xl font-bold text-[#2D6A4F] mb-3">Télécommande Parentale</h4>
              <p className="text-slate-600 font-medium">Gardez le contrôle avec une télécommande prioritaire permettant d'arrêter ou de diriger le véhicule à distance.</p>
            </div>
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-[#2D6A4F]/10 hover:shadow-md transition-shadow">
              <h4 className="text-xl font-bold text-[#2D6A4F] mb-3">Démarrage en douceur</h4>
              <p className="text-slate-600 font-medium">Pas d'à-coups brusques. L'accélération est progressive pour éviter de surprendre l'enfant.</p>
            </div>
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-[#2D6A4F]/10 hover:shadow-md transition-shadow">
              <h4 className="text-xl font-bold text-[#2D6A4F] mb-3">Ceinture de sécurité</h4>
              <p className="text-slate-600 font-medium">Un harnais 3 points ajustable pour maintenir fermement votre enfant pendant ses aventures.</p>
            </div>
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-[#2D6A4F]/10 hover:shadow-md transition-shadow">
              <h4 className="text-xl font-bold text-[#2D6A4F] mb-3">Freinage automatique</h4>
              <p className="text-slate-600 font-medium">Dès que l'enfant lève le pied de la pédale, le véhicule freine de manière douce et immédiate.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 max-w-6xl mx-auto bg-[#2D6A4F]/5">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#2D6A4F] text-center mb-16">
          Ils ont choisi l'électrique responsable
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Sophie & Marc",
              text: "C'est notre meilleur achat pour l'été. Jules adore sa voiture et nous aimons le fait qu'elle soit silencieuse et sans odeur d'essence dans le jardin.",
              rating: 5
            },
            {
              name: "Élodie D.",
              text: "Le design est magnifique, mais c'est surtout la batterie qui m'a surprise. On fait le tour du parc sans problème. Une belle idée de cadeau durable.",
              rating: 5
            },
            {
              name: "Famille Thomas",
              text: "La télécommande parentale nous rassure énormément pendant les promenades. Et savoir qu'elle est en partie recyclée, c'est un gros plus pour nous.",
              rating: 5
            }
          ].map((testimonial, i) => (
            <div key={i} className="bg-white p-8 rounded-[2rem] shadow-xl shadow-[#2D6A4F]/5 relative overflow-hidden flex flex-col justify-between h-full">
              <div>
                <div className="flex gap-1 mb-6 text-[#E07A5F]">
                  {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-slate-700 font-medium italic mb-8 relative z-10 leading-relaxed">
                  "{testimonial.text}"
                </p>
              </div>
              <div className="flex items-center gap-4 relative z-10 mt-auto">
                <div className="w-12 h-12 bg-[#FFF8EC] rounded-full flex items-center justify-center text-[#2D6A4F] font-bold text-xl border-2 border-[#2D6A4F]/10">
                  {testimonial.name[0]}
                </div>
                <span className="font-bold text-[#2D6A4F]">{testimonial.name}</span>
              </div>
              <Leaf className="absolute -bottom-4 -right-4 w-24 h-24 text-[#2D6A4F]/5 -rotate-45" />
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 bg-[#2D6A4F]/5">
        <div className="max-w-5xl mx-auto bg-[#E07A5F] rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#2D6A4F]/20 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
          
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 relative z-10 leading-tight">
            Prêts pour la prochaine aventure ?
          </h2>
          <p className="text-xl text-white/90 font-medium mb-12 max-w-2xl mx-auto relative z-10">
            Offrez plus qu'un simple jouet. Offrez une expérience en plein air, responsable et mémorable. La livraison est offerte ce mois-ci.
          </p>
          <button className="bg-white text-[#E07A5F] px-10 py-5 rounded-full font-bold text-xl transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl relative z-10 w-full sm:w-auto">
            Offrir un Mini Dream
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2D6A4F] text-[#FFF8EC]/60 py-16 px-6 rounded-t-[3rem]">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 mb-12 border-b border-[#FFF8EC]/10 pb-12">
          <div className="col-span-2 md:col-span-1 space-y-6">
            <div className="flex items-center gap-2 text-[#FFF8EC] font-extrabold text-2xl">
              <Leaf className="w-6 h-6" />
              <span>Mini Dreams</span>
            </div>
            <p className="text-sm font-medium leading-relaxed max-w-xs">
              Pour l'amour de nos enfants, et de leur planète. Jouer aujourd'hui, protéger demain.
            </p>
          </div>
          <div>
            <h4 className="text-[#FFF8EC] font-bold mb-6">Produits</h4>
            <ul className="space-y-3 text-sm font-medium">
              <li><a href="#" className="hover:text-white transition-colors">Édition Forêt</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Édition Océan</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Accessoires</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pièces de rechange</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[#FFF8EC] font-bold mb-6">La Marque</h4>
            <ul className="space-y-3 text-sm font-medium">
              <li><a href="#" className="hover:text-white transition-colors">Notre histoire</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Engagement éco</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Journal</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[#FFF8EC] font-bold mb-6">Légal</h4>
            <ul className="space-y-3 text-sm font-medium">
              <li><a href="#" className="hover:text-white transition-colors">Conditions de vente</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Confidentialité</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Garantie & Retours</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-6xl mx-auto text-center text-sm font-medium flex flex-col md:flex-row justify-between items-center gap-6">
          <p>© {new Date().getFullYear()} Mini Dreams. Tous droits réservés.</p>
          <div className="flex gap-4">
             <div className="w-10 h-10 rounded-full bg-[#FFF8EC]/10 flex items-center justify-center hover:bg-[#FFF8EC]/20 cursor-pointer transition-colors">
                <Heart className="w-5 h-5 text-[#FFF8EC]" />
             </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
