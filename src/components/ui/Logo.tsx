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
      {/* Minimal Geometric V Symbol */}
      <svg
        width={iconDim}
        height={iconDim}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        style={{ flexShrink: 0 }}
      >
        {/* Background container polygon */}
        <rect width="32" height="32" rx="6" fill="#272824" />
        {/* Geometric Left Apex */}
        <path
          d="M7 8L16 25L19.5 18.5L12.5 8H7Z"
          fill="var(--color-fg-primary)"
        />
        {/* Geometric Right Accent Apex */}
        <path
          d="M25 8L16 25L17.5 25L25 11.5V8Z"
          fill="var(--color-accent-primary)"
        />
      </svg>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <span
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
