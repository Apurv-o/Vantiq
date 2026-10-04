import React, { useState } from 'react';

interface CapabilityItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  expandedDesc: string;
  deliverables: string[];
  metrics: string;
  symbol: string;
  codeSnippet: string;
}

const CAPABILITIES_DATA: CapabilityItem[] = [
  {
    id: 'ai-systems',
    number: '01',
    title: 'AI SYSTEMS',
    shortDesc: 'Custom LLM architectures, multi-agent orchestrations, and context-aware cognitive pipelines.',
    expandedDesc:
      'We design and deploy purpose-built neural orchestration frameworks. From autonomous reasoning agents to local vector embeddings, we build AI tooling integrated directly into existing enterprise operations.',
    deliverables: ['Autonomous Agent Graphs', 'Retrieval-Augmented Systems', 'Custom Fine-Tuning & Quantization', 'Streaming Inference APIs'],
    metrics: '< 180ms TTFT • Zero Hallucination Guardrails',
    symbol: '◈',
    codeSnippet: 'agent.orchestrate({ nodes: 12, mode: "cognitive_stream" })',
  },
  {
    id: 'automation',
    number: '02',
    title: 'AUTOMATION',
    shortDesc: 'Deterministic workflow engines, continuous event-driven pipelines, and robotic system bridges.',
    expandedDesc:
      'Eliminating operational friction through deterministic automation architectures. We engineer event buses, webhook orchestration grids, and self-healing cloud pipelines that trigger actions with microsecond precision.',
    deliverables: ['Event-Driven Microservices', 'Webhook & Queue Meshes', 'Fault-Tolerant ETL Pipelines', 'Autonomous Reconciliation'],
    metrics: '99.999% Reliability • 0-Touch Execution',
    symbol: '⟐',
    codeSnippet: 'pipeline.dispatch({ triggers: ["telemetry.ingress", "audit.verify"] })',
  },
  {
    id: 'software-engineering',
    number: '03',
    title: 'SOFTWARE ENGINEERING',
    shortDesc: 'Resilient full-stack applications, scalable micro-frontends, and mission-critical cloud backends.',
    expandedDesc:
      'Architected for uncompromising performance and maintainability. We build strictly-typed, scalable web architectures utilizing modern distributed patterns, memory-safe primitives, and sub-second cold starts.',
    deliverables: ['Distributed Systems Architecture', 'TypeScript & Rust Services', 'High-Throughput GraphQL / gRPC', 'Micro-Frontend Topology'],
    metrics: '100% Type Safety • Sub-50ms Cold Starts',
    symbol: '⬡',
    codeSnippet: 'system.compile({ target: "edge_distributed", strict: true })',
  },
  {
    id: 'digital-experiences',
    number: '04',
    title: 'DIGITAL EXPERIENCES',
    shortDesc: 'Spatial 3D interfaces, creative WebGL environments, and responsive kinetic design systems.',
    expandedDesc:
      'Crafting memorable interactive flagships where high art meets engineering rigor. We combine real-time GLSL shaders, procedural geometries, physics simulations, and editorial typography into cohesive brand ecosystems.',
    deliverables: ['Interactive WebGL / Three.js Canvas', 'Custom Kinetic Physics', 'Fluid Editorial Typography', 'WCAG AAA Accessibility'],
    metrics: '120 FPS Rendering • 100/100 Lighthouse Performance',
    symbol: '✦',
    codeSnippet: 'viewport.render({ renderer: "webgl_physical", fps: 120 })',
  },
  {
    id: 'data-intelligence',
    number: '05',
    title: 'DATA INTELLIGENCE',
    shortDesc: 'Real-time telemetry analytics, interactive spatial topography, and decision intelligence matrices.',
    expandedDesc:
      'Transforming high-volume, disparate data streams into actionable intelligence interfaces. We build streaming visual telemetry boards, latency-indexed charts, and predictive analytics consoles for rapid operator decisions.',
    deliverables: ['Real-Time Streaming Telemetry', 'Spatial Topography Mapping', 'Time-Series Analysis Consoles', 'Anomaly Detection Heuristics'],
    metrics: 'Sub-second queries over 100M+ data points',
    symbol: '⌬',
    codeSnippet: 'telemetry.stream({ cadence: "16ms", compression: "arrow" })',
  },
  {
    id: 'system-integration',
    number: '06',
    title: 'SYSTEM INTEGRATION',
    shortDesc: 'Seamless unification of legacy mainframes, modern APIs, edge gateways, and proprietary protocols.',
    expandedDesc:
      'Bridging fragmented operational silos without requiring costly system overhauls. We build unified API layers, edge translation gateways, and robust authentication envelopes that bring legacy and modern software into harmony.',
    deliverables: ['Legacy-to-Modern Bridges', 'Edge API Gateways', 'Zero-Trust Auth Envelopes', 'Bidirectional Synchronization'],
    metrics: 'Zero Downtime Migrations • Global Edge Routing',
    symbol: '⎔',
    codeSnippet: 'bridge.synchronize({ source: "enterprise_legacy", target: "vantiq_mesh" })',
  },
];

export const Capabilities: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [mobileExpandedIndex, setMobileExpandedIndex] = useState<number | null>(0);

  const activeCapability = CAPABILITIES_DATA[selectedIndex];

  return (
    <section
      id="capabilities"
      aria-label="Capabilities"
      style={{
        padding: '140px 0',
        backgroundColor: 'var(--color-bg-primary)',
        borderBottom: '1px solid var(--color-border-subtle)',
        position: 'relative',
      }}
    >
      <div className="vantiq-container">
        {/* Header */}
        <div style={{ maxWidth: '800px', marginBottom: '80px' }}>
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
            03 / CAPABILITIES
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
            DISCIPLINES ARCHITECTED<br />
            <span style={{ color: 'var(--color-accent-primary)' }}>FOR IMPACT.</span>
          </h2>

          <p style={{ fontSize: '1.15rem', color: 'var(--color-fg-secondary)', lineHeight: 1.7, maxWidth: '640px' }}>
            We do not operate as disjointed departments. Every engagement pairs cross-disciplinary depth with high-velocity execution.
          </p>
        </div>

        {/* Index-Style Split Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1.25fr) minmax(360px, 1fr)',
            gap: '64px',
            alignItems: 'start',
          }}
          className="capabilities-desktop-grid"
        >
          {/* Left Column: Index List */}
          <div role="list" aria-label="Capabilities Index" style={{ display: 'flex', flexDirection: 'column' }}>
            {CAPABILITIES_DATA.map((item, index) => {
              const isSelected = selectedIndex === index;
              const isMobileExpanded = mobileExpandedIndex === index;

              return (
                <div
                  key={item.id}
                  role="listitem"
                  style={{
                    borderTop: '1px solid var(--color-border-subtle)',
                    borderBottom: index === CAPABILITIES_DATA.length - 1 ? '1px solid var(--color-border-subtle)' : 'none',
                    transition: 'background-color var(--transition-fast)',
                    backgroundColor: isSelected ? 'rgba(244, 240, 232, 0.025)' : 'transparent',
                  }}
                >
                  <button
                    type="button"
                    aria-expanded={isMobileExpanded}
                    aria-controls={`capability-detail-${item.id}`}
                    onClick={() => {
                      setSelectedIndex(index);
                      setMobileExpandedIndex(isMobileExpanded ? null : index);
                    }}
                    onMouseEnter={() => setSelectedIndex(index)}
                    onFocus={() => setSelectedIndex(index)}
                    style={{
                      width: '100%',
                      padding: '28px 16px',
                      display: 'flex',
                      alignItems: 'baseline',
                      justifyContent: 'space-between',
                      textAlign: 'left',
                      transition: 'all var(--transition-fast)',
                      cursor: 'pointer',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '24px' }}>
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.85rem',
                          color: isSelected ? 'var(--color-accent-primary)' : 'var(--color-fg-dim)',
                          transition: 'color var(--transition-fast)',
                        }}
                      >
                        {item.number}
                      </span>
                      <h3
                        style={{
                          fontFamily: 'var(--font-heading)',
                          fontSize: 'clamp(1.25rem, 2.4vw, 1.85rem)',
                          fontWeight: 700,
                          letterSpacing: '-0.02em',
                          color: isSelected ? 'var(--color-fg-primary)' : 'var(--color-fg-secondary)',
                          transition: 'color var(--transition-fast), transform var(--transition-fast)',
                          transform: isSelected ? 'translateX(8px)' : 'translateX(0)',
                        }}
                      >
                        {item.title}
                      </h3>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                      <span
                        style={{
                          fontFamily: 'var(--font-heading)',
                          fontSize: '1.25rem',
                          color: isSelected ? 'var(--color-accent-primary)' : 'var(--color-fg-dim)',
                          transition: 'transform var(--transition-fast)',
                          transform: isSelected ? 'scale(1.2)' : 'scale(1)',
                        }}
                      >
                        {item.symbol}
                      </span>
                    </div>
                  </button>

                  {/* Inline Short Description on List */}
                  <div
                    style={{
                      padding: '0 16px 20px 58px',
                      color: 'var(--color-fg-muted)',
                      fontSize: '0.95rem',
                      lineHeight: 1.6,
                      maxWidth: '680px',
                    }}
                  >
                    {item.shortDesc}
                  </div>

                  {/* Mobile Expanded Drawer State (Visible when tapped on Mobile) */}
                  {isMobileExpanded && (
                    <div
                      id={`capability-detail-${item.id}`}
                      className="capabilities-mobile-expanded"
                      style={{
                        padding: '24px 20px',
                        margin: '0 16px 24px 16px',
                        backgroundColor: 'var(--color-bg-surface)',
                        borderRadius: 'var(--radius-md)',
                        border: '1px solid var(--color-border-accent)',
                      }}
                    >
                      <p style={{ color: 'var(--color-fg-primary)', fontSize: '0.95rem', lineHeight: 1.65, marginBottom: '20px' }}>
                        {item.expandedDesc}
                      </p>

                      <div style={{ marginBottom: '16px' }}>
                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-accent-primary)', textTransform: 'uppercase' }}>
                          Core Deliverables:
                        </span>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '8px' }}>
                          {item.deliverables.map((del) => (
                            <span key={del} className="badge" style={{ margin: 0 }}>
                              {del}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--color-fg-muted)' }}>
                        BENCHMARK: {item.metrics}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Desktop Visual Stage / Expanded Intelligence Display */}
          <div
            className="capabilities-desktop-visual"
            style={{
              position: 'sticky',
              top: '120px',
              backgroundColor: 'var(--color-bg-surface)',
              border: '1px solid var(--color-border-medium)',
              borderRadius: 'var(--radius-lg)',
              padding: '40px',
              boxShadow: 'var(--shadow-card)',
            }}
          >
            {/* Visual Node Matrix Header */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingBottom: '20px',
                borderBottom: '1px solid var(--color-border-subtle)',
                marginBottom: '28px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span
                  style={{
                    fontSize: '1.75rem',
                    color: 'var(--color-accent-primary)',
                    lineHeight: 1,
                  }}
                >
                  {activeCapability.symbol}
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.8rem',
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: 'var(--color-fg-muted)',
                  }}
                >
                  SPECIFICATION // {activeCapability.number}
                </span>
              </div>

              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  padding: '4px 10px',
                  borderRadius: 'var(--radius-pill)',
                  backgroundColor: 'var(--color-accent-subtle)',
                  color: 'var(--color-accent-primary)',
                  border: '1px solid var(--color-border-accent)',
                }}
              >
                LIVE MATRIX
              </span>
            </div>

            <h3
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.85rem',
                fontWeight: 700,
                color: 'var(--color-fg-primary)',
                marginBottom: '16px',
              }}
            >
              {activeCapability.title}
            </h3>

            <p
              style={{
                color: 'var(--color-fg-secondary)',
                fontSize: '1rem',
                lineHeight: 1.7,
                marginBottom: '32px',
              }}
            >
              {activeCapability.expandedDesc}
            </p>

            {/* Visual Code/Architecture Badge */}
            <div
              style={{
                backgroundColor: 'var(--color-bg-primary)',
                border: '1px solid var(--color-border-subtle)',
                borderRadius: 'var(--radius-sm)',
                padding: '16px 20px',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8rem',
                color: 'var(--color-accent-primary)',
                marginBottom: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <span>{activeCapability.codeSnippet}</span>
              <span style={{ color: 'var(--color-fg-dim)' }}>OK</span>
            </div>

            {/* Deliverables Grid */}
            <div style={{ marginBottom: '32px' }}>
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
                TECHNICAL ARTIFACTS
              </span>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}>
                {activeCapability.deliverables.map((del) => (
                  <div
                    key={del}
                    style={{
                      padding: '10px 14px',
                      backgroundColor: 'var(--color-bg-card)',
                      border: '1px solid var(--color-border-subtle)',
                      borderRadius: 'var(--radius-sm)',
                      fontSize: '0.825rem',
                      color: 'var(--color-fg-primary)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                    }}
                  >
                    <span style={{ color: 'var(--color-accent-primary)', fontSize: '0.7rem' }}>■</span>
                    {del}
                  </div>
                ))}
              </div>
            </div>

            {/* Performance Benchmark Footnote */}
            <div
              style={{
                borderTop: '1px solid var(--color-border-subtle)',
                paddingTop: '20px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                color: 'var(--color-fg-muted)',
              }}
            >
              <span>BENCHMARK STANDARD:</span>
              <span style={{ color: 'var(--color-fg-primary)', fontWeight: 600 }}>{activeCapability.metrics}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
