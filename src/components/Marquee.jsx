const items = [
  { text: "Talent Incubation", style: "serif" },
  { text: "WORKLAB", style: "heavy" },
  { text: "Micro Courses", style: "italic" },
  { text: "mentorship", style: "light" },
  { text: "Product Innovation", style: "serif" },
  { text: "BOOTCAMPS", style: "wide" },
  { text: "Platform Incubation", style: "italic" },
  { text: "AppreLab", style: "heavy" },
];

const Marquee = () => {
  const row = [...items, ...items];
  return (
    <section className="marquee" aria-label="What DX Hub offers">
      <div className="marquee__track">
        {row.map((item, i) => (
          <span key={i} className={`marquee__item marquee__item--${item.style}`} aria-hidden={i >= items.length}>
            {item.text}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Marquee;
