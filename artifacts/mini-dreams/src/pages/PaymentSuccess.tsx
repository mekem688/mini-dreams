import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'wouter';
import { CheckCircle, Download, Home, ShoppingBag } from 'lucide-react';

export default function PaymentSuccess() {
  const [, setLocation] = useLocation();
  const [orderDetails, setOrderDetails] = useState<any>(null);

  useEffect(() => {
    // Récupère les détails de la commande depuis le localStorage
    const savedDetails = localStorage.getItem('paypalOrderDetails');
    if (savedDetails) {
      setOrderDetails(JSON.parse(savedDetails));
      // Nettoie le localStorage après lecture
      localStorage.removeItem('paypalOrderDetails');
    }
  }, []);

  const orderId = orderDetails?.id || 'N/A';
  const amount = orderDetails?.purchase_units?.[0]?.amount?.value || 'N/A';
  const payerEmail = orderDetails?.payer?.email_address || 'Non fourni';

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        {/* Icône de succès */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-green-500 rounded-full opacity-20 animate-pulse"></div>
              <CheckCircle className="w-24 h-24 text-green-500 relative z-10" />
            </div>
          </div>
        </div>

        {/* Titre et message */}
        <div className="text-center mb-10">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-3">
            Paiement réussi ! 🎉
          </h1>
          <p className="text-xl text-gray-600 font-light">
            Merci pour votre confiance ! Votre commande a été confirmée avec succès.
          </p>
        </div>

        {/* Détails de la commande */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8 border border-gray-100">
          <div className="space-y-6">
            {/* En-tête */}
            <div className="flex items-center justify-between pb-6 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">Détails de votre commande</h2>
              <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
                Confirmée
              </span>
            </div>

            {/* Informations */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold mb-2">
                  Numéro de commande
                </p>
                <p className="text-lg font-semibold text-gray-900 break-all">{orderId}</p>
              </div>

              <div>
                <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold mb-2">
                  Montant
                </p>
                <p className="text-lg font-semibold text-green-600">{amount} €</p>
              </div>

              <div className="md:col-span-2">
                <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold mb-2">
                  Email de confirmation
                </p>
                <p className="text-lg text-gray-900">{payerEmail}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Prochaines étapes */}
        <div className="bg-blue-50 rounded-lg border border-blue-200 p-6 mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Ce qu'il faut faire maintenant</h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-sm font-bold mt-0.5 shrink-0">
                1
              </span>
              <span>📧 Un email de confirmation a été envoyé à <strong>{payerEmail}</strong></span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-sm font-bold mt-0.5 shrink-0">
                2
              </span>
              <span>📦 Vous recevrez votre colis sous <strong>5-7 jours ouvrables</strong></span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-sm font-bold mt-0.5 shrink-0">
                3
              </span>
              <span>🚚 Vous recevrez un email de suivi avec le numéro de votre livraison</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-sm font-bold mt-0.5 shrink-0">
                4
              </span>
              <span>✅ La garantie de 2 ans commence dès la réception du colis</span>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div className="bg-gray-50 rounded-lg border border-gray-200 p-6 mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Besoin d'aide ?</h3>
          <p className="text-gray-700 mb-4">
            Pour toute question concernant votre commande, n'hésitez pas à nous contacter :
          </p>
          <div className="space-y-2 text-sm text-gray-700">
            <p>📧 <strong>Email :</strong> support@minidreams.be</p>
            <p>📱 <strong>WhatsApp :</strong> +447848412475</p>
            <p>💬 <strong>Contact :</strong> Consultez notre page de contact</p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/" className="flex-1">
            <button className="w-full px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition font-semibold flex items-center justify-center gap-2 uppercase tracking-widest text-sm">
              <Home size={18} />
              Retour à l'accueil
            </button>
          </Link>
          <Link href="/boutique" className="flex-1">
            <button className="w-full px-6 py-3 bg-gray-200 text-gray-900 rounded-lg hover:bg-gray-300 transition font-semibold flex items-center justify-center gap-2 uppercase tracking-widest text-sm">
              <ShoppingBag size={18} />
              Continuer shopping
            </button>
          </Link>
        </div>

        {/* Note */}
        <p className="text-center text-sm text-gray-500 mt-8 font-light">
          Conservez votre numéro de commande pour le suivi de votre livraison
        </p>
      </div>
    </div>
  );
}
