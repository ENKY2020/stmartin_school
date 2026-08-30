import styles from "./PortalPreview.module.css";

export default function PortalPreview() {
  return (
    <section className={styles.portalSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <div>
            <span className={styles.eyebrow}>STUDENT EXPERIENCE</span>

            <h2>Student Portal</h2>

            <p>
              Everything students need in one connected digital learning space.
            </p>
          </div>

          <button className={styles.portalButton}>
            EXPLORE PORTAL <span>→</span>
          </button>
        </div>

        <div className={styles.portalPreview}>
          {/* =========================
              SIDEBAR
          ========================== */}
          <aside className={styles.sidebar}>
            <div className={styles.portalBrand}>
              <div className={styles.brandIcon}>SM</div>

              <div>
                <strong>STUDENT</strong>
                <span>PORTAL</span>
              </div>
            </div>

            <nav className={styles.portalNav}>
              <button className={styles.activeNav}>
                <span>▦</span>
                Dashboard
              </button>

              <button>
                <span>♙</span>
                Profile
              </button>

              <button>
                <span>▤</span>
                Academic Results
              </button>

              <button>
                <span>▥</span>
                School Reports
              </button>

              <button>
                <span>▦</span>
                Timetable
              </button>

              <button>
                <span>▧</span>
                Resources
              </button>

              <button>
                <span>◉</span>
                Announcements
              </button>

              <button>
                <span>◫</span>
                Events
              </button>

              <button>
                <span>✉</span>
                Messages
              </button>
            </nav>

            <button className={styles.logout}>
              <span>↪</span>
              Logout
            </button>
          </aside>

          {/* =========================
              MAIN PORTAL CONTENT
          ========================== */}
          <div className={styles.portalContent}>
            <div className={styles.portalTopbar}>
              <div>
                <span className={styles.welcomeText}>WELCOME BACK</span>
                <h3>Brian Ochieng</h3>
              </div>

              <div className={styles.studentAvatar}>BO</div>
            </div>

            {/* Student Details */}
            <div className={styles.studentDetails}>
              <div>
                <span>STUDENT ID</span>
                <strong>STM2024/0587</strong>
              </div>

              <div>
                <span>CLASS</span>
                <strong>Form 4A</strong>
              </div>

              <div>
                <span>TERM</span>
                <strong>Term 2, 2024</strong>
              </div>
            </div>

            {/* Dashboard Grid */}
            <div className={styles.dashboardGrid}>
              {/* Academic Summary */}
              <div className={styles.summaryCard}>
                <div className={styles.cardHeading}>
                  <span>ACADEMIC SUMMARY</span>
                  <span className={styles.cardIcon}>◈</span>
                </div>

                <div className={styles.academicStats}>
                  <div>
                    <small>AVERAGE GRADE</small>
                    <strong>B+</strong>
                  </div>

                  <div>
                    <small>ATTENDANCE</small>
                    <strong>96%</strong>

                    <div className={styles.progressBar}>
                      <span />
                    </div>
                  </div>
                </div>
              </div>

              {/* Announcements */}
              <div className={styles.announcementsCard}>
                <div className={styles.cardHeading}>
                  <span>ANNOUNCEMENTS</span>
                  <span className={styles.cardIcon}>◉</span>
                </div>

                <div className={styles.announcementList}>
                  <div>
                    <span className={styles.dot} />

                    <div>
                      <strong>Maths Extra Lessons</strong>
                      <small>Tomorrow at 3:30 PM</small>
                    </div>
                  </div>

                  <div>
                    <span className={styles.dot} />

                    <div>
                      <strong>Science Fair</strong>
                      <small>24th May 2024</small>
                    </div>
                  </div>

                  <div>
                    <span className={styles.dot} />

                    <div>
                      <strong>School Maintenance</strong>
                      <small>17th–19th May 2024</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Access */}
            <div className={styles.quickAccess}>
              <div className={styles.quickHeading}>
                <span>QUICK ACCESS</span>
              </div>

              <div className={styles.quickGrid}>
                <button className={styles.quickCard}>
                  <span className={styles.quickIcon}>▤</span>
                  <strong>Results</strong>
                  <small>View your academic results</small>
                </button>

                <button className={styles.quickCard}>
                  <span className={styles.quickIcon}>▦</span>
                  <strong>Timetable</strong>
                  <small>View your class schedule</small>
                </button>

                <button className={styles.quickCard}>
                  <span className={styles.quickIcon}>▧</span>
                  <strong>Resources</strong>
                  <small>Access learning materials</small>
                </button>

                <button className={styles.quickCard}>
                  <span className={styles.quickIcon}>▤</span>
                  <strong>Reports</strong>
                  <small>View school reports</small>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}