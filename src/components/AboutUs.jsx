import Reveal from "./Reveal";
import AboutImg from "../assets/AboutUs_img.png";

const pillars = [
  { label: "People", note: "Raising digital leaders" },
  { label: "Platforms", note: "Empowering startups" },
  { label: "Products", note: "Scaling real solutions" },
];

const AboutUs = () => (
  <section className="section" id="about">
    <div className="container split">
      <div>
        <Reveal as="p" className="eyebrow">Who we are</Reveal>
        <Reveal as="h2" className="display display--md" delay={0.05}>
          Pioneering the digital frontier
        </Reveal>
        <Reveal as="p" className="lead" delay={0.1}>
          We are a hub where bold ideas meet world-class execution. By bridging the gap
          between raw talent and industry-defining technology, we’re building a future where
          innovation scales without limits.
        </Reveal>
        <Reveal as="p" className="quote-line" delay={0.15}>
          “Our mission is to empower the next generation of digital leaders with the tools,
          mentorship, and opportunities they need to change the world.”
        </Reveal>
        <Reveal className="pillars" delay={0.2}>
          {pillars.map((p) => (
            <div key={p.label} className="pillar">
              <strong>{p.label}</strong>
              <span>{p.note}</span>
            </div>
          ))}
        </Reveal>
      </div>
      <Reveal className="about__art" delay={0.1}>
        <div className="about__blob" />
        <img src={AboutImg} alt="Learners, mentors and founders in the DX community" />
      </Reveal>
    </div>
  </section>
);

export default AboutUs;
