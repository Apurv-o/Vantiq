import React, { useState } from 'react';

interface ArticleInsight {
  id: string;
  number: string;
  title: string;
  readTime: string;
  topic: string;
  summary: string;
  editorialOverview: string;
  strategicTakeaways: string[];
}

const INSIGHTS_DATA: ArticleInsight[] = [
  {
    id: 'ai-automation-start',
    number: '01',
    title: 'AI AUTOMATION: WHERE TO START',
    readTime: '6 min read',
    topic: 'SYSTEM ROADMAPPING',
    summary:
      'Why organizations fail when deploying AI top-down, and how to identify high-leverage deterministic bottlenecks before training or fine-tuning models.',
    editorialOverview:
      'Successful automation does not begin by asking where neural models can be inserted; it begins with an exhaustive audit of repetitive information translation tasks. When teams automate structured handoffs first, artificial intelligence acts as an amplifier rather than an unstable patch.',
    strategicTakeaways: [
      'Audit document ingestion, schema normalization, and manual categorization handoffs first.',
      'Separate deterministic rules (validation, routing) from probabilistic inferences (NLP, classification).',
      'Establish strict confidence thresholds and human-in-the-loop escalation gates from day one.',
    ],
  },
  {
    id: 'scalable-software',
    number: '02',
    title: 'WHAT MAKES SOFTWARE PRODUCTS SCALABLE?',
    readTime: '8 min read',
    topic: 'SOFTWARE ARCHITECTURE',
    summary:
      'True architectural scalability is not merely handling more concurrent web sockets; it is keeping team velocity high as product complexity multiplies.',
    editorialOverview:
      'Systems break down organizationally long before they break down computationally. We explore the structural boundaries, modular domain isolation, and interface contracts that allow software codebases to absorb changing business requirements without regression.',
    strategicTakeaways: [
      'Enforce explicit schema boundaries between micro-frontends and domain services.',
      'Isolate heavy rendering and complex calculation routines into background Web Workers.',
      'Invest early in synchronized token architectures to prevent fragmented UI divergence.',
    ],
  },
  {
    id: 'human-centered-ai',
    number: '03',
    title: 'DESIGNING HUMAN-CENTERED AI',
    readTime: '5 min read',
    topic: 'INTERACTION DESIGN',
    summary:
      'Moving past generic chat text boxes toward tactile spatial controls that keep human operators confident, informed, and in control of autonomous agents.',
    editorialOverview:
      'Chat interfaces are rarely the optimal medium for complex operational workflows. Effective AI interfaces visualize reasoning pathways, expose certainty metrics, and provide explicit steering handles that let operators guide outputs interactively.',
    strategicTakeaways: [
      'Provide spatial HUDs and telemetry indicators rather than conversational blind alleys.',
      'Expose parameter controls, seed adjustments, and confidence metrics transparently.',
      'Design instantaneous undo states and versioned rollbacks for every autonomous operation.',
    ],
  },
  {
    id: 'custom-software',
    number: '04',
    title: 'WHEN SHOULD A BUSINESS BUILD CUSTOM SOFTWARE?',
    readTime: '7 min read',
    topic: 'COMMERCIAL STRATEGY',
    summary:
      'A practical framework for evaluating whether off-the-shelf SaaS stacks accelerate your operations or quietly cap your competitive differentiation.',
    editorialOverview:
      'Commodity workflows belong in commodity SaaS platforms. However, when a company’s primary market advantage depends on proprietary operational speed, tailored customer ergonomics, or unique data loops, off-the-shelf software becomes a structural ceiling.',
    strategicTakeaways: [
      'Use off-the-shelf SaaS for generic operations (payroll, generic ticketing).',
      'Engineer custom software for core differentiated IP and competitive operational mechanics.',
      'Calculate total cost of workaround engineering versus bespoke platform ownership.',
    ],
  },
  {
    id: 'manual-to-intelligent',
    number: '05',
    title: 'FROM MANUAL WORKFLOWS TO INTELLIGENT SYSTEMS',
    readTime: '6 min read',
    topic: 'ORGANIZATIONAL MATURITY',
    summary:
      'The incremental phased journey from fragile spreadsheets and inbox queues to resilient, self-healing event-driven software engines.',
    editorialOverview:
      'Transformation is not a risky overnight rewrite; it is the deliberate replacement of fragmented human handoffs with event buses and verified schemas. We outline the evolutionary playbook for shifting from batch operations to live streaming systems.',
    strategicTakeaways: [
      'Phase 1: Ingest and centralize disparate ingress files into normalized formats.',
      'Phase 2: Deploy deterministic validators and automated routing pipelines.',
      'Phase 3: Integrate context-aware neural agents for semantic ambiguity resolution.',
    ],
  },
];

export const Insights: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<ArticleInsight | null>(null);

  return (
    <section
      id="insights"
      aria-label="Insights & Field Notes"
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
            08 / FIELD NOTES &amp; INSIGHTS
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
            EDITORIAL OBSERVATIONS &amp;<br />
            <span style={{ color: 'var(--color-accent-primary)' }}>SYSTEM THOUGHT.</span>
          </h2>

          <p style={{ fontSize: '1.15rem', color: 'var(--color-fg-secondary)', lineHeight: 1.7, maxWidth: '680px' }}>
            Realistic perspectives on software architecture, automation roadmaps, and human-machine interaction models published by the studio.
          </p>
        </div>

        {/* Five Article Previews List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {INSIGHTS_DATA.map((article) => (
            <article
              key={article.id}
              className="content-card insights-card"
              style={{
                padding: '36px 40px',
                cursor: 'pointer',
                display: 'grid',
                gridTemplateColumns: 'minmax(240px, 1.4fr) minmax(280px, 1fr) auto',
                gap: '32px',
                alignItems: 'center',
              }}
              onClick={() => setSelectedArticle(article)}
            >
              {/* Title & Metadata */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-accent-primary)' }}>
                    NOTE // {article.number}
                  </span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-fg-dim)' }}>
                    {article.topic}
                  </span>
                </div>

                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'clamp(1.25rem, 2vw, 1.65rem)',
                    fontWeight: 700,
                    letterSpacing: '-0.02em',
                    color: 'var(--color-fg-primary)',
                    margin: 0,
                  }}
                >
                  {article.title}
                </h3>
              </div>

              {/* Summary */}
              <div>
                <p style={{ color: 'var(--color-fg-secondary)', fontSize: '0.95rem', lineHeight: 1.65, margin: 0 }}>
                  {article.summary}
                </p>
              </div>

              {/* Action Button & Read Time */}
              <div style={{ textAlign: 'right', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '8px' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-fg-muted)' }}>
                  {article.readTime}
                </span>
                <span style={{ color: 'var(--color-accent-primary)', fontSize: '1.25rem', fontWeight: 700 }}>
                  &rarr;
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Modal Deep-Dive Reader */}
        {selectedArticle && (
          <div
            role="dialog"
            aria-modal="true"
            aria-label={selectedArticle.title}
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
            onClick={() => setSelectedArticle(null)}
          >
            <div
              style={{
                backgroundColor: 'var(--color-bg-surface)',
                border: '1px solid var(--color-border-medium)',
                borderRadius: 'var(--radius-lg)',
                maxWidth: '740px',
                width: '100%',
                maxHeight: '90vh',
                overflowY: 'auto',
                padding: '48px 40px',
                position: 'relative',
                boxShadow: 'var(--shadow-card)',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                type="button"
                aria-label="Close Article"
                onClick={() => setSelectedArticle(null)}
                style={{
                  position: 'absolute',
                  top: '24px',
                  right: '24px',
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(244, 240, 232, 0.08)',
                  color: 'var(--color-fg-primary)',
                  fontSize: '1.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                &times;
              </button>

              <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '16px' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-accent-primary)' }}>
                  FIELD NOTE // {selectedArticle.number}
                </span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-fg-muted)' }}>
                  {selectedArticle.readTime}
                </span>
              </div>

              <h2
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '2.25rem',
                  fontWeight: 700,
                  letterSpacing: '-0.03em',
                  color: 'var(--color-fg-primary)',
                  marginBottom: '20px',
                }}
              >
                {selectedArticle.title}
              </h2>

              <p style={{ color: 'var(--color-fg-secondary)', fontSize: '1.1rem', lineHeight: 1.75, marginBottom: '32px' }}>
                {selectedArticle.editorialOverview}
              </p>

              <h4
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.8rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--color-accent-primary)',
                  marginBottom: '16px',
                }}
              >
                STRATEGIC TAKEAWAYS &amp; IMPLEMENTATION PRAGMATICS
              </h4>

              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '36px' }}>
                {selectedArticle.strategicTakeaways.map((takeaway, idx) => (
                  <li
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'baseline',
                      gap: '12px',
                      color: 'var(--color-fg-primary)',
                      fontSize: '0.975rem',
                      lineHeight: 1.6,
                    }}
                  >
                    <span style={{ color: 'var(--color-accent-primary)', fontFamily: 'var(--font-mono)', fontSize: '0.8rem' }}>0{idx + 1}.</span>
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>

              <div style={{ borderTop: '1px solid var(--color-border-subtle)', paddingTop: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-fg-dim)' }}>
                  INTERNAL EDITORIAL CONTENT // VANTIQ STUDIO
                </span>
                <button
                  type="button"
                  onClick={() => setSelectedArticle(null)}
                  className="btn-secondary"
                  style={{ padding: '8px 20px', fontSize: '0.85rem' }}
                >
                  Close Note
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
