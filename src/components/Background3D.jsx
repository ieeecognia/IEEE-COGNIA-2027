import { useEffect, useRef } from 'react'
import NeuronNetwork from './NeuronNetwork'

export default function Background3D({ variant = 'hero' }) {
  if (variant === 'hero') return <HeroBg />
  // All non-hero sections use the SAME TechGridBg for continuity
  return <TechGridBg />
}

function Cube({ size = 60, color = '', style }) {
  const h = size / 2
  return (
    <div className={`cube-3d ${color}`} style={size !== 60 ? { width: size, height: size } : {}}>
      {[`translateZ(${h}px)`, `rotateY(180deg) translateZ(${h}px)`, `rotateY(90deg) translateZ(${h}px)`, `rotateY(-90deg) translateZ(${h}px)`, `rotateX(90deg) translateZ(${h}px)`, `rotateX(-90deg) translateZ(${h}px)`].map((t, i) => (
        <div key={i} className="face" style={size !== 60 ? { width: size, height: size, transform: t } : { transform: t }} />
      ))}
    </div>
  )
}

/* ===== SHARED TECH GRID BACKGROUND — ALL NON-HERO SECTIONS ===== */
function TechGridBg() {
  return (
    <div className="tech-grid-bg" aria-hidden="true">
      {/* Base large grid */}
      <div className="tech-grid-base" />

      {/* Horizontal scan lines */}
      <div className="tech-grid-scans">
        {[...Array(30)].map((_, i) => (
          <div key={`h-${i}`} className="tech-scan-line tech-scan-h" style={{ top: `${(i + 1) * 3.2}%`, animationDelay: `${i * 0.4}s` }} />
        ))}
      </div>

      {/* Vertical scan lines */}
      <div className="tech-grid-scans-v">
        {[...Array(20)].map((_, i) => (
          <div key={`v-${i}`} className="tech-scan-line tech-scan-v" style={{ left: `${(i + 1) * 4.8}%`, animationDelay: `${i * 0.6 + 2}s` }} />
        ))}
      </div>

      {/* Circuit trace paths */}
      <svg className="tech-grid-circuits" viewBox="0 0 1440 900" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="circuitGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(244,63,94,0)" />
            <stop offset="50%" stopColor="rgba(244,63,94,0.35)" />
            <stop offset="100%" stopColor="rgba(244,63,94,0)" />
          </linearGradient>
          <linearGradient id="circuitGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(225,29,72,0)" />
            <stop offset="50%" stopColor="rgba(225,29,72,0.28)" />
            <stop offset="100%" stopColor="rgba(225,29,72,0)" />
          </linearGradient>
          <linearGradient id="circuitGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(251,113,133,0)" />
            <stop offset="50%" stopColor="rgba(251,113,133,0.22)" />
            <stop offset="100%" stopColor="rgba(251,113,133,0)" />
          </linearGradient>
        </defs>

        {/* Messy horizontal traces */}
        <g className="tech-circuit-h">
          <path d="M 0 80 H 180 V 140 H 340 V 60 H 520 V 200 H 720" fill="none" stroke="url(#circuitGrad1)" strokeWidth="1.4" />
          <path d="M 0 180 H 120 V 260 H 280 V 160 H 480 V 320 H 680 V 240 H 900" fill="none" stroke="url(#circuitGrad1)" strokeWidth="1.1" opacity="0.8" />
          <path d="M 0 320 H 220 V 400 H 400 V 280 H 620 V 450 H 850" fill="none" stroke="url(#circuitGrad1)" strokeWidth="1.5" />
          <path d="M 0 480 H 160 V 560 H 360 V 440 H 580 V 600 H 800" fill="none" stroke="url(#circuitGrad1)" strokeWidth="1.2" opacity="0.85" />
          <path d="M 0 620 H 200 V 700 H 420 V 580 H 640 V 750 H 880" fill="none" stroke="url(#circuitGrad1)" strokeWidth="1.3" />
          <path d="M 0 760 H 140 V 840 H 320 V 720 H 540 V 860 H 720" fill="none" stroke="url(#circuitGrad1)" strokeWidth="1.1" opacity="0.7" />
          <path d="M 1440 120 H 1260 V 200 H 1080 V 100 H 880 V 260 H 680" fill="none" stroke="url(#circuitGrad1)" strokeWidth="1.4" />
          <path d="M 1440 280 H 1300 V 360 H 1120 V 240 H 920 V 400 H 720" fill="none" stroke="url(#circuitGrad1)" strokeWidth="1.2" opacity="0.8" />
          <path d="M 1440 420 H 1240 V 500 H 1040 V 380 H 840 V 540 H 640" fill="none" stroke="url(#circuitGrad1)" strokeWidth="1.4" />
          <path d="M 1440 580 H 1280 V 660 H 1100 V 540 H 900 V 700 H 700" fill="none" stroke="url(#circuitGrad1)" strokeWidth="1.1" opacity="0.85" />
          <path d="M 1440 720 H 1220 V 800 H 1000 V 680 H 800 V 840 H 600" fill="none" stroke="url(#circuitGrad1)" strokeWidth="1.3" />
          <path d="M 1440 860 H 1320 V 900" fill="none" stroke="url(#circuitGrad1)" strokeWidth="1" opacity="0.6" />
        </g>

        {/* Messy vertical traces */}
        <g className="tech-circuit-v">
          <path d="M 120 0 V 120 H 200 V 280 H 120 V 440 H 280 V 600 H 160 V 760 H 320" fill="none" stroke="url(#circuitGrad2)" strokeWidth="1.2" />
          <path d="M 280 0 V 80 H 360 V 240 H 240 V 400 H 400 V 560 H 280 V 720 H 440" fill="none" stroke="url(#circuitGrad2)" strokeWidth="1.3" opacity="0.85" />
          <path d="M 440 0 V 160 H 520 V 320 H 400 V 480 H 560 V 640 H 440 V 800 H 600" fill="none" stroke="url(#circuitGrad2)" strokeWidth="1.1" />
          <path d="M 600 0 V 100 H 680 V 260 H 560 V 420 H 720 V 580 H 600 V 740 H 760" fill="none" stroke="url(#circuitGrad2)" strokeWidth="1.4" opacity="0.8" />
          <path d="M 760 0 V 140 H 840 V 300 H 720 V 460 H 880 V 620 H 760 V 780 H 920" fill="none" stroke="url(#circuitGrad2)" strokeWidth="1.2" />
          <path d="M 920 0 V 120 H 1000 V 280 H 880 V 440 H 1040 V 600 H 920 V 760 H 1080" fill="none" stroke="url(#circuitGrad2)" strokeWidth="1.3" opacity="0.75" />
          <path d="M 1080 0 V 80 H 1160 V 240 H 1040 V 400 H 1200 V 560 H 1080 V 720 H 1240" fill="none" stroke="url(#circuitGrad2)" strokeWidth="1.1" />
          <path d="M 1240 0 V 160 H 1320 V 320 H 1200 V 480 H 1360 V 640 H 1240 V 800 H 1400" fill="none" stroke="url(#circuitGrad2)" strokeWidth="1.3" opacity="0.85" />
        </g>

        {/* Diagonal messy traces */}
        <g className="tech-circuit-diag" opacity="0.65">
          <path d="M 0 200 L 200 0" fill="none" stroke="url(#circuitGrad3)" strokeWidth="0.9" />
          <path d="M 0 400 L 300 100 L 500 300 L 800 0" fill="none" stroke="url(#circuitGrad3)" strokeWidth="1" />
          <path d="M 200 900 L 500 600 L 700 800 L 1000 500" fill="none" stroke="url(#circuitGrad3)" strokeWidth="1.1" />
          <path d="M 600 900 L 900 600 L 1100 800 L 1440 460" fill="none" stroke="url(#circuitGrad3)" strokeWidth="0.9" />
          <path d="M 1100 0 L 1440 340" fill="none" stroke="url(#circuitGrad3)" strokeWidth="1" />
          <path d="M 0 700 L 250 450 L 450 650 L 700 400" fill="none" stroke="url(#circuitGrad3)" strokeWidth="0.8" />
        </g>

        {/* Junction nodes / vias */}
        <g className="tech-circuit-nodes">
          <circle cx="180" cy="140" r="3" fill="rgba(244,63,94,0.5)" />
          <circle cx="340" cy="60" r="2.5" fill="rgba(244,63,94,0.45)" />
          <circle cx="520" cy="200" r="3.5" fill="rgba(244,63,94,0.55)" />
          <circle cx="280" cy="260" r="2.5" fill="rgba(244,63,94,0.4)" />
          <circle cx="480" cy="320" r="3" fill="rgba(244,63,94,0.5)" />
          <circle cx="620" cy="450" r="2.5" fill="rgba(244,63,94,0.42)" />
          <circle cx="360" cy="560" r="3.5" fill="rgba(244,63,94,0.52)" />
          <circle cx="580" cy="600" r="2.5" fill="rgba(244,63,94,0.38)" />
          <circle cx="420" cy="700" r="3" fill="rgba(244,63,94,0.48)" />
          <circle cx="640" cy="750" r="2.5" fill="rgba(244,63,94,0.35)" />
          <circle cx="320" cy="840" r="3.5" fill="rgba(244,63,94,0.5)" />
          <circle cx="540" cy="860" r="2.5" fill="rgba(244,63,94,0.38)" />
          <circle cx="1260" cy="200" r="3" fill="rgba(244,63,94,0.48)" />
          <circle cx="1080" cy="100" r="2.5" fill="rgba(244,63,94,0.4)" />
          <circle cx="880" cy="260" r="3.5" fill="rgba(244,63,94,0.52)" />
          <circle cx="1240" cy="500" r="2.5" fill="rgba(244,63,94,0.42)" />
          <circle cx="1040" cy="380" r="3" fill="rgba(244,63,94,0.45)" />
          <circle cx="840" cy="540" r="2.5" fill="rgba(244,63,94,0.38)" />
          <circle cx="1100" cy="660" r="3.5" fill="rgba(244,63,94,0.5)" />
          <circle cx="900" cy="700" r="2.5" fill="rgba(244,63,94,0.4)" />
          <circle cx="1000" cy="800" r="3" fill="rgba(244,63,94,0.45)" />
          <circle cx="800" cy="840" r="2.5" fill="rgba(244,63,94,0.38)" />
          <circle cx="200" cy="120" r="2.5" fill="rgba(225,29,72,0.45)" />
          <circle cx="360" cy="240" r="3" fill="rgba(225,29,72,0.5)" />
          <circle cx="520" cy="320" r="2.5" fill="rgba(225,29,72,0.4)" />
          <circle cx="400" cy="480" r="3.5" fill="rgba(225,29,72,0.48)" />
          <circle cx="560" cy="640" r="2.5" fill="rgba(225,29,72,0.4)" />
          <circle cx="680" cy="260" r="3" fill="rgba(225,29,72,0.45)" />
          <circle cx="840" cy="300" r="2.5" fill="rgba(225,29,72,0.38)" />
          <circle cx="720" cy="460" r="3.5" fill="rgba(225,29,72,0.5)" />
          <circle cx="880" cy="620" r="2.5" fill="rgba(225,29,72,0.4)" />
          <circle cx="1000" cy="280" r="3" fill="rgba(225,29,72,0.45)" />
          <circle cx="1160" cy="240" r="2.5" fill="rgba(225,29,72,0.38)" />
          <circle cx="1040" cy="400" r="3.5" fill="rgba(225,29,72,0.48)" />
          <circle cx="1200" cy="560" r="2.5" fill="rgba(225,29,72,0.4)" />
        </g>

        {/* Small rectangular pads */}
        <g className="tech-circuit-pads">
          <rect x="178" y="138" width="4" height="4" rx="1" fill="rgba(244,63,94,0.3)" />
          <rect x="338" y="58" width="4" height="4" rx="1" fill="rgba(244,63,94,0.25)" />
          <rect x="518" y="198" width="4" height="4" rx="1" fill="rgba(244,63,94,0.32)" />
          <rect x="278" y="258" width="4" height="4" rx="1" fill="rgba(244,63,94,0.22)" />
          <rect x="478" y="318" width="4" height="4" rx="1" fill="rgba(244,63,94,0.28)" />
          <rect x="618" y="448" width="4" height="4" rx="1" fill="rgba(244,63,94,0.24)" />
          <rect x="358" y="558" width="4" height="4" rx="1" fill="rgba(244,63,94,0.3)" />
          <rect x="418" y="698" width="4" height="4" rx="1" fill="rgba(244,63,94,0.22)" />
          <rect x="1258" y="198" width="4" height="4" rx="1" fill="rgba(244,63,94,0.28)" />
          <rect x="1078" y="98" width="4" height="4" rx="1" fill="rgba(244,63,94,0.22)" />
          <rect x="878" y="258" width="4" height="4" rx="1" fill="rgba(244,63,94,0.3)" />
          <rect x="1238" y="498" width="4" height="4" rx="1" fill="rgba(244,63,94,0.24)" />
          <rect x="1038" y="378" width="4" height="4" rx="1" fill="rgba(244,63,94,0.28)" />
          <rect x="198" y="118" width="4" height="4" rx="1" fill="rgba(225,29,72,0.25)" />
          <rect x="358" y="238" width="4" height="4" rx="1" fill="rgba(225,29,72,0.28)" />
          <rect x="518" y="318" width="4" height="4" rx="1" fill="rgba(225,29,72,0.22)" />
          <rect x="398" y="478" width="4" height="4" rx="1" fill="rgba(225,29,72,0.3)" />
          <rect x="678" y="258" width="4" height="4" rx="1" fill="rgba(225,29,72,0.24)" />
          <rect x="838" y="298" width="4" height="4" rx="1" fill="rgba(225,29,72,0.2)" />
          <rect x="718" y="458" width="4" height="4" rx="1" fill="rgba(225,29,72,0.28)" />
          <rect x="998" y="278" width="4" height="4" rx="1" fill="rgba(225,29,72,0.24)" />
          <rect x="1158" y="238" width="4" height="4" rx="1" fill="rgba(225,29,72,0.2)" />
          <rect x="1038" y="398" width="4" height="4" rx="1" fill="rgba(225,29,72,0.28)" />
        </g>
      </svg>

      {/* Grid intersection highlights */}
      <div className="tech-grid-intersections">
        {[...Array(15)].map((_, i) => (
          <div
            key={`int-${i}`}
            className="tech-grid-glow"
            style={{
              top: `${10 + (i * 6) + Math.random() * 4}%`,
              left: `${5 + (i * 7) + Math.random() * 5}%`,
              animationDelay: `${i * 0.8}s`,
              width: `${40 + Math.random() * 80}px`,
              height: `${40 + Math.random() * 80}px`,
            }}
          />
        ))}
      </div>

      {/* Floating hex fragments */}
      <svg className="tech-grid-hex" viewBox="0 0 1440 900" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.22">
          <polygon points="100,100 115,91 130,100 130,118 115,127 100,118" fill="none" stroke="rgba(244,63,94,0.45)" strokeWidth="1" />
          <polygon points="350,200 368,190 386,200 386,220 368,230 350,220" fill="none" stroke="rgba(244,63,94,0.4)" strokeWidth="0.8" />
          <polygon points="600,150 618,140 636,150 636,170 618,180 600,170" fill="none" stroke="rgba(244,63,94,0.35)" strokeWidth="0.9" />
          <polygon points="900,250 915,241 930,250 930,268 915,277 900,268" fill="none" stroke="rgba(244,63,94,0.42)" strokeWidth="1" />
          <polygon points="1200,180 1218,170 1236,180 1236,200 1218,210 1200,200" fill="none" stroke="rgba(244,63,94,0.38)" strokeWidth="0.8" />
          <polygon points="200,400 215,391 230,400 230,418 215,427 200,418" fill="none" stroke="rgba(244,63,94,0.32)" strokeWidth="0.9" />
          <polygon points="500,500 518,490 536,500 536,520 518,530 500,520" fill="none" stroke="rgba(244,63,94,0.4)" strokeWidth="1" />
          <polygon points="800,450 815,441 830,450 830,468 815,477 800,468" fill="none" stroke="rgba(244,63,94,0.35)" strokeWidth="0.8" />
          <polygon points="1100,550 1118,540 1136,550 1136,570 1118,580 1100,570" fill="none" stroke="rgba(244,63,94,0.42)" strokeWidth="0.9" />
          <polygon points="150,650 165,641 180,650 180,668 165,677 150,668" fill="none" stroke="rgba(244,63,94,0.3)" strokeWidth="0.8" />
          <polygon points="450,750 468,740 486,750 486,770 468,780 450,770" fill="none" stroke="rgba(244,63,94,0.38)" strokeWidth="1" />
          <polygon points="750,700 765,691 780,700 780,718 765,727 750,718" fill="none" stroke="rgba(244,63,94,0.32)" strokeWidth="0.9" />
          <polygon points="1050,800 1068,790 1086,800 1086,820 1068,830 1050,820" fill="none" stroke="rgba(244,63,94,0.4)" strokeWidth="0.8" />
          <polygon points="1300,650 1315,641 1330,650 1330,668 1315,677 1300,668" fill="none" stroke="rgba(244,63,94,0.35)" strokeWidth="0.9" />
          <polygon points="300,300 312,293 324,300 324,312 312,319 300,312" fill="none" stroke="rgba(225,29,72,0.35)" strokeWidth="0.8" />
          <polygon points="700,350 712,343 724,350 724,362 712,369 700,362" fill="none" stroke="rgba(225,29,72,0.3)" strokeWidth="0.7" />
          <polygon points="1000,400 1012,393 1024,400 1024,412 1012,419 1000,412" fill="none" stroke="rgba(225,29,72,0.32)" strokeWidth="0.8" />
          <polygon points="1300,350 1312,343 1324,350 1324,362 1312,369 1300,362" fill="none" stroke="rgba(225,29,72,0.35)" strokeWidth="0.9" />
          <polygon points="250,550 262,543 274,550 274,562 262,569 250,562" fill="none" stroke="rgba(225,29,72,0.3)" strokeWidth="0.8" />
          <polygon points="550,600 562,593 574,600 574,612 562,619 550,612" fill="none" stroke="rgba(225,29,72,0.32)" strokeWidth="0.7" />
          <polygon points="850,650 862,643 874,650 874,662 862,669 850,662" fill="none" stroke="rgba(225,29,72,0.35)" strokeWidth="0.8" />
          <polygon points="1150,700 1162,693 1174,700 1174,712 1162,719 1150,712" fill="none" stroke="rgba(225,29,72,0.3)" strokeWidth="0.7" />
        </g>
      </svg>

      {/* Corner accent brackets */}
      <svg className="tech-grid-brackets" viewBox="0 0 1440 900" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <g stroke="rgba(244,63,94,0.2)" strokeWidth="1.2" fill="none">
          {/* Top left */}
          <path d="M 40 40 H 80 M 40 40 V 80" />
          <path d="M 120 40 H 160 M 120 40 V 70" opacity="0.7" />
          {/* Top right */}
          <path d="M 1400 40 H 1360 M 1400 40 V 80" />
          <path d="M 1320 40 H 1280 M 1320 40 V 70" opacity="0.7" />
          {/* Bottom left */}
          <path d="M 40 860 H 80 M 40 860 V 820" />
          <path d="M 120 860 H 160 M 120 860 V 830" opacity="0.7" />
          {/* Bottom right */}
          <path d="M 1400 860 H 1360 M 1400 860 V 820" />
          <path d="M 1320 860 H 1280 M 1320 860 V 830" opacity="0.7" />
        </g>
      </svg>

      {/* Binary/code rain effect strips */}
      <div className="tech-grid-rain">
        {[...Array(12)].map((_, i) => (
          <div
            key={`rain-${i}`}
            className="tech-rain-strip"
            style={{
              left: `${5 + i * 8 + Math.random() * 3}%`,
              animationDelay: `${i * 1.2}s`,
              animationDuration: `${6 + Math.random() * 4}s`,
            }}
          >
            {'10100101'}
          </div>
        ))}
      </div>
    </div>
  )
}

/* ===== HERO — KEEP EXACTLY AS BEFORE ===== */
function HeroBg() {
  const layerRef = useRef(null)

  useEffect(() => {
    const layer = layerRef.current
    const hero = layer?.parentElement
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')

    if (!layer || !hero || reducedMotion.matches) return undefined

    const setOffset = (event) => {
      const bounds = hero.getBoundingClientRect()
      const x = (event.clientX - bounds.left) / bounds.width - 0.5
      const y = (event.clientY - bounds.top) / bounds.height - 0.5

      layer.style.setProperty('--hero-parallax-bg-x', `${(x * -4).toFixed(2)}px`)
      layer.style.setProperty('--hero-parallax-bg-y', `${(y * -4).toFixed(2)}px`)
      layer.style.setProperty('--hero-parallax-mid-x', `${(x * -8).toFixed(2)}px`)
      layer.style.setProperty('--hero-parallax-mid-y', `${(y * -8).toFixed(2)}px`)
      layer.style.setProperty('--hero-parallax-front-x', `${(x * -12).toFixed(2)}px`)
      layer.style.setProperty('--hero-parallax-front-y', `${(y * -12).toFixed(2)}px`)
    }
    const resetOffset = () => {
      ;['--hero-parallax-bg-x', '--hero-parallax-bg-y', '--hero-parallax-mid-x', '--hero-parallax-mid-y', '--hero-parallax-front-x', '--hero-parallax-front-y'].forEach((property) => layer.style.removeProperty(property))
    }

    hero.addEventListener('pointermove', setOffset, { passive: true })
    hero.addEventListener('pointerleave', resetOffset)
    return () => {
      hero.removeEventListener('pointermove', setOffset)
      hero.removeEventListener('pointerleave', resetOffset)
    }
  }, [])

  return (
    <div ref={layerRef} className="hero-3d-layer">
      <div className="hero-depth-layer hero-depth-background">
        <div className="hero-perspective-grid" />
        <div className="orb-3d" style={{ width: 500, height: 500, background: 'radial-gradient(circle,rgba(225,29,72,0.065),transparent 70%)', top: -100, right: -150 }} />
        <div className="orb-3d" style={{ width: 400, height: 400, background: 'radial-gradient(circle,rgba(225,29,72,0.045),transparent 70%)', bottom: -100, left: -100, animationDelay: '-5s' }} />
      </div>

      <div className="hero-depth-layer hero-depth-midground">
        <CircuitTraces />
        <HolographicGeometry />
        <div className="orb-3d" style={{ width: 320, height: 320, background: 'radial-gradient(circle,rgba(225,29,72,0.035),transparent 70%)', top: '32%', left: '4%', animationDelay: '-10s' }} />
        <div className="orb-3d" style={{ width: 300, height: 300, background: 'radial-gradient(circle,rgba(225,29,72,0.035),transparent 70%)', top: '28%', right: '2%', animationDelay: '-7s' }} />
      </div>

      <div className="hero-depth-layer hero-depth-foreground">
        <NeuronNetwork />
        {[
          { t: '14%', l: '9%', d: '-1s' },
          { t: '20%', l: '90%', d: '-3s' },
          { t: '46%', l: '4%', d: '-5s' },
          { t: '40%', l: '93%', d: '-8s' },
          { t: '68%', l: '10%', d: '-2s' },
          { t: '74%', l: '88%', d: '-6s' },
        ].map((p, i) => (
          <div key={i} className="dot-particle" style={{ top: p.t, left: p.l, animationDelay: p.d }} />
        ))}
      </div>
    </div>
  )
}

/* ===== CIRCUIT TRACES — HERO ONLY ===== */
function CircuitTraces() {
  const clusters = [
    {
      id: 'top-left',
      paths: [
        'M 0 48 H 72 V 106 H 170 V 52 H 322', 'M 18 154 H 112 V 204 H 262 V 114 H 350',
        'M 0 246 H 64 V 284 H 182 V 232 H 326', 'M 36 12 V 70 H 116 V 132 H 216',
        'M 86 314 L 142 258 H 236 V 304 H 348', 'M 162 0 V 42 H 244 V 96 H 334',
        'M 12 340 H 52 V 300 H 112', 'M 222 22 H 286 V 76 H 350',
        'M 18 186 H 48 V 222 H 94', 'M 260 174 H 314 V 214 H 358',
      ],
      grids: ['M 0 92 H 54 M 0 102 H 54 M 12 124 H 98', 'M 188 18 V 54 M 198 18 V 54 M 210 18 V 54', 'M 18 266 H 76 V 330 H 148'],
      nodes: [[72, 106, 10, 1], [170, 52, 4, 0], [112, 204, 6, 0], [262, 114, 5, 0], [64, 284, 4, 0], [236, 258, 8, 1], [322, 52, 3, 0], [182, 232, 3, 0], [314, 214, 3, 0]],
      pads: [[18, 44], [104, 70], [204, 126], [282, 72], [42, 304], [320, 296]],
      dots: [[18, 76], [30, 76], [42, 76], [290, 138], [302, 138], [314, 138], [38, 324], [50, 324], [62, 324]],
      polygons: ['12,138 24,131 36,138 36,152 24,159 12,152', '286,248 300,240 314,248 314,264 300,272 286,264'],
      runners: [0, 4, 5],
    },
    {
      id: 'top-right',
      paths: [
        'M 1440 44 H 1364 V 102 H 1268 V 50 H 1122', 'M 1422 158 H 1326 V 204 H 1182 V 112 H 1090',
        'M 1440 248 H 1376 V 286 H 1254 V 232 H 1102', 'M 1404 10 V 72 H 1328 V 132 H 1220',
        'M 1352 318 L 1294 258 H 1200 V 304 H 1090', 'M 1278 0 V 42 H 1194 V 94 H 1110',
        'M 1428 338 H 1388 V 300 H 1324', 'M 1218 20 H 1154 V 74 H 1090',
        'M 1424 188 H 1392 V 222 H 1346', 'M 1182 174 H 1128 V 214 H 1084',
      ],
      grids: ['M 1440 90 H 1386 M 1440 100 H 1386 M 1428 122 H 1342', 'M 1252 18 V 54 M 1242 18 V 54 M 1230 18 V 54', 'M 1422 266 H 1362 V 330 H 1290'],
      nodes: [[1364, 102, 10, 1], [1268, 50, 4, 0], [1326, 204, 6, 0], [1182, 112, 5, 0], [1376, 286, 4, 0], [1200, 258, 8, 1], [1122, 50, 3, 0], [1254, 232, 3, 0], [1128, 214, 3, 0]],
      pads: [[1410, 44], [1320, 70], [1228, 126], [1144, 72], [1390, 304], [1104, 296]],
      dots: [[1422, 76], [1410, 76], [1398, 76], [1150, 138], [1138, 138], [1126, 138], [1402, 324], [1390, 324], [1378, 324]],
      polygons: ['1404,138 1416,131 1428,138 1428,152 1416,159 1404,152', '1126,248 1140,240 1154,248 1154,264 1140,272 1126,264'],
      runners: [0, 4, 6],
    },
    {
      id: 'bottom-left',
      paths: [
        'M 0 854 H 76 V 796 H 174 V 850 H 326', 'M 18 748 H 112 V 696 H 262 V 786 H 350',
        'M 0 654 H 64 V 616 H 182 V 668 H 326', 'M 36 890 V 832 H 116 V 770 H 216',
        'M 86 586 L 142 642 H 236 V 596 H 348', 'M 162 900 V 858 H 244 V 804 H 334',
        'M 12 560 H 52 V 600 H 112', 'M 222 878 H 286 V 824 H 350',
        'M 18 714 H 48 V 678 H 94', 'M 260 726 H 314 V 686 H 358',
      ],
      grids: ['M 0 808 H 54 M 0 818 H 54 M 12 786 H 98', 'M 188 846 V 882 M 198 846 V 882 M 210 846 V 882', 'M 18 634 H 76 V 570 H 148'],
      nodes: [[76, 796, 10, 1], [174, 850, 4, 0], [112, 696, 6, 0], [262, 786, 5, 0], [64, 616, 4, 0], [236, 642, 8, 1], [326, 850, 3, 0], [182, 668, 3, 0], [314, 686, 3, 0]],
      pads: [[18, 850], [104, 824], [204, 774], [282, 828], [42, 576], [320, 600]],
      dots: [[18, 824], [30, 824], [42, 824], [290, 762], [302, 762], [314, 762], [38, 576], [50, 576], [62, 576]],
      polygons: ['12,748 24,741 36,748 36,762 24,769 12,762', '286,628 300,620 314,628 314,644 300,652 286,644'],
      runners: [0, 4, 5],
    },
    {
      id: 'bottom-right',
      paths: [
        'M 1440 854 H 1364 V 796 H 1268 V 850 H 1122', 'M 1422 748 H 1326 V 696 H 1182 V 786 H 1090',
        'M 1440 654 H 1376 V 616 H 1254 V 668 H 1102', 'M 1404 890 V 832 H 1328 V 770 H 1220',
        'M 1352 586 L 1294 642 H 1200 V 596 H 1090', 'M 1278 900 V 858 H 1194 V 804 H 1110',
        'M 1428 560 H 1388 V 600 H 1324', 'M 1218 878 H 1154 V 824 H 1090',
        'M 1424 714 H 1392 V 678 H 1346', 'M 1182 726 H 1128 V 686 H 1084',
      ],
      grids: ['M 1440 808 H 1386 M 1440 818 H 1386 M 1428 786 H 1342', 'M 1252 846 V 882 M 1242 846 V 882 M 1230 846 V 882', 'M 1422 634 H 1362 V 570 H 1290'],
      nodes: [[1364, 796, 10, 1], [1268, 850, 4, 0], [1326, 696, 6, 0], [1182, 786, 5, 0], [1376, 616, 4, 0], [1200, 642, 8, 1], [1122, 850, 3, 0], [1254, 668, 3, 0], [1128, 686, 3, 0]],
      pads: [[1410, 850], [1320, 824], [1228, 774], [1144, 828], [1390, 576], [1104, 600]],
      dots: [[1422, 824], [1410, 824], [1398, 824], [1150, 762], [1138, 762], [1126, 762], [1402, 576], [1390, 576], [1378, 576]],
      polygons: ['1404,748 1416,741 1428,748 1428,762 1416,769 1404,762', '1126,628 1140,620 1154,628 1154,644 1140,652 1126,644'],
      runners: [0, 4, 6],
    },
  ]

  return (
    <div className="circuit-traces" aria-hidden="true">
      <svg viewBox="0 0 1440 900" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="circuit-junction" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fff" />
            <stop offset="22%" stopColor="#fb7185" />
            <stop offset="58%" stopColor="#f43f5e" stopOpacity="0.62" />
            <stop offset="100%" stopColor="#f43f5e" stopOpacity="0" />
          </radialGradient>
          <filter id="circuit-glow" x="-250%" y="-250%" width="600%" height="600%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>
        {clusters.map((cluster) => (
          <g key={cluster.id} className={`circuit-ecosystem circuit-ecosystem-${cluster.id}`}>
            <g className="circuit-grid-fragments">
              {cluster.grids.map((d, index) => <path key={`grid-${index}`} d={d} fill="none" stroke="rgba(244,63,94,0.095)" strokeWidth="0.85" />)}
            </g>
            <g className="circuit-main-traces">
              {cluster.paths.map((d, index) => (
                <path
                  key={`trace-${index}`}
                  id={`circuit-${cluster.id}-${index}`}
                  className={`circuit-trace circuit-field-trace ${index % 4 === 0 ? 'circuit-trace-active' : ''}`}
                  d={d}
                  fill="none"
                  stroke={index % 3 === 0 ? 'rgba(225,29,72,0.2)' : 'rgba(244,63,94,0.12)'}
                  strokeWidth={index % 4 === 0 ? '1.25' : '0.8'}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              ))}
            </g>
            <g className="circuit-pads">
              {cluster.pads.map(([x, y], index) => <rect key={`pad-${index}`} x={x - 3} y={y - 2} width="6" height="4" rx="0.8" fill="rgba(244,63,94,0.2)" />)}
              {cluster.dots.map(([cx, cy], index) => <circle key={`dot-${index}`} cx={cx} cy={cy} r="1.4" fill="rgba(244,63,94,0.22)" />)}
              {cluster.polygons.map((points, index) => <polygon key={`poly-${index}`} points={points} fill="none" stroke="rgba(244,63,94,0.13)" strokeWidth="0.8" />)}
            </g>
            <g className="circuit-nodes">
              {cluster.nodes.map(([cx, cy, r, major], index) => major ? (
                <g key={`node-${index}`} className="circuit-primary-node">
                  <circle cx={cx} cy={cy} r={r * 3.4} fill="url(#circuit-junction)" opacity="0.25" />
                  <circle cx={cx} cy={cy} r={r * 1.75} fill="none" stroke="rgba(244,63,94,0.24)" strokeWidth="0.7" strokeDasharray="2 4" />
                  <circle cx={cx} cy={cy} r={r} fill="url(#circuit-junction)" filter="url(#circuit-glow)" />
                  <circle cx={cx} cy={cy} r="1.8" fill="#fff" opacity="0.9" />
                </g>
              ) : <circle key={`node-${index}`} className="circuit-via" cx={cx} cy={cy} r={r} fill="rgba(244,63,94,0.38)" />)}
            </g>
            <g className="circuit-runners">
              {cluster.runners.map((pathIndex, index) => (
                <circle key={`runner-${index}`} className="circuit-runner" r="2.1" fill="#fb7185" filter="url(#circuit-glow)">
                  <animateMotion dur={`${7 + index * 1.4}s`} begin={`${index * 1.8}s`} repeatCount="indefinite">
                    <mpath href={`#circuit-${cluster.id}-${pathIndex}`} />
                  </animateMotion>
                  <animate attributeName="opacity" values="0;0.8;0.8;0" dur={`${7 + index * 1.4}s`} begin={`${index * 1.8}s`} repeatCount="indefinite" />
                </circle>
              ))}
            </g>
          </g>
        ))}
      </svg>
    </div>
  )
}

function HolographicGeometry() {
  return (
    <div className="holographic-geometry" aria-hidden="true">
      <svg viewBox="0 0 1440 900" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(115 325)">
          <g className="holo-cluster holo-cluster-left">
            <circle r="48" fill="none" stroke="rgba(244,63,94,0.13)" strokeWidth="1" strokeDasharray="3 7" />
            <ellipse rx="70" ry="24" fill="none" stroke="rgba(251,113,133,0.14)" strokeWidth="1" />
            <ellipse rx="70" ry="24" fill="none" stroke="rgba(251,113,133,0.1)" strokeWidth="1" transform="rotate(60)" />
            <circle r="4" fill="rgba(244,63,94,0.35)" />
          </g>
        </g>
        <g transform="translate(1325 330)">
          <g className="holo-cluster holo-cluster-right">
            <polygon points="0,-58 50,-29 50,29 0,58 -50,29 -50,-29" fill="none" stroke="rgba(244,63,94,0.12)" strokeWidth="1" />
            <polygon points="0,-38 33,-19 33,19 0,38 -33,19 -33,-19" fill="none" stroke="rgba(251,113,133,0.14)" strokeWidth="1" strokeDasharray="3 5" />
            <circle r="4" fill="rgba(244,63,94,0.32)" />
          </g>
        </g>
        <g transform="translate(1290 735)">
          <g className="holo-cluster holo-cluster-bottom">
            <ellipse rx="58" ry="20" fill="none" stroke="rgba(244,63,94,0.13)" strokeWidth="1" />
            <ellipse rx="58" ry="20" fill="none" stroke="rgba(251,113,133,0.1)" strokeWidth="1" transform="rotate(90)" />
            <circle r="3.5" fill="rgba(244,63,94,0.3)" />
          </g>
        </g>
      </svg>
    </div>
  )
}