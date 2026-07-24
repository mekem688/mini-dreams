import lambo1 from '@assets/IMG_4628_1784776929180.jpeg';
import lambo2 from '@assets/IMG_4630_1784776929180.jpeg';
import lambo3 from '@assets/IMG_4629_1784776929180.jpeg';
import lambo4 from '@assets/IMG_4627_1784776929180.jpeg';
import lambo5 from '@assets/IMG_4626_1784776929180.jpeg';

import mercGtr1 from '@assets/IMG_4631_1784777134766.jpeg';
import mercGtr2 from '@assets/IMG_4634_1784777134766.jpeg';
import mercGtr3 from '@assets/IMG_4633_1784777134766.jpeg';
import mercGtr4 from '@assets/IMG_4632_1784777134766.jpeg';

import mercGls from '@assets/IMG_4641_1784777653823.jpeg';
import bmwX6 from '@assets/IMG_4636_1784777248392.jpeg';
import bmwX6m from '@assets/IMG_4635_1784777201074.jpeg';
import fordMustang from '@assets/IMG_4637_1784777295403.jpeg';
import suvPolice from '@assets/IMG_4638_1784777410358.jpeg';
import fordRaptor from '@assets/IMG_4643_1784777787009.jpeg';
import quadHawk from '@assets/IMG_4642_1784777787008.jpeg';
import motoKawa from '@assets/IMG_4644_1784777787009.jpeg';
import polaris from '@assets/IMG_4639_1784777537645.jpeg';

export type Product = {
  id: string;
  name: string;
  price: number;
  category: string;
  specs: string[];
  description: string;
  color: string;
  images: string[];
};

export const products: Product[] = [
  {
    id: "lamborghini-revuelto",
    name: "Lamborghini Revuelto",
    price: 1800,
    category: "Supercar",
    specs: [
      "Moteur: 24V, 2 ou 4 moteurs",
      "Vitesse: jusqu'à 10 km/h",
      "Capacité: 2 places, 6-8 ans, max 60kg",
      "Télécommande parentale",
      "MP3/USB/Bluetooth",
      "Phares LED & Suspension",
      "Portes papillon"
    ],
    description: "Une réplique spectaculaire de la Lamborghini Revuelto, conçue pour offrir une expérience de conduite premium aux enfants avec un design authentique et des portes papillon emblématiques.",
    color: "Rouge métallisé",
    images: [lambo1, lambo2, lambo3, lambo4, lambo5]
  },
  {
    id: "mercedes-amg-gtr",
    name: "Mercedes-AMG GT R",
    price: 1600,
    category: "Supercar",
    specs: [
      "Moteur: 12V",
      "Sous licence Mercedes officielle",
      "Capacité: 2 places, coupé sport",
      "Calandre Panamericana",
      "Phares LED bleus",
      "Télécommande parentale",
      "MP3/USB/Bluetooth",
      "Portes ouvrantes"
    ],
    description: "L'élégance sportive incarnée. Ce coupé sport Mercedes-AMG GT R sous licence officielle est équipé des détails distinctifs de la marque pour un réalisme saisissant.",
    color: "Vert British Racing",
    images: [mercGtr1, mercGtr2, mercGtr3, mercGtr4]
  },
  {
    id: "mercedes-gls-suv",
    name: "Mercedes GLS Style SUV",
    price: 1700,
    category: "SUV Premium",
    specs: [
      "Moteur: 24V",
      "Capacité: 2 places, 3-8 ans, max 60kg",
      "Phares LED bicolores bleu/vert",
      "Gyrophares verts sur le toit",
      "Télécommande parentale",
      "MP3/USB/Bluetooth",
      "Suspension et jantes sport"
    ],
    description: "Un SUV imposant et majestueux inspiré du style Mercedes GLS, parfait pour les aventures confortables avec son double éclairage et son habitacle spacieux.",
    color: "Gris titane métallisé avec accents vert néon",
    images: [mercGls]
  },
  {
    id: "bmw-x6-suv",
    name: "BMW X6 SUV Sport",
    price: 1300,
    category: "SUV Premium",
    specs: [
      "Moteur: 12V",
      "Capacité: 1 place, 3-8 ans, max 35kg",
      "Phares 'angel eyes' LED",
      "Suspension et roues EVA",
      "Démarrage à clé",
      "Télécommande 2.4Ghz",
      "MP3/USB/Bluetooth",
      "Portes ouvrantes"
    ],
    description: "Le caractère affirmé du BMW X6 en format enfant, avec ses célèbres phares 'angel eyes' et ses roues EVA pour une conduite douce sur toutes les surfaces.",
    color: "Noir brillant",
    images: [bmwX6]
  },
  {
    id: "bmw-x6m-sport",
    name: "BMW X6M Sport",
    price: 800,
    category: "SUV Premium",
    specs: [
      "Moteur: 12V",
      "Capacité: 1 place, 3-8 ans, max 35kg",
      "Phares LED",
      "Calandre BMW",
      "Suspension",
      "Télécommande 2.4Ghz",
      "MP3/USB/Bluetooth",
      "Klaxon"
    ],
    description: "L'allure sportive du modèle X6M avec sa face avant agressive et sa signature lumineuse LED, idéal pour les jeunes passionnés de BMW.",
    color: "Rouge brillant",
    images: [bmwX6m]
  },
  {
    id: "ford-mustang-gt",
    name: "Ford Mustang GT Cabriolet",
    price: 1500,
    category: "Supercar",
    specs: [
      "Moteur: 12V ou 24V",
      "Capacité: 1 place, 3-8 ans, max 30kg",
      "Son moteur Mustang authentique",
      "Phares LED bleus",
      "Télécommande parentale",
      "MP3/USB",
      "Klaxon et ceinture de sécurité"
    ],
    description: "Le rêve américain à la portée des enfants. Une Mustang cabriolet qui démarre avec le son authentique du célèbre V8 et brille par sa finition noire impeccable.",
    color: "Noir brillant",
    images: [fordMustang]
  },
  {
    id: "suv-police",
    name: "SUV Police Range Rover Style",
    price: 1200,
    category: "Édition Spéciale",
    specs: [
      "Moteur: 12V",
      "Capacité: 2 places",
      "Gyrophare rouge/bleu",
      "Sirène POLICE",
      "Télécommande parentale",
      "MP3",
      "Phares LED",
      "Ceintures et suspension"
    ],
    description: "Faites régner l'ordre avec style au volant de ce SUV Police type Range Rover équipé de véritables gyrophares et d'une sirène.",
    color: "Noir Police",
    images: [suvPolice]
  },
  {
    id: "ford-raptor-police",
    name: "Ford Raptor Police Jeep",
    price: 1200,
    category: "Édition Spéciale",
    specs: [
      "Moteur: 12V",
      "Style Ford Raptor",
      "Capacité: 1 place, 2-6 ans",
      "Gyrophare et sirène Police",
      "Calandre sport et roues larges",
      "Télécommande parentale",
      "MP3/Bluetooth",
      "Phares LED"
    ],
    description: "Le pick-up d'intervention ultime. Un Ford Raptor d'intervention rapide avec ses roues extra-larges et son équipement de police complet.",
    color: "Noir Police",
    images: [fordRaptor]
  },
  {
    id: "quad-atv-hawk",
    name: "Quad ATV Hawk",
    price: 1000,
    category: "Quad & Moto",
    specs: [
      "Quad électrique tout-terrain",
      "Capacité: 3-10 ans",
      "4 roues larges tout-terrain",
      "Porte-bagages arrière",
      "Phare avant",
      "Idéal jardin et chemins"
    ],
    description: "Le compagnon idéal pour l'aventure en plein air. Un quad robuste conçu pour surmonter les obstacles du jardin avec aisance et stabilité.",
    color: "Rouge/Noir",
    images: [quadHawk]
  },
  {
    id: "moto-kawasaki-ninja",
    name: "Moto Kawasaki Ninja",
    price: 800,
    category: "Quad & Moto",
    specs: [
      "Moto électrique style Kawasaki Ninja",
      "Capacité: 3-8 ans",
      "Roues avec LED vertes illuminées",
      "Stabilisateurs latéraux",
      "Sons moteur",
      "Design sportif premium"
    ],
    description: "Pour les futurs motards. Un design ultra-sportif inspiré de la légendaire Ninja, avec des roues illuminées pour un effet visuel spectaculaire de nuit.",
    color: "Noir/Vert néon",
    images: [motoKawa]
  },
  {
    id: "polaris-rzr-rc",
    name: "Polaris RZR PRO XP RC 4x4",
    price: 90,
    category: "Télécommandé",
    specs: [
      "Voiture radio-commandée 1:5",
      "4 roues motrices",
      "Dès 8 ans",
      "Batterie 12.8V lithium",
      "Télécommande 2.4Ghz",
      "Suspension SuperFlex",
      "Lumières de travail incluses"
    ],
    description: "L'expérience RC ultime avec ce Polaris à l'échelle 1:5. Ses suspensions SuperFlex et ses 4 roues motrices garantissent un franchissement exceptionnel.",
    color: "Rouge",
    images: [polaris]
  }
];
