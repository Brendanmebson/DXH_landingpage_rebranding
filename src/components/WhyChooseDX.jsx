import Reveal from "./Reveal";

const reasons = [
  {
    title: "Skill to income",
    body: "We bridge the gap between learning and earning, connecting verified skills directly to real-world revenue streams.",
  },
  {
    title: "Global scalability",
    body: "Our ecosystem empowers startups to build and deploy solutions that compete on a global stage from day one.",
  },
  {
    title: "Expert mentorship",
    body: "Learn from industry veterans who have built, scaled, and exited successful technology products.",
  },
  {
    title: "Real-world impact",
    body: "Work on projects that matter, solving social and economic challenges through innovative technology.",
  },
];

const WhyChooseDX = () => (
  <section className="section section--dark">
    <div className="container">
      <div className="section-head section-head--row">
        <div>
          <Reveal as="p" className="eyebrow eyebrow--light">Why choose DX</Reveal>
          <Reveal as="h2" className="display display--md" delay={0.05}>
            More than a training platform
          </Reveal>
        </div>
        <Reveal as="p" className="lead lead--light" delay={0.1}>
          We’re rewriting the rules of digital transformation by putting talent and innovation
          at the core of everything we do.
        </Reveal>
      </div>
      <div className="reasons">
        {reasons.map((r, i) => (
          <Reveal key={r.title} className="reason" delay={i * 0.06}>
            <span className="reason__n">0{i + 1}</span>
            <h3>{r.title}</h3>
            <p>{r.body}</p>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseDX;
