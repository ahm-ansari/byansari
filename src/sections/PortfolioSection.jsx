import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './PortfolioSection.css';

const FILTERS = ['All', 'Web Dev', 'AI / ML', 'RAG', 'Data'];

const PROJECTS = [
  {
    title: 'LegalMind AI',
    category: 'RAG',
    tags: ['RAG', 'LangChain', 'Pinecone', 'FastAPI'],
    desc: 'A retrieval-augmented generation system for a legal tech startup — enabling lawyers to query 100k+ case documents with citation-backed AI answers.',
    metrics: ['10s → 0.4s query time', '94% accuracy', '50k+ docs indexed'],
    accent: '#1a56db',
    icon: '⚖️',
  },
  {
    title: 'ShopSense Analytics',
    category: 'Data',
    tags: ['Python', 'Pandas', 'Plotly', 'PostgreSQL'],
    desc: 'End-to-end data analytics dashboard for an e-commerce company — tracking 40+ KPIs, cohort analysis, and churn prediction models.',
    metrics: ['40+ KPIs tracked', '23% churn reduction', 'Real-time updates'],
    accent: '#e8a020',
    icon: '📊',
  },
  {
    title: 'MedAssist Chatbot',
    category: 'AI / ML',
    tags: ['OpenAI', 'GPT-4', 'React', 'Node.js'],
    desc: 'A HIPAA-aware medical Q&A chatbot with GPT-4 integration and strict guardrails — deployed for a telehealth platform serving 5,000+ patients.',
    metrics: ['5k+ active users', '87% query deflection', 'HIPAA compliant'],
    accent: '#0d9488',
    icon: '🏥',
  },
  {
    title: 'TalentFlow Platform',
    category: 'Web Dev',
    tags: ['Next.js', 'TypeScript', 'Supabase', 'Stripe'],
    desc: 'Full-stack SaaS recruitment platform with AI-powered candidate matching, video screening, and subscription billing via Stripe.',
    metrics: ['3k+ monthly users', '99.9% uptime', 'Sub-second loads'],
    accent: '#7c3aed',
    icon: '💼',
  },
  {
    title: 'PredictX — Sales ML',
    category: 'AI / ML',
    tags: ['Python', 'scikit-learn', 'XGBoost', 'MLflow'],
    desc: 'Predictive sales forecasting model for a B2B SaaS company — trained on 3 years of CRM data with 91% 30-day revenue prediction accuracy.',
    metrics: ['91% accuracy', '$2M pipeline visibility', 'MLflow tracking'],
    accent: '#e11d48',
    icon: '📈',
  },
  {
    title: 'UrbanNest — Property Portal',
    category: 'Web Dev',
    tags: ['React', 'Node.js', 'MongoDB', 'Mapbox'],
    desc: 'A geo-enabled property listing platform with advanced search, virtual tour integration, mortgage calculator, and agent dashboard.',
    metrics: ['15k monthly visitors', 'Core Vitals: 96', 'SEO rank #1'],
    accent: '#059669',
    icon: '🏠',
  },
];

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = activeFilter === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeFilter);

  return (
    <section className="section portfolio-section" id="portfolio" aria-labelledby="portfolio-heading">
      <div className="container">
        <div className="section-label">
          <span className="tag">Portfolio</span>
        </div>
        <div className="portfolio-header">
          <h2 id="portfolio-heading">Selected work</h2>
          <div className="portfolio-filters" role="group" aria-label="Filter projects by category">
            {FILTERS.map(f => (
              <button
                key={f}
                className={`portfolio-filter${activeFilter === f ? ' is-active' : ''}`}
                onClick={() => setActiveFilter(f)}
                aria-pressed={activeFilter === f}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="portfolio-grid" aria-live="polite" aria-label="Project list">
          {filtered.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        <div className="portfolio-cta">
          <p>Have a project in mind? Let's discuss your requirements.</p>
          <Link to="/contact" className="btn btn-primary">
            Start a Project
          </Link>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  const { title, category, tags, desc, metrics, accent, icon } = project;
  return (
    <article className="project-card" aria-labelledby={`proj-${title.replace(/\s+/g,'-')}`}>
      <div className="project-card__header" style={{ '--project-accent': accent }}>
        <div className="project-card__icon">{icon}</div>
        <div className="project-card__meta">
          <span className="project-card__category">{category}</span>
        </div>
      </div>

      <div className="project-card__body">
        <h3 className="project-card__title" id={`proj-${title.replace(/\s+/g,'-')}`}>
          {title}
        </h3>
        <p className="project-card__desc">{desc}</p>

        <div className="project-card__metrics" aria-label="Key metrics">
          {metrics.map(m => (
            <div className="project-card__metric" key={m}>
              <span className="project-card__metric-dot" style={{ background: accent }} aria-hidden="true" />
              {m}
            </div>
          ))}
        </div>
      </div>

      <div className="project-card__footer">
        <div className="project-card__tags">
          {tags.map(t => (
            <span key={t} className="project-card__tag">{t}</span>
          ))}
        </div>
      </div>
    </article>
  );
}
