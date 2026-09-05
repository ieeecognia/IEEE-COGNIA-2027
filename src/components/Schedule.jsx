import useScrollReveal from '../hooks/useScrollReveal'
import Background3D from './Background3D'

const DATES = [
  { date: '01 January 2027', title: 'Submission Start Date', icon: 'lucide:rocket' },
  { date: '31 March2027', title: 'Submission Deadline', icon: 'lucide:file-up' },
  { date: '30 May 2027', title: 'Acceptance Notification', icon: 'lucide:check-circle' },
  { date: '15 June 2027', title: 'Registration Deadline', icon: 'lucide:credit-card' },
  { date: '30 June 2027', title: 'Camera Ready Submission', icon: 'lucide:file-check' },
  { date: '28 – 29 August 2027', title: 'Conference Dates', icon: 'lucide:calendar-check' },
]

export default function Schedule() {
  useScrollReveal()

  return (
    <section id="schedule" className="section">
      <Background3D variant="schedule" />
      <div className="container">
        <div className="section-header center reveal">
          <div className="section-label"><span className="line" /> Conference Schedule <span className="line" /></div>
          <h2 className="section-title">Important <span className="red">Dates</span></h2>
          <p className="section-desc">Mark your calendars with these key dates leading up to the conference.</p>
        </div>
        <div className="timeline">
          {DATES.map((d, i) => (
            <div key={i} className={`timeline-item reveal reveal-delay-${Math.min(i + 1, 3)}`}>
              <div className="timeline-dot">
                <span className="iconify" data-icon={d.icon} />
              </div>
              <div className="timeline-content">
                <div className="timeline-date">{d.date}</div>
                <div className="timeline-title">{d.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}