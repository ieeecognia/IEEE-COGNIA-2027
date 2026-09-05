import { useEffect } from 'react'
import Background3D from '../components/Background3D'

export default function InternationalCommittee() {
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }) }, [])

  const members = [
    {
      name: 'Ahmad Ali AlZubi',
      role: 'Professor',
      dept: '',
      org: 'King Saud University, Saudi Arabia',
    },
    {
      name: 'David Camacho',
      role: 'Professor',
      dept: '',
      org: 'Broad Institute and the Georgia Institute of Technology, USA',
    },
    {
      name: 'Ceren (Jeren Akhoundi) Babayani',
      role: 'Professor',
      dept: '',
      org: 'Middle East Technical University, Turkey',
    },
    {
      name: 'Dr. Arijit Nandi',
      role: 'Professor',
      dept: '',
      org: 'Eurecat, Barcelona, Spain',
    },
    {
      name: 'Weiwei Jiang',
      role: 'Professor',
      dept: '',
      org: 'Beijing University of Posts and Telecommunications, China',
    },
    {
      name: 'Dr. Gautam Srivastava',
      role: 'Professor',
      dept: '',
      org: 'Brandon University, Canada',
    },
    {
      name: 'Dr. Subhas Mukhopadhyay',
      role: 'Professor',
      dept: '',
      org: 'Macquarie University, Australia',
    },
    {
      name: 'Hari Mohan Pandey',
      role: 'Associate Professor',
      dept: '',
      org: 'Bournemouth University, United Kingdom',
    },
    {
      name: 'Sneha Sudhakaran',
      role: 'Associate Professor',
      dept: '',
      org: 'Florida Institute of Technology, USA',
    },
    {
      name: 'Ts. Dr. Kohbalan',
      role: 'Assistant Professor',
      dept: '',
      org: 'University Malaysia, Malaysia',
    },
    {
      name: 'Dr. Rajkumar Buyya',
      role: 'Professor',
      dept: '',
      org: 'University of Melbourne, Australia',
    },
  ]

  return (
    <div className="committee-page">
      <Background3D variant="committee" />
      <div className="committee-page-inner">

        <div className="committee-page-header">
          <div className="committee-page-label">
            <span className="line" /> IEEE COGNIA 2027 <span className="line" />
          </div>
          <h1 className="committee-page-title">International Advisors</h1>
        </div>

        {/* International Members Grid */}
        <div className="committee-section">
          <div className="member-grid">
            {members.map((m, i) => (
              <div className="member-card" key={i}>
                <div className="member-info">
                  <div className="member-role">{m.role}</div>
                  <div className="member-name">{m.name}</div>
                  {m.dept && <div className="member-org">{m.dept}</div>}
                  <div className="member-org">{m.org}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}