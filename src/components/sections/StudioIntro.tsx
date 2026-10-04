import React, { useState, useEffect, useRef } from 'react';

interface StageInfo {
  number: string;
  name: string;
  description: string;
  focus: string;
}

const SEQUENCE_STAGES: StageInfo[] = [
  {
    number: '01',
    name: 'STRATEGY',
    description: 'Deconstructing core market mechanics, identifying structural bottlenecks, and formulating high-leverage architectural roadmaps.',
    focus: 'System Architecture · Discovery · Vector Planning',
  },
  {
    number: '02',
    name: 'DESIGN',
    description: 'Transforming complexity into intuitive, high-dexterity user interfaces and cohesive design systems built for longevity.',
    focus: 'Spatial Design · Component Systems · Editorial Direction',
  },
  {
    number: '03',
    name: 'ENGINEERING',
    description: 'Building robust, resilient frontends, APIs, and real-time WebGL graphics optimized for zero-latency execution.',
    focus: 'Production Code · WebGL/3D · Performance Benchmarks',
  },
  {
    number: '04',
    name: 'INTELLIGENCE',
    description: 'Integrating autonomous models, deterministic automation, and continuous adaptive workflows directly into the software stack.',
    focus: 'Autonomous Agents · Model Integration · Telemetry',
  },
];

export const StudioIntro: React.FC = () => {
  const [activeStage, setActiveStage] = useState<number>(0);
  const [revealed, setRevealed] = useState<boolean>(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Scroll reveal trigger
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="studio-intro"
      aria-label="Studio Introduction"
      style={{
        position: 'relative',
        padding: '140px 0',
        backgroundColor: 'var(--color-bg-primary)',
        borderBottom: '1px solid var(--color-border-subtle)',
        overflow: 'hidden',
      }}
    >
      {/* Subtle Background Geometric Grid Line */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          width: '1px',
          height: '100%',
          backgroundColor: 'var(--color-border-subtle)',
          opacity: 0.4,
          pointerEvents: 'none',
        }}
      />

      <div className="vantiq-container">
        {/* Section Header */}
        <div style={{ maxWidth: '940px', marginBottom: '88px' }}>
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
            02 / THE STUDIO
          </div>

          <h2
            style={{
              fontSize: 'clamp(2.75rem, 6vw, 4.75rem)',
              lineHeight: 1.05,
              fontWeight: 700,
              letterSpacing: '-0.035em',
              marginBottom: '32px',
              color: 'var(--color-fg-primary)',
              textTransform: 'uppercase',
              opacity: revealed ? 1 : 0,
              transform: revealed ? 'translateY(0)' : 'translateY(24px)',
              transition: 'opacity var(--transition-slow), transform var(--transition-slow)',
            }}
          >
            COMPLEX PROBLEMS.<br />
            <span style={{ color: 'var(--color-accent-primary)' }}>CLEARER SYSTEMS.</span>
          </h2>

          <p
            style={{
              fontSize: 'clamp(1.15rem, 2.2vw, 1.45rem)',
              color: 'var(--color-fg-secondary)',
              lineHeight: 1.65,
              maxWidth: '820px',
              opacity: revealed ? 1 : 0,
              transform: revealed ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity var(--transition-slow) 120ms, transform var(--transition-slow) 120ms',
            }}
          >
            VANTIQ STUDIO combines strategy, design, engineering, and artificial intelligence to create digital systems that make businesses more capable.
          </p>
        </div>

        {/* Interactive Visual Sequence: STRATEGY → DESIGN → ENGINEERING → INTELLIGENCE */}
        <div
          style={{
            margin: '80px 0',
            padding: '48px 40px',
            backgroundColor: 'var(--color-bg-surface)',
            border: '1px solid var(--color-border-medium)',
            borderRadius: 'var(--radius-lg)',
            boxShadow: 'var(--shadow-card)',
            position: 'relative',
          }}
        >
          {/* Top Sequence Progress Tracker */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '40px',
              flexWrap: 'wrap',
              gap: '16px',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'var(--color-fg-muted)',
              }}
            >
              EXECUTION MATRIX // PROGRESSION
            </span>

            {/* Stepper Dots & Connectors */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              {SEQUENCE_STAGES.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  aria-label={`Jump to stage ${idx + 1}`}
                  onClick={() => setActiveStage(idx)}
                  style={{
                    width: activeStage === idx ? '28px' : '10px',
                    height: '10px',
                    borderRadius: 'var(--radius-pill)',
                    backgroundColor: activeStage === idx ? 'var(--color-accent-primary)' : 'var(--color-border-strong)',
                    transition: 'all var(--transition-base)',
                  }}
                />
              ))}
            </div>
          </div>

          {/* Flow Bar: STRATEGY → DESIGN → ENGINEERING → INTELLIGENCE */}
          <div
            role="tablist"
            aria-label="Studio capability sequence"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '16px',
              marginBottom: '48px',
            }}
          >
            {SEQUENCE_STAGES.map((stage, idx) => {
              const isCurrent = activeStage === idx;
              return (
                <button
                  key={stage.name}
                  type="button"
                  role="tab"
                  aria-selected={isCurrent}
                  onClick={() => setActiveStage(idx)}
                  style={{
                    padding: '20px 24px',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid',
                    borderColor: isCurrent ? 'var(--color-accent-primary)' : 'var(--color-border-subtle)',
                    backgroundColor: isCurrent ? 'var(--color-accent-subtle)' : 'var(--color-bg-card)',
                    textAlign: 'left',
                    transition: 'all var(--transition-base)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    minHeight: '110px',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginBottom: '12px' }}>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.75rem',
                        color: isCurrent ? 'var(--color-accent-primary)' : 'var(--color-fg-dim)',
                      }}
                    >
                      {stage.number}
                    </span>
                    {idx < SEQUENCE_STAGES.length - 1 && (
                      <span
                        aria-hidden="true"
                        style={{
                          color: isCurrent ? 'var(--color-accent-primary)' : 'var(--color-fg-dim)',
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.9rem',
                        }}
                      >
                        &rarr;
                      </span>
                    )}
                  </div>

                  <span
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.15rem',
                      fontWeight: 700,
                      letterSpacing: '0.04em',
                      color: isCurrent ? 'var(--color-fg-primary)' : 'var(--color-fg-muted)',
                    }}
                  >
                    {stage.name}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Stage Detailed Dynamic Panel */}
          <div
            style={{
              padding: '36px 32px',
              backgroundColor: 'var(--color-bg-primary)',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--color-border-subtle)',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '32px',
              alignItems: 'center',
            }}
          >
            <div>
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
                CURRENT STAGE // {SEQUENCE_STAGES[activeStage].number}
              </div>
              <h3
                style={{
                  fontSize: '1.75rem',
                  fontWeight: 700,
                  color: 'var(--color-fg-primary)',
                  marginBottom: '14px',
                }}
              >
                {SEQUENCE_STAGES[activeStage].name}
              </h3>
              <p style={{ color: 'var(--color-fg-secondary)', fontSize: '1.05rem', lineHeight: 1.7 }}>
                {SEQUENCE_STAGES[activeStage].description}
              </p>
            </div>

            <div
              style={{
                borderLeft: '1px solid var(--color-border-medium)',
                paddingLeft: '28px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  letterSpacing: '0.12em',
                  color: 'var(--color-fg-muted)',
                  textTransform: 'uppercase',
                }}
              >
                DISCIPLINARY FOCUS
              </span>
              <p
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.95rem',
                  color: 'var(--color-fg-primary)',
                  lineHeight: 1.6,
                }}
              >
                {SEQUENCE_STAGES[activeStage].focus}
              </p>
            </div>
          </div>
        </div>

        {/* Large Editorial Statement */}
        <div
          style={{
            marginTop: '120px',
            padding: '80px 48px',
            backgroundColor: 'rgba(230, 108, 58, 0.035)',
            border: '1px solid var(--color-border-medium)',
            borderRadius: 'var(--radius-lg)',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Subtle Geometric Corner Accents */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              top: '16px',
              left: '16px',
              width: '16px',
              height: '16px',
              borderTop: '2px solid var(--color-accent-primary)',
              borderLeft: '2px solid var(--color-accent-primary)',
            }}
          />
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              bottom: '16px',
              right: '16px',
              width: '16px',
              height: '16px',
              borderBottom: '2px solid var(--color-accent-primary)',
              borderRight: '2px solid var(--color-accent-primary)',
            }}
          />

          <span
            style={{
              display: 'inline-block',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.8rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--color-accent-primary)',
              marginBottom: '24px',
            }}
          >
            PHILOSOPHICAL MANDATE
          </span>

          <blockquote
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2.2rem, 5.2vw, 4.4rem)',
              lineHeight: 1.08,
              fontWeight: 700,
              letterSpacing: '-0.035em',
              color: 'var(--color-fg-primary)',
              maxWidth: '1000px',
              margin: '0 auto',
              textTransform: 'uppercase',
            }}
          >
            WE DON&apos;T JUST SHIP FEATURES.<br />
            <span style={{ color: 'var(--color-accent-primary)' }}>WE BUILD SYSTEMS.</span>
          </blockquote>
        </div>
      </div>
    </section>
  );
};
