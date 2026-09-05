const NEURONS = [
  // Upper-left cluster
  { id: 0, cx: 48, cy: 128, r: 11, type: 'rose', depth: 'fg', cluster: 'top-left', fireDelay: '0s' },
  { id: 1, cx: 154, cy: 64, r: 6, type: 'pink', depth: 'mg', cluster: 'top-left', fireDelay: '1.5s' },
  { id: 2, cx: 232, cy: 146, r: 8, type: 'rose', depth: 'mg', cluster: 'top-left', fireDelay: '3s' },
  { id: 3, cx: 92, cy: 242, r: 6, type: 'mist', depth: 'bg', cluster: 'top-left', fireDelay: '4s' },
  { id: 4, cx: 274, cy: 255, r: 4, type: 'pink', depth: 'bg', cluster: 'top-left', fireDelay: '5s' },
  { id: 5, cx: 36, cy: 332, r: 4, type: 'mist', depth: 'bg', cluster: 'top-left', fireDelay: '2.2s' },
  // Upper-right cluster
  { id: 6, cx: 1392, cy: 122, r: 11, type: 'rose', depth: 'fg', cluster: 'top-right', fireDelay: '0.6s' },
  { id: 7, cx: 1284, cy: 62, r: 6, type: 'pink', depth: 'mg', cluster: 'top-right', fireDelay: '2.4s' },
  { id: 8, cx: 1208, cy: 172, r: 8, type: 'rose', depth: 'mg', cluster: 'top-right', fireDelay: '1.2s' },
  { id: 9, cx: 1348, cy: 276, r: 6, type: 'mist', depth: 'bg', cluster: 'top-right', fireDelay: '3.7s' },
  { id: 10, cx: 1162, cy: 242, r: 4, type: 'pink', depth: 'bg', cluster: 'top-right', fireDelay: '5.2s' },
  { id: 11, cx: 1410, cy: 350, r: 4, type: 'mist', depth: 'bg', cluster: 'top-right', fireDelay: '2.8s' },
  // Lower-left cluster
  { id: 12, cx: 58, cy: 604, r: 10, type: 'rose', depth: 'fg', cluster: 'bottom-left', fireDelay: '0.9s' },
  { id: 13, cx: 170, cy: 676, r: 7, type: 'pink', depth: 'mg', cluster: 'bottom-left', fireDelay: '2.6s' },
  { id: 14, cx: 280, cy: 616, r: 8, type: 'rose', depth: 'mg', cluster: 'bottom-left', fireDelay: '1.7s' },
  { id: 15, cx: 88, cy: 805, r: 5, type: 'mist', depth: 'bg', cluster: 'bottom-left', fireDelay: '4.2s' },
  { id: 16, cx: 244, cy: 818, r: 4, type: 'pink', depth: 'bg', cluster: 'bottom-left', fireDelay: '5.5s' },
  // Lower-right cluster
  { id: 17, cx: 1382, cy: 610, r: 10, type: 'rose', depth: 'fg', cluster: 'bottom-right', fireDelay: '0.4s' },
  { id: 18, cx: 1260, cy: 684, r: 7, type: 'pink', depth: 'mg', cluster: 'bottom-right', fireDelay: '2.9s' },
  { id: 19, cx: 1160, cy: 624, r: 8, type: 'rose', depth: 'mg', cluster: 'bottom-right', fireDelay: '1.4s' },
  { id: 20, cx: 1394, cy: 808, r: 5, type: 'mist', depth: 'bg', cluster: 'bottom-right', fireDelay: '4.5s' },
  { id: 21, cx: 1225, cy: 808, r: 4, type: 'pink', depth: 'bg', cluster: 'bottom-right', fireDelay: '5.7s' },
]

const CLUSTERS = [
  { id: 'top-left', delay: '0s' },
  { id: 'top-right', delay: '-4s' },
  { id: 'bottom-left', delay: '-7s' },
  { id: 'bottom-right', delay: '-10s' },
]

const CONNECTIONS = [
  [0, 1], [0, 2], [0, 3], [1, 2], [2, 4], [3, 4], [3, 5],
  [6, 7], [6, 8], [6, 9], [8, 10], [9, 10], [9, 11],
  [12, 13], [12, 14], [13, 14], [12, 15], [13, 16],
  [17, 18], [17, 19], [18, 19], [17, 20], [18, 21], [20, 21],
].map(([fromId, toId], id) => ({ id, fromId, toId, cluster: NEURONS[fromId].cluster }))

const PULSES = [
  { ci: 0, delay: '0s', dur: '4.8s' },
  { ci: 3, delay: '1.8s', dur: '5.4s' },
  { ci: 6, delay: '3.2s', dur: '5.8s' },
  { ci: 7, delay: '0.8s', dur: '5s' },
  { ci: 10, delay: '2.5s', dur: '5.5s' },
  { ci: 12, delay: '4s', dur: '6s' },
  { ci: 13, delay: '0.4s', dur: '5.2s' },
  { ci: 16, delay: '2.2s', dur: '5.8s' },
  { ci: 18, delay: '4.3s', dur: '6.2s' },
  { ci: 19, delay: '1.1s', dur: '5.1s' },
  { ci: 22, delay: '2.9s', dur: '5.7s' },
  { ci: 23, delay: '4.7s', dur: '6.1s' },
]

const DENDRITES = [
  { cluster: 'top-left', x1: 48, y1: 128, x2: 18, y2: 96 },
  { cluster: 'top-left', x1: 48, y1: 128, x2: 16, y2: 160 },
  { cluster: 'top-right', x1: 1392, y1: 122, x2: 1424, y2: 88 },
  { cluster: 'top-right', x1: 1392, y1: 122, x2: 1422, y2: 154 },
  { cluster: 'bottom-left', x1: 58, y1: 604, x2: 24, y2: 574 },
  { cluster: 'bottom-left', x1: 58, y1: 604, x2: 26, y2: 638 },
  { cluster: 'bottom-right', x1: 1382, y1: 610, x2: 1416, y2: 578 },
  { cluster: 'bottom-right', x1: 1382, y1: 610, x2: 1418, y2: 642 },
]

const COLORS = {
  rose: { fill: '#fb7185', glow: 'rgba(244,63,94,0.28)', line: 'rgba(225,29,72,0.15)', pulse: '#f43f5e' },
  pink: { fill: '#fda4af', glow: 'rgba(251,113,133,0.22)', line: 'rgba(244,63,94,0.1)', pulse: '#fb7185' },
  mist: { fill: '#fecdd3', glow: 'rgba(251,113,133,0.16)', line: 'rgba(244,63,94,0.065)', pulse: '#fda4af' },
}

const DEPTH = {
  fg: { baseOp: 0.62, fireHi: 0.82, glowStd: 4.5 },
  mg: { baseOp: 0.38, fireHi: 0.58, glowStd: 3 },
  bg: { baseOp: 0.16, fireHi: 0.28, glowStd: 2 },
}

function NetworkCluster({ cluster }) {
  const nodes = NEURONS.filter((neuron) => neuron.cluster === cluster.id)
  const connections = CONNECTIONS.filter((connection) => connection.cluster === cluster.id)
  const pulses = PULSES.filter((pulse) => CONNECTIONS[pulse.ci].cluster === cluster.id)
  const dendrites = DENDRITES.filter((dendrite) => dendrite.cluster === cluster.id)

  return (
    <g className={`neural-cluster neural-cluster-${cluster.id}`} style={{ animationDelay: cluster.delay }}>
      <g className="neuron-connections">
        {connections.map(({ id, fromId, toId }) => {
          const from = NEURONS[fromId]
          const to = NEURONS[toId]
          return (
            <path
              key={`c-${id}`}
              id={`np-${id}`}
              className={`neuron-line neuron-conn-depth-${from.depth}`}
              d={`M ${from.cx} ${from.cy} L ${to.cx} ${to.cy}`}
              fill="none"
              stroke={COLORS[from.type].line}
              strokeWidth="0.8"
              strokeDasharray="5 5"
            />
          )
        })}
      </g>

      <g className="neuron-pulses">
        {pulses.map(({ ci, delay, dur }) => {
          const connection = CONNECTIONS[ci]
          const from = NEURONS[connection.fromId]
          const color = COLORS[from.type]
          return (
            <circle key={`p-${ci}`} className={`neuron-pulse neuron-pulse-${from.depth}`} r="2" fill={color.pulse} filter="url(#pulse-glow)">
              <animateMotion dur={dur} repeatCount="indefinite" begin={delay}>
                <mpath href={`#np-${ci}`} />
              </animateMotion>
              <animate attributeName="opacity" values="0;0.75;0.75;0" dur={dur} begin={delay} repeatCount="indefinite" />
            </circle>
          )
        })}
      </g>

      <g className="neuron-dendrites">
        {dendrites.map((dendrite, index) => (
          <line
            key={`d-${index}`}
            x1={dendrite.x1}
            y1={dendrite.y1}
            x2={dendrite.x2}
            y2={dendrite.y2}
            stroke="rgba(225,29,72,0.1)"
            strokeWidth="0.6"
            strokeLinecap="round"
          />
        ))}
      </g>

      <g className="neuron-bodies">
        {nodes.map((neuron) => {
          const color = COLORS[neuron.type]
          const depth = DEPTH[neuron.depth]
          return (
            <g key={`n-${neuron.id}`} className={`neuron-depth-${neuron.depth}`}>
              <circle cx={neuron.cx} cy={neuron.cy} r={neuron.r * 2.7} fill={color.glow} opacity={depth.baseOp * 0.3}>
                <animate
                  attributeName="opacity"
                  values={`${depth.baseOp * 0.3};${depth.baseOp * 0.3};${depth.baseOp * 0.5};${depth.baseOp * 0.3}`}
                  dur={`${6 + neuron.id * 0.35}s`}
                  begin={neuron.fireDelay}
                  repeatCount="indefinite"
                />
              </circle>
              <circle cx={neuron.cx} cy={neuron.cy} r={neuron.r} fill={`url(#n-grad-${neuron.type})`} filter={`url(#n-glow-${neuron.depth})`}>
                <animate
                  attributeName="opacity"
                  values={`${depth.baseOp};${depth.baseOp};${depth.fireHi};${depth.baseOp}`}
                  dur={`${6 + neuron.id * 0.35}s`}
                  begin={neuron.fireDelay}
                  repeatCount="indefinite"
                />
              </circle>
              <circle cx={neuron.cx} cy={neuron.cy} r={neuron.r * 0.3} fill="white" opacity={depth.baseOp * 0.65} />
            </g>
          )
        })}
      </g>
    </g>
  )
}

export default function NeuronNetwork() {
  return (
    <div className="neuron-network" aria-hidden="true">
      <svg viewBox="0 0 1440 900" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          {Object.keys(DEPTH).map((depth) => (
            <filter key={`glow-${depth}`} id={`n-glow-${depth}`} x="-150%" y="-150%" width="400%" height="400%">
              <feGaussianBlur in="SourceGraphic" stdDeviation={DEPTH[depth].glowStd} result="blur" />
              <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
          ))}
          <filter id="pulse-glow" x="-300%" y="-300%" width="700%" height="700%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          {Object.entries(COLORS).map(([name, color]) => (
            <radialGradient key={name} id={`n-grad-${name}`}>
              <stop offset="0%" stopColor={color.fill} />
              <stop offset="60%" stopColor={color.fill} stopOpacity="0.55" />
              <stop offset="100%" stopColor={color.fill} stopOpacity="0" />
            </radialGradient>
          ))}
        </defs>
        {CLUSTERS.map((cluster) => <NetworkCluster key={cluster.id} cluster={cluster} />)}
      </svg>
    </div>
  )
}
