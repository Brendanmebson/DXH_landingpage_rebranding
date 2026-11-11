import { useState } from "react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import { Mail, Phone, Pin, Check } from "../components/Icons";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const update = (key) => (e) => setForm({ ...form, [key]: e.target.value });
  const submit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title="Let’s create the next big thing"
        lead="Whether you have a question about our programs or you’re ready to scale your platform, our team is here to help."
      />

      <section className="section section--flush">
        <div className="container contact">
          <div className="contact__info">
            <Reveal className="info-card tone-bg--green">
              <span className="info-card__icon"><Mail /></span>
              <span className="info-card__label">Email us</span>
              <a href="mailto:hello@dxhub.africa">hello@dxhub.africa</a>
            </Reveal>
            <Reveal className="info-card tone-bg--yellow" delay={0.05}>
              <span className="info-card__icon"><Phone /></span>
              <span className="info-card__label">Call us</span>
              <span>+234 (0) 800 DXHUB APP</span>
            </Reveal>
            <Reveal className="info-card info-card--plain" delay={0.1}>
              <span className="info-card__icon"><Pin /></span>
              <span className="info-card__label">Our innovation hub</span>
              <span>The Exchange Building, Innovation District, Lagos, Nigeria.</span>
              <small>Open Monday to Friday, 8:00 AM to 6:00 PM.</small>
            </Reveal>
          </div>

          <Reveal className="contact__form" delay={0.08}>
            {sent ? (
              <div className="contact__sent">
                <span className="contact__sent-icon"><Check width={28} height={28} strokeWidth={3} /></span>
                <h2 className="display display--sm">Message received</h2>
                <p>Thanks, {form.name.split(" ")[0] || "there"}. We’ll get back to you at {form.email}.</p>
                <button className="btn btn--outline" onClick={() => { setForm({ name: "", email: "", message: "" }); setSent(false); }}>
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={submit}>
                <h2 className="display display--sm">Send us a message</h2>
                <label className="field">
                  <span>Full name</span>
                  <input required value={form.name} onChange={update("name")} placeholder="Your full name" autoComplete="name" />
                </label>
                <label className="field">
                  <span>Email address</span>
                  <input required type="email" value={form.email} onChange={update("email")} placeholder="you@company.com" autoComplete="email" />
                </label>
                <label className="field">
                  <span>Message</span>
                  <textarea required rows={5} value={form.message} onChange={update("message")} placeholder="What can we help you with?" />
                </label>
                <button type="submit" className="btn btn--dark">Send Message</button>
              </form>
            )}
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default Contact;
