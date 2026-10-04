import React, { useState } from 'react';
import { ArchitectureCanvas } from '../canvas/ArchitectureCanvas';

interface SystemLayer {
  id: string;
  label: string;
  orderNumber: string;
  yPos: number; // 3D vertical position
  category: string;
  description: string;
  exampleTech: string[];
  businessPurpose: string;
  plainEnglishExplanation: string;
}

const SYSTEM_LAYERS: SystemLayer[] = [
  {
    id: 'user',
    label: 'USER',
    orderNumber: '01',
    yPos: 3.5,
    category: 'Ingress & Human Interface',
    description: 'The person, customer, or enterprise operator engaging with the system via web, mobile, or hardware interfaces.',
    exampleTech: ['Browser Viewports', 'Native Devices', 'Biometric Sensors', 'Hardware Terminals'],
    businessPurpose: 'Captures authentic human intent and initiates critical operational or transaction requests.',
    plainEnglishExplanation: 'Where your customers and employees actually interact—the front door of your software.',
  },
  {
    id: 'frontend',
    label: 'FRONTEND',
    orderNumber: '02',
    yPos: 2.5,
    category: 'Presentation & UI Engine',
    description: 'The interactive visual layer rendered locally on client devices with responsive typography and kinetic physics.',
    exampleTech: ['React 19', 'TypeScript', 'Tailwind Tokens', 'Three.js / WebGL'],
    businessPurpose: 'Delivers instantaneous, friction-free interactions that build brand trust and reduce abandonment.',
    plainEnglishExplanation: 'The screens, buttons, and animations you see and touch that make digital tools enjoyable to use.',
  },
  {
    id: 'backend',
    label: 'BACKEND',
    orderNumber: '03',
    yPos: 1.5,
    category: 'Core Logic & Orchestration',
    description: 'The central computational engine executing business rules, user authorizations, and validation invariant checks.',
    exampleTech: ['Node.js', 'Rust Microservices', 'Distributed Workers', 'Go Services'],
    businessPurpose: 'Enforces operational security, handles complex math, and ensures all business rules are adhered to.',
    plainEnglishExplanation: 'The behind-the-scenes engine room that verifies accounts and organizes workflows safely.',
  },
  {
    id: 'api',
    label: 'API',
    orderNumber: '04',
    yPos: 0.5,
    category: 'Transport & Edge Gateways',
    description: 'The standardized communication bridge translating internal data schemas into universal networking contracts.',
    exampleTech: ['GraphQL', 'gRPC', 'RESTful OpenAPI', 'WebSocket Streams'],
    businessPurpose: 'Permits disparate software applications to exchange mission-critical data securely without bottlenecks.',
    plainEnglishExplanation: 'The digital telephone lines connecting different parts of your company without language barriers.',
  },
  {
    id: 'ai',
    label: 'AI',
    orderNumber: '05',
    yPos: -0.5,
    category: 'Cognitive & Predictive Layer',
    description: 'Autonomous neural models evaluating unstructured texts, detecting anomalies, and extracting semantic context.',
    exampleTech: ['Custom Fine-Tuned LLMs', 'Vector Embedding DBs', 'Semantic Routers', 'Quantized Models'],
    businessPurpose: 'Transforms ambiguous manual tasks and messy data into structured, automated decision recommendations.',
    plainEnglishExplanation: 'Intelligent automation that reads complex documents and surfaces actionable answers instantly.',
  },
  {
    id: 'database',
    label: 'DATABASE',
    orderNumber: '06',
    yPos: -1.5,
    category: 'Transactional & State Persistence',
    description: 'The permanent, immutable storage tier maintaining ACID transactional integrity, history logs, and relational schemas.',
    exampleTech: ['PostgreSQL', 'Redis In-Memory Streams', 'ClickHouse Analytics', 'Vector Stores'],
    businessPurpose: 'Guarantees zero data loss, maintains audit readiness, and enables rapid historical recall.',
    plainEnglishExplanation: 'The secure digital vault where customer profiles, orders, and company records live safely forever.',
  },
  {
    id: 'integrations',
    label: 'INTEGRATIONS',
    orderNumber: '07',
    yPos: -2.5,
    category: 'Third-Party & Legacy Meshes',
    description: 'External connectors orchestrating sync between payment processors, logistics gateways, and legacy enterprise software.',
    exampleTech: ['Stripe Payments', 'Salesforce Sync', 'ERP Mainframes', 'Kafka Event Meshes'],
    businessPurpose: 'Unifies existing enterprise investments with modern platforms without requiring full system replacement.',
    plainEnglishExplanation: 'Bridges that plug your system into banks, shipping couriers, and software you already use.',
  },
  {
    id: 'analytics',
    label: 'ANALYTICS',
    orderNumber: '08',
    yPos: -3.5,
    category: 'Telemetry & Continuous Intelligence',
    description: 'Real-time observability pipelines monitoring throughput, error rates, and executive KPI milestones.',
    exampleTech: ['OpenTelemetry', 'Prometheus', 'Grafana Boards', 'Custom Ingress Pipelines'],
    businessPurpose: 'Provides clear executive visibility into uptime, system health, and strategic growth trends.',
    plainEnglishExplanation: 'The cockpit dials that show leaders how quickly and reliably the company is operating.',
  },
];

export const Architecture: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const activeLayer = SYSTEM_LAYERS[selectedIndex];

  return (
    <section
      id="architecture"
      aria-label="How Systems Connect"
      style={{
        padding: '140px 0',
        backgroundColor: 'var(--color-bg-primary)',
        borderBottom: '1px solid var(--color-border-subtle)',
        position: 'relative',
      }}
    >
      <div className="vantiq-container">
        {/* Section Header */}
        <div style={{ maxWidth: '880px', marginBottom: '72px' }}>
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
            06 / SYSTEM TOPOLOGY
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
            HOW SYSTEMS<br />
            <span style={{ color: 'var(--color-accent-primary)' }}>CONNECT.</span>
          </h2>

          <p style={{ fontSize: '1.15rem', color: 'var(--color-fg-secondary)', lineHeight: 1.7, maxWidth: '680px' }}>
            An interactive engineering schematic illustrating how human intention flows seamlessly from user interfaces through logic, neural models, and databases.
          </p>
        </div>

        {/* Interactive Architecture Arena */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(280px, 1fr) minmax(320px, 1.2fr)',
            gap: '40px',
            alignItems: 'start',
          }}
          className="architecture-desktop-grid"
        >
          {/* Left Column: 3D Interactive Architecture Canvas & Layer Selector */}
          <div>
            <div style={{ marginBottom: '24px' }}>
              <ArchitectureCanvas
                layers={SYSTEM_LAYERS}
                selectedIndex={selectedIndex}
                onSelectLayer={(idx) => setSelectedIndex(idx)}
              />
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.7rem',
                  color: 'var(--color-fg-muted)',
                  marginTop: '10px',
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
              >
                <span>INTERACTIVE 3D MONOLITH SLABS</span>
                <span style={{ color: 'var(--color-accent-primary)' }}>CLICK SLAB TO NAVIGATE</span>
              </div>
            </div>

            {/* Stepper Pills for Direct Selection */}
            <div
              role="tablist"
              aria-label="System Layers"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '8px',
              }}
            >
              {SYSTEM_LAYERS.map((layer, idx) => {
                const isSelected = selectedIndex === idx;
                return (
                  <button
                    key={layer.id}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    onClick={() => setSelectedIndex(idx)}
                    style={{
                      padding: '10px 8px',
                      borderRadius: 'var(--radius-sm)',
                      backgroundColor: isSelected ? 'var(--color-accent-subtle)' : 'var(--color-bg-card)',
                      border: '1px solid',
                      borderColor: isSelected ? 'var(--color-accent-primary)' : 'var(--color-border-subtle)',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.7rem',
                      fontWeight: 600,
                      color: isSelected ? 'var(--color-accent-primary)' : 'var(--color-fg-muted)',
                      textAlign: 'center',
                      transition: 'all var(--transition-fast)',
                    }}
                  >
                    0{idx + 1} {layer.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Layer Inspector & Business Explanation */}
          <div
            className="content-card"
            style={{
              padding: '40px',
              backgroundColor: 'var(--color-bg-surface)',
              boxShadow: 'var(--shadow-card)',
            }}
          >
            {/* Inspector Top Bar */}
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
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--color-accent-primary)' }} />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--color-accent-primary)', fontWeight: 600 }}>
                  LAYER {activeLayer.orderNumber} // {activeLayer.label}
                </span>
              </div>

              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-fg-muted)' }}>
                {activeLayer.category}
              </span>
            </div>

            <h3
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '2rem',
                fontWeight: 700,
                color: 'var(--color-fg-primary)',
                marginBottom: '16px',
              }}
            >
              {activeLayer.label}
            </h3>

            {/* Plain English Translation for Non-Technical Clients */}
            <div
              style={{
                backgroundColor: 'rgba(230, 108, 58, 0.06)',
                border: '1px solid var(--color-border-accent)',
                borderRadius: 'var(--radius-sm)',
                padding: '16px 20px',
                marginBottom: '28px',
              }}
            >
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--color-accent-primary)', marginBottom: '4px', textTransform: 'uppercase' }}>
                IN PLAIN TERMS:
              </div>
              <div style={{ color: 'var(--color-fg-primary)', fontSize: '1rem', lineHeight: 1.6, fontWeight: 500 }}>
                {activeLayer.plainEnglishExplanation}
              </div>
            </div>

            {/* Technical Description */}
            <div style={{ marginBottom: '28px' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-fg-muted)', marginBottom: '8px', textTransform: 'uppercase' }}>
                SYSTEM DESCRIPTION
              </div>
              <p style={{ color: 'var(--color-fg-secondary)', fontSize: '1rem', lineHeight: 1.7 }}>
                {activeLayer.description}
              </p>
            </div>

            {/* Business Purpose */}
            <div style={{ marginBottom: '28px' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-fg-muted)', marginBottom: '8px', textTransform: 'uppercase' }}>
                BUSINESS PURPOSE &amp; VALUE
              </div>
              <p style={{ color: 'var(--color-fg-primary)', fontSize: '0.95rem', lineHeight: 1.65 }}>
                {activeLayer.businessPurpose}
              </p>
            </div>

            {/* Example Technologies */}
            <div style={{ borderTop: '1px solid var(--color-border-subtle)', paddingTop: '24px' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-fg-muted)', marginBottom: '12px', textTransform: 'uppercase' }}>
                EXAMPLE IMPLEMENTATION TECHNOLOGIES
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {activeLayer.exampleTech.map((tech) => (
                  <span key={tech} className="badge" style={{ margin: 0, padding: '6px 12px', fontSize: '0.75rem' }}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
