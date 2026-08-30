import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  const quickLinks = [
    { label: "About Us", href: "/about" },
    { label: "Academics", href: "/academics" },
    { label: "Admissions", href: "/admissions" },
    { label: "Student Life", href: "/student-life" },
    { label: "News & Events", href: "/news-events" },
    { label: "Contact Us", href: "/contact" },
  ];

  const resources = [
    { label: "Downloads", href: "/downloads" },
    { label: "School Calendar", href: "/calendar" },
    { label: "Forms", href: "/forms" },
    { label: "Policies", href: "/policies" },
    { label: "Careers", href: "/careers" },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Brand */}
        <div className={styles.brandColumn}>
          <div className={styles.brand}>
            <div className={styles.logo}>SM</div>

            <div>
              <h3>ST. MARTIN MWIBALE</h3>
              <span>SENIOR HIGH SCHOOL</span>
            </div>
          </div>

          <p className={styles.description}>
            Building a community of learners, leaders and changemakers through
            academic excellence, strong character and holistic development.
          </p>

          <div className={styles.contactInfo}>
            <p>📍 P.O. Box 123, Bungoma, Kenya</p>
            <p>✉ info@stmartinmwibale.sc.ke</p>
            <p>☎ +254 700 123 456</p>
          </div>
        </div>

        {/* Quick Links */}
        <div className={styles.linksColumn}>
          <h4>QUICK LINKS</h4>

          <div className={styles.links}>
            {quickLinks.map((link) => (
              <Link key={link.label} href={link.href}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Resources */}
        <div className={styles.linksColumn}>
          <h4>RESOURCES</h4>

          <div className={styles.links}>
            {resources.map((link) => (
              <Link key={link.label} href={link.href}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Community */}
        <div className={styles.communityColumn}>
          <h4>CONNECT WITH US</h4>

          <p>
            Stay connected with the latest school news, events and important
            announcements.
          </p>

          <Link href="/contact" className={styles.communityButton}>
            JOIN OUR COMMUNITY →
          </Link>

          <a
            href="https://wa.me/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.whatsapp}
          >
            ◉ Chat with us on WhatsApp
          </a>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className={styles.bottom}>
        <div className={styles.bottomContainer}>
          <p>
            © {new Date().getFullYear()} St. Martin Mwibale Senior High School.
            All Rights Reserved.
          </p>

          <div className={styles.legalLinks}>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}