import { useState } from "react";
import { Link } from "react-router-dom";
import DXHLogo from "../assets/DXH_logo.png";
import { ArrowRight, Facebook, XLogo, GitHub, LinkedIn, Instagram } from "./Icons";

const columns = [
  {
    title: "Solutions",
    links: [
      ["Talent Incubation", "/solutions"],
      ["Platform Growth", "/solutions"],
      ["Product Strategy", "/products"],
      ["Business Intelligence", "/solutions"],
      ["WorkLab", "/worklab"],
    ],
  },
  {
    title: "Company",
    links: [
      ["About Us", "/about"],
      ["Our Team", "/team"],
      ["Success Stories", "/stories"],
      ["Resources", "/resources"],
      ["Contact", "/contact"],
    ],
  },
];

const socials = [
  { label: "Facebook", Icon: Facebook, href: "#" },
  { label: "X (Twitter)", Icon: XLogo, href: "#" },
  { label: "GitHub", Icon: GitHub, href: "https://github.com/brendanmebson" },
  { label: "LinkedIn", Icon: LinkedIn, href: "#" },
  { label: "Instagram", Icon: Instagram, href: "#" },
];

const Footer = () => {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    if (email) setSent(true);
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__about">
            <Link to="/" aria-label="DX Innovation Hub home">
              <img src={DXHLogo} alt="DX Innovation Hub" />
            </Link>
            <p>
              We empower startups and individuals to bridge the gap between innovation and
              reality. Our mission is to raise the next generation of digital leaders.
            </p>
            <div className="socials">
              {socials.map(({ label, Icon, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  {...(href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
                >
                  <Icon width={18} height={18} />
                </a>
              ))}
            </div>
          </div>

          {columns.map((c) => (
            <div key={c.title}>
              <h4>{c.title}</h4>
              <ul>
                {c.links.map(([label, to]) => (
                  <li key={label}><Link to={to}>{label}</Link></li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4>Stay ahead</h4>
            <p className="footer__note">
              The latest insights on digital transformation and innovation, delivered to your inbox.
            </p>
            {sent ? (
              <p className="footer__thanks">Thanks! You’re on the list.</p>
            ) : (
              <form className="newsletter" onSubmit={submit}>
                <label htmlFor="nl-email" className="sr-only">Email address</label>
                <input
                  id="nl-email"
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit" aria-label="Subscribe">
                  <ArrowRight width={18} height={18} />
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="footer__base">
          <span>© {new Date().getFullYear()} DX Innovation Hub. All rights reserved.</span>
          <span className="footer__legal">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
