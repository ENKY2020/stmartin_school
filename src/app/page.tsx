import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import Highlights from "@/components/Highlights/Highlights";
import Discover from "@/components/Discover/Discover";
import NewsEvents from "@/components/NewsEvents/NewsEvents";
import PortalPreview from "@/components/PortalPreview/PortalPreview";
import ApplicationPreview from "@/components/ApplicationPreview/ApplicationPreview";
import DonationPreview from "@/components/DonationPreview/DonationPreview";
import CallToAction from "@/components/CallToAction/CallToAction";
import Footer from "@/components/Footer/Footer";

import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      {/* =========================
          SITE NAVIGATION
      ========================== */}
      <Navbar />

      <main className={styles.home}>
        {/* =========================
            HERO SECTION
        ========================== */}
        <Hero />

        {/* =========================
            SCHOOL HIGHLIGHTS
        ========================== */}
        <Highlights />

        {/* =========================
            DISCOVER EDU RISE
        ========================== */}
        <Discover />

        {/* =========================
            NEWS & EVENTS
        ========================== */}
        <NewsEvents />

        {/* =========================
            STUDENT PORTAL PREVIEW
        ========================== */}
        <PortalPreview />

        {/* =========================
            APPLICATION PREVIEW
        ========================== */}
        <ApplicationPreview />

        {/* =========================
            DONATION PREVIEW
        ========================== */}
        <DonationPreview />

        {/* =========================
            FINAL CALL TO ACTION
        ========================== */}
        <CallToAction />
      </main>

      {/* =========================
          SITE FOOTER
      ========================== */}
      <Footer />
    </>
  );
}