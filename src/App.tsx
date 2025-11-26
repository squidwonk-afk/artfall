import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import LorePage from './pages/LorePage';
import MusicPage from './pages/MusicPage';
import GalleryPage from './pages/GalleryPage';
import MinigamePage from './pages/MinigamePage';
import PoetryPage from './pages/PoetryPage';
import GlitchpopPage from './pages/GlitchpopPage';
import LofiPage from './pages/LofiPage';
import './i18n';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#0C0C0C] text-white relative overflow-hidden">
        {/* VHS Noise Overlay */}
        <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.15] mix-blend-overlay">
          <div className="vhs-noise w-full h-full"></div>
        </div>
        
        <Navigation />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/lore" element={<LorePage />} />
          <Route path="/music" element={<MusicPage />} />
          <Route path="/music/glitchpop" element={<GlitchpopPage />} />
          <Route path="/music/lofi" element={<LofiPage />} />
          <Route path="/visuals" element={<GalleryPage />} />
          <Route path="/minigame" element={<MinigamePage />} />
          <Route path="/poetry" element={<PoetryPage />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}