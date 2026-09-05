import useScrollReveal from '../hooks/useScrollReveal'
import Background3D from './Background3D'

const TRACKS = [
  { num: '01', icon: '🧠', title: 'Artificial Intelligence, Machine Learning, Deep Learning, Intelligent Computing', desc: 'Foundational and applied AI/ML, deep learning architectures, distributed learning, and intelligent computing systems.' },
  { num: '02', icon: '👁️', title: 'Computer Vision, NLP & Multimodal Intelligence', desc: 'Vision systems, natural language processing, multimodal learning, and cross-modal intelligence.' },
  { num: '03', icon: '📡', title: '6G, Wireless Communication, IoT & Intelligent Networking', desc: 'Next-generation 6G systems, wireless communications, IoT ecosystems, and energy-efficient intelligent networks.' },
  { num: '04', icon: '🔒', title: 'Cybersecurity, Privacy, Blockchain & Secure Computing', desc: 'Security protocols, privacy-preserving technologies, blockchain systems, and trustworthy computing.' },
  { num: '05', icon: '🏙️', title: 'Cyber-Physical Systems, Digital Twins & Smart Infrastructure, Intelligent Transportation Systems', desc: 'CPS architectures, digital twins, smart city infrastructure, and intelligent transportation systems.' },
  { num: '06', icon: '⚡', title: 'Sustainable Electronics, VLSI, Embedded & Green Computing', desc: 'Low-power VLSI design, embedded systems, sustainable electronics, and green computing methodologies.' },
  { num: '07', icon: '🔌', title: 'Sustainable and Renewable Energy, Power Electronics, Smart Grids & Automation', desc: 'Renewable energy integration, power electronics, smart grid technologies, and industrial automation.' },
  { num: '08', icon: '🤖', title: 'Robotics, Autonomous Systems, Instrumentation & Intelligent Control', desc: 'Robotics, autonomous navigation, smart instrumentation, and adaptive intelligent control systems.' },
  { num: '09', icon: '🛰️', title: 'Sensors, Remote Sensing, Signal Processing & Intelligent Perception', desc: 'Advanced sensors, remote sensing technologies, signal/image processing, and intelligent perception.' },
  { num: '10', icon: '🧬', title: 'Biomedical Engineering, Computational Biology & Bioinformatics', desc: 'Medical devices, health informatics, computational biology, bioinformatics, and wearable health systems.' },
  { num: '11', icon: '☁️', title: 'Cloud Computing, Edge Computing, Fog Computing', desc: 'Distributed cloud architectures, edge/fog computing paradigms, and scalable infrastructure services.' },
  { num: '12', icon: '✨', title: 'LLM, Generative AI, Agentic Intelligence', desc: 'Large language models, generative AI systems, multi-agent frameworks, and autonomous agentic workflows.' },
  { num: '13', icon: '🔍', title: 'Retrieval, Knowledge Systems and Intelligent Applications', desc: 'Information retrieval, knowledge graphs, RAG systems, and domain-specific intelligent applications.' },
]

export default function Tracks() {
  useScrollReveal()

  return (
    <section id="tracks" className="section section-alt">
      <Background3D variant="tracks" />
      <div className="container">
        <div className="section-header center reveal">
          <div className="section-label"><span className="line" /> Call For Papers <span className="line" /></div>
          <h2 className="section-title">Technical <span className="red">Tracks</span></h2>
          <p className="section-desc" style={{ maxWidth: '900px', margin: '0 auto' }}>
  Explore our 13 carefully curated tracks covering the most impactful areas of modern technology and research.
</p>
        </div>
        <div className="tracks-grid">
          {TRACKS.map((t, i) => (
            <div key={i} className={`track-card reveal reveal-delay-${Math.min(i + 1, 4)}`}>
              <div className="track-number">{t.num}</div>
              <div>
                <span className="track-icon">{t.icon}</span>
                <div className="track-title">{t.title}</div>
                <div className="track-desc">{t.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}