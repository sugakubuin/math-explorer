import type { RouteRecord } from 'vite-react-ssg';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Roadmap from './pages/Roadmap';
import TopicPage from './pages/TopicPage';
import ChapterPage from './pages/ChapterPage';
import SectionPage from './pages/SectionPage';
import ExercisePage from './pages/ExercisePage';
import PrerequisiteFlowPage from './pages/PrerequisiteFlowPage';
import AboutPage from './pages/AboutPage';
import VisualRoadmapPage from './pages/VisualRoadmapPage';
import { roadmapData } from './data/roadmapData';
import { hasTopicContent } from './data/contentAvailability';

/**
 * roadmapData と contentAvailability から、コンテンツが存在する
 * 全ルートの静的パスを自動生成するヘルパー関数群。
 */

function getTopicPaths(): string[] {
    return roadmapData
        .flatMap(stage => stage.topics)
        .filter(topic => hasTopicContent(topic.id))
        .map(topic => `roadmap/${topic.id}`);
}

function getFlowPaths(): string[] {
    return roadmapData
        .flatMap(stage => stage.topics)
        .filter(topic => hasTopicContent(topic.id))
        .map(topic => `roadmap/${topic.id}/flow`);
}

function getChapterPaths(): string[] {
    return roadmapData
        .flatMap(stage => stage.topics)
        .filter(topic => hasTopicContent(topic.id))
        .flatMap(topic =>
            topic.chapters.map(chapter => `roadmap/${topic.id}/${chapter.id}`)
        );
}

function getExercisePaths(): string[] {
    return roadmapData
        .flatMap(stage => stage.topics)
        .filter(topic => hasTopicContent(topic.id))
        .flatMap(topic =>
            topic.chapters.map(chapter => `roadmap/${topic.id}/${chapter.id}/exercises`)
        );
}

function getSectionPaths(): string[] {
    return roadmapData
        .flatMap(stage => stage.topics)
        .filter(topic => hasTopicContent(topic.id))
        .flatMap(topic =>
            topic.chapters.flatMap(chapter =>
                chapter.sections.map(section =>
                    `roadmap/${topic.id}/${chapter.id}/${section.id}`
                )
            )
        );
}

export const routes: RouteRecord[] = [
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: 'roadmap',
                element: <Roadmap />,
            },
            {
                path: 'roadmap/:topicId',
                element: <TopicPage />,
                getStaticPaths: getTopicPaths,
            },
            {
                path: 'roadmap/:topicId/flow',
                element: <PrerequisiteFlowPage />,
                getStaticPaths: getFlowPaths,
            },
            {
                path: 'roadmap/:topicId/:chapterId',
                element: <ChapterPage />,
                getStaticPaths: getChapterPaths,
            },
            {
                path: 'roadmap/:topicId/:chapterId/exercises',
                element: <ExercisePage />,
                getStaticPaths: getExercisePaths,
            },
            {
                path: 'roadmap/:topicId/:chapterId/:sectionId',
                element: <SectionPage />,
                getStaticPaths: getSectionPaths,
            },
            {
                path: 'visual-roadmap',
                element: <VisualRoadmapPage />,
            },
            {
                path: 'about',
                element: <AboutPage />,
            },
        ],
    },
];
