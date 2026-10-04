import React, { useState } from 'react';

interface PrincipleItem {
  number: string;
  headline: string;
  contrastStatement: string;
  rationale: string;
  manifestoDetail: string;
}

const PRINCIPLES: PrincipleItem[] = [
  {
    number: '01',
    headline: 'USEFUL OVER FLASHY',
    contrastStatement: 'Efficacy First · Novelty Subordinate',
    rationale:
      'We reject superficial digital ornamentation that fails to serve a concrete user goal. Motion, 3D graphics, and bespoke aesthetics must enhance comprehension, speed task execution, and sharpen decision clarity.',
    manifestoDetail:
      'Every interaction curve, canvas shader, and kinetic response is measured by cognitive utility. If a visual component introduces friction or slows comprehension, it is removed.',
  },
  {
    number: '02',
    headline: 'SYSTEMS OVER FEATURES',
    contrastStatement: 'Architectural Durability · Holistic Integrity',
    rationale:
      'Isolated features compound technical and organizational debt. We design foundational digital systems—composable architectures, synchronized design tokens, and unified API contracts that compound value over time.',
    manifestoDetail:
      'Features come and go; resilient architectures sustain companies through decades of technological paradigm shifts.',
  },
  {
    number: '03',
    headline: 'CLARITY OVER COMPLEXITY',
    contrastStatement: 'Radical Legibility · Reduced Cognitive Burden',
    rationale:
      'Enterprise software does not need to feel suffocating. We turn intricate multi-layered workflows into calm, intuitive digital surfaces where operators feel confident and in control.',
    manifestoDetail:
      'Elegance is the absence of unnecessary decisions. We distill dense multi-channel flows into clear hierarchies with purposeful typography.',
  },
  {
    number: '04',
    headline: 'BUILD FOR THE REAL WORLD',
    contrastStatement: 'Unforgiving Production Testing · Zero Assumptions',
    rationale:
      'Real users operate on variable mobile networks, across imperfect devices, and under high operational stress. We build software that performs flawlessly outside pristine laboratory conditions.',
    manifestoDetail:
      'Low latency, graceful degradation, WCAG accessibility, and offline resilience are foundational requirements, never post-launch optimizations.',
  },
];

export const Principles: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="principles"
      aria-label="Studio Principles"
      style={{
        padding: '140px 0',
        backgroundColor: 'var(--color-bg-primary)',
        borderBottom: '1px solid var(--color-border-subtle)',
        position: 'relative',
        overflow: 'hidden',
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
            07 / STUDIO PRINCIPLES
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
            STANDARDS THAT DEFINE<br />
            <span style={{ color: 'var(--color-accent-primary)' }}>OUR CODE &amp; CRAFT.</span>
          </h2>

          <p style={{ fontSize: '1.15rem', color: 'var(--color-fg-secondary)', lineHeight: 1.7, maxWidth: '680px' }}>
            The immutable engineering and design values that govern every architectural commitment we make.
          </p>
        </div>

        {/* Editorial Four-Row Large Typography Layout */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {PRINCIPLES.map((principle, index) => {
            const isHovered = hoveredIndex === index;

            return (
              <article
                key={principle.number}
                className="content-card"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  padding: '48px 44px',
                  backgroundColor: isHovered ? 'var(--color-bg-surface)' : 'var(--color-bg-card)',
                  borderColor: isHovered ? 'var(--color-border-accent)' : 'var(--color-border-subtle)',
                  transform: isHovered ? 'translateX(8px)' : 'none',
                  transition: 'transform var(--transition-base), background-color var(--transition-base), border-color var(--transition-base)',
                  display: 'grid',
                  gridTemplateColumns: 'minmax(280px, 1.2fr) minmax(320px, 1fr)',
                  gap: '40px',
                  alignItems: 'center',
                }}
              >
                {/* Left Column: Number & Massive Headline */}
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '14px' }}>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.85rem',
                        color: isHovered ? 'var(--color-accent-primary)' : 'var(--color-fg-dim)',
                        transition: 'color var(--transition-fast)',
                      }}
                    >
                      RULE // {principle.number}
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.75rem',
                        color: 'var(--color-fg-muted)',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                      }}
                    >
                      {principle.contrastStatement}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: 'clamp(2rem, 4vw, 3.25rem)',
                      fontWeight: 700,
                      letterSpacing: '-0.03em',
                      lineHeight: 1.1,
                      color: isHovered ? 'var(--color-fg-primary)' : 'var(--color-fg-secondary)',
                      transition: 'color var(--transition-fast)',
                    }}
                  >
                    {principle.headline}
                  </h3>
                </div>

                {/* Right Column: Rationale & Manifesto Detail */}
                <div style={{ borderLeft: '1px solid var(--color-border-subtle)', paddingLeft: '32px' }}>
                  <p
                    style={{
                      color: 'var(--color-fg-primary)',
                      fontSize: '1.05rem',
                      lineHeight: 1.7,
                      marginBottom: '16px',
                    }}
                  >
                    {principle.rationale}
                  </p>
                  <p
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.8rem',
                      color: isHovered ? 'var(--color-accent-primary)' : 'var(--color-fg-muted)',
                      lineHeight: 1.6,
                      transition: 'color var(--transition-fast)',
                    }}
                  >
                    &ldquo;{principle.manifestoDetail}&rdquo;
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
