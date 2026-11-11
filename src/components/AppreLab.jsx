import { Link } from "react-router-dom";
import Reveal from "./Reveal";
import ApprelabImg from "../assets/Apprelab_img.png";
import { Check, ArrowUp } from "./Icons";

const steps = [
  { title: "Learn", desc: "Take micro-courses created by industry mentors." },
  { title: "Project", desc: "Real projects posted by businesses and SMEs." },
  { title: "Apply", desc: "Land projects via our exclusive WorkLab." },
  { title: "Guide", desc: "Work under 1-on-1 expert mentorship." },
  { title: "Earn", desc: "Everyone gets paid for successful milestones." },
  { title: "Hired", desc: "Top performers get full-time offers." },
];

const features = [
  { name: "Micro Courses", desc: "AI-assisted, practical lessons.", tone: "blue" },
  { name: "WorkLab", desc: "Real projects with milestone payments.", tone: "green" },
  { name: "Mentorship", desc: "1-on-1 guidance and smart matching.", tone: "pink" },
  { name: "Micro Bootcamp", desc: "Short, intensive live programs.", tone: "yellow" },
];

const AppreLab = ({ showCta = true }) => (
  <section className="section" id="apprelab">
    <div className="container">
      <div className="split split--lab">
        <div>
          <Reveal as="p" className="eyebrow">AppreLab</Reveal>
          <Reveal as="h2" className="display display--lg" delay={0.05}>
            Where learning power becomes <em>earning</em> power
          </Reveal>
          <Reveal as="p" className="lead" delay={0.1}>
            Stop learning in a vacuum. Start building real solutions for real businesses and
            get rewarded for your growth.
          </Reveal>
          {showCta && (
            <Reveal className="hero__ctas hero__ctas--left" delay={0.15}>
              <Link to="/worklab" className="btn btn--dark">Explore WorkLab</Link>
            </Reveal>
          )}
        </div>
        <Reveal className="lab__art" delay={0.1}>
          <div className="lab__circle">
            <img src={ApprelabImg} alt="A learner working on a laptop" loading="lazy" />
          </div>
          <div className="lab__badge">
            <span className="lab__badge-icon"><Check width={16} height={16} strokeWidth={3} /></span>
            <div>
              <strong>Milestone paid</strong>
              <span>Payment released</span>
            </div>
          </div>
          <div className="lab__badge lab__badge--top">
            <span className="lab__badge-icon lab__badge-icon--yellow"><ArrowUp width={16} height={16} strokeWidth={3} /></span>
            <div>
              <strong>New project access</strong>
              <span>WorkLab</span>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="lab__grid">
        <Reveal className="steps-card">
          <h3 className="display display--sm">The road to growth</h3>
          <p className="steps-card__sub">A seamless flow from novice to industry professional.</p>
          <ol className="steps">
            {steps.map((s, i) => (
              <li key={s.title}>
                <span className="steps__n">{String(i + 1).padStart(2, "0")}</span>
                <span><strong>{s.title}.</strong> {s.desc}</span>
              </li>
            ))}
          </ol>
        </Reveal>
        <div>
          <Reveal as="h3" className="display display--sm lab__cap-title">Core capabilities</Reveal>
          <div className="features">
            {features.map((f, i) => (
              <Reveal key={f.name} className={`feature feature--${f.tone}`} delay={i * 0.06}>
                <h4>{f.name}</h4>
                <p>{f.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AppreLab;
