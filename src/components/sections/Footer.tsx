import React, { useState } from 'react';
import { Logo } from '../ui/Logo';

// Configurable social & communication channels
const CHANNELS = [
  { label: 'Email', href: 'mailto:contact@vantiqstudio.com', external: false },
  { label: 'LinkedIn', href: 'https://linkedin.com', external: true },
  { label: 'Instagram', href: 'https://instagram.com', external: true },
  { label: 'GitHub', href: 'https://github.com', external: true },
];

const NAV_LINKS = [
  { label: 'WORK', href: '#selected-work' },
  { label: 'CAPABILITIES', href: '#capabilities' },
  { label: 'LAB', href: '#product-lab' },
  { label: 'STUDIO', href: '#studio-intro' },
  { label: 'INSIGHTS', href: '#insights' },
  { label: 'CONTACT', href: '#commission' },
];

export const Footer: React.FC = () => {
  const [legalModal, setLegalModal] = useState<'privacy' | 'terms' | null>(null);

  return (
    <footer
      role="contentinfo"
      style={{
        backgroundColor: 'var(--color-bg-surface)',
        borderTop: '1px solid var(--color-border-subtle)',
        padding: '96px 0 40px 0',
      }}
    >
      <div className="vantiq-container">
        {/* Main Grid: Wordmark, Nav, Channels */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(280px, 1.5fr) minmax(180px, 1fr) minmax(180px, 1fr)',
            gap: '56px',
            marginBottom: '72px',
          }}
          className="footer-main-grid"
        >
          {/* Column 1: Brand & Positioning */}
          <div>
            <div style={{ marginBottom: '20px' }}>
              <Logo size="lg" showTagline={false} />
            </div>

            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.85rem',
                letterSpacing: '0.14em',
                color: 'var(--color-fg-muted)',
                textTransform: 'uppercase',
                marginBottom: '24px',
              }}
            >
              Digital Systems · Intelligent Futures
            </div>

            <p
              style={{
                color: 'var(--color-fg-secondary)',
                fontSize: '0.95rem',
                lineHeight: 1.65,
                maxWidth: '400px',
              }}
            >
              Architecting high-dexterity digital platforms, real-time spatial web applications, and autonomous operational systems for tomorrow.
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: 'var(--color-accent-primary)',
                marginBottom: '24px',
              }}
            >
              NAVIGATION
            </div>

            <nav aria-label="Footer Navigation">
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {NAV_LINKS.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '0.95rem',
                        fontWeight: 600,
                        letterSpacing: '0.06em',
                        color: 'var(--color-fg-secondary)',
                        transition: 'color var(--transition-fast)',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-fg-primary)')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-fg-secondary)')}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Column 3: Configurable Communication Channels */}
          <div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: 'var(--color-accent-primary)',
                marginBottom: '24px',
              }}
            >
              CHANNELS
            </div>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {CHANNELS.map((ch) => (
                <li key={ch.label}>
                  <a
                    href={ch.href}
                    target={ch.external ? '_blank' : undefined}
                    rel={ch.external ? 'noopener noreferrer' : undefined}
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.95rem',
                      color: 'var(--color-fg-secondary)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      transition: 'color var(--transition-fast)',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-accent-primary)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-fg-secondary)')}
                  >
                    <span>{ch.label}</span>
                    {ch.external && <span style={{ fontSize: '0.75rem', opacity: 0.7 }}>↗</span>}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Sub-bar: Copyright & Legal */}
        <div
          style={{
            borderTop: '1px solid var(--color-border-subtle)',
            paddingTop: '36px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '20px',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.8rem',
            color: 'var(--color-fg-dim)',
          }}
        >
          {/* Copyright strictly 2026 VANTIQ STUDIO */}
          <div>
            &copy; 2026 VANTIQ STUDIO
          </div>

          {/* Legal Links & Back to Top */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '28px' }}>
            <button
              type="button"
              onClick={() => setLegalModal('privacy')}
              style={{ color: 'var(--color-fg-muted)', transition: 'color var(--transition-fast)', background: 'none', border: 'none', font: 'inherit', cursor: 'pointer' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-fg-primary)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-fg-muted)')}
            >
              Privacy
            </button>
            <button
              type="button"
              onClick={() => setLegalModal('terms')}
              style={{ color: 'var(--color-fg-muted)', transition: 'color var(--transition-fast)', background: 'none', border: 'none', font: 'inherit', cursor: 'pointer' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-fg-primary)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-fg-muted)')}
            >
              Terms
            </button>
            <a
              href="#hero"
              style={{
                color: 'var(--color-accent-primary)',
                fontWeight: 600,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
              }}
            >
              <span>Back to Top</span>
              <span>↑</span>
            </a>
          </div>
        </div>
      </div>

      {/* Legal Information Modal */}
      {legalModal && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={legalModal === 'privacy' ? 'Privacy Policy' : 'Terms of Engagement'}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
          }}
          onClick={() => setLegalModal(null)}
        >
          <div
            style={{
              backgroundColor: 'var(--color-bg-surface)',
              border: '1px solid var(--color-border-medium)',
              borderRadius: 'var(--radius-lg)',
              maxWidth: '640px',
              width: '100%',
              padding: '40px',
              position: 'relative',
              boxShadow: 'var(--shadow-card)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Close"
              onClick={() => setLegalModal(null)}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                backgroundColor: 'rgba(244, 240, 232, 0.08)',
                color: '#fff',
                fontSize: '1.25rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              &times;
            </button>

            <h3 style={{ fontSize: '1.6rem', color: '#fff', marginBottom: '16px' }}>
              {legalModal === 'privacy' ? 'Privacy & Data Governance' : 'Terms of Engagement'}
            </h3>

            <p style={{ color: 'var(--color-fg-secondary)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '20px' }}>
              {legalModal === 'privacy'
                ? 'Vantiq Studio operates on a strict zero-retention privacy standard. Inquiries transmitted through this platform are held in strict confidence under non-disclosure provisions. We do not sell, trade, or share visitor data with third-party tracking networks.'
                : 'All engineering blueprints, prototypes, and studio concepts presented on this website represent independent research & exploration. Client commissions are governed by bespoke bilateral software development agreements with defined intellectual property assignments.'}
            </p>

            <div style={{ textAlign: 'right' }}>
              <button type="button" onClick={() => setLegalModal(null)} className="btn-secondary" style={{ padding: '8px 20px', fontSize: '0.85rem' }}>
                Acknowledge &amp; Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
