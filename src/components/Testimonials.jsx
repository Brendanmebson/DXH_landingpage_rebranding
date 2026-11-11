import Reveal from "./Reveal";
import { Star } from "./Icons";

const testimonials = [
  {
    name: "Amelia Joseph",
    role: "Tech Lead @ Innovate",
    tone: "green",
    quote:
      "DXHub transformed how we approach digital strategy. Their team doesn’t just deliver code; they deliver solutions that actually move the needle for our business.",
  },
  {
    name: "Jacob Joshua",
    role: "Founder, AppreLab",
    tone: "yellow",
    quote:
      "The mentorship and technical support we received from the hub were pivotal in launching our platform. They truly understand the startup lifecycle.",
  },
  {
    name: "Sarah Chen",
    role: "Director of Product",
    tone: "pink",
    quote:
      "I highly recommend DXHub for any enterprise looking to modernize their stack. Their attention to detail and performance-first mindset is unmatched.",
  },
];

const initials = (name) => name.split(" ").map((w) => w[0]).join("").slice(0, 2);

const Testimonials = () => (
  <section className="section" id="stories">
    <div className="container">
      <div className="section-head section-head--center">
        <Reveal as="p" className="eyebrow">Testimonials</Reveal>
        <Reveal as="h2" className="display display--md" delay={0.05}>
          Trusted by industry leaders
        </Reveal>
      </div>
      <div className="testimonials">
        {testimonials.map((t, i) => (
          <Reveal as="figure" key={t.name} className="testimonial" delay={i * 0.08}>
            <div className="testimonial__stars" aria-label="5 out of 5 stars">
              {[0, 1, 2, 3, 4].map((s) => <Star key={s} width={16} height={16} />)}
            </div>
            <blockquote>“{t.quote}”</blockquote>
            <figcaption>
              <span className={`testimonial__avatar tone--${t.tone}`}>{initials(t.name)}</span>
              <span>
                <strong>{t.name}</strong>
                <small>{t.role}</small>
              </span>
            </figcaption>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
