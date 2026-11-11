import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import AboutUs from "./components/AboutUs";
import WhatWeDo from "./components/WhatWeDo";
import AppreLab from "./components/AppreLab";
import WhyChooseDX from "./components/WhyChooseDX";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";

import Products from "./pages/Products";
import Solutions from "./pages/Solutions";
import Resources from "./pages/Resources";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Team from "./pages/Team";
import SuccessStories from "./pages/SuccessStories";
import WorkLab from "./pages/WorkLab";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";

const Home = () => (
  <>
    <Hero />
    <Marquee />
    <AboutUs />
    <WhatWeDo />
    <AppreLab />
    <WhyChooseDX />
    <Testimonials />
    <CTA />
  </>
);

const routes = [
  ["/", Home],
  ["/products", Products],
  ["/solutions", Solutions],
  ["/resources", Resources],
  ["/pricing", Pricing],
  ["/contact", Contact],
  ["/about", About],
  ["/team", Team],
  ["/stories", SuccessStories],
  ["/worklab", WorkLab],
  ["/privacy", Privacy],
  ["/terms", Terms],
];

const Page = ({ children }) => {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={reduce ? undefined : { opacity: 0 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};

const Shell = () => {
  const location = useLocation();
  return (
    <div className="page">
      <ScrollToTop />
      <Navbar />
      <main>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            {routes.map(([path, Component]) => (
              <Route key={path} path={path} element={<Page><Component /></Page>} />
            ))}
            <Route path="*" element={<Page><NotFound /></Page>} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
};

const App = () => (
  <BrowserRouter>
    <Shell />
  </BrowserRouter>
);

export default App;
