import React, { useEffect, useRef, useState } from "react";

export type PayPalBuyProps = {
  price?: number | string; // prix de l'article pour préremplir
  title?: string;
  currency?: string; // default "EUR"
  clientId?: string; // default KBJK98YATZWVG
  onSuccess?: (details: any) => void;
  onError?: (err: any) => void;
  className?: string;
};

const DEFAULT_CLIENT_ID = "KBJK98YATZWVG";

export default function PayPalBuy({
  price,
  title,
  currency = "EUR",
  clientId = DEFAULT_CLIENT_ID,
  onSuccess,
  onError,
  className,
}: PayPalBuyProps) {
  const paypalRef = useRef<HTMLDivElement | null>(null);
  const [amount, setAmount] = useState<string>(
    price != null ? Number(price).toFixed(2) : "1.00"
  );
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (price != null) setAmount(Number(price).toFixed(2));
  }, [price]);

  useEffect(() => {
    let mounted = true;
    setLoading(true);

    const existingScript = document.querySelector<HTMLScriptElement>(
      `script[data-paypal-sdk="${clientId}-${currency}"]`
    );

    const renderButtons = () => {
      if (!mounted) return;
      setLoading(false);
      // @ts-ignore
      if ((window as any).paypal && paypalRef.current) {
        paypalRef.current.innerHTML = ""; // cleanup previous
        // @ts-ignore
        ;(window as any).paypal
          .Buttons({
            style: { layout: "vertical" },
            createOrder: (_data: any, actions: any) => {
              const value = Number(amount);
              if (isNaN(value) || value <= 0) {
                return Promise.reject(new Error("Montant invalide"));
              }
              return actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      value: value.toFixed(2),
                      currency_code: currency,
                    },
                    description: title ?? "Achat",
                  },
                ],
              });
            },
            onApprove: async (_data: any, actions: any) => {
              try {
                const details = await actions.order.capture();
                
                // Sauvegarde les détails de la commande dans localStorage
                localStorage.setItem('paypalOrderDetails', JSON.stringify(details));
                
                // Appelle la callback onSuccess si elle existe
                if (onSuccess) onSuccess(details);
                
                // Redirige vers la page de confirmation de paiement
                window.location.href = '/merci-paiement';
              } catch (err) {
                if (onError) onError(err);
                else alert("Erreur lors de la capture du paiement.");
              }
            },
            onError: (err: any) => {
              if (onError) onError(err);
              else console.error("PayPal Buttons error", err);
            },
          })
          .render(paypalRef.current);
      }
    };

    if (existingScript) {
      renderButtons();
      return () => {
        mounted = false;
      };
    }

    const script = document.createElement("script");
    script.src = `https://www.paypal.com/sdk/js?client-id=${encodeURIComponent(
      clientId
    )}&currency=${encodeURIComponent(currency)}`;
    script.async = true;
    script.setAttribute("data-paypal-sdk", `${clientId}-${currency}`);
    script.onload = () => renderButtons();
    script.onerror = (err) => {
      setLoading(false);
      if (onError) onError(err);
      else console.error("Erreur chargement PayPal SDK", err);
    };
    document.body.appendChild(script);

    return () => {
      mounted = false;
      // keep the script in the page for reuse; buttons cleaned by ref
    };
  }, [clientId, currency, amount, onError, onSuccess, title]);

  return (
    <div className={className}>
      <label style={{ display: "block", marginBottom: 6 }}>
        Montant (€)
        <input
          type="number"
          step="0.01"
          min="0.01"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          style={{ marginLeft: 8, width: 110 }}
        />
      </label>

      <div ref={paypalRef} />

      {loading && <div>Chargement du bouton de paiement…</div>}
    </div>
  );
}
