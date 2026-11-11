import { useMemo, useState } from "react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import { Search, ArrowRight } from "../components/Icons";

const posts = [
  {
    title: "The Future of Digital Transformation in Africa",
    category: "Innovation",
    date: "May 12, 2024",
    desc: "Exploring how rapid mobile adoption is reshaping the socio-economic landscape across the continent.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
  },
  {
    title: "Building Scalable Platforms with Minimal Overhead",
    category: "Engineering",
    date: "May 8, 2024",
    desc: "A deep dive into cloud-native architectures that allow startups to scale without breaking the bank.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
  },
  {
    title: "Mentorship: The Secret Ingredient for Tech Success",
    category: "Learning",
    date: "May 4, 2024",
    desc: "Why traditional education is failing and how the AppreLab model is creating high-income opportunities.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80",
  },
  {
    title: "AI and the Next Wave of Job Creation",
    category: "Trends",
    date: "April 28, 2024",
    desc: "Unlocking human potential: how artificial intelligence is augmenting creative and technical workflows.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
  },
  {
    title: "Corporate Agility in the 21st Century",
    category: "Business",
    date: "April 22, 2024",
    desc: "How established enterprises can adopt the startup mindset to drive innovation and efficiency.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
  },
  {
    title: "Success Story: 0 to MVP in 8 Weeks",
    category: "Case Study",
    date: "April 15, 2024",
    desc: "Behind the scenes of our latest platform incubation project and the milestones that led to launch.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
  },
];

const categories = ["All", ...new Set(posts.map((p) => p.category))];

const Resources = () => {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return posts.filter(
      (p) =>
        (category === "All" || p.category === category) &&
        (!q || `${p.title} ${p.desc} ${p.category}`.toLowerCase().includes(q))
    );
  }, [query, category]);

  return (
    <>
      <PageHero
        eyebrow="Insights & resources"
        title="The DX Compass"
        lead="Navigating the intersection of technology, talent, and business growth."
      >
        <form className="search" role="search" onSubmit={(e) => e.preventDefault()}>
          <Search width={18} height={18} />
          <label htmlFor="res-search" className="sr-only">Search articles</label>
          <input
            id="res-search"
            type="search"
            placeholder="Search articles"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </form>
      </PageHero>

      <section className="section section--flush">
        <div className="container">
          <div className="filters" role="group" aria-label="Filter by category">
            {categories.map((c) => (
              <button
                key={c}
                className={`tag tag--button ${category === c ? "is-on" : ""}`}
                onClick={() => setCategory(c)}
                aria-pressed={category === c}
              >
                {c}
              </button>
            ))}
          </div>

          {visible.length === 0 ? (
            <div className="empty">
              <p className="display display--sm">No articles match “{query}”.</p>
              <button className="btn btn--outline" onClick={() => { setQuery(""); setCategory("All"); }}>
                Clear filters
              </button>
            </div>
          ) : (
            <div className="posts">
              {visible.map((p, i) => (
                <Reveal as="article" key={p.title} className="post" delay={(i % 3) * 0.06}>
                  <div className="post__img">
                    <img src={p.image} alt="" loading="lazy" />
                    <span className="post__cat">{p.category}</span>
                  </div>
                  <div className="post__body">
                    <time>{p.date}</time>
                    <h2>{p.title}</h2>
                    <p>{p.desc}</p>
                    <span className="link-arrow">Read article <ArrowRight width={16} height={16} /></span>
                  </div>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Resources;
