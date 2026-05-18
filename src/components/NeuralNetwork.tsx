"use client";

import { useState, useCallback, useEffect } from "react";
import { motion } from "framer-motion";

// Pre-computed node positions (no need for runtime measurement)
const NODES = [
  // Layer 0 — Input (4 nodes)
  { id: 0, x: 8, y: 20, layer: 0, label: "Input", color: "#6366f1", r: 6 },
  { id: 1, x: 8, y: 40, layer: 0, label: "Data", color: "#6366f1", r: 6 },
  { id: 2, x: 8, y: 60, layer: 0, label: "Query", color: "#6366f1", r: 6 },
  { id: 3, x: 8, y: 80, layer: 0, label: "Signal", color: "#6366f1", r: 6 },
  // Layer 1 — Feature (5 nodes)
  { id: 4, x: 27, y: 12, layer: 1, label: "Conv", color: "#8b5cf6", r: 5 },
  { id: 5, x: 27, y: 30, layer: 1, label: "Dense", color: "#8b5cf6", r: 5 },
  { id: 6, x: 27, y: 48, layer: 1, label: "ReLU", color: "#8b5cf6", r: 5 },
  { id: 7, x: 27, y: 66, layer: 1, label: "Pool", color: "#8b5cf6", r: 5 },
  { id: 8, x: 27, y: 84, layer: 1, label: "Norm", color: "#8b5cf6", r: 5 },
  // Layer 2 — Hidden (7 nodes)
  { id: 9, x: 46, y: 8, layer: 2, label: "H1", color: "#00f0b5", r: 7 },
  { id: 10, x: 46, y: 22, layer: 2, label: "H2", color: "#00f0b5", r: 7 },
  { id: 11, x: 46, y: 36, layer: 2, label: "H3", color: "#00f0b5", r: 7 },
  { id: 12, x: 46, y: 50, layer: 2, label: "H4", color: "#00f0b5", r: 7 },
  { id: 13, x: 46, y: 64, layer: 2, label: "H5", color: "#00f0b5", r: 7 },
  { id: 14, x: 46, y: 78, layer: 2, label: "H6", color: "#00f0b5", r: 7 },
  { id: 15, x: 46, y: 92, layer: 2, label: "H7", color: "#00f0b5", r: 7 },
  // Layer 3 — Attention (5 nodes)
  { id: 16, x: 65, y: 15, layer: 3, label: "Attn", color: "#14b8a6", r: 5.5 },
  { id: 17, x: 65, y: 33, layer: 3, label: "LSTM", color: "#14b8a6", r: 5.5 },
  { id: 18, x: 65, y: 50, layer: 3, label: "GRU", color: "#14b8a6", r: 5.5 },
  { id: 19, x: 65, y: 67, layer: 3, label: "Enc", color: "#14b8a6", r: 5.5 },
  { id: 20, x: 65, y: 85, layer: 3, label: "Dec", color: "#14b8a6", r: 5.5 },
  // Layer 4 — Output (3 nodes)
  { id: 21, x: 84, y: 25, layer: 4, label: "Output", color: "#f59e0b", r: 6.5 },
  { id: 22, x: 84, y: 50, layer: 4, label: "Class", color: "#f59e0b", r: 6.5 },
  { id: 23, x: 84, y: 75, layer: 4, label: "Score", color: "#f59e0b", r: 6.5 },
];

// Pre-computed connections between adjacent layers
const CONNECTIONS: { from: number; to: number }[] = [];
for (let i = 0; i < NODES.length; i++) {
  for (let j = i + 1; j < NODES.length; j++) {
    if (NODES[j].layer === NODES[i].layer + 1) {
      // ~55% connectivity for visual clarity
      if ((i * 7 + j * 13) % 10 < 6) {
        CONNECTIONS.push({ from: i, to: j });
      }
    }
  }
}

const LAYER_LABELS = ["Input", "Feature Extraction", "Hidden Layers", "Attention", "Output"];

export default function NeuralNetworkVisual() {
  const [hoveredNode, setHoveredNode] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [pulsingNodes, setPulsingNodes] = useState<Set<number>>(new Set());

  // Random pulse effect
  useEffect(() => {
    const interval = setInterval(() => {
      const randomId = Math.floor(Math.random() * NODES.length);
      setPulsingNodes((prev) => {
        const next = new Set(prev);
        next.add(randomId);
        return next;
      });
      setTimeout(() => {
        setPulsingNodes((prev) => {
          const next = new Set(prev);
          next.delete(randomId);
          return next;
        });
      }, 700);
    }, 350);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent<SVGSVGElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  }, []);

  const getGlow = (node: typeof NODES[0]) => {
    const dx = mousePos.x - node.x;
    const dy = mousePos.y - node.y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    return dist < 18 ? Math.max(0, 1 - dist / 18) : 0;
  };

  return (
    <div className="w-full overflow-hidden rounded-t-[20px] bg-[#0a0e1a] sm:rounded-t-[32px]">
      <div className="mx-auto max-w-[900px] px-4 pt-10 pb-6 sm:px-8 sm:pt-14 sm:pb-8">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mb-6 text-center text-[11px] font-semibold tracking-[0.3em] text-white/20 uppercase"
        >
          Neural Architecture · Hover to explore
        </motion.p>

        {/* SVG Network — uses viewBox so it scales to any container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <svg
            viewBox="-2 -2 104 104"
            className="mx-auto w-full max-w-[800px] cursor-crosshair"
            style={{ aspectRatio: "100 / 100" }}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => setMousePos({ x: -100, y: -100 })}
          >
            {/* Connections */}
            {CONNECTIONS.map((conn, i) => {
              const from = NODES[conn.from];
              const to = NODES[conn.to];
              const isHovered = hoveredNode === conn.from || hoveredNode === conn.to;
              const isPulsing = pulsingNodes.has(conn.from) || pulsingNodes.has(conn.to);
              const fromGlow = getGlow(from);
              const toGlow = getGlow(to);
              const glow = Math.max(fromGlow, toGlow);

              return (
                <line
                  key={`c${i}`}
                  x1={from.x}
                  y1={from.y}
                  x2={to.x}
                  y2={to.y}
                  stroke={isHovered ? "#00f0b5" : isPulsing ? from.color : "#fff"}
                  strokeWidth={isHovered ? 0.4 : 0.15}
                  opacity={isHovered ? 0.7 : isPulsing ? 0.3 : 0.06 + glow * 0.4}
                  style={{ transition: "opacity 0.3s, stroke 0.3s, stroke-width 0.3s" }}
                />
              );
            })}

            {/* Data pulses traveling along connections */}
            {CONNECTIONS.map((conn, i) => {
              if (!pulsingNodes.has(conn.from)) return null;
              const from = NODES[conn.from];
              const to = NODES[conn.to];
              return (
                <circle key={`p${i}`} r="0.8" fill={from.color} opacity="0.9">
                  <animateMotion dur="0.5s" repeatCount="1" path={`M${from.x},${from.y} L${to.x},${to.y}`} />
                </circle>
              );
            })}

            {/* Nodes */}
            {NODES.map((node) => {
              const isHovered = hoveredNode === node.id;
              const glow = getGlow(node);
              const isPulsing = pulsingNodes.has(node.id);
              const scale = isHovered ? 1.6 : 1 + glow * 0.4;
              const r = node.r * 0.12 * scale;

              return (
                <g
                  key={node.id}
                  onMouseEnter={() => setHoveredNode(node.id)}
                  onMouseLeave={() => setHoveredNode(null)}
                  style={{ cursor: "pointer" }}
                >
                  {/* Outer glow */}
                  {(glow > 0 || isPulsing || isHovered) && (
                    <circle
                      cx={node.x}
                      cy={node.y}
                      r={r + (isHovered ? 3 : isPulsing ? 1.5 : glow * 2)}
                      fill={node.color}
                      opacity={isHovered ? 0.15 : isPulsing ? 0.1 : glow * 0.12}
                      style={{ transition: "all 0.3s" }}
                    />
                  )}

                  {/* Node circle */}
                  <circle
                    cx={node.x}
                    cy={node.y}
                    r={r}
                    fill={node.color}
                    opacity={isHovered ? 1 : isPulsing ? 0.9 : 0.5 + glow * 0.5}
                    style={{ transition: "all 0.25s" }}
                  />

                  {/* Hit area (bigger invisible circle for easier hover) */}
                  <circle cx={node.x} cy={node.y} r={r + 2} fill="transparent" />

                  {/* Tooltip */}
                  {isHovered && (
                    <g>
                      <rect
                        x={node.x - 6}
                        y={node.y - 5.5}
                        width={12}
                        height={3}
                        rx={0.6}
                        fill="white"
                      />
                      <text
                        x={node.x}
                        y={node.y - 3.5}
                        textAnchor="middle"
                        fill="#0a0e1a"
                        fontSize="1.8"
                        fontWeight="bold"
                        fontFamily="system-ui"
                      >
                        {node.label}
                      </text>
                    </g>
                  )}
                </g>
              );
            })}
          </svg>
        </motion.div>

        {/* Layer labels */}
        <div className="mx-auto mt-2 flex max-w-[800px] justify-between px-2 sm:px-6">
          {LAYER_LABELS.map((label, i) => (
            <span
              key={i}
              className="text-center text-[8px] font-medium tracking-wider text-white/15 uppercase sm:text-[10px]"
            >
              {label}
            </span>
          ))}
        </div>

        {/* Reflection */}
        <div className="mx-auto mt-5 h-[1px] w-3/4 bg-gradient-to-r from-transparent via-emerald-500/10 to-transparent" />
      </div>
    </div>
  );
}
