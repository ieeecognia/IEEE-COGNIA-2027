import { useEffect } from 'react'
import Background3D from '../components/Background3D'

const TreeCard = ({ label, name, org, variant = 'branch' }) => (
  <div className={`tree-card tree-card--${variant}`}>
    <div className="tree-card-label">{label}</div>
    <div className="tree-card-name">{name}</div>
    {org && <div className="tree-card-org">{org}</div>}
  </div>
)

const CommitteeHeading = ({ icon, title }) => (
  <div className="committee-section-header">
    <span className="committee-section-icon">{icon}</span>
    <h2 className="committee-section-title">{title}</h2>
  </div>
)

export default function ConferenceCommittee() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <div className="committee-page">
      <Background3D variant="about" />

      <div className="committee-page-inner">

        {/* =========================================================
            PAGE HEADER
        ========================================================= */}

        <div className="committee-page-header">
          <div className="committee-page-label">
            <span className="line" />
            IEEE COGNIA 2027
            <span className="line" />
          </div>

          <h1 className="committee-page-title">
            Conference Organisers
          </h1>

          
        </div>


        {/* =========================================================
            PATRON COMMITTEE
            Structure: Primary → Secondary → 6 Co-Patrons (ONE row)
        ========================================================= */}

        <div className="committee-tree-section">

          <CommitteeHeading
            icon="👑"
            title="Patrons"
          />

          <div className="committee-hierarchy">

            <TreeCard
              variant="primary"
              label="Chief Patron"
              name="Prof. Banani Chakrabarty"
              org="Chancellor, IEM Kolkata, UEM Kolkata"
            />

            <div className="hierarchy-connector" />

            <TreeCard
              variant="secondary"
              label="Patron"
              name="Prof.(Dr.) Satyajit Chakrabarty"
              org="Vice Chancellor, IEM Kolkata, UEM Kolkata"
            />

            <div className="hierarchy-connector" />

            <div className="hierarchy-connector-bar" />

            {/* All 6 Co-Patrons — single horizontal row */}
            <div className="committee-children-grid committee-children-grid--patrons">

              <TreeCard
                label="Co-Patron"
                name="Prof.(Dr). Nabarun Bhattacharya"
                org="Pro-Vice Chancellor, IEM Kolkata, UEM Kolkata"
              />

              <TreeCard
                label="Co-Patron"
                name="Prof.(Dr). Malay Ganguly"
                org="Dean – Academics, IEM Kolkata, UEM Kolkata"
              />

              <TreeCard
                label="Co-Patron"
                name="Prof.(Dr). Sanghamitra Poddar"
                org="Dean – Alumni, IEM Kolkata, UEM Kolkata"
              />

              <TreeCard
                label="Co-Patron"
                name="Prof.(Dr). Abir Chattopadhyay"
                org="Dean – Research, IEM Kolkata, UEM Kolkata"
              />

              <TreeCard
                label="Co-Patron"
                name="Prof.(Dr). Sukalyan Goswami"
                org="Registrar, IEM Kolkata, UEM Kolkata"
              />

              <TreeCard
                label="Co-Patron"
                name="Prof.(Dr). Rajiv Ganguly"
                org="Dean – Science, IEM Kolkata, UEM Kolkata"
              />

            </div>
          </div>
        </div>


        {/* =========================================================
            EXECUTIVE COMMITTEE
            Structure: 5 identical Primary (Dark Blue) boxes stacked vertically
        ========================================================= */}

        <div className="committee-tree-section">

          <CommitteeHeading
            icon="⭐"
            title="Executive Committee"
          />

          <div className="committee-hierarchy">
            {/* Box 1 */}
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
              <TreeCard
                variant="primary"
                label="Honarary Chair"
                name="Prof.(Dr). Samuel Soma A"
                org="Director – IQAC,  IEM Kolkata, UEM Kolkata"
              />
            </div>

            {/* Box 2 */}
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
              <TreeCard
                variant="primary"
                label="General Chair"
                name="Prof.(Dr). Debangshu Dey"
                org="Professor, Jadavpur University and Chairperson, IEEE Kolkata Section"
              />
            </div>

            {/* Box 3 */}
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
              <TreeCard
                variant="primary"
                label="General Chair"
                name="Prof.(Dr). Jitendra Nath Bera"
                org="Dean, Calcutta University"
              />
            </div>

            {/* Box 4 */}
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
              <TreeCard
                variant="primary"
                label="Convener"
                name="Prof.(Dr). Rajashree Paul"
                org="Director – IQAC, IEM Kolkata, UEM Kolkata"
              />
            </div>

            {/* Box 5 */}
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
              <TreeCard
                variant="primary"
                label="Conference Chair"
                name="Prof.(Dr). Susanta Ray"
                org="Professor, Jadavpur University and Secretary, IEEE Kolkata Section"
              />
            </div>

          </div>
        </div>


        {/* =========================================================
            ORGANIZING COMMITTEE
            Structure: Primary → 2 Co-Chairs
            + separate Publicity tier
            + Functional Chairs (remaining roles)
        ========================================================= */}

        <div className="committee-tree-section">

          <CommitteeHeading
            icon="🎯"
            title="Organizing Committee"
          />

          <div className="committee-hierarchy">

            <TreeCard
              variant="primary"
              label="Organizing Chair"
              name="Prof.(Dr). Nilanjan Chatterjee"
              org="Head of the Department CSE(Data Science), IEM Kolkata, UEM Kolkata"
            />

            <div className="hierarchy-connector" />

            {/* Changed to --two for 2 cards */}
            <div className="hierarchy-connector-bar hierarchy-connector-bar--two" />

            <div className="committee-children-grid">

              <TreeCard
                label="Organizing Co-Chair"
                name="Prof.(Dr). Buddhadeb Pradhan"
                org="Assistant HoD, CSE(Data Science), IEM Kolkata, UEM Kolkata"
              />

              <TreeCard
                label="Organizing Co-Chair"
                name="Prof.(Dr). Anay Ghosh"
                org="Assistant HoD, CSE(Data Science), IEM Kolkata, UEM Kolkata"
              />

            </div>
          </div>

          {/* PUBLICITY TEAM — own tier, between Organizing Co-Chairs and Functional Chairs */}
          <div className="committee-hierarchy" style={{ marginTop: '50px' }}>

            <TreeCard
              variant="primary"
              label="Publicity Chair"
              name="Prof.(Dr). Nilanjan Chatterjee"
              org="Head of the Department CSE(Data Science), IEM Kolkata, UEM Kolkata"
            />

            <div className="hierarchy-connector" />

            {/* Changed to --three for 3 cards */}
            <div className="hierarchy-connector-bar hierarchy-connector-bar--three" />

            <div className="committee-children-grid">

              <TreeCard
                label="Publicity Co-Chair"
                name="Prof. Suvobrata Sengupta"
                org="IEM Kolkata, UEM Kolkata"
              />

              <TreeCard
                label="Publicity Co-Chair"
                name="Prof. Sankar Mondal"
                org="IEM Kolkata, UEM Kolkata"
              />

              <TreeCard
                label="Publicity Co-Chair"
                name="Prof. Sudipto Kumar Mondal"
                org="IEM Kolkata, UEM Kolkata"
              />

            </div>
          </div>


          {/* FUNCTIONAL CHAIRS — converted to black box hierarchy */}
          <div className="committee-hierarchy" style={{ marginTop: '50px', gap: '20px' }}>

            <TreeCard
              variant="primary"
              label="Registration Chair"
              name="Prof. Jhilam Jana"
              org="Assistant Professor, IEM Kolkata, UEM Kolkata"
            />

            <TreeCard
              variant="primary"
              label="Finance Chair"
              name="Prof. Subhojit Paul"
              org="Assistant Professor, IEM Kolkata, UEM Kolkata"
            />

            <TreeCard
              variant="primary"
              label="Hospitality Chair"
              name="Prof. Niladri Sekhar Paul"
              org="Assistant Professor, IEM Kolkata, UEM Kolkata"
            />

            <TreeCard
              variant="primary"
              label="Website Chair"
              name="Prof.(Dr). Buddhadeb Pradhan"
              org="Assistant HoD, CSE(Data Science), IEM Kolkata, UEM Kolkata"
            />

            <TreeCard
              variant="primary"
              label="Industry & Sponsorship Chair"
              name="To Be Announced"
              org="Coming Soon"
            />

          </div>
        </div>


        {/* =========================================================
            TECHNICAL COMMITTEE
            Structure: TPC Chair → 2 TPC Co-Chairs
            + separate Publication Chair → Publication Co-Chair tier
        ========================================================= */}

        <div className="committee-tree-section">

          <CommitteeHeading
            icon="💻"
            title="Technical Committee"
          />

          <div className="committee-hierarchy">

            <TreeCard
              variant="primary"
              label="TPC Chair"
              name="Prof.(Dr). Buddhadeb Pradhan"
              org="Assistant HoD, CSE(Data Science), IEM Kolkata, UEM Kolkata"
            />

            <div className="hierarchy-connector" />

            {/* Changed to --two for 2 cards */}
            <div className="hierarchy-connector-bar hierarchy-connector-bar--two" />

            <div className="committee-children-grid">

              <TreeCard
                label="TPC Co-Chair"
                name="Prof. Subhojit Paul"
                org="Assistant Professor, IEM Kolkata, UEM Kolkata"
              />

              <TreeCard
                label="TPC Co-Chair"
                name="Prof.(Dr). Rakesh Das"
                org="Associate Professor, IEM Kolkata, UEM Kolkata"
              />

            </div>
          </div>

          {/* Publication team — own tier below TPC */}
          <div className="committee-hierarchy" style={{ marginTop: '50px' }}>

            <TreeCard
              variant="primary"
              label="Publication Chair"
              name="Prof.(Dr). Anay Ghosh"
              org="Assistant HoD, CSE(Data Science), IEM Kolkata, UEM Kolkata"
            />

            <div className="hierarchy-connector" />

            {/* Changed to --one to hide the horizontal bar for a single card */}
            <div className="hierarchy-connector-bar hierarchy-connector-bar--one" />

            <div className="committee-children-grid">

              <TreeCard
                label="Publication Co-Chair"
                name="Prof.(Dr). Nilanjan Chatterjee"
                org="Head of the Department CSE(Data Science), IEM Kolkata, UEM Kolkata"
              />

            </div>
          </div>
        </div>


        {/* =========================================================
            TRACK CHAIRS & REVIEWERS
        ========================================================= */}

        <div className="committee-tree-section">

          <CommitteeHeading
            icon="📋"
            title="Track Chairs & Reviewers"
          />

          <div className="committee-coming-soon">
            <div className="coming-soon-icon">📋</div>
            <h3 className="coming-soon-title">Track Chairs</h3>
            <p className="coming-soon-text">To Be Announced</p>
          </div>

          <div className="committee-coming-soon" style={{ marginTop: '24px' }}>
            <div className="coming-soon-icon">🔍</div>
            <h3 className="coming-soon-title">Reviewers</h3>
            <p className="coming-soon-text">To Be Announced</p>
          </div>

        </div>


        {/* =========================================================
            ADVISORY COMMITTEE
        ========================================================= */}

        <div className="committee-tree-section">

          <CommitteeHeading
            icon="🧭"
            title="Other Members"
          />

          <div className="committee-coming-soon">
            <div className="coming-soon-icon">🧭</div>
            <h3 className="coming-soon-title">Committee</h3>
            <p className="coming-soon-text">To Be Announced</p>
          </div>

        </div>

      </div>
    </div>
  )
}