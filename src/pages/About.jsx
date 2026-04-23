import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import './About.css';

const SKILLS = [
  { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'CSS / Tailwind', 'HTML5 / SEO'] },
  { category: 'Backend', items: ['Node.js', 'FastAPI', 'Python', 'REST / GraphQL', 'PostgreSQL / MongoDB'] },
  { category: 'AI & ML', items: ['TensorFlow', 'PyTorch', 'LangChain', 'OpenAI API', 'Hugging Face'] },
  { category: 'DevOps & Cloud', items: ['Docker', 'AWS', 'GCP', 'CI/CD', 'Linux / Bash'] },
];

const TIMELINE = [
  { year: '2006', title: 'Started with Web Development', desc: 'Built my first React applications and fell in love with building things for the web. Freelanced for local businesses.' },
  { year: '2022', title: 'Moved into Data & ML', desc: 'Completed advanced ML coursework and started delivering data analysis and predictive model projects for international clients.' },
  { year: '2024', title: 'Entered the AI / LLM Space', desc: 'Early adopter of GPT-3 integrations, LangChain, and vector databases. Built my first production RAG system for a legal tech startup.' },
  { year: '2025', title: 'Full-spectrum AI + Web Practice', desc: 'Established By Ansari as a focused freelance practice delivering end-to-end digital products combining web engineering and AI.' },
  { year: '2026+', title: 'Scale & Specialize', desc: 'Deepened specialization in Generative AI, RAG architectures, and enterprise-grade web applications. Overall 100+ projects delivered globally.' },
];

const VALUES = [
  { icon: '🧠', title: 'Curious by Nature', desc: "I stay at the edge of what's possible in web tech and AI — so my clients always benefit from the latest, not the yesterday." },
  { icon: '🤝', title: 'Client-first Thinking', desc: "Clear communication, transparent timelines, and honest assessments. I`d rather tell you what won't work than take your money for something that will fail." },
  { icon: '🔬', title: 'Engineering Rigour', desc: "Clean code, proper testing, documentation. I build things I'm proud to put my name on — and that others can maintain." },
  { icon: '📈', title: 'Outcome-focused', desc: "The goal is never a deliverable — it's a result. I measure success by the impact on your business metrics." },
];

export default function About() {
  return (
    <main className="about-page">
      <SEO
        title="About — Freelance AI & Web Developer"
        description="Learn about By Ansari — a freelance full-stack developer and AI engineer specializing in React web development, Machine Learning, Generative AI, and RAG systems. Building the smart digital future."
        keywords="about freelance developer, AI engineer portfolio, full-stack React developer, machine learning consultant, RAG developer"
        canonicalPath="/about"
      />

      {/* Hero */}
      <section className="page-hero" aria-labelledby="about-heading">
        <div className="page-hero__bg" aria-hidden="true" />
        <div className="container page-hero__inner">
          <div className="tag animate-fade-up">About</div>
          <h1
            id="about-heading"
            className="page-hero__title animate-fade-up animate-fade-up-delay-1"
          >
            The developer behind<br />By Ansari
          </h1>
          <p className="page-hero__sub animate-fade-up animate-fade-up-delay-2">
            A full-stack developer and AI engineer passionate about building
            high-performance digital products — from SEO-optimized websites to
            production-grade machine learning systems.
          </p>
        </div>
      </section>

      {/* Bio Section */}
      <section className="section" aria-labelledby="bio-heading">
        <div className="container">
          <div className="about-bio">
            <div className="about-bio__visual">
              <div className="about-bio__avatar" aria-hidden="true">
                <div className="about-bio__avatar-inner">
                  <span>A</span>
                </div>
                <div className="about-bio__avatar-ring" />
                <div className="about-bio__badge">
                  <span>🚀</span>
                  <div>
                    <strong>Available</strong>
                    <span>For Projects</span>
                  </div>
                </div>
              </div>
              <div className="about-bio__stats-col">
                {[
                  { num: '100+', label: 'Projects Delivered' },
                  { num: '20+', label: 'Years Experience' },
                  { num: '100%', label: 'Remote Ready' },
                  { num: '5★', label: 'Client Rating' },
                ].map(s => (
                  <div className="about-bio__stat" key={s.label}>
                    <span className="about-bio__stat-num" style={s.num === '5★' ? { color: "#f0c060" } : {}}>{s.num}</span>
                    <span className="about-bio__stat-label">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="about-bio__content">
              <div className="section-label">
                <span className="tag">Bio</span>
              </div>
              <h2 id="bio-heading">Building at the intersection of web and intelligence</h2>
              <p>
                I'm a freelance full-stack developer and AI/ML engineer operating under the
                banner of <strong>By Ansari</strong>. I specialize in building digital products
                that are fast, SEO-optimized, and powered by the latest advances in artificial
                intelligence.
              </p>
              <p style={{ marginTop: '1rem' }}>
                My journey started with web development — React, Node.js, database design —
                and expanded into data science, machine learning, and eventually Generative AI
                and RAG systems. Today I offer a rare combination: a developer who can build
                your entire product from UI to AI pipeline, without handing off to a team of
                strangers.
              </p>
              <p style={{ marginTop: '1rem' }}>
                I work with founders, product teams, and enterprises who need expert execution
                on complex technical challenges — quickly, cleanly, and with zero fluff.
              </p>
              <div className="about-bio__actions">
                <Link to="/contact" className="btn btn-primary">Work with Me</Link>
                <Link to="/services" className="btn btn-ghost">View Services</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="section section-alt" aria-labelledby="skills-heading">
        <div className="container">
          <div className="section-label">
            <span className="tag">Tech Stack</span>
          </div>
          <h2 id="skills-heading" style={{ marginBottom: '2.5rem' }}>Tools of the trade</h2>
          <div className="skills-grid">
            {SKILLS.map(group => (
              <div className="skill-group" key={group.category}>
                <h3 className="skill-group__title">{group.category}</h3>
                <ul className="skill-group__list">
                  {group.items.map(skill => (
                    <li key={skill} className="skill-group__item">
                      <span className="skill-group__dot" aria-hidden="true" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section" aria-labelledby="timeline-heading">
        <div className="container">
          <div className="section-label">
            <span className="tag">Journey</span>
          </div>
          <h2 id="timeline-heading" style={{ marginBottom: '3rem' }}>How I got here</h2>
          <div className="timeline" role="list">
            {TIMELINE.map((item, i) => (
              <div className="timeline__item" key={item.year} role="listitem">
                <div className="timeline__left">
                  <div className="timeline__year">{item.year}</div>
                </div>
                <div className="timeline__connector" aria-hidden="true">
                  <div className="timeline__dot" />
                  {i < TIMELINE.length - 1 && <div className="timeline__line" />}
                </div>
                <div className="timeline__content">
                  <h3 className="timeline__title">{item.title}</h3>
                  <p className="timeline__desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section section-alt" aria-labelledby="values-heading">
        <div className="container">
          <div className="section-label">
            <span className="tag">Values</span>
          </div>
          <h2 id="values-heading" style={{ marginBottom: '2.5rem' }}>How I work</h2>
          <div className="values-grid">
            {VALUES.map(v => (
              <div className="value-card" key={v.title}>
                <div className="value-card__icon" aria-hidden="true">{v.icon}</div>
                <h3 className="value-card__title">{v.title}</h3>
                <p className="value-card__desc">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" aria-labelledby="about-cta-heading">
        <div className="container">
          <div className="about-cta">
            <h2 id="about-cta-heading">Let's build something great together</h2>
            <p>Have a project in mind? Let's talk about your goals and how I can help you achieve them.</p>
            <Link to="/contact" className="btn btn-primary" style={{ marginTop: '2rem', fontSize: '1rem', padding: '0.9rem 2.2rem' }}>
              Start the Conversation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
