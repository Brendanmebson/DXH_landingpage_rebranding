import { Link } from "react-router-dom";
import Reveal from "./Reveal";
import AppStoreImg from "../assets/app-store.png";
import GooglePlayImg from "../assets/google-play.png";

const CTA = () => (
  <section className="section section--cta" id="download">
    <div className="container">
      <Reveal className="cta">
        <div className="cta__arc" aria-hidden="true" />
        <div className="cta__copy">
          <h2 className="display display--lg">Start your journey with us now</h2>
          <p>
            Join the future of digital transformation. Whether you’re a learner, mentor, or
            startup, your journey to impact starts here.
          </p>
          <div className="cta__row">
            <Link to="/pricing" className="btn btn--light">Get Started Now</Link>
            <div className="cta__stores">
              <a href="#" aria-label="Download on the App Store">
                <img src={AppStoreImg} alt="Download on the App Store" />
              </a>
              <a href="#" aria-label="Get it on Google Play">
                <img src={GooglePlayImg} alt="Get it on Google Play" />
              </a>
            </div>
          </div>
        </div>
        <div className="cta__chips" aria-hidden="true">
          <span className="feature--green">Learn</span>
          <span className="feature--yellow">Work</span>
          <span className="feature--pink">Earn</span>
          <span className="feature--blue">Grow</span>
        </div>
      </Reveal>
    </div>
  </section>
);

export default CTA;
