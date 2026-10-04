import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ size = 'md', showTagline = false }) => {
  const iconSizes = {
    sm: 20,
    md: 26,
    lg: 36,
  };

  const fontSizes = {
    sm: '0.95rem',
    md: '1.15rem',
    lg: '1.5rem',
  };

  const iconDim = iconSizes[size];

  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: size === 'lg' ? '14px' : '10px',
        userSelect: 'none',
      }}
    >
      {/* Vantiq Brand Emblem */}
      <svg
        width={iconDim}
        height={iconDim}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        style={{ flexShrink: 0 }}
      >
        <defs>
          <linearGradient id="vantiq-nav-emblem" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a855f7" />
            <stop offset="45%" stopColor="#7c3aed" />
            <stop offset="100%" stopColor="#38bdf8" />
          </linearGradient>
        </defs>
        <path
          d="M25.946 44.938c-.664.845-2.021.375-2.021-.698V33.937a2.26 2.26 0 0 0-2.262-2.262H10.287c-.92 0-1.456-1.04-.92-1.788l7.48-10.471c1.07-1.497 0-3.578-1.842-3.578H1.237c-.92 0-1.456-1.04-.92-1.788L10.013.474c.214-.297.556-.474.92-.474h28.894c.92 0 1.456 1.04.92 1.788l-7.48 10.471c-1.07 1.498 0 3.579 1.842 3.579h11.377c.943 0 1.473 1.088.89 1.83L25.947 44.94z"
          fill="url(#vantiq-nav-emblem)"
        />
      </svg>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <span
          className="brand-logo-text"
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: fontSizes[size],
            fontWeight: 700,
            letterSpacing: '0.12em',
            lineHeight: 1,
            color: 'var(--color-fg-primary)',
            textTransform: 'uppercase',
          }}
        >
          VANTIQ <span style={{ color: 'var(--color-accent-primary)' }}>STUDIO</span>
        </span>
        {showTagline && (
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.625rem',
              letterSpacing: '0.16em',
              color: 'var(--color-fg-muted)',
              textTransform: 'uppercase',
              marginTop: '4px',
            }}
          >
            Digital Systems · Intelligent Futures
          </span>
        )}
      </div>
    </div>
  );
};
