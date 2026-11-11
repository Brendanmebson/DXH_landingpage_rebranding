import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import DXHLogo from "../assets/DXH_logo.png";
import { ChevronDown, Menu, Close } from "./Icons";

const products = [
  { name: "AppreLab", desc: "Learn, work on real projects, earn", to: "/#apprelab" },
  { name: "WorkLab", desc: "Paid projects with milestone payments", to: "/worklab" },
  { name: "Incubation programs", desc: "Talent, platform and product incubation", to: "/products" },
];

const links = [
  { label: "Solutions", to: "/solutions" },
  { label: "Success Stories", to: "/stories" },
  { label: "Resources", to: "/resources" },
  { label: "Pricing", to: "/pricing" },
];

const navClass = ({ isActive }) => `nav__link ${isActive ? "is-active" : ""}`;

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname, hash]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="nav__inner">
        <Link to="/" className="nav__brand" aria-label="DX Innovation Hub home">
          <img src={DXHLogo} alt="" />
          <span className="nav__tag">/ Innovation Hub</span>
        </Link>

        <nav className="nav__links" aria-label="Primary">
          <div className="nav__dropdown">
            <NavLink to="/products" className={navClass} aria-haspopup="true">
              Products <ChevronDown width={16} height={16} />
            </NavLink>
            <div className="nav__menu">
              {products.map((p) => (
                <Link key={p.name} to={p.to}>
                  <strong>{p.name}</strong>
                  <span>{p.desc}</span>
                </Link>
              ))}
            </div>
          </div>
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} className={navClass}>{l.label}</NavLink>
          ))}
        </nav>

        <div className="nav__actions">
          <NavLink to="/contact" className={navClass}>Contact Us</NavLink>
          <Link to="/pricing" className="btn btn--dark btn--sm">Get Started</Link>
        </div>

        <button
          className="nav__toggle"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <Close /> : <Menu />}
        </button>
      </div>

      <div className={`nav__sheet ${open ? "is-open" : ""}`}>
        <p className="nav__sheet-label">Products</p>
        {products.map((p) => <Link key={p.name} to={p.to}>{p.name}</Link>)}
        <hr />
        {links.map((l) => <Link key={l.to} to={l.to}>{l.label}</Link>)}
        <Link to="/contact">Contact Us</Link>
        <Link to="/pricing" className="btn btn--dark">Get Started</Link>
      </div>
    </header>
  );
};

export default Navbar;
