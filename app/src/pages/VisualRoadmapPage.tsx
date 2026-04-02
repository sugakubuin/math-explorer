import { useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    ReactFlow,
    Controls,
    Background,
    useNodesState,
    useEdgesState,
    addEdge,
    Position,
    type Connection,
    type Edge,
    type Node,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { roadmapData } from '../data/roadmapData';
import RoadmapNode from '../components/roadmap/RoadmapNode';

// Custom stage label node for the background wrapping
const StageLabelNode = ({ data }: { data: { label: string } }) => {
    return (
        <div className="w-full text-left -mt-8 -ml-8">
            <h2 className="text-3xl font-extrabold text-slate-200 uppercase tracking-widest">{data.label}</h2>
        </div>
    );
};

const nodeTypes = {
    custom: RoadmapNode,
    stageLabel: StageLabelNode,
};

// We use a custom stage-based grid layout.
const nodeHeight = 70;
const xSpacing = 200; // Distance between horizontal nodes

// Define explicit base Y coordinates for each stage to enforce visual bands
const STAGE_Y_MAP: Record<string, number> = {
    'root': 0,
    'stage-1': 200,
    'stage-2': 500,
    'stage-3': 800,
    'stage-4': 1100,
    'stage-5': 1400,
    'stage-applied': 1700,
};

const getStageLayoutedElements = (nodes: Node[], edges: Edge[]) => {
    // 1. Group nodes by stage
    const nodesByStage: Record<string, Node[]> = {};
    nodes.forEach(node => {
        // Find stage from data, fallback to root if missing somewhat
        const stage = node.data?.stage as string || 'root';
        if (!nodesByStage[stage]) {
            nodesByStage[stage] = [];
        }
        nodesByStage[stage].push(node);
    });

    const newNodes: Node[] = [];

    // 2. Layout each stage
    Object.keys(nodesByStage).forEach(stage => {
        const stageNodes = nodesByStage[stage];
        const baseY = STAGE_Y_MAP[stage] || 0; // Fallback to 0 if unknown stage

        // Add a visual background label node for the stage (skip root)
        if (stage !== 'root') {
            const stageTitle = roadmapData.find(s => s.id === stage)?.title || stage;
            newNodes.push({
                id: `bg-${stage}`,
                type: 'stageLabel',
                data: { label: stageTitle },
                position: { x: -800, y: baseY - 40 }, // Place label far left
                draggable: false,
                selectable: false,
                zIndex: -1,
            });
        }

        // Sort nodes in the stage to keep consistent ordering (e.g. 1-1, 1-2...)
        stageNodes.sort((a, b) => a.id.localeCompare(b.id));

        // Let's enforce max 10 nodes per row within a stage
        const MAX_PER_ROW = 10;

        stageNodes.forEach((node, index) => {
            const rowIndex = Math.floor(index / MAX_PER_ROW); // 0 for first 10, 1 for next 10...
            const colIndex = index % MAX_PER_ROW; // 0 to 9

            // Calculate how many items are in THIS specific row to center them
            const itemsInThisRow = Math.min(MAX_PER_ROW, stageNodes.length - (rowIndex * MAX_PER_ROW));

            // Calculate X offset to center the row. 
            // If 3 items: offsets are -1, 0, 1. If 4 items: -1.5, -0.5, 0.5, 1.5.
            const centerOffset = (itemsInThisRow - 1) / 2;
            const x = (colIndex - centerOffset) * xSpacing;

            // Calculate Y. If it overflows 10, push it down down slightly within the stage band.
            const y = baseY + (rowIndex * (nodeHeight + 30));

            newNodes.push({
                ...node,
                targetPosition: Position.Top,
                sourcePosition: Position.Bottom,
                position: { x, y }
            });
        });
    });

    return { nodes: newNodes, edges };
};

export default function VisualRoadmapPage() {
    const navigate = useNavigate();
    const [nodes, setNodes, onNodesChange] = useNodesState<Node>([]);
    const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>([]);

    useEffect(() => {
        const initialNodes: Node[] = [];
        const initialEdges: Edge[] = [];

        // 1. Add Root Node
        initialNodes.push({
            id: 'root',
            type: 'custom',
            data: { label: '高校数学', id: 'root', stage: 'root' },
            position: { x: 0, y: 0 },
        });

        // 2. Parse roadmapData
        roadmapData.forEach((stage) => {
            // skip the summary stage
            if (stage.id === 'stage-7') return;

            stage.topics.forEach((topic) => {
                initialNodes.push({
                    id: topic.id,
                    type: 'custom',
                    data: { label: topic.title, id: topic.id, stage: stage.id },
                    position: { x: 0, y: 0 },
                });

                // 3. Add Edges based on prerequisites
                if (topic.prerequisites.length === 0 || topic.prerequisites.includes("高校数学") || topic.prerequisites.includes("なし") || topic.prerequisites.includes("基礎的な数学的思考力")) {
                    // Defaults or connects to root
                    initialEdges.push({
                        id: `e-root-${topic.id}`,
                        source: 'root',
                        target: topic.id,
                        type: 'bezier',
                        animated: true,
                        style: { stroke: '#94a3b8', strokeWidth: 1.5 },
                    });
                } else {
                    // Find specific prereqs that are other IDs
                    topic.prerequisites.forEach(req => {
                        // If it is an ID
                        if (req.match(/^[A-Z0-9]+-[0-9]+$/)) {
                            initialEdges.push({
                                id: `e-${req}-${topic.id}`,
                                source: req,
                                target: topic.id,
                                type: 'bezier',
                                animated: true,
                                style: { stroke: '#94a3b8', strokeWidth: 1.5 },
                            });
                        } else if (req === "高校数学" || req === "基礎的な数学的思考力" || req === "なし") {
                            // Do nothing, handled
                        } else {
                            // It might be a comma separated list inside the array item. roadmapData uses "1-1" or "2-3、2-4" ? No, they are separated.
                            // Wait, in roadmapData.ts they are split by "、". Usually.
                            // Wait, check if they contain "、" - no, update script already split them.
                        }
                    })
                }
            });
        });

        // Apply explicit stage layout
        const { nodes: layoutedNodes, edges: layoutedEdges } = getStageLayoutedElements(
            initialNodes,
            initialEdges
        );

        // Dynamically assign handles based on stage and X position
        const smartEdges = layoutedEdges.map(edge => {
            const sourceNode = layoutedNodes.find(n => n.id === edge.source);
            const targetNode = layoutedNodes.find(n => n.id === edge.target);

            if (sourceNode && targetNode) {
                const isSameStage = sourceNode.data.stage === targetNode.data.stage;

                if (isSameStage) {
                    // Same stage -> route out/in through sides
                    if (targetNode.position.x > sourceNode.position.x) {
                        edge.sourceHandle = 's-right';
                        edge.targetHandle = 't-left';
                    } else {
                        edge.sourceHandle = 's-left';
                        edge.targetHandle = 't-right';
                    }
                } else {
                    // Different stages -> route out from bottom, in to top
                    edge.sourceHandle = 's-bottom';
                    edge.targetHandle = 't-top';
                }
            }
            return edge;
        });

        setNodes(layoutedNodes);
        setEdges(smartEdges);
    }, [setNodes, setEdges]);

    const onConnect = useCallback(
        (params: Connection | Edge) => setEdges((eds) => addEdge(params, eds)),
        [setEdges],
    );

    const onNodeClick = (_: React.MouseEvent, node: Node) => {
        if (node.id === 'root') {
            // root doesn't have a page
            return;
        }
        navigate(`/roadmap/${node.id}`);
    };

    return (
        <div className="w-full h-[calc(100vh-4rem)] relative bg-slate-50">
            <div className="absolute top-4 left-6 z-10 flex items-center space-x-2">
                <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                    数学ビジュアルマップ
                </h1>
                <span className="text-sm px-2 py-1 bg-white/80 backdrop-blur rounded-full shadow-sm text-gray-500 font-medium">
                    Top-down
                </span>
            </div>

            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                onNodeClick={onNodeClick}
                nodeTypes={nodeTypes}
                fitView
                fitViewOptions={{ padding: 0.2 }}
                minZoom={0.1}
            >
                <Controls className="bg-white shadow-xl border-gray-100 rounded-lg overflow-hidden" />
                <Background color="#cbd5e1" gap={16} />
            </ReactFlow>
        </div>
    );
}
