import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import PhoneImg from "../assets/Apprelab_img.png";
import CourseImg from "../assets/WhatWeDo_img1.png";
import PostImg from "../assets/WhatWeDo_img3.png";
import { Star, Heart, Chat, Bookmark, Send, ArrowUp } from "./Icons";

const ease = [0.22, 1, 0.36, 1];

const Float = ({ className, delay = 0, children }) => {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={`float ${className}`}
      initial={reduce ? false : { opacity: 0, y: 30, scale: 0.94 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay, ease }}
    >
      <div className="float__bob" style={{ animationDelay: `${delay * 2}s` }}>
        {children}
      </div>
    </motion.div>
  );
};

const Hero = () => {
  const reduce = useReducedMotion();
  const up = (d) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, delay: d, ease },
        };

  return (
    <section className="hero" id="top">
      <div className="container hero__copy">
        <motion.h1 className="display hero__title" {...up(0.05)}>
          Transforming Ideas Into Scalable Digital Products
        </motion.h1>
        <motion.p className="hero__lead" {...up(0.15)}>
          At DX Innovation Hub, we incubate people, platforms, and products that drive
          digital transformation, create jobs, and solve real social and economic challenges.
        </motion.p>
        <motion.div className="hero__ctas" {...up(0.25)}>
          <a href="#download" className="btn btn--dark">Start Your Journey</a>
          <Link to="/stories" className="btn btn--outline">View Case Studies</Link>
        </motion.div>
      </div>

      <div className="stage" aria-hidden="true">
        <div className="stage__arc stage__arc--outer" />
        <div className="stage__arc stage__arc--inner" />
        <div className="stage__glow" />

        <motion.div
          className="phone"
          initial={reduce ? false : { opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease }}
        >
          <div className="phone__screen">
            <img src={PhoneImg} alt="" />
            <div className="phone__bar">
              <div className="phone__user">
                <span className="phone__avatar">AO</span>
                <div>
                  <strong>Mentor session</strong>
                  <span className="phone__progress"><i /></span>
                </div>
              </div>
              <span className="pill-live"><i /> Live</span>
            </div>
          </div>
        </motion.div>

        <Float className="float--course" delay={0.5}>
          <div className="card-photo">
            <img src={CourseImg} alt="" />
            <span className="chip">2:01</span>
            <span className="card-photo__label">Micro course</span>
          </div>
        </Float>

        <Float className="float--stars" delay={0.65}>
          <div className="stars">
            {[0, 1, 2, 3, 4].map((i) => <Star key={i} width={22} height={22} />)}
          </div>
        </Float>

        <Float className="float--growth" delay={0.75}>
          <div className="card-stat card-stat--yellow">
            <div className="bars"><i /><i /><i /><i /></div>
            <div>
              <span className="card-stat__label">Skill growth</span>
              <span className="card-stat__value">
                40% <span className="up"><ArrowUp width={14} height={14} strokeWidth={3} /></span>
              </span>
            </div>
          </div>
        </Float>

        <Float className="float--projects" delay={0.6}>
          <div className="card-stat card-stat--green">
            <div>
              <p className="card-stat__big">8 <span>projects</span></p>
              <span className="card-stat__label">Posted on WorkLab this week</span>
              <span className="chip chip--white">Milestone paid</span>
            </div>
            <div className="avatars">
              <span>L</span><span>M</span><span>S</span>
            </div>
          </div>
        </Float>

        <Float className="float--post" delay={0.85}>
          <div className="card-post">
            <img src={PostImg} alt="" />
            <span className="bubble">1.5k</span>
            <div className="card-post__icons">
              <Heart className="heart" width={18} height={18} />
              <Chat width={17} height={17} />
              <Bookmark width={17} height={17} />
              <Send className="push" width={17} height={17} />
            </div>
          </div>
        </Float>
      </div>
    </section>
  );
};

export default Hero;
