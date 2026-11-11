import { useState } from "react";
import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import { Check } from "../components/Icons";

const plans = (annual) => [
  {
    title: "Individual",
    price: annual ? "29" : "39",
    desc: "Perfect for students and early-stage learners looking to build their digital career.",
    features: ["Resource Hub Access", "AppreLab Basic", "Community Support", "Weekly Insight Newsletter"],
    cta: "Start Learning",
  },
  {
    title: "Professional",
    price: annual ? "99" : "129",
    desc: "For those ready to scale their impact and access high-value project opportunities.",
    features: ["Priority WorkLab Access", "1-on-1 Mentorship", "Technical Certification", "Portfolio Hosting"],
    cta: "Join Professional",
    popular: true,
  },
  {
    title: "Enterprise",
    price: "Custom",
    desc: "Bespoke solutions for businesses looking to build, scale, or transform their platform.",
    features: ["Full Technical Audit", "Dedicated Project Team", "Custom Infrastructure", "Priority Support"],
    cta: "Contact Sales",
  },
];

const Pricing = () => {
  const [annual, setAnnual] = useState(true);

  return (
    <>
      <PageHero
        eyebrow="Invest in innovation"
        title="Pricing that scales"
        lead="Transparent engagement models designed for learners, specialists, and visionary organizations."
      >
        <div className="toggle" role="group" aria-label="Billing period">
          <button className={!annual ? "is-on" : ""} onClick={() => setAnnual(false)} aria-pressed={!annual}>
            Monthly
          </button>
          <button className={annual ? "is-on" : ""} onClick={() => setAnnual(true)} aria-pressed={annual}>
            Annually <span className="toggle__save">Save 25%</span>
          </button>
        </div>
      </PageHero>

      <section className="section section--flush">
        <div className="container">
          <div className="plans">
            {plans(annual).map((p, i) => (
              <Reveal key={p.title} className={`plan ${p.popular ? "plan--popular" : ""}`} delay={i * 0.06}>
                <div className="plan__head">
                  <h2>{p.title}</h2>
                  {p.popular && <span className="plan__badge">Most popular</span>}
                </div>
                <p className="plan__desc">{p.desc}</p>
                <p className="plan__price">
                  {p.price === "Custom" ? (
                    "Custom"
                  ) : (
                    <>
                      <span className="plan__cur">$</span>{p.price}<span className="plan__per">/mo</span>
                    </>
                  )}
                </p>
                <p className="plan__billing">
                  {p.price === "Custom" ? "Tailored to your scope" : annual ? "Billed annually" : "Billed monthly"}
                </p>
                <ul className="plan__features">
                  {p.features.map((f) => (
                    <li key={f}>
                      <span className="plan__check"><Check width={13} height={13} strokeWidth={3} /></span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className={`btn ${p.popular ? "btn--light" : "btn--dark"} plan__cta`}>
                  {p.cta}
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;
