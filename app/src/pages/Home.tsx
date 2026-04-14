import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Logo from '../components/layout/Logo';
import { roadmapData } from '../data/roadmapData';
import SEO from '../components/seo/SEO';
import MathText from '../components/math/MathText';

const getTopicBadgeColor = (stageId: string) => {
    switch (stageId) {
        case 'stage-1': return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300';
        case 'stage-2': return 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300';
        case 'stage-3': return 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300';
        case 'stage-4': return 'bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300';
        case 'stage-5': return 'bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-300';
        case 'stage-6':
        case 'stage-applied': return 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300';
        default: return 'bg-slate-100 text-slate-700 dark:bg-slate-900/30 dark:text-slate-300';
    }
};

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            <SEO
                title="Math Explorer | 大学数学の学習ロードマップ"
                url="/"
                jsonLd={{
                    '@type': 'WebSite',
                    name: 'Math Explorer',
                    alternateName: ['MathExplorer', 'Math Explorers', 'マスエクスプローラー', 'ますえくすぷろーらー', '数学エクスプローラー'],
                    url: 'https://mathematics-explorer.netlify.app/',
                    description: '大学で学ぶ数学の全体像を可視化。基礎から応用まで、迷わずに学習を進めるためのガイドマップです。',
                }}
            />
            <section className="relative overflow-hidden space-y-6 pb-20 pt-20 md:pb-32 md:pt-32">
                {/* Background blobs - richer colors */}
                <div className="absolute top-[-10%] left-[-10%] -z-10 h-[800px] w-[800px] rounded-full bg-blue-100/80 mix-blend-multiply blur-[100px] animate-blob dark:bg-blue-900/20" />
                <div className="absolute top-[10%] right-[-10%] -z-10 h-[800px] w-[800px] rounded-full bg-indigo-100/80 mix-blend-multiply blur-[100px] animate-blob animation-delay-2000 dark:bg-indigo-900/20" />
                <div className="absolute bottom-[-10%] left-[20%] -z-10 h-[600px] w-[600px] rounded-full bg-sky-100/80 mix-blend-multiply blur-[100px] animate-blob animation-delay-4000 dark:bg-sky-900/20" />

                <div className="container flex max-w-[64rem] flex-col items-center gap-6 text-center pl-8 pr-8 mx-auto z-10">
                    <div>
                        <div className="mb-6 flex justify-center">
                            <Logo className="h-32 w-32 text-9xl text-primary drop-shadow-xl" />
                        </div>
                        <h1 className="font-sans text-6xl font-extrabold tracking-tight sm:text-7xl md:text-8xl text-primary dark:text-blue-100 mb-4">
                            Math Explorer
                        </h1>
                        <p className="text-xl md:text-2xl font-bold text-slate-600 dark:text-blue-200/80">
                            大学数学の手引き
                        </p>
                    </div>

                    <p className="max-w-[42rem] mt-4 leading-relaxed text-slate-600 sm:text-lg sm:leading-8 dark:text-slate-400">
                        大学で学ぶ数学の全体像を可視化。<br />
                        迷わずに学習を進めるためのガイドです。
                    </p>

                    <div className="flex flex-wrap justify-center gap-4 pt-8">
                        <Link
                            to="/roadmap"
                            className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-10 text-base font-bold text-primary-foreground shadow-lg shadow-blue-900/10 transition-all hover:bg-primary/90 hover:scale-105 hover:shadow-blue-900/20 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        >
                            ロードマップへ <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </div>
                </div>
            </section>

            <section className="container py-24 px-6 md:px-8 mx-auto relative z-10 w-full max-w-full overflow-hidden">
                <div className="mx-auto max-w-[90rem]">
                    <div className="flex items-center justify-center mb-12">
                        <h2 className="text-3xl font-bold text-center text-primary dark:text-blue-100 flex flex-col items-center gap-2">
                            <span>収録分野</span>
                            <span className="h-1 w-16 bg-blue-300 rounded-full"></span>
                        </h2>
                    </div>

                    <div className="w-full pb-12 pt-4 mb-4 overflow-x-auto snap-x snap-mandatory hide-scrollbar">
                        <div className="flex min-w-max lg:min-w-0 lg:w-full items-start justify-start lg:justify-between gap-3 lg:gap-2 px-1 pb-4">
                            {roadmapData.map((stage, index) => {
                                const titleParts = stage.title.split('：');
                                const shortTitle = titleParts[0].toLowerCase().includes('stage')
                                    ? titleParts[0]
                                    : titleParts[0];

                                return (
                                    <div key={stage.id} className="flex w-[160px] lg:w-auto lg:flex-1 items-start shrink-0 snap-start">
                                        <div className="flex-1 flex flex-col min-w-0">
                                            {/* Stage Header */}
                                            <div className="mb-4 pb-2 border-b-2 border-primary/20 text-center dark:border-blue-900/50">
                                                <h3 className="font-bold text-sm lg:text-base text-primary dark:text-blue-200 truncate">
                                                    {shortTitle}
                                                </h3>
                                            </div>

                                            {/* Topics List */}
                                            <div className="flex flex-col gap-2">
                                                {stage.topics.map((topic) => (
                                                    <div key={topic.id}>
                                                        <Link
                                                            to={`/roadmap/${topic.id}`}
                                                            className="group flex flex-col p-2 rounded-lg border border-white/40 bg-white/60 backdrop-blur-sm shadow-sm hover:shadow-md hover:border-blue-300 hover:bg-white dark:bg-slate-900/60 dark:border-slate-800 dark:hover:bg-slate-800 dark:hover:border-slate-600 transition-all text-left"
                                                        >
                                                            <div className="flex items-start gap-1.5">
                                                                <span className={`mt-0.5 text-[10px] font-mono font-bold px-1 py-0.5 rounded flex-shrink-0 ${getTopicBadgeColor(stage.id)}`}>
                                                                    {topic.id}
                                                                </span>
                                                                <span className="text-xs font-bold text-slate-700 dark:text-slate-200 group-hover:text-primary transition-colors leading-tight">
                                                                    <MathText text={topic.title} />
                                                                </span>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Arrow or Spacer */}
                                        {index < roadmapData.length - 1 && (
                                            <div className="flex items-start justify-center pt-6 flex-shrink-0 w-6 lg:w-8">
                                                {index === roadmapData.length - 2 ? (
                                                    <div className="w-full" />
                                                ) : (
                                                    <ArrowRight className="text-slate-300 dark:text-slate-600 w-4 h-4 mt-1" />
                                                )}
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
