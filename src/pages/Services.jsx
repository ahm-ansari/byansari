import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import ServiceCard from '../components/ServiceCard';
import { SERVICES_DATA } from '../data/services';
import './Services.css';

export default function Services() {
  const [activeService, setActiveService] = useState(null);

  const active = activeService !== null ? SERVICES_DATA[activeService] : null;

  return (
    <main className="services-page">
      <SEO
        title="Services — Web Dev, ML, Generative AI & RAG"
        description="Explore By Ansari's full range of freelance services: Website Development, Web App Development, Data Analysis, Machine Learning, Generative AI (LLM integration), and RAG solutions."
        keywords="freelance web developer, machine learning services, generative AI consulting, RAG pipeline development, data analysis services, React developer for hire"
        canonicalPath="/services"
      />

      {/* Page Hero */}
      <section className="page-hero" aria-labelledby="services-page-heading">
        <div className="page-hero__bg" aria-hidden="true" />
        <div className="container page-hero__inner">
          <div className="tag animate-fade-up">What I Do</div>
          <h1
            id="services-page-heading"
            className="page-hero__title animate-fade-up animate-fade-up-delay-1"
          >
            Services that scale<br />your business
          </h1>
          <p className="page-hero__sub animate-fade-up animate-fade-up-delay-2">
            A comprehensive suite of digital services — from pixel-perfect websites
            to production-grade AI systems. Every engagement is focused on measurable
            outcomes and long-term value.
          </p>
          <div className="page-hero__ctas animate-fade-up animate-fade-up-delay-3">
            <Link to="/contact" className="btn btn-primary">Get a Free Quote</Link>
            <a href="#service-details" className="btn btn-ghost">See Detail Breakdown</a>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section" aria-labelledby="all-services-heading">
        <div className="container">
          <div className="section-label">
            <span className="tag">All Services</span>
          </div>
          <h2 id="all-services-heading" style={{ marginBottom: '2.5rem' }}>
            Six specialities. One partner.
          </h2>
          <div className="services-grid-full">
            {SERVICES_DATA.map((svc, i) => (
              <div
                key={svc.title}
                onClick={() => setActiveService(i === activeService ? null : i)}
                className={`service-card-wrapper${activeService === i ? ' is-active' : ''}`}
              >
                <ServiceCard {...svc} index={i} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expanded Service Detail Panel */}
      {active && (
        <section
          id="service-details"
          className="service-detail section section-alt"
          aria-live="polite"
          aria-labelledby="service-detail-heading"
        >
          <div className="container">
            <div className="service-detail__inner">
              <div className="service-detail__content">
                <div className={`service-detail__icon-wrap service-detail__icon--${active.accent}`}>
                  {active.icon}
                </div>
                <div className="tag" style={{ marginBottom: '1rem' }}>{active.tagline}</div>
                <h2 id="service-detail-heading">{active.title}</h2>
                <p className="service-detail__full-desc">{active.fullDesc}</p>
              </div>
              <div className="service-detail__benefits">
                <h3>What's included</h3>
                <ul className="service-detail__benefit-list">
                  {active.benefits.map(b => (
                    <li key={b}>
                      <span className="service-detail__check" aria-hidden="true">✓</span>
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="service-detail__keywords">
                  {active.keywords.map(k => (
                    <span key={k} className="tag">{k}</span>
                  ))}
                </div>
                <Link to="/contact" className="btn btn-primary" style={{ marginTop: '2rem' }}>
                  Get a Quote for {active.title}
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Why Choose Me */}
      <section className="section" aria-labelledby="why-heading">
        <div className="container">
          <div className="section-label">
            <span className="tag">Why By Ansari</span>
          </div>
          <h2 id="why-heading" style={{ maxWidth: 520, marginBottom: '3rem' }}>
            The freelance advantage — expert execution, no overhead
          </h2>
          <div className="why-grid">
            {WHY_ITEMS.map(item => (
              <div className="why-card" key={item.title}>
                <div className="why-card__icon" aria-hidden="true">{item.icon}</div>
                <h3 className="why-card__title">{item.title}</h3>
                <p className="why-card__desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="section section-alt" id="pricing" aria-labelledby="pricing-heading">
        <div className="container">
          <div className="section-label">
            <span className="tag">Engagement Models</span>
          </div>
          <h2 id="pricing-heading" style={{ marginBottom: '0.5rem' }}>Flexible pricing for every need</h2>
          <p style={{ marginBottom: '3rem', maxWidth: 540 }}>
            Every project is unique. Choose the model that fits your stage and scale.
          </p>
          <div className="pricing-grid">
            {PRICING_TIERS.map((tier, i) => (
              <article
                key={tier.name}
                className={`pricing-card${tier.featured ? ' pricing-card--featured' : ''}`}
              >
                {tier.featured && <div className="pricing-card__badge">Most Popular</div>}
                <div className="pricing-card__header">
                  <h3 className="pricing-card__name">{tier.name}</h3>
                  <div className="pricing-card__price">
                    <span className="pricing-card__amount">{tier.price}</span>
                    <span className="pricing-card__period">{tier.period}</span>
                  </div>
                  <p className="pricing-card__tagline">{tier.tagline}</p>
                </div>
                <ul className="pricing-card__features">
                  {tier.features.map(f => (
                    <li key={f}>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <circle cx="8" cy="8" r="7" fill={tier.featured ? 'rgba(26,86,219,0.12)' : 'var(--color-bg-alt)'} />
                        <path d="M5 8l2 2 4-4" stroke={tier.featured ? 'var(--color-accent)' : 'var(--color-ink-3)'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`btn ${tier.featured ? 'btn-primary' : 'btn-outline'}`}
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  {tier.cta}
                </Link>
              </article>
            ))}
          </div>
          <p className="pricing-note">
            All prices are starting estimates. Final pricing is based on project scope, complexity, and timeline.
            <Link to="/contact"> Get a tailored quote →</Link>
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" id="faq" aria-labelledby="faq-heading">
        <div className="container faq-container">
          <div className="section-label">
            <span className="tag">FAQ</span>
          </div>
          <h2 id="faq-heading" style={{ marginBottom: '2.5rem' }}>Common questions</h2>
          <div className="faq-list">
            {FAQ_ITEMS.map(item => (
              <FaqItem key={item.q} q={item.q} a={item.a} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq-item${open ? ' is-open' : ''}`}>
      <button
        className="faq-item__q"
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
      >
        <span>{q}</span>
        <span className="faq-item__icon" aria-hidden="true">{open ? '−' : '+'}</span>
      </button>
      {open && <p className="faq-item__a">{a}</p>}
    </div>
  );
}

const WHY_ITEMS = [
  { icon: '⚡', title: 'Fast Turnaround', desc: 'Direct communication with the developer means no back-and-forth through account managers. Decisions happen fast.' },
  { icon: '🎯', title: 'Specialized Expertise', desc: 'Deep specialization across web dev and AI — not a generalist agency but a focused expert who lives and breathes these technologies.' },
  { icon: '📊', title: 'Results-oriented', desc: 'Every line of code and every model is built with your business outcome in mind. KPIs, not just deliverables.' },
  { icon: '🔄', title: 'Agile Process', desc: 'Regular demos, weekly updates, and iterative sprints keep you informed and in control throughout the project.' },
  { icon: '🛡️', title: 'Production-grade Quality', desc: 'Code reviews, testing, CI/CD, and documentation are standard — not extras. Your project is built to last.' },
  { icon: '🌍', title: 'Global & Remote-first', desc: 'Working with clients across multiple time zones. Async-friendly with overlap hours available for live sessions.' },
];

const PRICING_TIERS = [
  {
    name: 'Starter',
    price: '$800',
    period: '/ project',
    tagline: 'Perfect for landing pages & small sites',
    featured: false,
    cta: 'Get Started',
    features: [
      'Responsive website (up to 5 pages)',
      'SEO optimization',
      'Contact form integration',
      '2 rounds of revisions',
      '2 weeks delivery',
    ],
  },
  {
    name: 'Professional',
    price: '$2,500',
    period: '/ project',
    tagline: 'Ideal for web apps & AI integrations',
    featured: true,
    cta: 'Start a Project',
    features: [
      'Full-stack web application',
      'API design & integration',
      'Database architecture',
      'ML or AI feature integration',
      'Testing & deployment',
      '4 weeks delivery',
      'Post-launch support (30 days)',
    ],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    tagline: 'For complex AI systems & long-term work',
    featured: false,
    cta: 'Schedule a Call',
    features: [
      'RAG pipeline or ML system',
      'Architecture consulting',
      'Dedicated sprint planning',
      'Unlimited revisions',
      'SLA & documentation',
      'Monthly retainer available',
    ],
  },
];

const FAQ_ITEMS = [
  { q: 'What is your typical project timeline?', a: 'Simple websites take 1–2 weeks. Full-stack web apps take 3–6 weeks. ML and AI projects vary from 2 weeks to 3+ months depending on complexity. I always provide a detailed timeline estimate before starting.' },
  { q: 'Do you work with international clients?', a: 'Absolutely. I work remotely with clients worldwide. Communication happens via Slack or email, with weekly video calls for updates. I accommodate multiple time zones.' },
  { q: 'What technologies do you use?', a: 'For web: React, Next.js, Node.js, TypeScript, PostgreSQL, MongoDB. For AI/ML: Python, TensorFlow, PyTorch, LangChain, OpenAI API, Anthropic Claude, Pinecone, and more.' },
  { q: 'Can you help with an existing project?', a: 'Yes — code audits, feature additions, performance optimization, and bug fixes are all available. I`ll review your codebase and provide an honest assessment before committing.' },
  { q: 'Do you offer post-launch support?', a: 'Professional and Enterprise projects include 30 days of post-launch support. Extended support retainers are available for ongoing maintenance and feature development.' },
  { q: 'How does the payment process work?', a: 'Typically 50% upfront, 50% on delivery for fixed projects. Monthly retainers are billed at the start of each month. I accept bank transfers, PayPal, and major payment platforms.' },
];
