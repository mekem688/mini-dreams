# PayPalBuy

Composant React simple pour ajouter un bouton PayPal (client-side) permettant au client d'entrer librement le montant.

Usage (exemple) :

import { PayPalBuy } from "@workspace/api-client-react"; // ou le chemin relatif

<PayPalBuy price={article.price} title={article.title} />

Comportement :
- Le champ Montant est pré-rempli avec la prop `price` si fournie, sinon à 1.00 EUR.
- Le SDK PayPal est chargé en production avec le client-id fourni (KBJK98YATZWVG) et la devise EUR.
- La commande est créée et capturée côté client via le SDK PayPal. Pour une intégration plus sécurisée, implémentez la création/capture côté serveur.

Notes de sécurité :
- Le client-id est public et peut être utilisé dans le front-end. Ne poussez jamais de clés secrètes (client secret) dans le dépôt.
- Tester d'abord en sandbox si nécessaire en remplaçant le client-id.

