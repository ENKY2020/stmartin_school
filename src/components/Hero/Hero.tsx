import Image from "next/image";
import Link from "next/link";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* BACKGROUND DECORATION */}
      <div className={styles.backgroundGlow} />
      <div className={styles.gridPattern} />

      <div className={styles.container}>
        {/* ================= LEFT CONTENT ================= */}
        <div className={styles.content}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowLine} />
            <span>WELCOME TO ST. MARTIN MWIBALE</span>
          </div>

          <h1 className={styles.title}>
            Nurturing
            <span> Potential.</span>
            <br />
            Building <em>Futures.</em>
          </h1>

          <p className={styles.description}>
            A place where academic excellence meets character, leadership
            and opportunity — empowering every student to grow with
            confidence and purpose.
          </p>

          <div className={styles.actions}>
            <Link href="/about" className={styles.outlineButton}>
              Discover Our School
              <span>↗</span>
            </Link>

            <Link href="/admissions" className={styles.primaryButton}>
              Apply Now
              <span>→</span>
            </Link>
          </div>

          {/* TRUST POINTS */}
          <div className={styles.trustPoints}>
            <div className={styles.trustItem}>
              <span className={styles.trustNumber}>01</span>
              <div>
                <strong>Academic Excellence</strong>
                <p>Building strong foundations</p>
              </div>
            </div>

            <div className={styles.trustItem}>
              <span className={styles.trustNumber}>02</span>
              <div>
                <strong>Leadership & Character</strong>
                <p>Preparing students for life</p>
              </div>
            </div>
          </div>
        </div>

        {/* ================= RIGHT VISUAL COLLAGE ================= */}
        <div className={styles.visual}>
          {/* GOLD ACCENT */}
          <div className={styles.goldBlock} />
          <div className={styles.outlineSquare} />

          {/* MAIN IMAGE — BUS */}
          <div className={`${styles.imageCard} ${styles.busImage}`}>
            <Image
              src="/images/school/school-bus.png"
              alt="St. Martin Mwibale Secondary School Bus"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 55vw"
              className={styles.image}
            />

            <div className={styles.imageOverlay} />

            <div className={styles.busCaption}>
              <span>01</span>
              <div>
                <strong>Student Life</strong>
                <p>Safe journeys. Bigger experiences.</p>
              </div>
            </div>
          </div>

          {/* LEADERSHIP */}
          <div className={`${styles.imageCard} ${styles.leadershipImage}`}>
            <Image
              src="/images/school/school-leadership.png"
              alt="St. Martin Mwibale School Leadership"
              fill
              sizes="(max-width: 900px) 55vw, 30vw"
              className={styles.image}
            />

            <div className={styles.smallImageOverlay} />

            <div className={styles.smallImageLabel}>
              <span>02</span>
              <p>Leadership</p>
            </div>
          </div>

          {/* ACHIEVEMENTS */}
          <div className={`${styles.imageCard} ${styles.achievementImage}`}>
            <Image
              src="/images/school/student-achievements.png"
              alt="Students of St. Martin Mwibale Secondary School"
              fill
              sizes="(max-width: 900px) 50vw, 25vw"
              className={styles.image}
            />

            <div className={styles.smallImageOverlay} />

            <div className={styles.smallImageLabel}>
              <span>03</span>
              <p>Achievement</p>
            </div>
          </div>

          {/* EXPERIENCE CARD */}
          <div className={styles.experienceCard}>
            <span className={styles.cardEyebrow}>
              THE ST. MARTIN EXPERIENCE
            </span>

            <h3>
              Learn.
              <br />
              <span>Lead.</span>
              <br />
              Achieve.
            </h3>

            <div className={styles.cardLine} />

            <p>
              Excellence beyond
              <br />
              the classroom.
            </p>
          </div>
        </div>
      </div>

      {/* BOTTOM SCROLL INDICATOR */}
      <div className={styles.scrollIndicator}>
        <span>EXPLORE</span>
        <div className={styles.scrollLine}>
          <span />
        </div>
      </div>

      {/* SECTION NUMBER */}
      <div className={styles.sectionNumber}>01 / 04</div>
    </section>
  );
}