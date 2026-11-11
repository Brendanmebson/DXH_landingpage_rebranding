import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/** Resets scroll on route change, or jumps to #hash targets once the new page has rendered. */
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }
    // Wait for the page transition to mount the target.
    const t = setTimeout(() => {
      document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: "smooth" });
    }, 450);
    return () => clearTimeout(t);
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
