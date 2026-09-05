import { useRef } from 'react'
import useScrollReveal from '../hooks/useScrollReveal'
import Background3D from './Background3D'

const PILLARS = [
  { 
    icon: '🧠', 
    title: 'Cognitive AI & Advanced Computing', 
    desc: 'From foundational AI and deep learning to LLMs, generative AI, multimodal intelligence, and knowledge systems driving the next wave of cognitive computing.' 
  },
  { 
    icon: '🌐', 
    title: 'Intelligent Connectivity & Infrastructure', 
    desc: 'Next-generation 6G networks, IoT ecosystems, and distributed cloud-edge-fog architectures enabling seamless, energy-efficient global connectivity.' 
  },
  { 
    icon: '🤖', 
    title: 'Autonomous Systems & Smart Automation', 
    desc: 'Cyber-physical systems, digital twins, intelligent transportation, robotics, and autonomous control shaping smart cities and Industry 5.0.' 
  },
  { 
    icon: '🔒', 
    title: 'Trustworthy & Secure Technologies', 
    desc: 'Cybersecurity, privacy-preserving technologies, blockchain, and secure computing for resilient, ethical, and trustworthy digital infrastructures.' 
  },
  { 
    icon: '⚡', 
    title: 'Green Energy & Sustainable Electronics', 
    desc: 'Low-power VLSI, embedded systems, green computing, renewable energy integration, power electronics, and smart grid technologies for a net-zero future.' 
  },
  { 
    icon: '🧬', 
    title: 'Intelligent Sensing & Life Sciences', 
    desc: 'Advanced sensors, remote sensing, signal processing, biomedical engineering, and bioinformatics enhancing human health and environmental perception.' 
  },
]

export default function About() {
  const ref = useRef(null)
  useScrollReveal()

  return (
    <section id="about" className="section" ref={ref}>
      <Background3D variant="about" />
      <div className="container">
        {/* Section Header */}
        <div className="section-header center reveal">
          <div className="section-label"><span className="line" /> IEEE COGNIA 2027 <span className="line" /></div>
          <h2 className="section-title">Converging Intelligence for a <span className="red">Sustainable Future</span></h2>
          <p className="section-desc" style={{ maxWidth: '850px', margin: '0 auto' }}>
  Spanning 13 technical tracks, IEEE COGNIA 2027 serves as a premier global platform where breakthroughs in artificial intelligence, next-generation connectivity, autonomous systems, and sustainable engineering converge to build resilient, intelligent, and environmentally responsible societies.
</p>
        </div>

      

        {/* 3-Column Pillars Grid */}
        <div className="pillars-grid">
          {PILLARS.map((p, i) => (
            <div key={i} className={`pillar-card reveal reveal-delay-${Math.min(i + 1, 4)}`}>
              <span className="pillar-icon">{p.icon}</span>
              <div className="pillar-title">{p.title}</div>
              <div className="pillar-desc">{p.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}