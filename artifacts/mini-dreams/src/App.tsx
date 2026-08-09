import React from 'react';
import { Route, Switch, Router as WouterRouter } from 'wouter';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import Home from '@/pages/Home';
import Boutique from '@/pages/Boutique';
import ProductDetail from '@/pages/ProductDetail';
import About from '@/pages/About';
import Contact from '@/pages/Contact';
import FAQ from '@/pages/FAQ';
import PaymentSuccess from '@/pages/PaymentSuccess';
import NotFound from '@/pages/not-found';

const queryClient = new QueryClient();

function ScrollToTop() {
  const [pathname] = window.location.pathname;
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
        <ScrollToTop />
        <div className="flex flex-col min-h-[100dvh]">
          <Navbar />
          <main className="flex-1">
            <Switch>
              <Route path="/" component={Home} />
              <Route path="/boutique" component={Boutique} />
              <Route path="/produit/:id" component={ProductDetail} />
              <Route path="/a-propos" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/faq" component={FAQ} />
              <Route path="/merci-paiement" component={PaymentSuccess} />
              <Route component={NotFound} />
            </Switch>
          </main>
          <Footer />
        </div>
      </WouterRouter>
    </QueryClientProvider>
  );
}

export default App;
