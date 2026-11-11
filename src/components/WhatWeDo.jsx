import Reveal from "./Reveal";
import img1 from "../assets/WhatWeDo_img1.png";
import img2 from "../assets/WhatWeDo_img2.png";
import img3 from "../assets/WhatWeDo_img3.png";

const services = [
  {
    n: "01",
    title: "Talent Incubation",
    tone: "blue",
    image: img1,
    description:
      "We nurture individuals with the right skills and mentorship, equipping them to become the next generation of digital leaders.",
  },
  {
    n: "02",
    title: "Platform Incubation",
    tone: "green",
    image: img2,
    description:
      "We empower startups and enterprises by providing platforms that accelerate growth and foster global scalability.",
  },
  {
    n: "03",
    title: "Product Innovation",
    tone: "yellow",
    image: img3,
    description:
      "We transform bold ideas into scalable digital products that solve real-world social and economic challenges.",
  },
];

const WhatWeDo = () => (
  <section className="section section--tint" id="services">
    <div className="container">
      <div className="section-head">
        <Reveal as="p" className="eyebrow">What we do</Reveal>
        <Reveal as="h2" className="display display--md" delay={0.05}>
          Driving innovation across the digital spectrum
        </Reveal>
      </div>
      <div className="services">
        {services.map((s, i) => (
          <Reveal key={s.title} className={`service service--${s.tone}`} delay={i * 0.08}>
            <div className="service__img">
              <img src={s.image} alt="" loading="lazy" />
            </div>
            <div className="service__body">
              <span className="service__n">{s.n}</span>
              <h3>{s.title}</h3>
              <p>{s.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default WhatWeDo;
