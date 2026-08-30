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
    description: "Quality education from experienced educators.",
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
    title: "Holistic Development",
    description: "Building character, leadership and life skills.",
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
    title: "Modern Facilities",
    description: "State-of-the-art facilities that support learning.",
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
    title: "Global Perspective",
    description: "Preparing students to thrive in a changing world.",
  },
];

const statistics = [
  {
    number: "1200+",
    label: "Students",
  },
  {
    number: "45+",
    label: "Teachers",
  },
  {
    number: "98%",
    label: "Pass Rate",
  },
  {
    number: "20+",
    label: "Clubs & Activities",
  },
];

export default function Highlights() {
  return (
    <section className={styles.highlights}>
      <div className={styles.container}>
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