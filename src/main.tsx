import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/index.css';

// Import layout and pages
import Layout from './components/Layout';
import Home from './pages/Home';
import VisionGame from './pages/VisionGame';
import HearingGame from './pages/HearingGame';
import About from './pages/About';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="hearing-game" element={<HearingGame />} />
          <Route path="vision-game" element={<VisionGame />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </Router>
  </StrictMode>
);