import Link from "next/link";
import styles from "./CallToAction.module.css";

const schoolStats = [
  {
    value: "1,100+",
    label: "Students Enrolled",
  },
  {
    value: "30+",
    label: "Dedicated Teachers",
  },
  {
    value: "10+",
    label: "Student Clubs",
  },
  {
    value: "62%",
    label: "Pass Rate",
  },
];

export default function CallToAction() {
  return (
    <section className={styles.cta}>
      <div className={styles.overlay} />

      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.eyebrow}>
            ✦ DISCOVER YOUR POTENTIAL
          </span>

          <h2>
            Your Future Begins
            <span> At St. Martin Mwibale.</span>
          </h2>

          <p>
            Join a growing school community committed to academic progress,
            character development, leadership and preparing students for a
            successful future.
          </p>

          <div className={styles.actions}>
            <Link href="/admissions" className={styles.primaryButton}>
              APPLY FOR ADMISSION
              <span>→</span>
            </Link>

            <Link href="/contact" className={styles.secondaryButton}>
              TALK TO US
            </Link>
          </div>

          <div className={styles.stats}>
            {schoolStats.map((stat) => (
              <div key={stat.label} className={styles.statItem}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.sideCard}>
          <div className={styles.cardTop}>
            <div className={styles.cardIcon}>SM</div>

            <span className={styles.cardLabel}>
              ST. MARTIN MWIBALE
            </span>
          </div>

          <div className={styles.cardContent}>
            <span>ACADEMIC PERFORMANCE</span>

            <strong>Average Grade: C Plain</strong>

            <p>
              Building stronger academic foundations while developing confident,
              disciplined and responsible students.
            </p>
          </div>

          <Link href="/admissions" className={styles.cardArrow}>
            <span>EXPLORE ADMISSIONS</span>
            →
          </Link>
        </div>
      </div>
    </section>
  );
}