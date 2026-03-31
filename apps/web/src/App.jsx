
import React from 'react';
import { Route, Routes, BrowserRouter as Router, useLocation } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import HomePage from './pages/HomePage.jsx';
import { initCtaTracking, initMarketingTracking, trackPageView } from './lib/marketingTracking.js';

function MarketingTracking() {
  const location = useLocation();

  React.useEffect(() => {
    initMarketingTracking();
    initCtaTracking();
  }, []);

  React.useEffect(() => {
    trackPageView();
  }, [location.pathname, location.search, location.hash]);

  return null;
}

function App() {
  return (
    <Router>
      <MarketingTracking />
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
