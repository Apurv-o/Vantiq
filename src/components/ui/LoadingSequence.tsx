import React, { useEffect, useState } from 'react';

interface LoadingSequenceProps {
  onComplete: () => void;
}

export const LoadingSequence: React.FC<LoadingSequenceProps> = ({ onComplete }) => {
  const [percent, setPercent] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    // Check if user requested reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      onComplete();
      return;
    }

    const interval = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setFading(true);
          setTimeout(() => {
            onComplete();
          }, 450);
          return 100;
        }
        // Steady architectural pace
        const step = Math.floor(Math.random() * 12) + 8;
        return Math.min(100, prev + step);
      });
    }, 60);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'var(--color-bg-primary)',
        zIndex: 100000,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: fading ? 0 : 1,
        transition: 'opacity 0.45s cubic-bezier(0.16, 1, 0.3, 1)',
        pointerEvents: fading ? 'none' : 'all',
      }}
    >
      <div style={{ maxWidth: '320px', width: '100%', padding: '0 24px', textAlign: 'center' }}>
        <div
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '1.2rem',
            fontWeight: 700,
            letterSpacing: '0.14em',
            color: 'var(--color-fg-primary)',
            textTransform: 'uppercase',
            marginBottom: '16px',
          }}
        >
          VANTIQ <span style={{ color: 'var(--color-accent-primary)' }}>STUDIO</span>
        </div>

        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem',
            color: 'var(--color-fg-muted)',
            letterSpacing: '0.12em',
            marginBottom: '20px',
          }}
        >
          INITIALIZING TOPOLOGY // {percent}%
        </div>

        {/* Minimal Progress Line */}
        <div
          style={{
            height: '2px',
            width: '100%',
            backgroundColor: 'rgba(244, 240, 232, 0.08)',
            borderRadius: '1px',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              height: '100%',
              width: `${percent}%`,
              backgroundColor: 'var(--color-accent-primary)',
              transition: 'width 0.1s linear',
            }}
          />
        </div>
      </div>
    </div>
  );
};
