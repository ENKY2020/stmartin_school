import Link from "next/link";
import styles from "./CallToAction.module.css";

export default function CallToAction() {
  return (
    <section className={styles.cta}>
      <div className={styles.overlay}></div>

      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.eyebrow}>
            ✦ JOIN ST. MARTIN MWIBALE
          </span>

          <h2>
            Nurturing Potential.
            <span> Building Futures.</span>
          </h2>

          <p>
            Give your child the opportunity to learn, grow, lead and thrive in
            an environment built around academic excellence, character and
            lifelong success.
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
        </div>

        <div className={styles.sideCard}>
          <div className={styles.cardIcon}>SM</div>

          <div>
            <span>ADMISSIONS OPEN</span>
            <strong>Begin Your Journey With Us</strong>
          </div>

          <Link href="/admissions" className={styles.cardArrow}>
            →
          </Link>
        </div>
      </div>
    </section>
  );
}