/**
 * The hero's connected-plant visual — a hub with satellite nodes, matching the
 * `flow` vector group in the Figma hero.
 */
const NODES = [
  { cx: 90, cy: 110 },
  { cx: 260, cy: 60 },
  { cx: 430, cy: 110 },
  { cx: 60, cy: 300 },
  { cx: 460, cy: 300 },
  { cx: 150, cy: 430 },
  { cx: 370, cy: 430 },
]

export default function FlowDiagram({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 520 520"
      className={className}
      role="img"
      aria-label="Connected factory network"
    >
      <g stroke="#39F2AE" strokeOpacity="0.28" strokeWidth="1.5">
        {NODES.map((n, i) => (
          <line key={i} x1={n.cx} y1={n.cy} x2={260} y2={260} />
        ))}
      </g>

      {NODES.map((n, i) => (
        <circle
          key={i}
          cx={n.cx}
          cy={n.cy}
          r="11"
          fill="#0E1215"
          stroke="#39F2AE"
          strokeWidth="2"
        />
      ))}

      {/* hub */}
      <circle cx="260" cy="260" r="54" fill="#39F2AE" fillOpacity="0.10" />
      <rect
        x="230"
        y="230"
        width="60"
        height="60"
        rx="16"
        fill="#132D27"
        stroke="#39F2AE"
        strokeWidth="1.5"
      />
      <rect x="249" y="249" width="22" height="22" rx="6" fill="#39F2AE" />
    </svg>
  )
}
