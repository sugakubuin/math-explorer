import { useEffect, useCallback } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ChevronLeft, ArrowRight } from 'lucide-react';
import {
    ReactFlow,
    Controls,
    Background,
    useNodesState,
    useEdgesState,
    Position,
    type Node,
    type Edge,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import dagre from 'dagre';
import { roadmapData, getTopicById } from '../data/roadmapData';
import RoadmapNode from '../components/roadmap/RoadmapNode';
import MathText from '../components/math/MathText';

const nodeTypes = {
    custom: RoadmapNode,
};

const nodeWidth = 200;
const nodeHeight = 80;

const getLayoutedElements = (nodes: Node[], edges: Edge[], direction = 'LR') => {
    const dagreGraph = new dagre.graphlib.Graph();
    dagreGraph.setDefaultEdgeLabel(() => ({}));

    const isHorizontal = direction === 'LR';
    dagreGraph.setGraph({
        rankdir: direction,
        ranksep: 70, // Distance between layers
        nodesep: 40,  // Distance between nodes in the same layer
        edgesep: 10,  // Distance between edges
    });

    nodes.forEach((node) => {
        dagreGraph.setNode(node.id, { width: nodeWidth, height: nodeHeight });
    });

    edges.forEach((edge) => {
        dagreGraph.setEdge(edge.source, edge.target);
    });

    dagre.layout(dagreGraph);

    nodes.forEach((node) => {
        const nodeWithPosition = dagreGraph.node(node.id);
        node.targetPosition = isHorizontal ? Position.Left : Position.Top;
        node.sourcePosition = isHorizontal ? Position.Right : Position.Bottom;

        // We are shifting the dagre node position (anchor=center center) to the top left
        // so it matches the React Flow node anchor point (top left).
        node.position = {
            x: nodeWithPosition.x - nodeWidth / 2,
            y: nodeWithPosition.y - nodeHeight / 2,
        };

        return node;
    });

    return { nodes, edges };
};

export default function PrerequisiteFlowPage() {
    const { topicId } = useParams();
    const navigate = useNavigate();
    const [nodes, setNodes, onNodesChange] = useNodesState<Node>([]);
    const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>([]);

    const targetTopic = getTopicById(topicId || '');

    useEffect(() => {
        if (!targetTopic) return;

        // Basic traversal to collect all ancestor topics
        const prerequisiteIds = new Set<string>();
        const edgesList: { source: string; target: string }[] = [];

        const traverse = (currentId: string) => {
            prerequisiteIds.add(currentId);
            const topic = getTopicById(currentId);
            if (!topic) return;

            if (topic.prerequisites) {
                topic.prerequisites.forEach(preReq => {
                    if (preReq === "高校数学" || preReq === "なし" || preReq === "基礎的な数学的思考力") {
                        prerequisiteIds.add(preReq);
                        edgesList.push({ source: preReq, target: currentId });
                    } else if (preReq.match(/^[A-Z0-9]+-[0-9]+$/)) {
                        edgesList.push({ source: preReq, target: currentId });
                        if (!prerequisiteIds.has(preReq)) {
                            traverse(preReq);
                        }
                    }
                });
            }
        };

        traverse(targetTopic.id);

        const initialNodes: Node[] = [];
        const initialEdges: Edge[] = [];

        // Build nodes
        prerequisiteIds.forEach(id => {
            if (id === "高校数学" || id === "なし" || id === "基礎的な数学的思考力") {
                initialNodes.push({
                    id,
                    type: 'custom',
                    data: { label: id, id: 'root', stage: 'root' },
                    position: { x: 0, y: 0 },
                });
            } else {
                const topic = getTopicById(id);
                if (topic) {
                    const stage = roadmapData.find(s => s.topics.some(t => t.id === topic.id));
                    initialNodes.push({
                        id,
                        type: 'custom',
                        data: { label: topic.title, id: topic.id, stage: stage ? stage.id : 'stage-1' },
                        position: { x: 0, y: 0 },
                    });
                }
            }
        });

        // Build edges
        edgesList.forEach((e) => {
            initialEdges.push({
                id: `e-${e.source}-${e.target}`,
                source: e.source,
                target: e.target,
                sourceHandle: 's-right',
                targetHandle: 't-left',
                type: 'bezier',
                animated: true,
                style: { stroke: '#94a3b8', strokeWidth: 1.5 },
                interactionWidth: 0, // Make edge un-interactable
            });
        });

        // Calculate layout
        const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(
            initialNodes,
            initialEdges,
            'LR'
        );

        setNodes(layoutedNodes);
        setEdges(layoutedEdges);

    }, [targetTopic, setNodes, setEdges]);

    const onNodeClick = useCallback(
        (_: React.MouseEvent, node: Node) => {
            if (node.id === "高校数学" || node.id === "なし" || node.id === "基礎的な数学的思考力") {
                return;
            }
            navigate(`/roadmap/${node.id}`);
        },
        [navigate]
    );

    if (!targetTopic) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-200">Topic not found</h1>
                    <Link to="/roadmap" className="text-primary hover:underline mt-4 inline-block">
                        Return to Roadmap
                    </Link>
                </div>
            </div>
        );
    }



    return (
        <div className="flex flex-col h-[calc(100dvh-4rem)] md:h-[calc(100dvh-5rem)] bg-slate-50 dark:bg-slate-950">
            {/* Header / Breadcrumb */}
            <div className="bg-white border-b border-blue-100 shadow-sm z-30 dark:bg-slate-900 dark:border-slate-800 shrink-0 relative">
                <div className="container mx-auto px-6 md:px-8 py-4">
                    <div className="flex items-center text-sm text-slate-500 dark:text-slate-400 mb-2">
                        <Link to={`/roadmap/${targetTopic.id}`} className="hover:text-primary transition-colors flex items-center shrink-0">
                            <ChevronLeft className="h-4 w-4 mr-1" />
                            {targetTopic.id} <MathText text={targetTopic.title} />
                        </Link>
                        <ArrowRight className="h-4 w-4 mx-2 shrink-0" />
                        <span className="font-semibold text-slate-800 dark:text-slate-200 truncate">前提フロー</span>
                    </div>
                </div>
            </div>

            <div className="flex-1 relative w-full h-full">
                <ReactFlow
                    nodes={nodes}
                    edges={edges}
                    onNodesChange={onNodesChange}
                    onEdgesChange={onEdgesChange}
                    onNodeClick={onNodeClick}
                    nodeTypes={nodeTypes}
                    fitView
                    fitViewOptions={{ padding: 0.2 }}
                    minZoom={0.1}
                    nodesDraggable={false}
                    nodesConnectable={false}
                    elementsSelectable={false}
                >
                    <Controls className="bg-white shadow-xl border-gray-100 rounded-lg overflow-hidden mb-8 md:mb-4" />
                    <Background color="#cbd5e1" gap={16} />
                </ReactFlow>
            </div>
        </div>
    );
}
