import React from 'react';
import { HashRouter, Routes, Route, ScrollRestoration } from 'react-router-dom';
import Layout from './components/Layout';
import AiChat from './components/AiChat';
import Home from './pages/Home';
import Services from './pages/Services';
import Solutions from './pages/Solutions';
import Zambia from './pages/Zambia';
import Contact from './pages/Contact';

function App() {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/innovations" element={<Solutions />} />
          <Route path="/zambia" element={<Zambia />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
      <AiChat />
    </HashRouter>
  );
}

export default App;