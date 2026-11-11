import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import AboutUs from "../components/AboutUs";
import CTA from "../components/CTA";

const About = () => (
  <>
    <PageHero
      eyebrow="About DX"
      title="A collective building Africa’s digital future"
      lead="Innovators, engineers, and visionaries dedicated to raising talent and scaling products."
    >
      <Link to="/team" className="btn btn--dark">Meet the Team</Link>
      <Link to="/stories" className="btn btn--outline">Success Stories</Link>
    </PageHero>

    <AboutUs />

    <section className="section section--tint">
      <div className="container split">
        <div>
          <Reveal as="p" className="eyebrow">Our vision</Reveal>
          <Reveal as="h2" className="display display--md" delay={0.05}>
            The launchpad for digital innovation in Africa
          </Reveal>
          <Reveal as="p" className="lead" delay={0.1}>
            We want to create a seamless ecosystem where talent meets opportunity at scale.
          </Reveal>
          <Reveal as="p" className="lead" delay={0.15}>
            We believe the next generation of global tech leaders will emerge from Africa, and
            we are here to provide the infrastructure, mentorship, and capital to make that a
            reality.
          </Reveal>
        </div>
        <Reveal className="vision__img" delay={0.1}>
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1000&q=80"
            alt="A team collaborating around a table"
            loading="lazy"
          />
        </Reveal>
      </div>
    </section>

    <div className="spacer" />
    <CTA />
  </>
);

export default About;
