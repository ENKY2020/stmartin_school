import styles from "./Highlights.module.css";

const highlights = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M2 10 12 4l10 6-10 6L2 10Z" />
        <path d="M6 12v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5" />
      </svg>
    ),
    title: "Academic Excellence",
    description:
      "Focused teaching and learning that supports steady academic growth and achievement.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Leadership & Character",
    description:
      "Nurturing responsible, disciplined and confident students prepared for life.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M3 21h18" />
        <path d="M5 21V9l7-5 7 5v12" />
        <path d="M9 21v-6h6v6" />
        <path d="M8 10h.01" />
        <path d="M16 10h.01" />
      </svg>
    ),
    title: "Supportive Learning Environment",
    description:
      "A school environment designed to help every learner grow academically and personally.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18" />
        <path d="M12 3a14 14 0 0 1 0 18" />
        <path d="M12 3a14 14 0 0 0 0 18" />
      </svg>
    ),
    title: "Student Life",
    description:
      "Opportunities beyond the classroom through clubs, activities and school experiences.",
  },
];

const statistics = [
  {
    number: "1,100+",
    label: "Student Enrollment",
  },
  {
    number: "30+",
    label: "Dedicated Teachers",
  },
  {
    number: "62%",
    label: "Pass Rate",
  },
  {
    number: "10+",
    label: "Student Clubs",
  },
];

export default function Highlights() {
  return (
    <section className={styles.highlights}>
      <div className={styles.container}>
        <div className={styles.intro}>
          <span className={styles.eyebrow}>WHY ST. MARTIN MWIBALE</span>

          <h2>
            Building Strong Foundations
            <br />
            For Future Success.
          </h2>

          <p>
            At St. Martin Mwibale Secondary School, we combine academic
            commitment, character development and meaningful student
            experiences to help learners reach their full potential.
          </p>
        </div>

        {/* VALUE PILLARS */}
        <div className={styles.pillars}>
          {highlights.map((item) => (
            <article className={styles.pillar} key={item.title}>
              <div className={styles.iconWrapper}>{item.icon}</div>

              <div className={styles.pillarContent}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>

        {/* PERFORMANCE HIGHLIGHT */}
        <div className={styles.performanceBanner}>
          <div className={styles.performanceContent}>
            <span className={styles.performanceLabel}>
              ACADEMIC PERFORMANCE
            </span>

            <h3>Committed to Continuous Improvement</h3>

            <p>
              Our learners continue to build strong academic foundations
              supported by dedicated teachers and a focused learning
              environment.
            </p>
          </div>

          <div className={styles.gradeCard}>
            <span>AVERAGE GRADE</span>
            <strong>C</strong>
            <small>PLAIN</small>
          </div>
        </div>

        {/* STATISTICS */}
        <div className={styles.statistics}>
          {statistics.map((stat) => (
            <div className={styles.stat} key={stat.label}>
              <span className={styles.statNumber}>{stat.number}</span>
              <span className={styles.statLabel}>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}