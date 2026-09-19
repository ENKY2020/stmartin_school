"use client";

import Image from "next/image";
import styles from "./Discover.module.css";

export default function Discover() {
  return (
    <section className={styles.discover}>
      <div className={styles.container}>
        {/* ===============================
            CONTENT
        ================================ */}
        <div className={styles.content}>
          <span className={styles.eyebrow}>BEYOND ACADEMICS</span>

          <h2>
            More Than a <span>Classroom</span> Experience.
          </h2>

          <p className={styles.description}>
            At EDU RIDGE DEMO Secondary School, education extends far
            beyond the classroom. We create an environment where students can
            learn, connect, explore and grow into confident, responsible
            individuals.
          </p>

          <div className={styles.features}>
            <div className={styles.feature}>
              <div className={styles.number}>01</div>

              <div>
                <h4>Safe & Reliable Transport</h4>
                <p>
                  Supporting students with convenient, dependable and safe
                  school transport.
                </p>
              </div>
            </div>

            <div className={styles.feature}>
              <div className={styles.number}>02</div>

              <div>
                <h4>Leadership & Guidance</h4>
                <p>
                  Strong leadership and mentorship helping shape confident and
                  responsible students.
                </p>
              </div>
            </div>

            <div className={styles.feature}>
              <div className={styles.number}>03</div>

              <div>
                <h4>A Culture of Excellence</h4>
                <p>
                  Celebrating achievement, participation and growth both inside
                  and beyond the classroom.
                </p>
              </div>
            </div>
          </div>

          <button className={styles.cta}>
            <span>Explore Student Life</span>
            <span className={styles.arrow}>↗</span>
          </button>
        </div>

        {/* ===============================
            IMAGE COMPOSITION
        ================================ */}
        <div className={styles.visual}>
          {/* Gold accent */}
          <div className={styles.goldBlock}></div>

          {/* MAIN IMAGE - SCHOOL BUS */}
          <div className={styles.mainImage}>
            <Image
              src="/images/school/school-bus.png"
              alt="EDU RIDGE DEMO Secondary School transport"
              fill
              sizes="(max-width: 1000px) 100vw, 55vw"
              className={styles.image}
            />

            <div className={styles.imageOverlay}></div>

            <div className={styles.imageTag}>
              <span>01</span>
              <p>Safe School Transport</p>
            </div>
          </div>

          {/* LEADERSHIP IMAGE */}
          <div className={styles.leadershipImage}>
            <Image
              src="/images/school/school-leadership.png"
              alt="EDU RIDGE DEMO Secondary School leadership"
              fill
              sizes="(max-width: 1000px) 50vw, 28vw"
              className={styles.image}
            />

            <div className={styles.smallImageLabel}>
              <span>Leadership</span>
            </div>
          </div>

          {/* STUDENT ACHIEVEMENTS IMAGE */}
          <div className={styles.achievementImage}>
            <Image
              src="/images/school/student-achievements.png"
              alt="Students celebrating achievement at EDU RIDGE DEMO"
              fill
              sizes="(max-width: 1000px) 45vw, 24vw"
              className={styles.image}
            />

            <div className={styles.smallImageLabel}>
              <span>Excellence</span>
            </div>
          </div>

          {/* EDITORIAL FLOATING CARD */}
          <div className={styles.floatingCard}>
            <span className={styles.cardEyebrow}>
              THE ST. MARTIN EXPERIENCE
            </span>

            <strong>
              Learning.
              <br />
              Leading.
              <br />
              Achieving.
            </strong>
          </div>
        </div>
      </div>
    </section>
  );
}