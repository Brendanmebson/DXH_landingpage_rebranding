import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import { GitHub } from "../components/Icons";

const members = [
  { name: "Brendan Mebson", role: "CEO & Founder", image: "https://i.pravatar.cc/300?u=1", github: "https://github.com/brendanmebson", tone: "green" },
  { name: "Sarah John", role: "Head of Innovation", image: "https://i.pravatar.cc/300?u=2", tone: "yellow" },
  { name: "David Chen", role: "Lead Engineer", image: "https://i.pravatar.cc/300?u=3", tone: "pink" },
  { name: "Amara Okoro", role: "Product Strategy", image: "https://i.pravatar.cc/300?u=4", tone: "blue" },
  { name: "Michael Smith", role: "WorkLab Director", image: "https://i.pravatar.cc/300?u=5", tone: "green" },
  { name: "Linda Gray", role: "Community Lead", image: "https://i.pravatar.cc/300?u=6", tone: "yellow" },
];

const Team = () => (
  <>
    <PageHero
      eyebrow="Our team"
      title="Meet the architects"
      lead="A diverse team of experts committed to scaling digital excellence across borders."
    />
    <section className="section section--flush">
      <div className="container">
        <div className="team">
          {members.map((m, i) => (
            <Reveal key={m.name} className="member" delay={(i % 3) * 0.06}>
              <div className={`member__photo tone-bg--${m.tone}`}>
                <img src={m.image} alt={m.name} loading="lazy" />
              </div>
              <div className="member__meta">
                <div>
                  <h2>{m.name}</h2>
                  <p>{m.role}</p>
                </div>
                {m.github && (
                  <a href={m.github} target="_blank" rel="noreferrer" aria-label={`${m.name} on GitHub`}>
                    <GitHub width={18} height={18} />
                  </a>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Team;
