import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import AppreLab from "../components/AppreLab";
import WhyChooseDX from "../components/WhyChooseDX";

const WorkLab = () => (
  <>
    <PageHero
      eyebrow="The WorkLab experience"
      title="Where talent meets real projects"
      lead="The exclusive platform for AppreLab graduates to apply their skills, build portfolios, and get paid for real-world impact."
    >
      <Link to="/contact" className="btn btn--dark">Apply for Membership</Link>
      <Link to="/pricing" className="btn btn--outline">See Plans</Link>
    </PageHero>

    <AppreLab showCta={false} />
    <WhyChooseDX />

    <section className="section">
      <div className="container ready">
        <Reveal as="h2" className="display display--lg">Ready to start?</Reveal>
        <Reveal as="p" className="lead" delay={0.05}>
          Join the WorkLab today and become part of Africa’s most driven group of digital builders.
        </Reveal>
        <Reveal className="hero__ctas" delay={0.1}>
          <Link to="/contact" className="btn btn--dark">Apply for Membership</Link>
        </Reveal>
      </div>
    </section>
  </>
);

export default WorkLab;
