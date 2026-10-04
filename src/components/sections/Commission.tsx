import React, { useState } from 'react';
import { EvolvingSculptureCanvas } from '../canvas/EvolvingSculptureCanvas';

const PROJECT_TYPES = [
  'AI Product',
  'Automation',
  'Custom Software',
  'Website / Web App',
  'Data & Analytics',
  'System Integration',
  'Other',
];

const BUDGET_RANGES = [
  'Under $25k (Exploratory / Prototype)',
  '$25k – $50k (Single System / Core MVP)',
  '$50k – $100k (Full Platform Architecture)',
  '$100k+ (Enterprise Multi-System Retainer)',
];

const TIMELINES = [
  'Immediate (< 1 month)',
  '1 – 3 Months',
  '3 – 6 Months',
  'Exploratory / Discovery',
];

interface FormErrors {
  name?: string;
  email?: string;
  company?: string;
  projectType?: string;
  budgetRange?: string;
  timeline?: string;
  description?: string;
}

export const Commission: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: 'AI Product',
    budgetRange: '$25k – $50k (Single System / Core MVP)',
    timeline: '1 – 3 Months',
    description: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submissionState, setSubmissionState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const validate = (): boolean => {
    const errs: FormErrors = {};

    if (!formData.name.trim()) {
      errs.name = 'Please provide your name or primary contact.';
    }

    if (!formData.email.trim()) {
      errs.email = 'Work email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email format (e.g. name@company.com).';
    }

    if (!formData.company.trim()) {
      errs.company = 'Please specify your organization or venture.';
    }

    if (!formData.description.trim()) {
      errs.description = 'Please describe what you are trying to solve.';
    } else if (formData.description.trim().length < 20) {
      errs.description = 'Please provide at least 20 characters describing the problem context.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setSubmissionState('loading');
    setErrorMessage('');

    try {
      // Backend Integration Hook:
      // In production with a live endpoint, this payload will post directly to /api/inquiries
      // Here we simulate an asynchronous dispatch with realistic network verification
      await new Promise<void>((resolve, reject) => {
        setTimeout(() => {
          // Verify network capability
          if (typeof window !== 'undefined' && navigator.onLine === false) {
            reject(new Error('Network offline. Please verify connectivity and re-submit.'));
          } else {
            resolve();
          }
        }, 900);
      });

      setSubmissionState('success');
    } catch (err: unknown) {
      setSubmissionState('error');
      setErrorMessage(err instanceof Error ? err.message : 'Transmission failed. Please retry.');
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      company: '',
      projectType: 'AI Product',
      budgetRange: '$25k – $50k (Single System / Core MVP)',
      timeline: '1 – 3 Months',
      description: '',
    });
    setErrors({});
    setSubmissionState('idle');
  };

  return (
    <section
      id="commission"
      aria-label="Initiate Project Commission"
      style={{
        padding: '140px 0',
        backgroundColor: 'var(--color-bg-primary)',
        borderBottom: '1px solid var(--color-border-subtle)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="vantiq-container">
        {/* Section Header */}
        <div style={{ maxWidth: '940px', marginBottom: '80px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 14px',
              borderRadius: 'var(--radius-pill)',
              border: '1px solid var(--color-border-medium)',
              backgroundColor: 'var(--color-bg-surface)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              marginBottom: '28px',
              color: 'var(--color-fg-muted)',
            }}
          >
            <span
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: 'var(--color-accent-primary)',
              }}
            />
            09 / COMMISSIONS &amp; ENGAGEMENT
          </div>

          <h2
            style={{
              fontSize: 'clamp(2.75rem, 6.2vw, 5rem)',
              lineHeight: 1.02,
              fontWeight: 700,
              letterSpacing: '-0.04em',
              color: 'var(--color-fg-primary)',
              textTransform: 'uppercase',
              marginBottom: '28px',
            }}
          >
            HAVE A COMPLEX IDEA?<br />
            <span style={{ color: 'var(--color-accent-primary)' }}>LET&apos;S BUILD IT.</span>
          </h2>

          <p
            style={{
              fontSize: 'clamp(1.15rem, 2.2vw, 1.45rem)',
              color: 'var(--color-fg-secondary)',
              lineHeight: 1.6,
              maxWidth: '760px',
            }}
          >
            Tell us what you&apos;re trying to solve. We&apos;ll help turn the challenge into a digital system.
          </p>
        </div>

        {/* Split Grid: 3D Sculpture & Real Project Form */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(320px, 1fr) minmax(360px, 1.25fr)',
            gap: '48px',
            alignItems: 'start',
          }}
          className="commission-split-grid"
        >
          {/* Left Column: 3D Evolving Abstract Sculpture */}
          <div>
            <div style={{ marginBottom: '24px' }}>
              <EvolvingSculptureCanvas />
            </div>

            <div
              className="content-card"
              style={{
                padding: '28px',
                backgroundColor: 'var(--color-bg-surface)',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  letterSpacing: '0.12em',
                  color: 'var(--color-accent-primary)',
                  marginBottom: '10px',
                  textTransform: 'uppercase',
                }}
              >
                ENGAGEMENT PARAMETERS
              </div>
              <p style={{ color: 'var(--color-fg-secondary)', fontSize: '0.9rem', lineHeight: 1.65, margin: 0 }}>
                We accept a limited number of studio commissions per quarter to guarantee undivided senior engineering and design focus. Every partnership begins with a direct technical discovery session.
              </p>
            </div>
          </div>

          {/* Right Column: Real Project Inquiry Form */}
          <div
            className="content-card"
            style={{
              padding: '48px 40px',
              backgroundColor: 'var(--color-bg-surface)',
              boxShadow: 'var(--shadow-card)',
            }}
          >
            {submissionState === 'success' ? (
              <div
                role="status"
                style={{
                  textAlign: 'center',
                  padding: '48px 20px',
                }}
              >
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--color-accent-subtle)',
                    border: '1px solid var(--color-border-accent)',
                    color: 'var(--color-accent-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.75rem',
                    margin: '0 auto 24px auto',
                  }}
                >
                  ✓
                </div>
                <h3 style={{ fontSize: '2rem', color: 'var(--color-fg-primary)', marginBottom: '16px' }}>
                  Commission Brief Received
                </h3>
                <p style={{ color: 'var(--color-fg-secondary)', fontSize: '1.05rem', lineHeight: 1.7, maxWidth: '520px', margin: '0 auto 32px auto' }}>
                  Thank you, {formData.name}. Our principals at Vantiq Studio will review your system parameters and reach out at <strong>{formData.email}</strong> within two business days.
                </p>
                <button type="button" onClick={handleReset} className="btn-secondary">
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                {submissionState === 'error' && (
                  <div
                    role="alert"
                    style={{
                      padding: '16px 20px',
                      borderRadius: 'var(--radius-sm)',
                      backgroundColor: 'rgba(239, 68, 68, 0.1)',
                      border: '1px solid rgba(239, 68, 68, 0.3)',
                      color: '#fca5a5',
                      fontSize: '0.9rem',
                    }}
                  >
                    {errorMessage || 'Transmission error encountered. Please check fields and retry.'}
                  </div>
                )}

                {/* NAME & WORK EMAIL */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', gap: '20px' }}>
                  <div>
                    <label htmlFor="inquiry-name" className="form-label">
                      NAME <span style={{ color: 'var(--color-accent-primary)' }}>*</span>
                    </label>
                    <input
                      id="inquiry-name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: undefined });
                      }}
                      placeholder="e.g. Elena Vance"
                      className="form-control"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? 'inquiry-name-err' : undefined}
                    />
                    {errors.name && (
                      <span id="inquiry-name-err" style={{ display: 'block', color: 'var(--color-accent-primary)', fontSize: '0.75rem', marginTop: '6px' }}>
                        {errors.name}
                      </span>
                    )}
                  </div>

                  <div>
                    <label htmlFor="inquiry-email" className="form-label">
                      WORK EMAIL <span style={{ color: 'var(--color-accent-primary)' }}>*</span>
                    </label>
                    <input
                      id="inquiry-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: undefined });
                      }}
                      placeholder="name@organization.com"
                      className="form-control"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? 'inquiry-email-err' : undefined}
                    />
                    {errors.email && (
                      <span id="inquiry-email-err" style={{ display: 'block', color: 'var(--color-accent-primary)', fontSize: '0.75rem', marginTop: '6px' }}>
                        {errors.email}
                      </span>
                    )}
                  </div>
                </div>

                {/* COMPANY & PROJECT TYPE */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', gap: '20px' }}>
                  <div>
                    <label htmlFor="inquiry-company" className="form-label">
                      COMPANY / VENTURE <span style={{ color: 'var(--color-accent-primary)' }}>*</span>
                    </label>
                    <input
                      id="inquiry-company"
                      type="text"
                      value={formData.company}
                      onChange={(e) => {
                        setFormData({ ...formData, company: e.target.value });
                        if (errors.company) setErrors({ ...errors, company: undefined });
                      }}
                      placeholder="e.g. Apex Labs Systems"
                      className="form-control"
                      aria-invalid={!!errors.company}
                      aria-describedby={errors.company ? 'inquiry-company-err' : undefined}
                    />
                    {errors.company && (
                      <span id="inquiry-company-err" style={{ display: 'block', color: 'var(--color-accent-primary)', fontSize: '0.75rem', marginTop: '6px' }}>
                        {errors.company}
                      </span>
                    )}
                  </div>

                  <div>
                    <label htmlFor="inquiry-project-type" className="form-label">
                      PROJECT TYPE <span style={{ color: 'var(--color-accent-primary)' }}>*</span>
                    </label>
                    <select
                      id="inquiry-project-type"
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="form-control"
                    >
                      {PROJECT_TYPES.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* BUDGET RANGE & TIMELINE */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', gap: '20px' }}>
                  <div>
                    <label htmlFor="inquiry-budget" className="form-label">
                      BUDGET RANGE
                    </label>
                    <select
                      id="inquiry-budget"
                      value={formData.budgetRange}
                      onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                      className="form-control"
                    >
                      {BUDGET_RANGES.map((budget) => (
                        <option key={budget} value={budget}>
                          {budget}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="inquiry-timeline" className="form-label">
                      TARGET TIMELINE
                    </label>
                    <select
                      id="inquiry-timeline"
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="form-control"
                    >
                      {TIMELINES.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* PROJECT DESCRIPTION */}
                <div>
                  <label htmlFor="inquiry-desc" className="form-label">
                    PROJECT DESCRIPTION <span style={{ color: 'var(--color-accent-primary)' }}>*</span>
                  </label>
                  <textarea
                    id="inquiry-desc"
                    rows={5}
                    value={formData.description}
                    onChange={(e) => {
                      setFormData({ ...formData, description: e.target.value });
                      if (errors.description) setErrors({ ...errors, description: undefined });
                    }}
                    placeholder="Tell us what you're trying to solve, existing bottlenecks, and desired deliverables..."
                    className="form-control"
                    style={{ resize: 'vertical' }}
                    aria-invalid={!!errors.description}
                    aria-describedby={errors.description ? 'inquiry-desc-err' : undefined}
                  />
                  {errors.description && (
                    <span id="inquiry-desc-err" style={{ display: 'block', color: 'var(--color-accent-primary)', fontSize: '0.75rem', marginTop: '6px' }}>
                      {errors.description}
                    </span>
                  )}
                </div>

                {/* SUBMIT BUTTON WITH LOADING STATE */}
                <div style={{ marginTop: '8px', display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
                  <button
                    type="submit"
                    disabled={submissionState === 'loading'}
                    className="btn-primary"
                    style={{
                      padding: '16px 36px',
                      opacity: submissionState === 'loading' ? 0.75 : 1,
                      cursor: submissionState === 'loading' ? 'wait' : 'pointer',
                    }}
                  >
                    {submissionState === 'loading' ? 'TRANSMITTING BRIEF...' : 'TRANSMIT PROJECT BRIEF →'}
                  </button>

                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-fg-dim)' }}>
                    CONFIDENTIALITY &amp; NDA BY DEFAULT
                  </span>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
