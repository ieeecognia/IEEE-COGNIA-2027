import useCountdown from '../hooks/useCountdown'
import Background3D from './Background3D'

export default function Hero({ onNavClick, onSubPage }) {
  const { days, hours, mins, secs } =
    useCountdown('2027-08-28T09:00:00+05:30')

  const handleRegisterClick = (e) => {
    e.preventDefault()

    if (onSubPage) {
      onSubPage('registration')
    }
  }

  const handleSubmitPaperClick = (e) => {
    e.preventDefault()

    if (onSubPage) {
      onSubPage('registration')
    }
  }

  return (
    <section id="home" className="hero-section">
      <Background3D variant="hero" />

      <div className="hero-content">

        <div className="hero-badge">
          <span className="pulse-dot" />
          <span className="hero-badge-text">A CSE(Data Science), IEM Kolkata Conference</span>
        </div>

        <p className="hero-pre-title" style={{ marginTop: '20px' }}>
          In Association with{' '}
          <a
            href="https://ewh.ieee.org/r10/calcutta/"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-pre-title-link"
            style={{ color: '#1F4E78', fontWeight: 'bold' }}
          >
            IEEE Kolkata Section
          </a>
          {' '}presents
        </p>

        <h1 className="hero-title">
          IEEE <span className="red">COGNIA</span>
        </h1>

        <div className="hero-year">
          2027
        </div>

        <p className="hero-subtitle">
          <strong>
            International Conference on Cognitive AI,
            Data Science, Embedded Systems, Electronics
            &amp; Intelligent Computing
          </strong>
        </p>

        <p className="conf-record">
          IEEE Conference Record Number:{' '}
          <strong>#xxxxx</strong>
        </p>

        <div className="hero-meta">

          <div className="hero-meta-item">
            <span
              className="iconify"
              data-icon="lucide:calendar-days"
            />
            28 – 29 August 2027
          </div>

          <div className="hero-meta-item">
            <span
              className="iconify"
              data-icon="lucide:map-pin"
            />

            <a
              href="https://www.google.com/maps/place/University+of+Engineering+%26+Management,+Kolkata+(UEM)/@22.5618401,88.4887481,17z/data=!3m1!4b1!4m6!3m5!1s0x3a020b267a3cdc13:0xb3b21d652126f40!8m2!3d22.5618401!4d88.4887481!16s%2Fg%2F11c4pg5gwf?entry=ttu&g_ep=EgoyMDI2MDgxOS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-location-link"
            >
              University of Engineering & Management (UEM), Kolkata
            </a>
          </div>

        </div>

        <div className="hero-buttons">

          <a
            href="#registration"
            className="btn-primary"
            onClick={handleRegisterClick}
          >
            <span
              className="iconify"
              data-icon="lucide:user-plus"
              style={{ fontSize: 18 }}
            />
            Register Now
          </a>

          <a
            href="#registration"
            className="btn-secondary"
            onClick={handleSubmitPaperClick}
          >
            <span
              className="iconify"
              data-icon="lucide:file-text"
              style={{ fontSize: 18 }}
            />
            Submit Paper
          </a>

        </div>

        <p className="countdown-label">
          Conference Begins In
        </p>

        <div className="countdown">
          {[
            { value: days, label: 'Days' },
            { value: hours, label: 'Hours' },
            { value: mins, label: 'Minutes' },
            { value: secs, label: 'Seconds' },
          ].map((item) => (
            <div
              key={item.label}
              className="countdown-card"
            >
              <div className="countdown-number">
                {item.value}
              </div>

              <div className="countdown-text">
                {item.label}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* ===== WATER WAVE DIVIDER: Home → About ===== */}
      <div className="hero-wave-divider">
        <svg
          className="wave-svg"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,40 C240,110 480,10 720,60 C960,110 1200,10 1440,60 L1440,120 L0,120 Z"
            fill="#FFE4E6"
            opacity="0.5"
          />

          <path
            d="M0,60 C240,20 480,100 720,70 C960,20 1200,100 1440,70 L1440,120 L0,120 Z"
            fill="#FFF1F2"
            opacity="0.8"
          />

          <path
            d="M0,85 C240,55 480,105 720,85 C960,55 1200,105 1440,85 L1440,120 L0,120 Z"
            fill="#FFFFFF"
            opacity="0.95"
          />
        </svg>
      </div>

    </section>
  )
}
