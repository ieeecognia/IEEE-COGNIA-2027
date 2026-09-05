import { useEffect } from 'react'
import Background3D from '../components/Background3D'

export default function NationalCommittee() {
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }) }, [])

  const members = [
    {
      name: 'Dr. Kaushik Das Sharma',
      role: 'Professor',
      dept: '',
      org: 'Head of the Department Physics, University of Calcutta',
    },
    {
      name: 'Dr. Sheli Sinha Chaudhuri',
      role: 'Professor',
      dept: '',
      org: 'Jadavpur University',
    },
    {
      name: 'Dr. Deepak Mathur',
      role: 'Professor',
      dept: '',
      org: '2024 IEEE MGA Vice-President, Ombudsman – India Council',
    },
    {
      name: 'Dr. Sangram Roy',
      role: 'Associate Professor',
      dept: '',
      org: 'NIT Sikkim',
    },
    {
      name: 'Dr. Jayanta Das',
      role: 'Professor',
      dept: '',
      org: 'IIT Kharagpur',
    },
    {
      name: 'Dr. Avijit Das',
      role: 'Professor',
      dept: '',
      org: 'IIT Kharagpur',
    },
    {
      name: 'Shubhajit Roy Chowdhury',
      role: 'Professor',
      dept: '',
      org: 'IIT Mandi',
    },
    {
      name: 'Sujata Pal',
      role: 'PhD, Associate Professor',
      dept: '',
      org: 'IIT Ropar',
    },
    {
      name: 'Diptendu Sinha Roy',
      role: 'Professor',
      dept: '',
      org: 'NIT Meghalaya',
    },
    {
      name: 'Dr. Awnish Kumar',
      role: 'Assistant Professor',
      dept: '',
      org: 'NIT Agartala',
    },
    {
      name: 'Alekha Kumar Mishra',
      role: 'Assistant Professor',
      dept: '',
      org: 'NIT Jamshedpur',
    },
    {
      name: 'Veena Goswami',
      role: 'Professor',
      dept: '',
      org: 'KIIT Bhubaneswar',
    },
    {
      name: 'K Hemant Kumar Reddy',
      role: 'Professor',
      dept: '',
      org: 'VIT Andhra Pradesh',
    },
    {
      name: 'Ram Sarkar',
      role: 'Professor',
      dept: '',
      org: 'Jadavpur University',
    },
    {
      name: 'Chandrashekhar  Azad',
      role: 'Assistant Professor',
      dept: '',
      org: 'NIT Jamshedpur',
    },
    {
      name: 'Subrata Dutta',
      role: 'Assistant Professor',
      dept: '',
      org: 'NIT Jamshedpur',
    },
    {
      name: 'Bibhas Chandra Dhara',
      role: 'Professor',
      dept: '',
      org: 'jadavpur University',
    },
    {
      name: 'Siddhayan Banerjee',
      role: 'Director',
      dept: '',
      org: 'EY',
    },
    {
      name: 'Sonamoni Mahato',
      role: 'Senior Site Reliability Engineer',
      dept: '',
      org: 'Yotta Data Services Private Limited',
    },
    {
      name: 'Sibananda Ghosh',
      role: 'Senior Service Excellence Manager',
      dept: '',
      org: 'HCLTech',
    },
    {
      name: 'Jyotirmay Bhaumik',
      role: 'Senior Technical Advisor',
      dept: '',
      org: 'Hiranmaye Energy Ltd & India Power Corporation Ltd',
    },
    {
      name: 'Soumya Kanti Ghosh',
      role: 'Professor',
      dept: '',
      org: 'IIT Kharagpur',
    },
    {
      name: 'Dr. Surbhi Agarwal',
      role: 'Associate Professor',
      dept: '',
      org: 'RV Institute of Technology and Management',
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
          <h1 className="committee-page-title">National Advisors</h1>
        </div>

        {/* National Members Grid */}
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