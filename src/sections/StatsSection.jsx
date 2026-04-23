import React, { useEffect, useRef, useState } from 'react';
import './StatsSection.css';

const STATS = [
  { num: 100, suffix: '+', label: 'Projects Delivered', desc: 'Across web, ML, and AI domains' },
  { num: 20, suffix: '+', label: 'Years of Experience', desc: 'In full-stack & AI engineering' },
  { num: 95, suffix: '%', label: 'Client Satisfaction', desc: 'Based on post-project reviews' },
  { num: 100, suffix: '%', label: 'Remote & Global', desc: 'Working with clients worldwide' },
];

function useCountUp(target, duration = 1600, active = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, active]);
  return count;
}

function StatItem({ num, suffix, label, desc, active }) {
  const count = useCountUp(num, 1400, active);
  return (
    <div className="stat-item">
      <div className="stat-item__num">
        {count}<span className="stat-item__suffix">{suffix}</span>
      </div>
      <div className="stat-item__label">{label}</div>
      <div className="stat-item__desc">{desc}</div>
    </div>
  );
}

export default function StatsSection() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="stats-section" ref={ref} aria-label="Key metrics">
      <div className="stats-section__bg" aria-hidden="true" />
      <div className="container">
        <div className="stats-grid">
          {STATS.map(s => (
            <StatItem key={s.label} {...s} active={visible} />
          ))}
        </div>
      </div>
    </section>
  );
}
