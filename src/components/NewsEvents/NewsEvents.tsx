import styles from "./NewsEvents.module.css";

type NewsItem = {
  type: string;
  title: string;
  description: string;
  day: string;
  month: string;
};

const newsItems: NewsItem[] = [
  {
    type: "Event",
    title: "Annual Science Fair 2026",
    description:
      "Students showcase creativity, innovation and scientific excellence during our annual science fair.",
    day: "24",
    month: "MAY",
  },
  {
    type: "Sports",
    title: "Inter-House Sports Competition",
    description:
      "A celebration of teamwork, discipline and sportsmanship across the school community.",
    day: "18",
    month: "MAY",
  },
  {
    type: "Meeting",
    title: "Parents and Teachers Meeting",
    description:
      "Working together to support student progress, wellbeing and academic success.",
    day: "15",
    month: "MAY",
  },
];

export default function NewsEvents() {
  return (
    <section className={styles.newsEvents}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <div>
            <div className={styles.eyebrow}>
              <span className={styles.line}></span>
              <span>LATEST</span>
            </div>

            <h2>NEWS &amp; EVENTS</h2>
          </div>

          <button className={styles.viewAll} type="button">
            View All <span>→</span>
          </button>
        </div>

        <div className={styles.newsList}>
          {newsItems.map((item) => (
            <article className={styles.newsItem} key={item.title}>
              <div className={styles.typeBadge}>{item.type}</div>

              <div className={styles.content}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>

              <div className={styles.dateBox}>
                <strong>{item.day}</strong>
                <span>{item.month}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}