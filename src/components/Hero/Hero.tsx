"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Hero.module.css";

const heroSlides = [
  {
    id: "01",
    image: "/images/school/hero/school-bus.png",
    alt: "St. Martin Mwibale Secondary School bus",
    eyebrow: "STUDENT EXPERIENCE",
    title: "Safe Transport.",
    description:
      "Supporting students with reliable transport and opportunities beyond the classroom.",
    tag: "Safe journeys. Bigger experiences.",
  },
  {
    id: "02",
    image: "/images/school/hero/administration-block.png",
    alt: "St. Martin Mwibale Secondary School administration block",
    eyebrow: "OUR CAMPUS",
    title: "A Growing Campus.",
    description:
      "A supportive learning environment designed to help students learn, grow and succeed.",
    tag: "A school built for progress.",
  },
  {
    id: "03",
    image: "/images/school/hero/boys-dormitory.png",
    alt: "Boys dormitory at St. Martin Mwibale Secondary School",
    eyebrow: "STUDENT LIFE",
    title: "Life Beyond Class.",
    description:
      "Providing students with an environment where learning, discipline and community thrive.",
    tag: "Learning. Living. Growing.",
  },
  {
    id: "04",
    image: "/images/school/hero/girls-dormitory.png",
    alt: "Girls dormitory at St. Martin Mwibale Secondary School",
    eyebrow: "A CARING COMMUNITY",
    title: "A Home For Growth.",
    description:
      "Creating a supportive school experience where every student can grow with confidence.",
    tag: "Care. Community. Confidence.",
  },
  {
    id: "05",
    image: "/images/school/hero/principal.png",
    alt: "Principal of St. Martin Mwibale Secondary School",
    eyebrow: "SCHOOL LEADERSHIP",
    title: "Leadership That Guides.",
    description:
      "Strong leadership committed to academic progress, discipline and the future of every student.",
    tag: "Vision with purpose.",
  },
  {
    id: "06",
    image: "/images/school/hero/deputy-principal.png",
    alt: "Deputy Principal of St. Martin Mwibale Secondary School",
    eyebrow: "ACADEMIC GUIDANCE",
    title: "Guidance & Excellence.",
    description:
      "Dedicated mentorship and leadership helping students build character and achieve their goals.",
    tag: "Supporting every journey.",
  },
];

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((current) =>
        current === heroSlides.length - 1 ? 0 : current + 1
      );
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const slide = heroSlides[activeSlide];

  const goToSlide = (index: number) => {
    setActiveSlide(index);
  };

  const nextSlide = () => {
    setActiveSlide((current) =>
      current === heroSlides.length - 1 ? 0 : current + 1
    );
  };

  return (
    <section className={styles.hero}>
      <div className={styles.backgroundGlow} />
      <div className={styles.gridPattern} />

      <div className={styles.container}>
        {/* LEFT CONTENT */}
        <div className={styles.content}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowLine} />
            <span>WELCOME TO ST. MARTIN MWIBALE</span>
          </div>

          <h1 className={styles.mainTitle}>
            Nurturing
            <span> Potential.</span>
            <br />
            Building <em>Futures.</em>
          </h1>

          <p className={styles.description}>
            A place where academic excellence meets character, leadership and
            opportunity, empowering every student to grow with confidence and
            purpose.
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

          <div className={styles.trustPoints}>
            <div className={styles.trustItem}>
              <span className={styles.trustNumber}>01</span>
              <div>
                <strong>Academic Excellence</strong>
                <p>Building strong foundations for success.</p>
              </div>
            </div>

            <div className={styles.trustItem}>
              <span className={styles.trustNumber}>02</span>
              <div>
                <strong>Leadership & Character</strong>
                <p>Preparing responsible students for life.</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SLIDESHOW */}
        <div className={styles.visual}>
          <div className={styles.goldBlock} />
          <div className={styles.outlineSquare} />

          <div className={styles.slider}>
            {heroSlides.map((item, index) => (
              <div
                key={item.id}
                className={`${styles.slide} ${
                  index === activeSlide ? styles.activeSlide : ""
                }`}
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  priority={index === 0}
                  sizes="(max-width: 900px) 100vw, 55vw"
                  className={styles.slideImage}
                />

                <div className={styles.imageOverlay} />
              </div>
            ))}

            {/* TYPOGRAPHY OVER IMAGE */}
            <div className={styles.imageContent}>
              <span className={styles.slideNumber}>{slide.id}</span>

              <div>
                <p className={styles.slideEyebrow}>{slide.eyebrow}</p>

                <h2>{slide.title}</h2>

                <p className={styles.slideTag}>{slide.tag}</p>
              </div>
            </div>

            {/* SLIDE CONTROLS */}
            <div className={styles.sliderControls}>
              <div className={styles.dots}>
                {heroSlides.map((item, index) => (
                  <button
                    key={item.id}
                    type="button"
                    aria-label={`Show slide ${index + 1}`}
                    onClick={() => goToSlide(index)}
                    className={`${styles.dot} ${
                      index === activeSlide ? styles.activeDot : ""
                    }`}
                  />
                ))}
              </div>

              <button
                type="button"
                className={styles.nextButton}
                onClick={nextSlide}
                aria-label="Next slide"
              >
                →
              </button>
            </div>
          </div>

          {/* FLOATING INFORMATION CARD */}
          <div className={styles.experienceCard}>
            <span className={styles.cardEyebrow}>{slide.eyebrow}</span>

            <h3>
              {slide.title.split(" ").slice(0, 2).join(" ")}
            </h3>

            <div className={styles.cardLine} />

            <p>{slide.description}</p>
          </div>
        </div>
      </div>

      <div className={styles.scrollIndicator}>
        <span>EXPLORE</span>

        <div className={styles.scrollLine}>
          <span />
        </div>
      </div>

      <div className={styles.sectionNumber}>
        {slide.id} / {String(heroSlides.length).padStart(2, "0")}
      </div>
    </section>
  );
}