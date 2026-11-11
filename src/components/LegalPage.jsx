import PageHero from "./PageHero";

const LegalPage = ({ title, updated, sections }) => (
  <>
    <PageHero eyebrow="Legal" title={title} lead={`Last updated: ${updated}`} />
    <section className="section section--flush">
      <div className="container">
        <article className="legal">
          {sections.map(([heading, body], i) => (
            <section key={heading}>
              <h2>
                <span>{String(i + 1).padStart(2, "0")}</span>
                {heading}
              </h2>
              <p>{body}</p>
            </section>
          ))}
        </article>
      </div>
    </section>
  </>
);

export default LegalPage;
