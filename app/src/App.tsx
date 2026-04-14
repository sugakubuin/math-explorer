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
import DefinitionListPage from './pages/DefinitionListPage.tsx';
import PropositionListPage from './pages/PropositionListPage.tsx';
import ContentQuizPage from './pages/ContentQuizPage.tsx';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage.tsx';
import ContactPage from './pages/ContactPage.tsx';
import NotFoundPage from './pages/NotFoundPage.tsx';
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
          <Route path="roadmap/:topicId/definitions" element={<DefinitionListPage />} />
          <Route path="roadmap/:topicId/definitions/quiz" element={<ContentQuizPage mode="definitions" />} />
          <Route path="roadmap/:topicId/propositions" element={<PropositionListPage />} />
          <Route path="roadmap/:topicId/propositions/quiz" element={<ContentQuizPage mode="propositions" />} />
          <Route path="roadmap/:topicId/:chapterId" element={<ChapterPage />} />
          <Route path="roadmap/:topicId/:chapterId/exercises" element={<ExercisePage />} />
          <Route path="roadmap/:topicId/:chapterId/:sectionId" element={<SectionPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="privacy" element={<PrivacyPolicyPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

