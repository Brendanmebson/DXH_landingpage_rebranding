import { motion, useReducedMotion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

/** Centered serif page header with the arc + glow backdrop used across inner pages. */
const PageHero = ({ eyebrow, title, lead, children, tone = "cream" }) => {
  const reduce = useReducedMotion();
  const up = (delay) =>
    reduce
      ? {}
      : { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.7, delay, ease } };

  return (
    <section className={`phero phero--${tone}`}>
      <div className="phero__arc" aria-hidden="true" />
      <div className="container phero__inner">
        {eyebrow && <motion.p className="eyebrow" {...up(0)}>{eyebrow}</motion.p>}
        <motion.h1 className="display phero__title" {...up(0.05)}>{title}</motion.h1>
        {lead && <motion.p className="phero__lead" {...up(0.12)}>{lead}</motion.p>}
        {children && <motion.div className="phero__actions" {...up(0.2)}>{children}</motion.div>}
      </div>
    </section>
  );
};

export default PageHero;
