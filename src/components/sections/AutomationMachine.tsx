import React, { useState } from 'react';

interface WorkflowNode {
  id: string;
  label: string;
  stageNumber: string;
  type: 'manual' | 'automated';
  description: string;
  specs: string;
  latencyIndicator: string;
  statusText: string;
}

const MANUAL_WORKFLOW: WorkflowNode[] = [
  {
    id: 'm-input',
    label: 'INPUT',
    stageNumber: '01',
    type: 'manual',
    description: 'Unstructured customer documents, varying file formats, raw emails, and fragmented ingress tickets arrive in queues.',
    specs: 'Disparate multi-channel ingestion with variable formatting and missing schema constraints.',
    latencyIndicator: 'Variable Arrival',
    statusText: 'Unsorted Influx',
  },
  {
    id: 'm-task',
    label: 'MANUAL TASK',
    stageNumber: '02',
    type: 'manual',
    description: 'Team members read documents, manually transcribe relevant parameters, and sort files into local folders.',
    specs: 'Repetitive human data transcription with contextual cognitive strain.',
    latencyIndicator: 'High Human Overhead',
    statusText: 'Context Switching',
  },
  {
    id: 'm-review',
    label: 'HUMAN REVIEW',
    stageNumber: '03',
    type: 'manual',
    description: 'Secondary supervisors cross-check transcribed values against physical or disconnected digital records.',
    specs: 'Synchronous review bottleneck contingent on personnel shift schedules.',
    latencyIndicator: 'Queue Lag',
    statusText: 'Pending Approval',
  },
  {
    id: 'm-entry',
    label: 'DATA ENTRY',
    stageNumber: '04',
    type: 'manual',
    description: 'Staff manually paste audited numbers into enterprise ERP and CRM systems line by line.',
    specs: 'Prone to typographical divergence and siloed database synchronization gaps.',
    latencyIndicator: 'Mechanical Delay',
    statusText: 'Keying Records',
  },
  {
    id: 'm-report',
    label: 'REPORT',
    stageNumber: '05',
    type: 'manual',
    description: 'Static spreadsheets assembled periodically and circulated via email attachments with stale figures.',
    specs: 'Retrospective, batch-compiled snapshot lagging behind live operational reality.',
    latencyIndicator: 'Batch Cycles',
    statusText: 'Static Distribution',
  },
];

const AUTOMATED_WORKFLOW: WorkflowNode[] = [
  {
    id: 'a-input',
    label: 'INPUT',
    stageNumber: '01',
    type: 'automated',
    description: 'Deterministic API webhook, event bus, and streaming document ingestion automatically parse payloads on arrival.',
    specs: 'Instantaneous multi-source schema normalization and cryptographic validation.',
    latencyIndicator: 'Sub-second Ingress',
    statusText: 'Streaming Socket',
  },
  {
    id: 'a-ai',
    label: 'AI PROCESSING',
    stageNumber: '02',
    type: 'automated',
    description: 'Context-aware neural models extract structured schemas, resolve ambiguities, and evaluate intent.',
    specs: 'Vectorized classification, entity extraction, and confidence threshold grading.',
    latencyIndicator: 'Parallel Inference',
    statusText: 'Model Inference',
  },
  {
    id: 'a-automation',
    label: 'AUTOMATION',
    stageNumber: '03',
    type: 'automated',
    description: 'Deterministic rule engine routes valid payloads through branch pipelines and flags anomalies to oversight loops.',
    specs: 'DAG execution engine with automatic retry policies and circuit breaking.',
    latencyIndicator: 'Continuous Execution',
    statusText: 'Pipeline Dispatched',
  },
  {
    id: 'a-db',
    label: 'DATABASE',
    stageNumber: '04',
    type: 'automated',
    description: 'ACID-compliant atomic writes commit sanitized state directly into transactional stores and analytics lakes.',
    specs: 'Distributed relational and vector storage with zero-latency read replicas.',
    latencyIndicator: 'Atomic Persistence',
    statusText: 'Committed State',
  },
  {
    id: 'a-action',
    label: 'ACTION',
    stageNumber: '05',
    type: 'automated',
    description: 'Outbound webhooks trigger downstream logistics, dispatch live notifications, and refresh operational telemetry.',
    specs: 'Real-time event broadcasts triggering instant customer fulfillment.',
    latencyIndicator: 'Immediate Dispatch',
    statusText: 'Autonomous Execution',
  },
];

export const AutomationMachine: React.FC = () => {
  const [mode, setMode] = useState<'manual' | 'automated'>('automated');
  const [activeNodeIndex, setActiveNodeIndex] = useState<number>(0);

  const currentNodes = mode === 'manual' ? MANUAL_WORKFLOW : AUTOMATED_WORKFLOW;
  const currentNode = currentNodes[activeNodeIndex] || currentNodes[0];

  return (
    <section
      id="automation-machine"
      aria-label="The Automation Machine"
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
            ENGINEERING SCHEMATIC // WORKFLOW TRANSFORMATION
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
            THE AUTOMATION<br />
            <span style={{ color: 'var(--color-accent-primary)' }}>MACHINE.</span>
          </h2>

          <p style={{ fontSize: '1.15rem', color: 'var(--color-fg-secondary)', lineHeight: 1.7, maxWidth: '680px' }}>
            Demonstrating how a manual, friction-laden business process transitions into an intelligent, deterministic automated workflow.
          </p>
        </div>

        {/* State Toggle Controller */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '20px',
            marginBottom: '48px',
            paddingBottom: '24px',
            borderBottom: '1px solid var(--color-border-subtle)',
          }}
        >
          <div
            style={{
              display: 'inline-flex',
              padding: '4px',
              backgroundColor: 'var(--color-bg-surface)',
              borderRadius: 'var(--radius-pill)',
              border: '1px solid var(--color-border-medium)',
            }}
          >
            <button
              type="button"
              onClick={() => {
                setMode('manual');
                setActiveNodeIndex(0);
              }}
              style={{
                padding: '10px 24px',
                borderRadius: 'var(--radius-pill)',
                fontFamily: 'var(--font-heading)',
                fontSize: '0.85rem',
                fontWeight: 600,
                letterSpacing: '0.04em',
                color: mode === 'manual' ? '#fff' : 'var(--color-fg-muted)',
                backgroundColor: mode === 'manual' ? '#444641' : 'transparent',
                transition: 'all var(--transition-fast)',
              }}
            >
              INITIAL: MANUAL PROCESS
            </button>
            <button
              type="button"
              onClick={() => {
                setMode('automated');
                setActiveNodeIndex(0);
              }}
              style={{
                padding: '10px 24px',
                borderRadius: 'var(--radius-pill)',
                fontFamily: 'var(--font-heading)',
                fontSize: '0.85rem',
                fontWeight: 600,
                letterSpacing: '0.04em',
                color: mode === 'automated' ? '#fff' : 'var(--color-fg-muted)',
                backgroundColor: mode === 'automated' ? 'var(--color-accent-primary)' : 'transparent',
                transition: 'all var(--transition-fast)',
              }}
            >
              FUTURE: AUTOMATED MACHINE
            </button>
          </div>

          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.8rem',
              color: 'var(--color-fg-muted)',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
            }}
          >
            <span
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: mode === 'automated' ? 'var(--color-accent-primary)' : '#85877E',
                boxShadow: mode === 'automated' ? '0 0 10px var(--color-accent-primary)' : 'none',
              }}
            />
            STATUS: {mode === 'automated' ? 'CONTINUOUS EVENT STREAMING' : 'ASYNCHRONOUS MANUAL DELAY'}
          </div>
        </div>

        {/* Engineering Diagram Visual Arena */}
        <div
          style={{
            backgroundColor: 'var(--color-bg-surface)',
            border: '1px solid var(--color-border-medium)',
            borderRadius: 'var(--radius-lg)',
            padding: '48px 36px',
            boxShadow: 'var(--shadow-card)',
            position: 'relative',
          }}
        >
          {/* Engineering Blueprint Header */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '40px',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              color: 'var(--color-fg-muted)',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
            }}
          >
            <span>DIAGRAM PROTOCOL // {mode === 'manual' ? 'FLOW-MAN-01' : 'FLOW-AUT-02'}</span>
            <span>TOPOLOGY: {mode === 'manual' ? 'DISJOINTED MANUAL QUEUE' : 'DIRECTED ACYCLIC GRAPH'}</span>
          </div>

          {/* Interactive Flow Nodes and Connecting Lines */}
          <div
            role="tablist"
            aria-label="Workflow Nodes"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '20px',
              position: 'relative',
              marginBottom: '56px',
            }}
          >
            {currentNodes.map((node, index) => {
              const isActive = activeNodeIndex === index;
              return (
                <button
                  key={node.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls="node-inspector-panel"
                  onClick={() => setActiveNodeIndex(index)}
                  style={{
                    position: 'relative',
                    padding: '24px 20px',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid',
                    borderColor: isActive
                      ? mode === 'automated' ? 'var(--color-accent-primary)' : '#F4F0E8'
                      : 'var(--color-border-subtle)',
                    backgroundColor: isActive
                      ? mode === 'automated' ? 'var(--color-accent-subtle)' : 'rgba(255, 255, 255, 0.05)'
                      : 'var(--color-bg-card)',
                    textAlign: 'left',
                    transition: 'all var(--transition-base)',
                    boxShadow: isActive ? 'var(--shadow-card)' : 'none',
                    transform: isActive ? 'translateY(-4px)' : 'none',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.75rem',
                        color: isActive ? 'var(--color-accent-primary)' : 'var(--color-fg-dim)',
                      }}
                    >
                      STEP {node.stageNumber}
                    </span>
                    <span
                      style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        backgroundColor: isActive
                          ? mode === 'automated' ? 'var(--color-accent-primary)' : '#F4F0E8'
                          : 'var(--color-border-strong)',
                        boxShadow: isActive && mode === 'automated' ? '0 0 8px var(--color-accent-primary)' : 'none',
                      }}
                    />
                  </div>

                  <h3
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.15rem',
                      fontWeight: 700,
                      letterSpacing: '-0.01em',
                      color: isActive ? 'var(--color-fg-primary)' : 'var(--color-fg-muted)',
                      marginBottom: '8px',
                    }}
                  >
                    {node.label}
                  </h3>

                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.7rem',
                      color: isActive ? 'var(--color-fg-primary)' : 'var(--color-fg-dim)',
                    }}
                  >
                    {node.statusText}
                  </div>

                  {/* Flow Arrow for sequential nodes */}
                  {index < currentNodes.length - 1 && (
                    <div
                      aria-hidden="true"
                      style={{
                        position: 'absolute',
                        right: '-14px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        zIndex: 2,
                        color: mode === 'automated' ? 'var(--color-accent-primary)' : 'var(--color-fg-dim)',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '1rem',
                        fontWeight: 700,
                      }}
                    >
                      &rarr;
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Animated Connecting Particle Stream Indicator */}
          <div
            aria-hidden="true"
            style={{
              height: '4px',
              backgroundColor: 'var(--color-bg-primary)',
              borderRadius: 'var(--radius-pill)',
              position: 'relative',
              overflow: 'hidden',
              marginBottom: '48px',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                width: '35%',
                background: mode === 'automated'
                  ? 'linear-gradient(90deg, transparent, var(--color-accent-primary), transparent)'
                  : 'linear-gradient(90deg, transparent, var(--color-fg-muted), transparent)',
                borderRadius: 'var(--radius-pill)',
                animation: mode === 'automated' ? 'flowingData 1.6s infinite linear' : 'flowingData 4.5s infinite linear',
              }}
            />
          </div>

          {/* Node Inspector Detailed Breakdown Panel */}
          <div
            id="node-inspector-panel"
            style={{
              padding: '36px',
              backgroundColor: 'var(--color-bg-primary)',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--color-border-subtle)',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '36px',
              alignItems: 'center',
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  letterSpacing: '0.12em',
                  color: mode === 'automated' ? 'var(--color-accent-primary)' : 'var(--color-fg-muted)',
                  textTransform: 'uppercase',
                  marginBottom: '10px',
                }}
              >
                NODE INSPECTOR // {currentNode.stageNumber} // {currentNode.type.toUpperCase()}
              </div>

              <h3
                style={{
                  fontSize: '1.75rem',
                  fontWeight: 700,
                  color: 'var(--color-fg-primary)',
                  marginBottom: '12px',
                }}
              >
                {currentNode.label}
              </h3>

              <p style={{ color: 'var(--color-fg-secondary)', fontSize: '1.05rem', lineHeight: 1.7 }}>
                {currentNode.description}
              </p>
            </div>

            <div
              style={{
                borderLeft: '1px solid var(--color-border-medium)',
                paddingLeft: '32px',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
              }}
            >
              <div>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--color-fg-muted)',
                    display: 'block',
                    marginBottom: '6px',
                  }}
                >
                  TECHNICAL SPECIFICATION
                </span>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: 'var(--color-fg-primary)' }}>
                  {currentNode.specs}
                </p>
              </div>

              <div>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--color-fg-muted)',
                    display: 'block',
                    marginBottom: '6px',
                  }}
                >
                  SYSTEM LATENCY PROFILE
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.85rem',
                    color: mode === 'automated' ? 'var(--color-accent-primary)' : 'var(--color-fg-dim)',
                    fontWeight: 600,
                  }}
                >
                  {currentNode.latencyIndicator}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
