import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout.tsx';
import Home from './pages/Home.tsx';
import Roadmap from './pages/Roadmap.tsx';
import TopicPage from './pages/TopicPage.tsx';
import ChapterPage from './pages/ChapterPage.tsx';
import SectionPage from './pages/SectionPage.tsx';
import ExercisePage from './pages/ExercisePage.tsx';
import PrerequisiteFlowPage from './pages/PrerequisiteFlowPage.tsx';
import AboutPage from './pages/AboutPage.tsx';
import VisualRoadmapPage from './pages/VisualRoadmapPage.tsx';
import ScrollManager from './components/layout/ScrollManager.tsx';

function App() {
  return (
    <Router>
      <ScrollManager />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="roadmap" element={<Roadmap />} />
          <Route path="roadmap/:topicId" element={<TopicPage />} />
          <Route path="roadmap/:topicId/flow" element={<PrerequisiteFlowPage />} />
          <Route path="roadmap/:topicId/:chapterId" element={<ChapterPage />} />
          <Route path="roadmap/:topicId/:chapterId/exercises" element={<ExercisePage />} />
          <Route path="roadmap/:topicId/:chapterId/:sectionId" element={<SectionPage />} />
          <Route path="visual-roadmap" element={<VisualRoadmapPage />} />
          <Route path="about" element={<AboutPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
