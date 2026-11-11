import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import { Check, ArrowRight } from "../components/Icons";
import img1 from "../assets/WhatWeDo_img1.png";
import img2 from "../assets/WhatWeDo_img2.png";
import img3 from "../assets/WhatWeDo_img3.png";

const products = [
  {
    title: "Talent Incubation",
    tagline: "Empowering the next generation",
    desc: "Our flagship program designed to bridge the gap between academic learning and industry readiness through intensive mentorship and real-project exposure.",
    features: ["1-on-1 Mentorship", "Real Project Experience", "Industry Certification"],
    image: img1,
    tone: "blue",
  },
  {
    title: "Platform Incubation",
    tagline: "Scaling visionary startups",
    desc: "We provide the infrastructure, technical expertise, and growth strategies needed to take your digital platform from MVP to global scale.",
    features: ["Cloud Infrastructure", "Go-to-market Strategy", "Technical Audit"],
    image: img2,
    tone: "green",
  },
  {
    title: "Product Innovation",
    tagline: "Transforming ideas into reality",
    desc: "From conceptualization to deployment, we build scalable digital products that solve complex socio-economic challenges in Africa and beyond.",
    features: ["Agile Development", "UX/UI Design", "Market Validation"],
    image: img3,
    tone: "yellow",
  },
];

const stats = [
  { label: "Uptime", value: "99.9%", tone: "green" },
  { label: "Speed", value: "<200ms", tone: "yellow" },
  { label: "Users", value: "1M+", tone: "pink" },
  { label: "Security", value: "Bank-grade", tone: "blue" },
];

const Products = () => (
  <>
    <PageHero
      eyebrow="Our products"
      title="Solutions for the digital economy"
      lead="We’ve built a multi-layered ecosystem that nurtures talent, accelerates platforms, and crafts innovative products from the ground up."
    />

    <section className="section section--flush">
      <div className="container rows">
        {products.map((p, i) => (
          <div key={p.title} className={`row ${i % 2 ? "row--flip" : ""}`}>
            <Reveal className={`row__media tone-bg--${p.tone}`}>
              <img src={p.image} alt="" loading="lazy" />
            </Reveal>
            <Reveal className="row__body" delay={0.08}>
              <p className="eyebrow">{p.tagline}</p>
              <h2 className="display display--md">{p.title}</h2>
              <p className="lead">{p.desc}</p>
              <ul className="checks">
                {p.features.map((f) => (
                  <li key={f}>
                    <span className={`checks__icon tone-bg--${p.tone}`}><Check width={14} height={14} strokeWidth={3} /></span>
                    {f}
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="link-arrow">
                Learn more <ArrowRight width={18} height={18} />
              </Link>
            </Reveal>
          </div>
        ))}
      </div>
    </section>

    <section className="section section--tint">
      <div className="container">
        <div className="section-head section-head--row">
          <Reveal as="h2" className="display display--md">Built for performance</Reveal>
          <Reveal as="p" className="lead" delay={0.05}>
            Our products leverage modern technology to ensure speed, security, and scalability
            for your business needs.
          </Reveal>
        </div>
        <div className="stats">
          {stats.map((s, i) => (
            <Reveal key={s.label} className={`stat tone-bg--${s.tone}`} delay={i * 0.06}>
              <span className="stat__value">{s.value}</span>
              <span className="stat__label">{s.label}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Products;
