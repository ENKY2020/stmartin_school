"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [portalOpen, setPortalOpen] = useState(false);
  const [applyOpen, setApplyOpen] = useState(false);
  const [donateOpen, setDonateOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileOpen(false);
  };

  return (
    <header className={styles.navbar}>
      <div className={styles.navContainer}>
        {/* ========================================
            LOGO / SCHOOL BRAND
        ======================================== */}
        <Link
          href="/"
          className={styles.brand}
          onClick={closeMobileMenu}
        >
          <div className={styles.logoPlaceholder}>
            <span>SM</span>
          </div>

          <div className={styles.brandText}>
            <h1>ST. MARTIN MWIBALE</h1>
            <span>SENIOR SCHOOL</span>
            <p>Excellence. Integrity. Service.</p>
          </div>
        </Link>

        {/* ========================================
            DESKTOP NAVIGATION
        ======================================== */}
        <nav className={styles.desktopNav} aria-label="Main navigation">
          <Link href="#home">Home</Link>
          <Link href="#about">About Us</Link>
          <Link href="#academics">Academics</Link>
          <Link href="#admissions">Admissions</Link>
          <Link href="#student-life">Student Life</Link>
          <Link href="#news">News & Events</Link>
        </nav>

        {/* ========================================
            DESKTOP ACTION BUTTONS
        ======================================== */}
        <div className={styles.navActions}>

          {/* STUDENT PORTAL */}
          <div
            className={styles.dropdown}
            onMouseEnter={() => setPortalOpen(true)}
            onMouseLeave={() => setPortalOpen(false)}
          >
            <button
              type="button"
              className={`${styles.actionButton} ${styles.portalButton}`}
              onClick={() => setPortalOpen((previous) => !previous)}
              aria-expanded={portalOpen}
            >
              <span>STUDENT PORTAL</span>
              <span className={styles.arrow}>⌄</span>
            </button>

            {portalOpen && (
              <div className={styles.dropdownMenu}>
                <Link href="/student-login">Student Login</Link>
                <Link href="/student-dashboard">Student Dashboard</Link>
                <Link href="/academic-results">Academic Results</Link>
                <Link href="/school-reports">School Reports</Link>
                <Link href="/timetable">Timetable</Link>
                <Link href="/learning-resources">Learning Resources</Link>
                <Link href="/announcements">Announcements</Link>
              </div>
            )}
          </div>

          {/* APPLY NOW */}
          <div
            className={styles.dropdown}
            onMouseEnter={() => setApplyOpen(true)}
            onMouseLeave={() => setApplyOpen(false)}
          >
            <button
              type="button"
              className={`${styles.actionButton} ${styles.applyButton}`}
              onClick={() => setApplyOpen((previous) => !previous)}
              aria-expanded={applyOpen}
            >
              <span>APPLY NOW</span>
              <span className={styles.arrow}>⌄</span>
            </button>

            {applyOpen && (
              <div className={styles.dropdownMenu}>
                <Link href="/apply">Apply for Admission</Link>
                <Link href="/requirements">
                  Application Requirements
                </Link>
                <Link href="/application-form">
                  Application Form
                </Link>
                <Link href="/admission-process">
                  Admission Process
                </Link>
                <Link href="/check-application">
                  Check Application Status
                </Link>
              </div>
            )}
          </div>

          {/* DONATE */}
          <div
            className={styles.dropdown}
            onMouseEnter={() => setDonateOpen(true)}
            onMouseLeave={() => setDonateOpen(false)}
          >
            <button
              type="button"
              className={`${styles.actionButton} ${styles.donateButton}`}
              onClick={() => setDonateOpen((previous) => !previous)}
              aria-expanded={donateOpen}
            >
              <span>DONATE</span>
              <span className={styles.arrow}>⌄</span>
            </button>

            {donateOpen && (
              <div className={styles.dropdownMenu}>
                <Link href="/donate">Make a Donation</Link>
                <Link href="/sponsor">Sponsor a Student</Link>
                <Link href="/development">
                  School Development Fund
                </Link>
                <Link href="/giving">Alumni Giving</Link>
                <Link href="/partners">Partner With Us</Link>
              </div>
            )}
          </div>
        </div>

        {/* ========================================
            MOBILE MENU TOGGLE
        ======================================== */}
        <button
          type="button"
          className={styles.mobileToggle}
          onClick={() => setMobileOpen((previous) => !previous)}
          aria-label="Toggle navigation"
          aria-expanded={mobileOpen}
        >
          <span className={mobileOpen ? styles.barActive : ""}></span>
          <span className={mobileOpen ? styles.barActive : ""}></span>
          <span className={mobileOpen ? styles.barActive : ""}></span>
        </button>
      </div>

      {/* ========================================
          MOBILE NAVIGATION
      ======================================== */}
      {mobileOpen && (
        <nav
          className={styles.mobileMenu}
          aria-label="Mobile navigation"
        >
          <Link href="#home" onClick={closeMobileMenu}>
            Home
          </Link>

          <Link href="#about" onClick={closeMobileMenu}>
            About Us
          </Link>

          <Link href="#academics" onClick={closeMobileMenu}>
            Academics
          </Link>

          <Link href="#admissions" onClick={closeMobileMenu}>
            Admissions
          </Link>

          <Link href="#student-life" onClick={closeMobileMenu}>
            Student Life
          </Link>

          <Link href="#news" onClick={closeMobileMenu}>
            News & Events
          </Link>

          <div className={styles.mobileDivider}></div>

          <Link href="/student-login" onClick={closeMobileMenu}>
            Student Portal
          </Link>

          <Link href="/apply" onClick={closeMobileMenu}>
            Apply Now
          </Link>

          <Link href="/donate" onClick={closeMobileMenu}>
            Donate
          </Link>
        </nav>
      )}
    </header>
  );
}