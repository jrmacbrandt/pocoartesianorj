import React, { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { GlobalAutoLazy } from './components/common/GlobalAutoLazy';
import { WhatsAppButton } from './components/features/WhatsAppButton';
import { CookieConsent } from './components/features/CookieConsent';
import { SEOSchemas } from './components/common/SEOSchemas';
import { LoadingHUD } from './components/common/LoadingHUD';
import { LazySection } from './components/common/LazySection';
import { LazyMotion, domMax } from 'framer-motion';
import { HomePage } from './pages/HomePage';

// Lazy load heavy components
const SavingsCalculator = lazy(() => import('./components/features/SavingsCalculator').then(m => ({ default: m.SavingsCalculator })));
const FeaturedProjects = lazy(() => import('./components/features/FeaturedProjects').then(m => ({ default: m.FeaturedProjects })));
const VirtualEngineer = lazy(() => import('./components/features/VirtualEngineer').then(m => ({ default: m.VirtualEngineer })));


// Lazy load pages for route-based code splitting
const ContactPage = lazy(() => import('./pages/ContactPage').then(module => ({ default: module.ContactPage })));
const PillarPage = lazy(() => import('./pages/PillarPage').then(module => ({ default: module.PillarPage })));
const CityPage = lazy(() => import('./pages/CityPage').then(module => ({ default: module.CityPage })));
const PrivacyPage = lazy(() => import('./pages/PrivacyPage').then(module => ({ default: module.PrivacyPage })));
const TermsPage = lazy(() => import('./pages/TermsPage').then(module => ({ default: module.TermsPage })));
const AboutPage = lazy(() => import('./pages/AboutPage').then(module => ({ default: module.AboutPage })));
const SitemapPage = lazy(() => import('./pages/SitemapPage').then(module => ({ default: module.SitemapPage })));

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <Router>
        <LazyMotion features={domMax}>
          <ScrollToTop />
          <GlobalAutoLazy />
          <div className="min-h-screen bg-black font-sans text-gray-100 selection:bg-cyan-500/30 selection:text-cyan-200 flex flex-col">
            <Navbar />
            <main className="flex-grow">
              <Suspense fallback={<LoadingHUD />}>
                <Routes>
                  {/* LEVEL 1: HUB */}
                  <Route path="/" element={
                    <>
                      <HomePage />
                      <LazySection><SavingsCalculator /></LazySection>
                      <LazySection><FeaturedProjects /></LazySection>
                      <LazySection><VirtualEngineer /></LazySection>
                    </>
                  } />

                  {/* LEVEL 2: PILLAR PAGES */}
                  <Route path="/:pillarSlug" element={<PillarPage />} />

                  {/* LEVEL 3: LOCAL SPOKES (CITY PAGES) */}
                  <Route path="/:pillarSlug/:citySlug" element={<CityPage />} />

                  {/* AUX PAGES */}
                  <Route path="/contato" element={<ContactPage />} />
                  <Route path="/politica-de-privacidade" element={<PrivacyPage />} />
                  <Route path="/termos-de-uso" element={<TermsPage />} />
                  <Route path="/quem-somos" element={<AboutPage />} />
                  <Route path="/mapa-do-site" element={<SitemapPage />} />

                  {/* Fallback */}
                  <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
              </Suspense>
            </main>
            <Footer />
            <WhatsAppButton />
            <CookieConsent />
            <SEOSchemas />
          </div>
        </LazyMotion>
      </Router>
    </HelmetProvider>
  );
};

export default App;