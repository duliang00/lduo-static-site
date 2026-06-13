import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import { useEffect } from "react";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  useEffect(() => {
    // Update meta tags for SEO
    document.title = "New Beijing Chinese Restaurant London | Mala Xiang Guo, Noodles & Delivery";
    
    const updateMetaTag = (name: string, content: string) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('name', name);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    const updatePropertyTag = (property: string, content: string) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    updateMetaTag('description', 'Craving authentic Chinese food in London? Visit New Beijing Chinese Restaurant in Limehouse for Mala Xiang Guo, Chengdu Mao Cai, hand-made noodles, delivery, and takeaway.');
    updateMetaTag('keywords', 'New Beijing Chinese Restaurant, Chinese restaurant Limehouse, Mala Xiang Guo London, Chengdu Mao Cai, hand-made noodles London, Chinese delivery E14');
    updateMetaTag('viewport', 'width=device-width, initial-scale=1.0');
    
    // Open Graph tags
    updatePropertyTag('og:title', 'New Beijing Chinese Restaurant London');
    updatePropertyTag('og:description', 'Authentic Sichuan heat, Beijing comfort food, Mala Xiang Guo, and hand-made noodles in Limehouse.');
    updatePropertyTag('og:type', 'website');
    updatePropertyTag('og:url', window.location.href);
    updatePropertyTag('og:image', `${window.location.origin}/assets/new-beijing-feast.png`);
    
    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', 'New Beijing Chinese Restaurant London');
    updateMetaTag('twitter:description', 'Mala Xiang Guo, Chengdu Mao Cai, and hand-made noodles in Limehouse.');
    updateMetaTag('twitter:image', `${window.location.origin}/assets/new-beijing-feast.png`);
  }, []);

  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
