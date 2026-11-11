import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import { ArrowRight } from "../components/Icons";

const solutions = [
  {
    title: "Corporate Innovation",
    desc: "We help established enterprises reinvent themselves through digital transformation, process automation, and innovation-led growth strategies.",
    tags: ["Digital Transformation", "Process Automation", "R&D Outsourcing"],
    tone: "blue",
  },
  {
    title: "Startup Acceleration",
    desc: "Fueling the next wave of unicorns. We provide startups with technical co-founding, seed-stage infrastructure, and market-ready engineering teams.",
    tags: ["Technical Co-founding", "MVP Development", "Scale Consulting"],
    tone: "green",
  },
  {
    title: "Strategic Talent Sourcing",
    desc: "Connect with the top 1% of digital talent in Africa. Our vetted experts are ready to integrate into your existing teams and deliver world-class results.",
    tags: ["Vetted Engineers", "Project Managers", "UX/UI Design"],
    tone: "pink",
  },
];

const Solutions = () => (
  <>
    <PageHero
      eyebrow="Solutions"
      title="Solutions for every scale"
      lead="Whether you are a solo visionary or a global enterprise, we have the strategic frameworks and technical power to elevate your digital presence."
    />

    <section className="section section--flush">
      <div className="container">
        <div className="solutions">
          {solutions.map((s, i) => (
            <Reveal key={s.title} className="solution" delay={i * 0.05}>
              <span className={`solution__n tone-bg--${s.tone}`}>0{i + 1}</span>
              <div className="solution__main">
                <h2 className="display display--sm">{s.title}</h2>
                <p>{s.desc}</p>
                <div className="tags">
                  {s.tags.map((t) => <span key={t} className="tag">{t}</span>)}
                </div>
              </div>
              <Link to="/contact" className="link-arrow solution__link">
                View details <ArrowRight width={18} height={18} />
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    <section className="section section--cta">
      <div className="container">
        <Reveal className="cta cta--single">
          <div className="cta__arc" aria-hidden="true" />
          <div className="cta__copy">
            <h2 className="display display--lg">Need a custom solution?</h2>
            <p>
              Our experts are ready to design a bespoke strategy specifically for your unique
              challenges and goals.
            </p>
            <div className="cta__row">
              <Link to="/contact" className="btn btn--light">Schedule a Discovery Call</Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  </>
);

export default Solutions;
