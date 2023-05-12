import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './src/App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './src/pages/About';
import Contact from './src/pages/Contact';

const AppRoutes: React.FC = () => (
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
);

const container = document.getElementById('app-root')!;
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>
);
