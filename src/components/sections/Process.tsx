import React, { useState, useEffect, useRef } from 'react';

interface ProcessStage {
  step: string;
  name: string;
  markerSymbol: string;
  objective: string;
  activities: string[];
  deliverables: string[];
}

const STAGES: ProcessStage[] = [
  {
    step: '01',
    name: 'DISCOVER',
    markerSymbol: '◎',
    objective: 'Deconstruct organizational reality, technical bottlenecks, and competitive vectors before writing code.',
    activities: [
      'Stakeholder immersion & architectural audits',
      'Data-flow mapping & operational friction analysis',
      'Latency & security baseline profiling',
      'Technology feasibility & constraint analysis',
    ],
    deliverables: [
      'Diagnostic Architectural Audit',
      'Strategic Vector Blueprint',
      'Feasibility & Technical Constraints Map',
    ],
  },
  {
    step: '02',
    name: 'DEFINE',
    markerSymbol: '◈',
    objective: 'Synthesize raw discovery into rigorous functional specifications, schema invariants, and UX directions.',
    activities: [
      'Schema design & API contract drafting',
      'Information architecture & state tree scoping',
      'Performance budgets (LCP, FID, WebGL frame budget)',
      'Design token foundations & editorial visual guidelines',
    ],
    deliverables: [
      'Production System Specification',
      'OpenAPI & GraphQL Contract Schema',
      'Design System Token Primitives',
    ],
  },
  {
    step: '03',
    name: 'DESIGN',
    markerSymbol: '✦',
    objective: 'Craft high-dexterity interactive interfaces that balance aesthetic distinction with functional ergonomic clarity.',
    activities: [
      'Spatial UX layouts & responsive wireframes',
      'Kinetic motion design & shader prototypes',
      'Accessible typography & high-contrast themes',
      'Tactile micro-interaction & physics calibration',
    ],
    deliverables: [
      'Interactive Figma Master Systems',
      'WebGL Kinetic Motion Prototypes',
      'Design Component Pattern Library',
    ],
  },
  {
    step: '04',
    name: 'BUILD',
    markerSymbol: '⬡',
    objective: 'Execute production engineering with uncompromising adherence to type safety, low latency, and zero-downtime standards.',
    activities: [
      'Component construction in TypeScript & React 19',
      'Three.js / WebGL shader optimization & asset compression',
      'Event-driven backend service implementation',
      'Automated test suites & continuous profiling',
    ],
    deliverables: [
      'Production TypeScript Codebase',
      'Optimized WebGL Canvas Pipelines',
      'Automated CI/CD Validation Suites',
    ],
  },
  {
    step: '05',
    name: 'LAUNCH',
    markerSymbol: '⎔',
    objective: 'Deliver global edge deployment with continuous telemetry observability, knowledge transfer, and operational stability.',
    activities: [
      'Global multi-region CDN caching & route warming',
      'Load stress-testing under simulated peak concurrency',
      'Zero-downtime DNS cutover orchestration',
      'Real-time telemetry & anomaly alarm calibration',
    ],
    deliverables: [
      'Live Production Global Deployment',
      'Telemetry & Observability Dashboard',
      'System Architecture Documentation & Handover',
    ],
  },
];

export const Process: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const [visibleStages, setVisibleStages] = useState<boolean[]>([false, false, false, false, false]);
  const sectionRef = useRef<HTMLElement>(null);
  const stageRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Scroll observer to trigger stage entrance animations
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    stageRefs.current.forEach((el, index) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleStages((prev) => {
              const next = [...prev];
              next[index] = true;
              return next;
            });
            setActiveStepIndex(index);
          }
        },
        { threshold: 0.25 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  return (
    <section
      ref={sectionRef}
      id="process"
      aria-label="How We Build"
      style={{
        padding: '140px 0',
        backgroundColor: 'var(--color-bg-primary)',
        borderBottom: '1px solid var(--color-border-subtle)',
        position: 'relative',
      }}
    >
      <div className="vantiq-container">
        {/* Header */}
        <div style={{ maxWidth: '880px', marginBottom: '80px' }}>
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
            05 / HOW WE BUILD
          </div>

          <h2
            style={{
              fontSize: 'clamp(2.5rem, 5.5vw, 4.25rem)',
              lineHeight: 1.05,
              fontWeight: 700,
              letterSpacing: '-0.035em',
              color: 'var(--color-fg-primary)',
              textTransform: 'uppercase',
              marginBottom: '24px',
            }}
          >
            DISCIPLINED DELIVERY.<br />
            <span style={{ color: 'var(--color-accent-primary)' }}>ZERO AMBIGUITY.</span>
          </h2>

          <p style={{ fontSize: '1.15rem', color: 'var(--color-fg-secondary)', lineHeight: 1.7, maxWidth: '680px' }}>
            A phased delivery methodology uniting strategic discovery, precision design, robust engineering, and resilient global launch.
          </p>
        </div>

        {/* ========================================================
            DESKTOP HORIZONTAL TIMELINE CONTROLLER (> 900px)
            ======================================================== */}
        <div className="desktop-timeline-nav" style={{ marginBottom: '64px' }}>
          {/* Connecting Track Line */}
          <div
            style={{
              height: '2px',
              backgroundColor: 'var(--color-border-subtle)',
              position: 'relative',
              marginBottom: '-16px',
              zIndex: 1,
            }}
          >
            <div
              style={{
                height: '100%',
                width: `${(activeStepIndex / (STAGES.length - 1)) * 100}%`,
                backgroundColor: 'var(--color-accent-primary)',
                transition: 'width 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            />
          </div>

          {/* Stepper Buttons Across Track */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              position: 'relative',
              zIndex: 2,
            }}
          >
            {STAGES.map((s, idx) => {
              const isPassed = idx <= activeStepIndex;
              const isCurrent = idx === activeStepIndex;

              return (
                <button
                  key={s.step}
                  type="button"
                  onClick={() => {
                    setActiveStepIndex(idx);
                    const el = stageRefs.current[idx];
                    if (el) {
                      const headerOffset = 100;
                      const elementPosition = el.getBoundingClientRect().top;
                      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                    }
                  }}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '12px',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                >
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      backgroundColor: isPassed ? 'var(--color-accent-primary)' : 'var(--color-bg-surface)',
                      border: '2px solid',
                      borderColor: isPassed ? 'var(--color-accent-primary)' : 'var(--color-border-medium)',
                      color: isPassed ? '#fff' : 'var(--color-fg-dim)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.85rem',
                      fontFamily: 'var(--font-mono)',
                      fontWeight: 700,
                      transition: 'all 0.3s ease',
                      boxShadow: isCurrent ? '0 0 16px var(--color-accent-primary)' : 'none',
                    }}
                  >
                    {s.markerSymbol}
                  </div>

                  <span
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '0.85rem',
                      fontWeight: 700,
                      letterSpacing: '0.08em',
                      color: isCurrent ? 'var(--color-fg-primary)' : 'var(--color-fg-muted)',
                      transition: 'color 0.2s ease',
                    }}
                  >
                    {s.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ========================================================
            PROCESS STAGES DISPLAY (RESPONSIVE STACK)
            ======================================================== */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {STAGES.map((stage, idx) => {
            const isVisible = visibleStages[idx];
            const isFocused = activeStepIndex === idx;

            return (
              <div
                key={stage.step}
                ref={(el) => {
                  stageRefs.current[idx] = el;
                }}
                className="content-card"
                style={{
                  padding: '48px 40px',
                  backgroundColor: isFocused ? 'var(--color-bg-surface)' : 'var(--color-bg-card)',
                  borderLeft: isFocused ? '4px solid var(--color-accent-primary)' : '1px solid var(--color-border-subtle)',
                  borderColor: isFocused ? 'var(--color-border-accent)' : 'var(--color-border-subtle)',
                  opacity: isVisible ? 1 : 0.4,
                  transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
                  transition: 'opacity 0.6s ease, transform 0.6s ease, background-color 0.3s ease',
                }}
              >
                {/* Stage Header */}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'baseline',
                    flexWrap: 'wrap',
                    gap: '16px',
                    marginBottom: '24px',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <span
                      style={{
                        fontSize: '1.75rem',
                        color: 'var(--color-accent-primary)',
                        fontFamily: 'var(--font-mono)',
                      }}
                    >
                      {stage.markerSymbol}
                    </span>
                    <h3
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '2rem',
                        fontWeight: 700,
                        letterSpacing: '-0.02em',
                        color: 'var(--color-fg-primary)',
                        margin: 0,
                      }}
                    >
                      {stage.step} // {stage.name}
                    </h3>
                  </div>

                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      letterSpacing: '0.12em',
                      color: 'var(--color-accent-primary)',
                      textTransform: 'uppercase',
                      backgroundColor: 'var(--color-accent-subtle)',
                      padding: '4px 10px',
                      borderRadius: 'var(--radius-xs)',
                    }}
                  >
                    PHASE {stage.step}
                  </span>
                </div>

                {/* Objective */}
                <div style={{ marginBottom: '32px' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase',
                      color: 'var(--color-fg-muted)',
                      display: 'block',
                      marginBottom: '8px',
                    }}
                  >
                    STRATEGIC OBJECTIVE
                  </span>
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '1.15rem',
                      color: 'var(--color-fg-primary)',
                      lineHeight: 1.65,
                      maxWidth: '900px',
                    }}
                  >
                    {stage.objective}
                  </p>
                </div>

                {/* Activities & Deliverables Two-Column Grid */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '32px',
                    borderTop: '1px solid var(--color-border-subtle)',
                    paddingTop: '28px',
                  }}
                >
                  {/* Activities */}
                  <div>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.75rem',
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        color: 'var(--color-fg-muted)',
                        display: 'block',
                        marginBottom: '14px',
                      }}
                    >
                      KEY ACTIVITIES &amp; RIGOR
                    </span>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      {stage.activities.map((act) => (
                        <li
                          key={act}
                          style={{
                            display: 'flex',
                            alignItems: 'baseline',
                            gap: '10px',
                            fontSize: '0.925rem',
                            color: 'var(--color-fg-secondary)',
                          }}
                        >
                          <span style={{ color: 'var(--color-accent-primary)', fontSize: '0.75rem' }}>■</span>
                          <span>{act}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Deliverables */}
                  <div>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.75rem',
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        color: 'var(--color-fg-muted)',
                        display: 'block',
                        marginBottom: '14px',
                      }}
                    >
                      FORMAL DELIVERABLES
                    </span>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      {stage.deliverables.map((del) => (
                        <li
                          key={del}
                          style={{
                            display: 'flex',
                            alignItems: 'baseline',
                            gap: '10px',
                            fontSize: '0.925rem',
                            color: 'var(--color-fg-primary)',
                            fontWeight: 500,
                          }}
                        >
                          <span style={{ color: 'var(--color-accent-primary)', fontFamily: 'var(--font-mono)', fontSize: '0.8rem' }}>&rarr;</span>
                          <span>{del}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
