import React, { useState, useCallback } from 'react';
import SEO from '../components/SEO';
import { useForm } from '../hooks/useForm';
import './Contact.css';

/* Validators */
const required = (v) => !v.trim() ? 'This field is required.' : null;
const emailFmt = (v) => !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) ? 'Enter a valid email.' : null;
const minLen20 = (v) => v.trim().length < 20 ? 'Please provide more detail (min 20 characters).' : null;

const INITIAL = { name: '', email: '', subject: '', service: '', budget: '', message: '' };

const RULES = {
  name: [required],
  email: [required, emailFmt],
  subject: [required],
  service: [required],
  message: [required, minLen20],
};

const SERVICES_OPTIONS = [
  'Website Development',
  'Web Application Development',
  'Data Analysis',
  'Machine Learning',
  'Generative AI',
  'RAG Solutions',
  'Other / Multiple Services',
];

const BUDGET_OPTIONS = [
  'Under $1,000',
  '$1,000 – $3,000',
  '$3,000 – $7,500',
  '$7,500 – $15,000',
  '$15,000+',
  'Let\'s discuss',
];

const CONTACT_METHODS = [
  {
    icon: '📧',
    label: 'Email',
    value: 'ahm.ansari.m@gmail.com',
    href: 'mailto:ahm.ansari.m@gmail.com',
    desc: 'Best for detailed project enquiries',
  },
  {
    icon: '💼',
    label: 'LinkedIn',
    value: 'linkedin.com/in/byansari',
    href: 'https://linkedin.com/in/ahm-ansari',
    desc: 'Connect professionally',
  },
  {
    icon: '🐙',
    label: 'GitHub',
    value: 'github.com/byansari',
    href: 'https://github.com/ahm-ansari',
    desc: 'See my open-source work',
  },
];

export default function Contact() {
  const { values, errors, touched, submitting, setSubmitting, handleChange, handleBlur, validateAll, reset } = useForm(INITIAL, RULES);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    if (!validateAll()) return;
    setSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulated API call — replace with your actual endpoint
      await new Promise(resolve => setTimeout(resolve, 1800));
      setSubmitStatus('success');
      reset();
    } catch {
      setSubmitStatus('error');
    } finally {
      setSubmitting(false);
    }
  }, [validateAll, setSubmitting, reset]);

  return (
    <main className="contact-page">
      <SEO
        title="Contact — Hire a Freelance AI & Web Developer"
        description="Ready to start a project? Contact By Ansari for freelance web development, machine learning, generative AI, and RAG solutions. Get a free quote today."
        keywords="hire freelance developer, contact AI engineer, get a web development quote, machine learning consulting, RAG developer contact"
        canonicalPath="/contact"
      />

      {/* Page Hero */}
      <section className="page-hero" aria-labelledby="contact-heading">
        <div className="page-hero__bg" aria-hidden="true" />
        <div className="container page-hero__inner">
          <div className="tag animate-fade-up">Get in Touch</div>
          <h1 id="contact-heading" className="page-hero__title animate-fade-up animate-fade-up-delay-1">
            Let's build something<br />remarkable
          </h1>
          <p className="page-hero__sub animate-fade-up animate-fade-up-delay-2">
            Have a project in mind? Fill in the form below and I'll get back to you
            within 24 hours with a thoughtful response and next steps.
          </p>
        </div>
      </section>

      {/* Main contact area */}
      <section className="section" aria-labelledby="contact-form-heading">
        <div className="container">
          <div className="contact-grid">

            {/* Left: Info */}
            <aside className="contact-info">
              <h2 id="contact-info-heading" className="contact-info__heading">
                Before you reach out
              </h2>
              <p className="contact-info__intro">
                I personally read every message and reply with a customized response —
                no templates, no auto-replies. Here's what to expect:
              </p>

              <div className="contact-info__steps">
                {[
                  { num: '01', title: 'Submit your brief', desc: 'Fill in the form with as much detail as possible — project type, goals, and timeline.' },
                  { num: '02', title: 'I review & respond', desc: 'Within 24 hours I\'ll reply with questions, a rough estimate, or a proposal to review.' },
                  { num: '03', title: 'Discovery call', desc: 'A 30-min video call to align on scope, timeline, and deliverables before we start.' },
                  { num: '04', title: 'Kick off', desc: 'Sign the proposal, pay the deposit, and we begin building your smart digital future.' },
                ].map(step => (
                  <div className="contact-info__step" key={step.num}>
                    <div className="contact-info__step-num">{step.num}</div>
                    <div>
                      <strong>{step.title}</strong>
                      <p>{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="contact-info__methods">
                <h3>Or reach out directly</h3>
                {CONTACT_METHODS.map(m => (
                  <a
                    key={m.label}
                    href={m.href}
                    target={m.href.startsWith('http') ? '_blank' : undefined}
                    rel={m.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="contact-method"
                    aria-label={`${m.label}: ${m.value}`}
                  >
                    <span className="contact-method__icon" aria-hidden="true">{m.icon}</span>
                    <div className="contact-method__body">
                      <strong>{m.label}</strong>
                      <span>{m.value}</span>
                      <small>{m.desc}</small>
                    </div>
                    <svg className="contact-method__arrow" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                ))}
              </div>

              {/* Availability indicator */}
              <div className="contact-info__availability">
                <div className="contact-info__avail-dot" aria-hidden="true" />
                <div>
                  <strong>Currently available</strong>
                  <span>Taking on new projects — estimated start: within 1–2 weeks</span>
                </div>
              </div>
            </aside>

            {/* Right: Form */}
            <div className="contact-form-wrap">
              <h2 id="contact-form-heading" className="contact-form-wrap__heading">
                Project Brief
              </h2>

              {submitStatus === 'success' ? (
                <div className="form-success" role="alert">
                  <div className="form-success__icon" aria-hidden="true">✅</div>
                  <h3>Message Sent!</h3>
                  <p>Thank you for reaching out. I'll review your brief and get back to you within 24 hours.</p>
                  <button className="btn btn-outline" onClick={() => setSubmitStatus(null)} style={{ marginTop: '1.5rem' }}>
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form
                  className="contact-form"
                  onSubmit={handleSubmit}
                  noValidate
                  aria-label="Project contact form"
                >
                  {submitStatus === 'error' && (
                    <div className="form-error-banner" role="alert">
                      Something went wrong. Please try again or email me directly.
                    </div>
                  )}

                  <div className="form-row">
                    <Field
                      label="Full Name" name="name" type="text"
                      placeholder="Jane Smith"
                      required autoComplete="name"
                      value={values.name} onChange={handleChange} onBlur={handleBlur}
                      error={touched.name && errors.name}
                    />
                    <Field
                      label="Email Address" name="email" type="email"
                      placeholder="jane@company.com"
                      required autoComplete="email"
                      value={values.email} onChange={handleChange} onBlur={handleBlur}
                      error={touched.email && errors.email}
                    />
                  </div>

                  <Field
                    label="Project Subject / Title" name="subject" type="text"
                    placeholder="e.g. E-commerce platform with AI recommendation engine"
                    required
                    value={values.subject} onChange={handleChange} onBlur={handleBlur}
                    error={touched.subject && errors.subject}
                  />

                  <div className="form-row">
                    <SelectField
                      label="Service Required" name="service"
                      required
                      value={values.service} onChange={handleChange} onBlur={handleBlur}
                      error={touched.service && errors.service}
                      options={SERVICES_OPTIONS}
                      placeholder="Select a service"
                    />
                    <SelectField
                      label="Estimated Budget" name="budget"
                      value={values.budget} onChange={handleChange} onBlur={handleBlur}
                      error={touched.budget && errors.budget}
                      options={BUDGET_OPTIONS}
                      placeholder="Select budget range"
                    />
                  </div>

                  <Field
                    label="Project Description" name="message" type="textarea"
                    placeholder="Tell me about your project goals, target audience, key features, current challenges, and any relevant deadlines..."
                    required rows={6}
                    value={values.message} onChange={handleChange} onBlur={handleBlur}
                    error={touched.message && errors.message}
                  />

                  <button
                    type="submit"
                    className="btn btn-primary contact-form__submit"
                    disabled={submitting}
                    aria-busy={submitting}
                  >
                    {submitting ? (
                      <>
                        <span className="form-spinner" aria-hidden="true" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Project Brief
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                          <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </>
                    )}
                  </button>

                  <p className="contact-form__note">
                    I respond to every message within 24 hours. No spam, ever.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ── Reusable Field Components ── */
function Field({ label, name, type = 'text', error, required, rows, ...rest }) {
  const isTextarea = type === 'textarea';
  const id = `field-${name}`;
  const errId = `err-${name}`;
  return (
    <div className={`form-field${error ? ' has-error' : ''}`}>
      <label className="form-label" htmlFor={id}>
        {label}
        {required && <span className="form-required" aria-label="required"> *</span>}
      </label>
      {isTextarea ? (
        <textarea
          id={id} name={name} rows={rows || 4}
          className="form-input form-textarea"
          aria-describedby={error ? errId : undefined}
          aria-invalid={!!error}
          {...rest}
        />
      ) : (
        <input
          id={id} name={name} type={type}
          className="form-input"
          aria-describedby={error ? errId : undefined}
          aria-invalid={!!error}
          {...rest}
        />
      )}
      {error && <span id={errId} className="form-field-error" role="alert">{error}</span>}
    </div>
  );
}

function SelectField({ label, name, options, placeholder, error, required, ...rest }) {
  const id = `field-${name}`;
  const errId = `err-${name}`;
  return (
    <div className={`form-field${error ? ' has-error' : ''}`}>
      <label className="form-label" htmlFor={id}>
        {label}
        {required && <span className="form-required" aria-label="required"> *</span>}
      </label>
      <div className="form-select-wrap">
        <select
          id={id} name={name}
          className="form-input form-select"
          aria-describedby={error ? errId : undefined}
          aria-invalid={!!error}
          {...rest}
        >
          <option value="">{placeholder}</option>
          {options.map(o => <option key={o} value={o}>{o}</option>)}
        </select>
        <svg className="form-select-arrow" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      {error && <span id={errId} className="form-field-error" role="alert">{error}</span>}
    </div>
  );
}
