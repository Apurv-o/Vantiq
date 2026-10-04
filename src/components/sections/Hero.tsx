import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      aria-label="Introduction & Hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        paddingTop: '80px',
        display: 'flex',
        alignItems: 'center',
        borderBottom: '1px solid var(--color-border-subtle)',
        backgroundColor: 'var(--color-bg-primary)',
        overflow: 'hidden',
      }}
    >
      {/* Endless Looping Video Stream */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '50%',
          right: '4%',
          transform: 'translateY(-50%)',
          width: 'clamp(340px, 52vw, 760px)',
          aspectRatio: '1 / 1',
          pointerEvents: 'none',
          zIndex: 1,
          opacity: 0.95,
          mixBlendMode: 'screen',
          borderRadius: '50%',
          overflow: 'hidden',
          maskImage: 'radial-gradient(circle at center, black 60%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(circle at center, black 60%, transparent 80%)',
        }}
        className="hero-video-loop"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          src="/core-loop.mp4"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </div>

      {/* Hero Foreground Content */}
      <div
        className="vantiq-container"
        style={{
          width: '100%',
          paddingTop: '64px',
          paddingBottom: '80px',
          position: 'relative',
          zIndex: 2,
        }}
      >
        <div style={{ maxWidth: '820px' }}>
          {/* Small Label */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 14px',
              borderRadius: 'var(--radius-pill)',
              border: '1px solid var(--color-border-medium)',
              backgroundColor: 'rgba(32, 33, 30, 0.7)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
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
            01 / INTRODUCTION
          </div>

          {/* Main Headline */}
          <h1
            style={{
              fontSize: 'clamp(3rem, 7.5vw, 6.2rem)',
              lineHeight: 0.98,
              fontWeight: 700,
              letterSpacing: '-0.04em',
              marginBottom: '32px',
              color: 'var(--color-fg-primary)',
              textTransform: 'uppercase',
            }}
          >
            WE ENGINEER<br />
            <span
              style={{
                color: 'transparent',
                WebkitTextStroke: '1px var(--color-fg-primary)',
                letterSpacing: '-0.03em',
              }}
            >
              WHAT&apos;S
            </span>{' '}
            <span style={{ color: 'var(--color-accent-primary)' }}>NEXT.</span>
          </h1>

          {/* Supporting Copy */}
          <p
            style={{
              fontSize: 'clamp(1.125rem, 2.2vw, 1.35rem)',
              color: 'var(--color-fg-secondary)',
              lineHeight: 1.6,
              maxWidth: '620px',
              marginBottom: '44px',
              fontWeight: 400,
            }}
          >
            Intelligent software, automation, and digital experiences built around real business problems.
          </p>

          {/* Action CTAs */}
          <div className="hero-cta-container" style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <a
              href="#selected-work"
              className="btn-primary"
              style={{
                letterSpacing: '0.06em',
                fontSize: '0.875rem',
                padding: '16px 32px',
              }}
            >
              EXPLORE OUR WORK
            </a>
            <a
              href="#commission"
              className="btn-secondary"
              style={{
                letterSpacing: '0.06em',
                fontSize: '0.875rem',
                padding: '16px 32px',
              }}
            >
              START A PROJECT
            </a>
          </div>
        </div>

        {/* Cinematic Metric/Status Bar at Bottom of Hero */}
        <div
          className="hero-metric-bar"
          style={{
            marginTop: '80px',
            paddingTop: '28px',
            borderTop: '1px solid var(--color-border-subtle)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '24px',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem',
            color: 'var(--color-fg-muted)',
            letterSpacing: '0.08em',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span
              style={{
                width: '7px',
                height: '7px',
                borderRadius: '50%',
                backgroundColor: 'var(--color-accent-primary)',
                boxShadow: '0 0 8px var(--color-accent-primary)',
              }}
            />
            <span>CORE NODE: ACTIVE (AUTONOMOUS GRAPH)</span>
          </div>
          <div>EST. TOKYO / SAN FRANCISCO / GLOBAL</div>
          <div>SCROLL TO DECRYPT &darr;</div>
        </div>
      </div>
    </section>
  );
};
