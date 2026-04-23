import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`} role="banner">
      <div className="container navbar__inner">
        {/* Logo */}
        <Link to="/" className="navbar__logo" aria-label="By Ansari — Home">
          <span className="navbar__logo-mark">By</span>
          <span className="navbar__logo-text">
            <span className="navbar__logo-main">ANSARI</span>
            <span className="navbar__logo-sub">Building the Smart Digital Future</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="navbar__nav" aria-label="Main navigation">
          {NAV_LINKS.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`navbar__link${pathname === to ? ' navbar__link--active' : ''}`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="navbar__actions">
          <Link to="/contact" className="btn btn-primary navbar__cta">
            Hire Me
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>

          {/* Hamburger */}
          <button
            className={`navbar__hamburger${menuOpen ? ' is-open' : ''}`}
            onClick={() => setMenuOpen(o => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`navbar__mobile${menuOpen ? ' is-open' : ''}`} role="dialog" aria-modal="true" aria-label="Mobile navigation">
        <nav>
          {NAV_LINKS.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`navbar__mobile-link${pathname === to ? ' is-active' : ''}`}
            >
              {label}
            </Link>
          ))}
          <Link to="/contact" className="btn btn-primary" style={{ marginTop: '1rem', justifyContent: 'center' }}>
            Hire Me
          </Link>
        </nav>
      </div>
    </header>
  );
}
