import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";

const NotFound = () => (
  <PageHero
    eyebrow="404"
    title="This page wandered off"
    lead="The page you’re looking for doesn’t exist or has moved."
  >
    <Link to="/" className="btn btn--dark">Back to Home</Link>
    <Link to="/contact" className="btn btn--outline">Contact Us</Link>
  </PageHero>
);

export default NotFound;
