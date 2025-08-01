import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Layout from './components/Layout';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import CertificationsPage from './pages/CertificationsPage';
import FigmaPage from './pages/FigmaPage';
import GraphicDesignPage from './pages/GraphicDesignPage';
import PostersPage from './pages/PostersPage';
import VideosPage from './pages/VideosPage';
import ResumePage from './pages/ResumePage';

function App() {
  const location = useLocation();

  return (
    <Layout>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/certifications" element={<CertificationsPage />} />
          <Route path="/figma" element={<FigmaPage />} />
          <Route path="/graphic-design" element={<GraphicDesignPage />} />
          <Route path="/graphic-design/posters" element={<PostersPage />} />
          <Route path="/graphic-design/videos" element={<VideosPage />} />
          <Route path="/resume" element={<ResumePage />} />
        </Routes>
      </AnimatePresence>
    </Layout>
  );
}

export default App;