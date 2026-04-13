import { Handle, Position } from '@xyflow/react';
import MathText from './../math/MathText';

interface RoadmapNodeProps {
    data: {
        label: string;
        id: string; // "1-1", etc.
        stage: string; // "stage-1", etc.
    };
}

export default function RoadmapNode({ data }: RoadmapNodeProps) {
    // Determine color based on stage
    let bgColor = 'bg-white';
    let borderColor = 'border-gray-200';
    let textColor = 'text-gray-900';
    let badgeColor = 'bg-gray-100 text-gray-700';

    switch (data.stage) {
        case 'stage-1':
            bgColor = 'bg-blue-50/50';
            borderColor = 'border-blue-200';
            textColor = 'text-gray-900';
            badgeColor = 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300';
            break;
        case 'stage-2':
            bgColor = 'bg-emerald-50/50';
            borderColor = 'border-emerald-200';
            textColor = 'text-gray-900';
            badgeColor = 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300';
            break;
        case 'stage-3':
            bgColor = 'bg-amber-50/50';
            borderColor = 'border-amber-200';
            textColor = 'text-gray-900';
            badgeColor = 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300';
            break;
        case 'stage-4':
            bgColor = 'bg-violet-50/50';
            borderColor = 'border-violet-200';
            textColor = 'text-gray-900';
            badgeColor = 'bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300';
            break;
        case 'stage-5':
            bgColor = 'bg-rose-50/50';
            borderColor = 'border-rose-200';
            textColor = 'text-gray-900';
            badgeColor = 'bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-300';
            break;
        case 'stage-applied':
            bgColor = 'bg-indigo-50/50';
            borderColor = 'border-indigo-200';
            textColor = 'text-gray-900';
            badgeColor = 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300';
            break;
        case 'root':
            bgColor = 'bg-slate-50/50';
            borderColor = 'border-slate-300'; // Darker gray border
            textColor = 'text-slate-800'; // Black/dark gray text
            badgeColor = 'bg-slate-200 text-slate-700'; // For consistency if ever used
            break;
    }

    return (
        <div className={`px-4 py-3 rounded-xl border-2 shadow-sm min-w-[150px] min-h-[64px] flex flex-col items-center justify-center transition-all hover:shadow-md hover:-translate-y-1 ${bgColor} ${borderColor}`}>
            {data.stage !== 'root' && (
                <>
                    <Handle type="target" position={Position.Top} id="t-top" className="opacity-0" />
                    <Handle type="target" position={Position.Left} id="t-left" className="opacity-0" />
                    <Handle type="target" position={Position.Right} id="t-right" className="opacity-0" />
                </>
            )}

            <span className={`text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full mb-1 ${badgeColor}`}>
                {data.stage === 'root' ? '大前提' : data.id}
            </span>
            <div className={`font-medium text-sm text-center ${textColor}`}>
                <MathText text={data.label} />
            </div>

            <Handle type="source" position={Position.Bottom} id="s-bottom" className="opacity-0" />
            <Handle type="source" position={Position.Left} id="s-left" className="opacity-0" />
            <Handle type="source" position={Position.Right} id="s-right" className="opacity-0" />
        </div>
    );
}
