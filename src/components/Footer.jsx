import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const SERVICES = [
  'Website Development',
  'Web Application Development',
  'Data Analysis',
  'Machine Learning',
  'Generative AI',
  'RAG Solutions',
];

const LINKS = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer__grid">
          {/* Brand */}
          <div className="footer__brand">
            <div className="footer__logo">
              <span className="footer__logo-mark">By</span>
              <span className="footer__logo-name">ANSARI</span>
            </div>
            <p className="footer__tagline">Building the smart digital future — one project at a time.</p>
            <div className="footer__socials">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <LinkedInIcon />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <GitHubIcon />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter/X">
                <TwitterIcon />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="footer__col">
            <h3 className="footer__col-title">Services</h3>
            <ul className="footer__list">
              {SERVICES.map(s => (
                <li key={s}>
                  <Link to="/services">{s}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div className="footer__col">
            <h3 className="footer__col-title">Navigation</h3>
            <ul className="footer__list">
              {LINKS.map(({ to, label }) => (
                <li key={to}><Link to={to}>{label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer__col">
            <h3 className="footer__col-title">Get in Touch</h3>
            <ul className="footer__contact-list">
              <li>
                <span className="footer__contact-label">Email</span>
                <a href="mailto:ahm.ansari.m@gmail.com">ahm.ansari.m@gmail.com</a>
              </li>
              <li>
                <span className="footer__contact-label">Location</span>
                <span>Available Worldwide · Remote</span>
              </li>
              <li>
                <span className="footer__contact-label">Response</span>
                <span>Within 24-48 hours</span>
              </li>
            </ul>
            <Link to="/contact" className="btn btn-primary footer__cta">
              Start a Project
            </Link>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copy">© {year} By Ansari. All rights reserved.</p>
          <p className="footer__legal">
            Built with React · Optimized for Performance & SEO
          </p>
        </div>
      </div>
    </footer>
  );
}

const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
const GitHubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);
const TwitterIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);
