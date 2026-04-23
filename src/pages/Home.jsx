import React, { lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import ServiceCard from '../components/ServiceCard';
import { SERVICES_DATA } from '../data/services';
import './Home.css';

/* ── Lazy sections ── */
const PortfolioSection = lazy(() => import('../sections/PortfolioSection'));
const StatsSection = lazy(() => import('../sections/StatsSection'));

export default function Home() {
  return (
    <main>
      <SEO
        title="Freelance Web Developer, ML & AI Engineer"
        description="By Ansari offers expert freelance services in Website Development, Web Application Development, Data Analysis, Machine Learning, Generative AI, and RAG solutions. Build your smart digital future today."
        keywords="freelance web developer, machine learning engineer, generative AI developer, RAG solutions, data analysis, React developer, AI consultant"
        canonicalPath="/"
      />

      {/* ══════════ HERO ══════════ */}
      <section className="hero" aria-labelledby="hero-heading">
        <div className="hero__bg-grid" aria-hidden="true" />
        <div className="hero__orbs" aria-hidden="true">
          <div className="hero__orb hero__orb--1" />
          <div className="hero__orb hero__orb--2" />
          <div className="hero__orb hero__orb--3" />
        </div>

        <div className="container hero__inner">
          <div className="hero__content">
            <div className="tag animate-fade-up" style={{ animationDelay: '0s' }}>
              <span className="hero__status-dot" aria-hidden="true" />
              Available for New Projects
            </div>

            <h1
              id="hero-heading"
              className="hero__headline animate-fade-up animate-fade-up-delay-1"
            >
              Building the{' '}
              <span className="hero__headline-accent">Smart Digital</span>
              <br />Future
            </h1>

            <p className="hero__sub animate-fade-up animate-fade-up-delay-2">
              Expert freelance services across Web Development, Data Analysis,
              Machine Learning, Generative AI, and RAG — crafted to turn your ideas
              into high-impact digital products.
            </p>

            <div className="hero__actions animate-fade-up animate-fade-up-delay-3">
              <Link to="/contact" className="btn btn-primary hero__btn-primary">
                Start a Project
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <Link to="/services" className="btn btn-ghost">
                Explore Services
              </Link>
            </div>

            <div className="hero__trust animate-fade-up animate-fade-up-delay-4">
              <div className="hero__trust-avatars" aria-hidden="true">
                {['#1a56db', '#0d9488', '#7c3aed', '#e11d48'].map((c, i) => (
                  <span key={i} className="hero__trust-avatar" style={{ background: c, zIndex: 4 - i }}>
                    {['A', 'B', 'C', 'D'][i]}
                  </span>
                ))}
              </div>
              <p><strong>100+ projects</strong> delivered globally</p>
            </div>
          </div>

          <div className="hero__visual animate-fade-up animate-fade-up-delay-2">
            <HeroVisual />
          </div>
        </div>

        {/* Marquee tech stack */}
        <div className="hero__marquee" aria-hidden="true">
          <div className="hero__marquee-track">
            {[...TECH_TAGS, ...TECH_TAGS].map((t, i) => (
              <span key={i} className="hero__marquee-item">{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ SERVICES (preview) ══════════ */}
      <section className="section" id="services" aria-labelledby="services-heading">
        <div className="container">
          <div className="section-label">
            <span className="tag">Services</span>
          </div>
          <div className="home-services__header">
            <h2 id="services-heading">Everything you need to<br />succeed digitally</h2>
            <div>
              <p>From responsive websites to advanced AI systems — a full suite of digital services designed to drive measurable business outcomes.</p>
              <Link to="/services" className="btn btn-outline" style={{ marginTop: '1.5rem' }}>
                View All Services
              </Link>
            </div>
          </div>

          <div className="services-grid">
            {SERVICES_DATA.slice(0, 6).map((svc, i) => (
              <ServiceCard key={svc.title} {...svc} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ STATS ══════════ */}
      <Suspense fallback={null}>
        <StatsSection />
      </Suspense>

      {/* ══════════ PROCESS ══════════ */}
      <section className="section section-alt" id="process" aria-labelledby="process-heading">
        <div className="container">
          <div className="section-label">
            <span className="tag">How It Works</span>
          </div>
          <h2 id="process-heading" style={{ maxWidth: '480px', marginBottom: '3rem' }}>
            A clear, collaborative process
          </h2>
          <div className="process-steps">
            {PROCESS_STEPS.map((step, i) => (
              <div className="process-step" key={step.title}>
                <div className="process-step__num">{String(i + 1).padStart(2, '0')}</div>
                <div className="process-step__icon">{step.icon}</div>
                <h3 className="process-step__title">{step.title}</h3>
                <p className="process-step__desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ PORTFOLIO (lazy) ══════════ */}
      <Suspense fallback={null}>
        <PortfolioSection />
      </Suspense>

      {/* ══════════ CTA BANNER ══════════ */}
      <section className="cta-banner" aria-labelledby="cta-heading">
        <div className="container">
          <div className="cta-banner__inner">
            <div className="cta-banner__orb" aria-hidden="true" />
            <div className="cta-banner__content">
              <h2 id="cta-heading">Ready to build something remarkable?</h2>
              <p>Let's turn your vision into a high-performance digital product. Get a free consultation today.</p>
            </div>
            <div className="cta-banner__actions">
              <Link to="/contact" className="btn btn-primary">
                Get Free Consultation
              </Link>
              <Link to="/about" className="btn btn-ghost" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.3)' }}>
                Learn About Me
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ── Inline SVG Visual ── */
function HeroVisual() {
  return (
    <div className="hero-visual">
      <div className="hero-visual__card hero-visual__card--main">
        <div className="hero-visual__card-header">
          <span className="hero-visual__dot" style={{ background: '#ff5f57' }} />
          <span className="hero-visual__dot" style={{ background: '#febc2e' }} />
          <span className="hero-visual__dot" style={{ background: '#28c840' }} />
          <span className="hero-visual__card-label">AI Pipeline</span>
        </div>
        <div className="hero-visual__code">
          <span className="hero-visual__code-line">
            <span style={{ color: '#7c3aed' }}>const</span>
            <span style={{ color: '#0d9488' }}> model</span>
            <span> = </span>
            <span style={{ color: '#1a56db' }}>await</span>
            <span> loadAI();</span>
          </span>
          <span className="hero-visual__code-line">
            <span style={{ color: '#7c3aed' }}>const</span>
            <span style={{ color: '#0d9488' }}> rag</span>
            <span> = </span>
            <span style={{ color: '#e11d48' }}>new</span>
            <span> RAGPipeline</span>
            <span style={{ color: '#059669' }}>(model);</span>
          </span>
          <span className="hero-visual__code-line">
            <span style={{ color: '#0d9488' }}>rag</span>
            <span>.</span>
            <span style={{ color: '#1a56db' }}>ingest</span>
            <span>(documents);</span>
          </span>
          <span className="hero-visual__code-line">
            <span style={{ color: '#7c3aed' }}>return</span>
            <span style={{ color: '#0d9488' }}> rag</span>
            <span>.</span>
            <span style={{ color: '#1a56db' }}>query</span>
            <span>(prompt);</span>
          </span>
        </div>
      </div>

      <div className="hero-visual__card hero-visual__card--stat">
        <span className="hero-visual__stat-num">95%</span>
        <span className="hero-visual__stat-label">Client Satisfaction</span>
        <div className="hero-visual__sparkbar" aria-hidden="true">
          {[60, 80, 55, 90, 75, 95, 98].map((h, i) => (
            <span key={i} style={{ height: `${h}%`, animationDelay: `${i * 0.1}s` }} />
          ))}
        </div>
      </div>

      <div className="hero-visual__card hero-visual__card--badge">
        <div className="hero-visual__badge-icon">🤖</div>
        <div>
          <strong>Gen AI Ready</strong>
          <span>GPT-4 · Claude · Gemini</span>
        </div>
      </div>
    </div>
  );
}

const TECH_TAGS = [
  'React', 'Python', 'TensorFlow', 'LangChain', 'OpenAI', 'Node.js',
  'FastAPI', 'Pinecone', 'PostgreSQL', 'Docker', 'AWS', 'Next.js',
  'PyTorch', 'Hugging Face', 'TypeScript', 'MongoDB',
];

const PROCESS_STEPS = [
  {
    icon: '💬',
    title: 'Discovery Call',
    desc: 'We start with a free consultation to understand your goals, timeline, and technical requirements.',
  },
  {
    icon: '🗺️',
    title: 'Strategy & Planning',
    desc: 'I craft a detailed roadmap with milestones, technology choices, and clear deliverables.',
  },
  {
    icon: '⚙️',
    title: 'Development',
    desc: 'Agile development with regular updates and demos — you stay in the loop at every sprint.',
  },
  {
    icon: '🚀',
    title: 'Launch & Support',
    desc: 'Seamless deployment with post-launch support, performance monitoring, and iterations.',
  },
];
