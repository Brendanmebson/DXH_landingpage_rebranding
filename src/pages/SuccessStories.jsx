import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import Testimonials from "../components/Testimonials";

const stories = [
  {
    client: "AppreLab Community",
    title: "How AppreLab empowered 500+ Nigerian developers",
    result: "90% employment rate",
    desc: "Through our immersive micro-courses and WorkLab projects, we’ve helped hundreds of developers transition from learning to high-income careers.",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1000&q=80",
    tone: "green",
  },
  {
    client: "Zest Finance",
    title: "Scaling a FinTech startup to a $10M valuation",
    result: "Managed engineering team",
    desc: "We provided the technical infrastructure and engineering talent that allowed Zest to scale their operations across West Africa in record time.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1000&q=80",
    tone: "yellow",
  },
];

const SuccessStories = () => (
  <>
    <PageHero
      eyebrow="Case studies"
      title="Impact in action"
      lead="Real stories of transformation, growth, and digital excellence."
    >
      <Link to="/contact" className="btn btn--dark">Start Your Story</Link>
    </PageHero>

    <section className="section section--flush">
      <div className="container rows">
        {stories.map((s, i) => (
          <div key={s.title} className={`row ${i % 2 ? "row--flip" : ""}`}>
            <Reveal className="row__media row__media--photo">
              <img src={s.image} alt="" loading="lazy" />
            </Reveal>
            <Reveal className="row__body" delay={0.08}>
              <p className="eyebrow">{s.client}</p>
              <h2 className="display display--md">{s.title}</h2>
              <span className={`result tone-bg--${s.tone}`}>{s.result}</span>
              <p className="lead">{s.desc}</p>
            </Reveal>
          </div>
        ))}
      </div>
    </section>

    <Testimonials />
  </>
);

export default SuccessStories;
