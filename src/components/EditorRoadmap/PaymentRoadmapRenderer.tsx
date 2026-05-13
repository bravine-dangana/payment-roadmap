import { useState } from 'react';

type NodeStatus = 'pending' | 'done' | 'learning' | 'skipped';
type RoadmapNode = {
  id: string; label: string; color: string; textColor?: string;
  bold?: boolean; x: number; y: number; width: number; height: number;
};
type RoadmapArrow = { x1: number; y1: number; x2: number; y2: number; dotted?: boolean; };

const nodes: RoadmapNode[] = [
  { id: 'customer-initiates-payment', label: 'Customer Initiates Payment', color: '#FFD700', bold: true, x: 284, y: 20, width: 400, height: 55 },
  { id: 'mno-receives-request', label: 'MNO (Mobile Network Operator)', color: '#FFA500', bold: true, x: 234, y: 120, width: 500, height: 55 },
  { id: 'stk-push', label: 'STK Push Sent to Customer', color: '#FFD700', x: 20, y: 220, width: 300, height: 50 },
  { id: 'customer-enters-pin', label: 'Customer Enters M-PESA PIN', color: '#FFD700', x: 648, y: 220, width: 300, height: 50 },
  { id: 'safaricom-processes-payment', label: 'Safaricom (M-PESA) Processes Payment', color: '#008000', textColor: '#fff', bold: true, x: 234, y: 310, width: 500, height: 55 },
  { id: 'cellulant-payment-gateway', label: 'Cellulant Payment Gateway', color: '#1A5276', textColor: '#fff', bold: true, x: 234, y: 410, width: 500, height: 55 },
  { id: 'transaction-validation', label: 'Transaction Validation', color: '#FFD700', x: 20, y: 510, width: 300, height: 50 },
  { id: 'fraud-risk-check', label: 'Fraud and Risk Check', color: '#FFA500', x: 648, y: 510, width: 300, height: 50 },
  { id: 'mno-sends-confirmation', label: 'MNO Sends Confirmation', color: '#FFA500', bold: true, x: 234, y: 605, width: 500, height: 55 },
  { id: 'payment-status-determined', label: 'Payment Status Determined', color: '#1A5276', textColor: '#fff', bold: true, x: 234, y: 705, width: 500, height: 55 },
  { id: 'success-response', label: 'Success Response', color: '#008000', textColor: '#fff', x: 20, y: 805, width: 300, height: 50 },
  { id: 'failure-timeout', label: 'Failure or Timeout', color: '#C0392B', textColor: '#fff', x: 648, y: 805, width: 300, height: 50 },
  { id: 'webhook-callback', label: 'Webhook / Callback Fired', color: '#1A5276', textColor: '#fff', bold: true, x: 234, y: 900, width: 500, height: 55 },
  { id: 'merchant-notified', label: 'Merchant Notified of Payment Status', color: '#FFD700', bold: true, x: 184, y: 1000, width: 600, height: 55 },
  { id: 'order-fulfilled', label: 'Order Fulfilled', color: '#008000', textColor: '#fff', bold: true, x: 20, y: 1100, width: 350, height: 50 },
  { id: 'retry-refund-flow', label: 'Retry / Refund Flow', color: '#C0392B', textColor: '#fff', bold: true, x: 598, y: 1100, width: 350, height: 50 },
];

const arrows: RoadmapArrow[] = [
  { x1: 484, y1: 75, x2: 484, y2: 120 },
  { x1: 300, y1: 147, x2: 170, y2: 220 },
  { x1: 668, y1: 147, x2: 798, y2: 220 },
  { x1: 170, y1: 270, x2: 350, y2: 310 },
  { x1: 798, y1: 270, x2: 620, y2: 310 },
  { x1: 484, y1: 365, x2: 484, y2: 410 },
  { x1: 300, y1: 437, x2: 170, y2: 510 },
  { x1: 668, y1: 437, x2: 798, y2: 510 },
  { x1: 170, y1: 560, x2: 350, y2: 605 },
  { x1: 798, y1: 560, x2: 620, y2: 605 },
  { x1: 484, y1: 660, x2: 484, y2: 705 },
  { x1: 350, y1: 760, x2: 170, y2: 805 },
  { x1: 620, y1: 760, x2: 798, y2: 805 },
  { x1: 170, y1: 855, x2: 350, y2: 900 },
  { x1: 798, y1: 855, x2: 620, y2: 900 },
  { x1: 484, y1: 955, x2: 484, y2: 1000 },
  { x1: 350, y1: 1055, x2: 195, y2: 1100 },
  { x1: 620, y1: 1055, x2: 773, y2: 1100 },
];

const statusColors: Record<NodeStatus, string | null> = {
  pending: null, done: '#cbcbcb', learning: '#dad1fd', skipped: '#496b69',
};

export function PaymentRoadmapRenderer() {
  const [statuses, setStatuses] = useState<Record<string, NodeStatus>>({});

  const handleNodeClick = (nodeId: string) => {
    window.dispatchEvent(new CustomEvent('roadmap.topic.click', {
      detail: {
        resourceType: 'roadmap',
        resourceId: 'checkout',
        topicId: nodeId,
        isCustomResource: false,
      }
    }));
  };

  const handleRightClick = (e: React.MouseEvent, nodeId: string) => {
    e.preventDefault();
    setStatuses(prev => {
      const order: NodeStatus[] = ['pending', 'done', 'learning', 'skipped'];
      const current = prev[nodeId] || 'pending';
      const next = order[(order.indexOf(current) + 1) % order.length];
      return { ...prev, [nodeId]: next };
    });
  };

  const doneCount = Object.values(statuses).filter(s => s === 'done').length;
  const pct = Math.round((doneCount / nodes.length) * 100);

  return (
    <div style={{ fontFamily: 'sans-serif' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '8px 16px', borderBottom: '1px solid #e5e7eb', background: '#fff', fontSize: 13 }}>
        <span style={{ background: '#fef08a', color: '#713f12', padding: '2px 8px', borderRadius: 4, fontSize: 11, fontWeight: 600, textTransform: 'uppercase' }}>{pct}% Done</span>
        <span style={{ color: '#6b7280' }}>{doneCount} of {nodes.length} Done</span>
        <span style={{ marginLeft: 'auto', color: '#9ca3af', fontSize: 11 }}>Right-click any topic to track progress</span>
      </div>
      <div style={{ overflowX: 'auto' }}>
        <svg width="968" height="1180" style={{ display: 'block' }}>
          <defs>
            <marker id="arrowhead" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
              <polygon points="0 0, 8 3, 0 6" fill="#407BFF" />
            </marker>
          </defs>
          {arrows.map((a, i) => (
            <line key={i} x1={a.x1} y1={a.y1} x2={a.x2} y2={a.y2}
              stroke="#407BFF" strokeWidth="2"
              strokeDasharray={a.dotted ? '5,4' : undefined}
              markerEnd="url(#arrowhead)" />
          ))}
          {nodes.map(node => {
            const status = statuses[node.id] || 'pending';
            const bg = statusColors[status] ?? node.color;
            const textDeco = status === 'done' || status === 'skipped' ? 'line-through' : status === 'learning' ? 'underline' : 'none';
            return (
              <g key={node.id} style={{ cursor: 'pointer' }}
                onClick={() => handleNodeClick(node.id)}
                onContextMenu={e => handleRightClick(e, node.id)}>
                <rect x={node.x} y={node.y} width={node.width} height={node.height}
                  rx={4} fill={bg} stroke="#33333388" strokeWidth={1.5} />
                <text x={node.x + node.width / 2} y={node.y + node.height / 2 + 5}
                  textAnchor="middle" fill={node.textColor || '#111'}
                  fontSize={13} fontWeight={node.bold ? 700 : 400}
                  style={{ textDecoration: textDeco, userSelect: 'none' }}>
                  {node.label}
                </text>
                {status === 'done' && (
                  <circle cx={node.x + node.width - 10} cy={node.y + 10} r={8} fill="#7c3aed" />
                )}
                {status === 'learning' && (
                  <circle cx={node.x + node.width - 10} cy={node.y + 10} r={8} fill="#2563eb" />
                )}
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
}
