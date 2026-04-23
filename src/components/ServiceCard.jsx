import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceCard.css';

/**
 * ServiceCard — Reusable card for showcasing individual services.
 * Props:
 *   icon      — JSX element (SVG icon)
 *   title     — Service name
 *   tagline   — Short keyword-rich phrase
 *   desc      — Full description
 *   keywords  — Array of keyword strings
 *   accent    — Optional accent color class
 *   index     — Animation delay index
 */
export default function ServiceCard({ icon, title, tagline, desc, keywords = [], accent = 'blue', index = 0 }) {
  return (
    <article
      className={`service-card service-card--${accent}`}
      style={{ animationDelay: `${index * 0.08}s` }}
      aria-labelledby={`service-${title.replace(/\s+/g, '-').toLowerCase()}`}
    >
      <div className="service-card__icon-wrap">
        {icon}
      </div>
      <div className="service-card__body">
        <p className="service-card__tagline">{tagline}</p>
        <h3
          className="service-card__title"
          id={`service-${title.replace(/\s+/g, '-').toLowerCase()}`}
        >
          {title}
        </h3>
        <p className="service-card__desc">{desc}</p>
        {keywords.length > 0 && (
          <ul className="service-card__keywords" aria-label="Related keywords">
            {keywords.map(k => (
              <li key={k}>{k}</li>
            ))}
          </ul>
        )}
      </div>
      <Link to="/contact" className="service-card__cta" aria-label={`Get a quote for ${title}`}>
        Get a Quote
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </Link>
    </article>
  );
}
