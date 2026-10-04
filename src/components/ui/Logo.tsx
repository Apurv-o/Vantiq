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
        viewBox="0 0 181 181"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        style={{ flexShrink: 0 }}
      >
        {/* Orange Accent Shard */}
        <path
          d="M0 25L37 25L44 34L25 64Z"
          fill="var(--color-accent-primary)"
        />
        {/* Middle Parallel Slash */}
        <path
          d="M78 20L111 20L55 110L38 84Z"
          fill="var(--color-fg-primary)"
        />
        {/* Right Primary Slash */}
        <path
          d="M144 16L181 16L89 165L71 134Z"
          fill="var(--color-fg-primary)"
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
