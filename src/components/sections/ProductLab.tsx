import React, { useState } from 'react';

type TabType = 'assistant' | 'resume' | 'dashboard' | 'workflow';

interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
}

export const ProductLab: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('assistant');

  // ==========================================
  // DEMO 01: AI ASSISTANT STATE & LOGIC
  // ==========================================
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      sender: 'assistant',
      text: 'VANTIQ Intelligence Core initialized in client demonstration mode. How can I assist your system design objectives today?',
      timestamp: '12:00:01',
    },
  ]);
  const [inputVal, setInputVal] = useState('');
  const [isAiLoading, setIsAiLoading] = useState(false);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputVal.trim() || isAiLoading) return;

    const userText = inputVal.trim();
    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: userText,
      timestamp: new Date().toLocaleTimeString(),
    };

    setChatMessages((prev) => [...prev, userMsg]);
    setInputVal('');
    setIsAiLoading(true);

    // Deterministic simulation responses for demo mode
    setTimeout(() => {
      let reply = 'Evaluating input parameters against architectural standards. Systems require strict schema invariants.';
      const lower = userText.toLowerCase();

      if (lower.includes('architecture') || lower.includes('stack')) {
        reply = 'VANTIQ Studio builds on decoupled presentation layers (React 19 + TypeScript + WebGL) paired with low-latency event-driven microservices.';
      } else if (lower.includes('performance') || lower.includes('speed')) {
        reply = 'Performance benchmark: 120 FPS rendering loops, zero garbage collection allocations in hot paths, and sub-100ms Largest Contentful Paint.';
      } else if (lower.includes('automation') || lower.includes('agent')) {
        reply = 'The Automation Machine utilizes directed acyclic graph (DAG) pipelines with autonomous circuit breakers and cryptographic state logging.';
      } else if (lower.includes('hello') || lower.includes('hi')) {
        reply = 'Greetings. Client demo mode active. You may query our engineering principles, system architectures, or workflow automation topologies.';
      } else {
        reply = `Analysis for "${userText}": In a production deployment, this query is routed through a context-aware vector retrieval pipeline with deterministic guardrails.`;
      }

      const botMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'assistant',
        text: reply,
        timestamp: new Date().toLocaleTimeString(),
      };
      setChatMessages((prev) => [...prev, botMsg]);
      setIsAiLoading(false);
    }, 650);
  };

  // ==========================================
  // DEMO 02: RESUME INTELLIGENCE STATE & LOGIC
  // ==========================================
  const [sampleRole, setSampleRole] = useState<'lead-engineer' | 'systems-architect' | 'creative-technologist'>('systems-architect');
  const [isExtracting, setIsExtracting] = useState(false);
  const [extractionDone, setExtractionDone] = useState(true);

  const SAMPLE_CANDIDATE = {
    name: 'Dr. Alexis Vance',
    title: 'Principal Distributed Systems Engineer',
    education: 'Ph.D. Computer Science · MIT',
    experienceYears: '11 Years Experience',
    summary: 'Specialist in high-throughput concurrent systems, asynchronous consensus protocols, and real-time WebGL scientific visual telemetry.',
  };

  const ROLE_MATCH_SCORES = {
    'systems-architect': {
      score: 96,
      skills: ['Distributed Consensus', 'Event Mesh Architecture', 'TypeScript / Rust', 'Zero-Trust Security', 'High-Concurrency'],
      verdict: 'Exceptional Architectural Alignment',
      missing: ['None detected for Tier-1 criteria'],
    },
    'lead-engineer': {
      score: 88,
      skills: ['Production TypeScript', 'React 19 Concurrent API', 'CI/CD Pipelines', 'Mentorship & Code Review'],
      verdict: 'Strong Technical Leadership Match',
      missing: ['Kubernetes Operator specialization'],
    },
    'creative-technologist': {
      score: 79,
      skills: ['Three.js & WebGL Shaders', 'Kinetic UI Ergonomics', 'Spatial Geometry'],
      verdict: 'Proficient Cross-Functional Competency',
      missing: ['Advanced GLSL Procedural Noise Shaders'],
    },
  };

  const handleRoleChange = (role: 'lead-engineer' | 'systems-architect' | 'creative-technologist') => {
    setIsExtracting(true);
    setExtractionDone(false);
    setSampleRole(role);
    setTimeout(() => {
      setIsExtracting(false);
      setExtractionDone(true);
    }, 450);
  };

  // ==========================================
  // DEMO 03: BUSINESS DASHBOARD STATE & LOGIC
  // ==========================================
  const [timeRange, setTimeRange] = useState<'24h' | '7d' | '30d'>('7d');
  const [kpiFilter, setKpiFilter] = useState<'all' | 'latency' | 'throughput'>('all');

  const DASHBOARD_METRICS = {
    '24h': {
      throughput: '1.42M ops',
      latency: '14.2 ms',
      errorRate: '0.001%',
      bars: [42, 65, 88, 72, 95, 60, 84, 91, 55, 78, 99, 82],
    },
    '7d': {
      throughput: '9.85M ops',
      latency: '15.8 ms',
      errorRate: '0.002%',
      bars: [70, 85, 65, 92, 105, 88, 94, 76, 89, 98, 110, 95],
    },
    '30d': {
      throughput: '41.2M ops',
      latency: '16.4 ms',
      errorRate: '0.004%',
      bars: [80, 90, 85, 95, 110, 102, 115, 92, 105, 120, 114, 108],
    },
  };

  const currentDashboard = DASHBOARD_METRICS[timeRange];

  // ==========================================
  // DEMO 04: WORKFLOW BUILDER STATE & LOGIC
  // ==========================================
  interface WorkflowStep {
    id: string;
    label: string;
    type: 'trigger' | 'transform' | 'action';
    desc: string;
  }

  const AVAILABLE_BLOCKS: WorkflowStep[] = [
    { id: 'b1', label: 'Webhook Ingress', type: 'trigger', desc: 'Captures raw incoming JSON payload' },
    { id: 'b2', label: 'Schema Validator', type: 'transform', desc: 'Enforces strict TypeScript invariants' },
    { id: 'b3', label: 'Neural Classifier', type: 'transform', desc: 'Extracts semantic categories via model' },
    { id: 'b4', label: 'Database Commit', type: 'action', desc: 'Atomic write to transactional store' },
    { id: 'b5', label: 'Event Broadcast', type: 'action', desc: 'Dispatches WebSocket broadcast to UI' },
  ];

  const [activeWorkflow, setActiveWorkflow] = useState<WorkflowStep[]>([
    AVAILABLE_BLOCKS[0],
    AVAILABLE_BLOCKS[1],
    AVAILABLE_BLOCKS[3],
  ]);

  const addBlockToWorkflow = (block: WorkflowStep) => {
    if (activeWorkflow.some((b) => b.id === block.id)) return;
    setActiveWorkflow((prev) => [...prev, block]);
  };

  const removeBlockFromWorkflow = (id: string) => {
    if (activeWorkflow.length <= 1) return;
    setActiveWorkflow((prev) => prev.filter((b) => b.id !== id));
  };

  return (
    <section
      id="product-lab"
      aria-label="The Product Lab"
      style={{
        padding: '140px 0',
        backgroundColor: 'var(--color-bg-primary)',
        borderBottom: '1px solid var(--color-border-subtle)',
        position: 'relative',
      }}
    >
      <div className="vantiq-container">
        {/* Header */}
        <div style={{ maxWidth: '880px', marginBottom: '64px' }}>
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
            05 / EXPERIMENTAL R&amp;D
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
            THE PRODUCT<br />
            <span style={{ color: 'var(--color-accent-primary)' }}>LAB.</span>
          </h2>

          <p style={{ fontSize: '1.15rem', color: 'var(--color-fg-secondary)', lineHeight: 1.7, maxWidth: '680px' }}>
            Interactive micro-applications illustrating our engineering patterns in natural language processing, semantic extraction, real-time telemetry, and visual workflows.
          </p>
        </div>

        {/* Product Lab Tab Selectors */}
        <div
          role="tablist"
          aria-label="Product Lab Demonstrations"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '12px',
            marginBottom: '40px',
          }}
        >
          {[
            { id: 'assistant', label: '01 / AI ASSISTANT', sub: 'Interactive Conversational Core' },
            { id: 'resume', label: '02 / RESUME INTELLIGENCE', sub: 'Semantic Schema Extraction' },
            { id: 'dashboard', label: '03 / BUSINESS DASHBOARD', sub: 'Real-Time Telemetry & Filters' },
            { id: 'workflow', label: '04 / WORKFLOW BUILDER', sub: 'Modular DAG Pipeline Assembly' },
          ].map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveTab(tab.id as TabType)}
                style={{
                  padding: '18px 20px',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: isActive ? 'var(--color-bg-surface)' : 'var(--color-bg-card)',
                  border: '1px solid',
                  borderColor: isActive ? 'var(--color-accent-primary)' : 'var(--color-border-subtle)',
                  textAlign: 'left',
                  transition: 'all var(--transition-fast)',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '0.9rem',
                    fontWeight: 700,
                    color: isActive ? 'var(--color-fg-primary)' : 'var(--color-fg-muted)',
                    marginBottom: '4px',
                  }}
                >
                  {tab.label}
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: isActive ? 'var(--color-accent-primary)' : 'var(--color-fg-dim)' }}>
                  {tab.sub}
                </div>
              </button>
            );
          })}
        </div>

        {/* ========================================================
            TAB PANEL 01: AI ASSISTANT
            ======================================================== */}
        {activeTab === 'assistant' && (
          <div
            className="content-card"
            style={{
              padding: '36px',
              backgroundColor: 'var(--color-bg-surface)',
              minHeight: '480px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', borderBottom: '1px solid var(--color-border-subtle)', paddingBottom: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--color-accent-primary)' }} />
                  <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '1rem', color: '#fff' }}>VANTIQ NEURAL CHAT DEMO</span>
                </div>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--color-accent-primary)', backgroundColor: 'var(--color-accent-subtle)', padding: '3px 8px', borderRadius: 'var(--radius-xs)' }}>
                  STANDALONE DEMO MODE (NO EXTERNAL API KEY REQUIRED)
                </span>
              </div>

              {/* Chat Message Stream */}
              <div
                style={{
                  height: '280px',
                  overflowY: 'auto',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                  paddingRight: '8px',
                  marginBottom: '20px',
                }}
              >
                {chatMessages.map((msg) => (
                  <div
                    key={msg.id}
                    style={{
                      alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                      maxWidth: '80%',
                      padding: '14px 18px',
                      borderRadius: 'var(--radius-md)',
                      backgroundColor: msg.sender === 'user' ? 'var(--color-accent-primary)' : 'var(--color-bg-primary)',
                      color: msg.sender === 'user' ? '#fff' : 'var(--color-fg-primary)',
                      border: msg.sender === 'user' ? 'none' : '1px solid var(--color-border-subtle)',
                      fontSize: '0.95rem',
                      lineHeight: 1.6,
                    }}
                  >
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', marginBottom: '4px', opacity: 0.7 }}>
                      {msg.sender === 'user' ? 'OPERATOR' : 'INTELLIGENCE CORE'} // {msg.timestamp}
                    </div>
                    {msg.text}
                  </div>
                ))}

                {isAiLoading && (
                  <div
                    style={{
                      alignSelf: 'flex-start',
                      padding: '12px 16px',
                      borderRadius: 'var(--radius-md)',
                      backgroundColor: 'var(--color-bg-primary)',
                      border: '1px solid var(--color-border-subtle)',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.8rem',
                      color: 'var(--color-accent-primary)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                    }}
                  >
                    <span style={{ display: 'inline-block', width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'currentColor' }} />
                    SYNTHESIZING SYSTEM RESPONSE...
                  </div>
                )}
              </div>
            </div>

            {/* Input Bar */}
            <form onSubmit={handleSendMessage} style={{ display: 'flex', gap: '12px' }}>
              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="Ask about system architecture, performance standards, or automation..."
                className="form-control"
                style={{ flex: 1 }}
              />
              <button type="submit" className="btn-primary" disabled={isAiLoading} style={{ padding: '12px 24px' }}>
                SEND
              </button>
            </form>
          </div>
        )}

        {/* ========================================================
            TAB PANEL 02: RESUME INTELLIGENCE
            ======================================================== */}
        {activeTab === 'resume' && (
          <div
            className="content-card"
            style={{
              padding: '36px',
              backgroundColor: 'var(--color-bg-surface)',
              minHeight: '480px',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '28px', borderBottom: '1px solid var(--color-border-subtle)', paddingBottom: '16px', flexWrap: 'wrap', gap: '12px' }}>
              <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '1rem', color: '#fff' }}>
                SAMPLE CANDIDATE SEMANTIC PARSING
              </div>
              {/* Role target selector */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-fg-muted)' }}>TARGET ROLE:</span>
                {(['systems-architect', 'lead-engineer', 'creative-technologist'] as const).map((role) => (
                  <button
                    key={role}
                    type="button"
                    onClick={() => handleRoleChange(role)}
                    style={{
                      padding: '6px 12px',
                      borderRadius: 'var(--radius-sm)',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.7rem',
                      border: '1px solid',
                      borderColor: sampleRole === role ? 'var(--color-accent-primary)' : 'var(--color-border-subtle)',
                      backgroundColor: sampleRole === role ? 'var(--color-accent-subtle)' : 'transparent',
                      color: sampleRole === role ? 'var(--color-accent-primary)' : 'var(--color-fg-muted)',
                    }}
                  >
                    {role.replace('-', ' ').toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            {isExtracting ? (
              <div style={{ padding: '60px', textAlign: 'center', fontFamily: 'var(--font-mono)', color: 'var(--color-accent-primary)' }}>
                EXTRACTING SEMANTIC ENTITIES &amp; VECTOR MATCHING...
              </div>
            ) : extractionDone ? (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '24px' }}>
                {/* Left: Candidate Profile Card */}
                <div style={{ backgroundColor: 'var(--color-bg-primary)', padding: '24px', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border-subtle)' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-accent-primary)', marginBottom: '8px' }}>
                    INGESTED DOCUMENT // SAMPLE RESUME
                  </div>
                  <h3 style={{ fontSize: '1.4rem', color: '#fff', marginBottom: '4px' }}>{SAMPLE_CANDIDATE.name}</h3>
                  <div style={{ color: 'var(--color-fg-muted)', fontSize: '0.85rem', marginBottom: '16px' }}>
                    {SAMPLE_CANDIDATE.title} &bull; {SAMPLE_CANDIDATE.experienceYears}
                  </div>
                  <p style={{ color: 'var(--color-fg-secondary)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '20px' }}>
                    {SAMPLE_CANDIDATE.summary}
                  </p>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-fg-dim)' }}>
                    CREDENTIALS: {SAMPLE_CANDIDATE.education}
                  </div>
                </div>

                {/* Right: Semantic Match & Extraction Results */}
                <div style={{ backgroundColor: 'var(--color-bg-primary)', padding: '24px', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border-subtle)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-fg-muted)' }}>
                      SEMANTIC ROLE COMPATIBILITY
                    </span>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '1.25rem', color: 'var(--color-accent-primary)', fontWeight: 700 }}>
                      {ROLE_MATCH_SCORES[sampleRole].score}%
                    </span>
                  </div>

                  <div style={{ marginBottom: '20px' }}>
                    <div style={{ height: '6px', width: '100%', backgroundColor: 'var(--color-bg-surface)', borderRadius: '3px', overflow: 'hidden' }}>
                      <div
                        style={{
                          height: '100%',
                          width: `${ROLE_MATCH_SCORES[sampleRole].score}%`,
                          backgroundColor: 'var(--color-accent-primary)',
                          borderRadius: '3px',
                          transition: 'width 0.4s ease',
                        }}
                      />
                    </div>
                  </div>

                  <div style={{ marginBottom: '20px' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-fg-muted)', display: 'block', marginBottom: '8px' }}>
                      VERIFIED COMPETENCIES:
                    </span>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                      {ROLE_MATCH_SCORES[sampleRole].skills.map((s) => (
                        <span key={s} className="badge" style={{ margin: 0, fontSize: '0.75rem' }}>
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div style={{ borderTop: '1px solid var(--color-border-subtle)', paddingTop: '16px' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-accent-primary)' }}>
                      EVALUATION: {ROLE_MATCH_SCORES[sampleRole].verdict}
                    </span>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        )}

        {/* ========================================================
            TAB PANEL 03: BUSINESS DASHBOARD
            ======================================================== */}
        {activeTab === 'dashboard' && (
          <div
            className="content-card"
            style={{
              padding: '36px',
              backgroundColor: 'var(--color-bg-surface)',
              minHeight: '480px',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '28px', borderBottom: '1px solid var(--color-border-subtle)', paddingBottom: '16px', flexWrap: 'wrap', gap: '12px' }}>
              <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '1rem', color: '#fff' }}>
                REAL-TIME INFRASTRUCTURE TELEMETRY (SAMPLE DATA)
              </div>
              {/* Range Filters */}
              <div style={{ display: 'flex', gap: '8px' }}>
                {(['24h', '7d', '30d'] as const).map((r) => (
                  <button
                    key={r}
                    type="button"
                    onClick={() => setTimeRange(r)}
                    style={{
                      padding: '6px 12px',
                      borderRadius: 'var(--radius-sm)',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.7rem',
                      border: '1px solid',
                      borderColor: timeRange === r ? 'var(--color-accent-primary)' : 'var(--color-border-subtle)',
                      backgroundColor: timeRange === r ? 'var(--color-accent-subtle)' : 'transparent',
                      color: timeRange === r ? 'var(--color-accent-primary)' : 'var(--color-fg-muted)',
                    }}
                  >
                    WINDOW // {r.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            {/* KPI Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '32px' }}>
              <div
                style={{
                  backgroundColor: 'var(--color-bg-primary)',
                  padding: '20px',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--color-border-subtle)',
                  cursor: 'pointer',
                  borderColor: kpiFilter === 'throughput' ? 'var(--color-accent-primary)' : 'var(--color-border-subtle)',
                }}
                onClick={() => setKpiFilter(kpiFilter === 'throughput' ? 'all' : 'throughput')}
              >
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--color-fg-muted)', marginBottom: '8px' }}>
                  INGRESS THROUGHPUT
                </div>
                <div style={{ fontSize: '1.8rem', fontWeight: 700, color: 'var(--color-fg-primary)' }}>
                  {currentDashboard.throughput}
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--color-accent-primary)', marginTop: '4px' }}>
                  STEADY CADENCE
                </div>
              </div>

              <div
                style={{
                  backgroundColor: 'var(--color-bg-primary)',
                  padding: '20px',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--color-border-subtle)',
                  cursor: 'pointer',
                  borderColor: kpiFilter === 'latency' ? 'var(--color-accent-primary)' : 'var(--color-border-subtle)',
                }}
                onClick={() => setKpiFilter(kpiFilter === 'latency' ? 'all' : 'latency')}
              >
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--color-fg-muted)', marginBottom: '8px' }}>
                  MEDIAN P99 LATENCY
                </div>
                <div style={{ fontSize: '1.8rem', fontWeight: 700, color: 'var(--color-fg-primary)' }}>
                  {currentDashboard.latency}
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--color-accent-primary)', marginTop: '4px' }}>
                  SUB-20MS TARGET OK
                </div>
              </div>

              <div
                style={{
                  backgroundColor: 'var(--color-bg-primary)',
                  padding: '20px',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--color-border-subtle)',
                }}
              >
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--color-fg-muted)', marginBottom: '8px' }}>
                  ANOMALY FAULT RATE
                </div>
                <div style={{ fontSize: '1.8rem', fontWeight: 700, color: 'var(--color-fg-primary)' }}>
                  {currentDashboard.errorRate}
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: '#A8B79B', marginTop: '4px' }}>
                  99.999% INTEGRITY
                </div>
              </div>
            </div>

            {/* Interactive Telemetry Chart */}
            <div style={{ backgroundColor: 'var(--color-bg-primary)', padding: '24px', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border-subtle)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-fg-muted)', marginBottom: '20px' }}>
                <span>TELEMETRY LOAD PROFILE ({timeRange.toUpperCase()})</span>
                <span style={{ color: 'var(--color-accent-primary)' }}>FILTER: {kpiFilter.toUpperCase()}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-end', height: '140px', gap: '12px' }}>
                {currentDashboard.bars.map((bar, i) => (
                  <div
                    key={i}
                    style={{
                      flex: 1,
                      height: `${(bar / 120) * 100}%`,
                      backgroundColor: i === currentDashboard.bars.length - 1 ? 'var(--color-accent-primary)' : 'rgba(244, 240, 232, 0.12)',
                      borderRadius: '3px',
                      transition: 'height 0.3s ease',
                    }}
                    title={`Interval ${i + 1}: ${bar} units`}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ========================================================
            TAB PANEL 04: WORKFLOW BUILDER
            ======================================================== */}
        {activeTab === 'workflow' && (
          <div
            className="content-card"
            style={{
              padding: '36px',
              backgroundColor: 'var(--color-bg-surface)',
              minHeight: '480px',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '28px', borderBottom: '1px solid var(--color-border-subtle)', paddingBottom: '16px', flexWrap: 'wrap', gap: '12px' }}>
              <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '1rem', color: '#fff' }}>
                DIRECTED ACYCLIC GRAPH (DAG) PIPELINE BUILDER
              </div>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-accent-primary)' }}>
                {activeWorkflow.length} NODES LINKED IN ACTIVE CHAIN
              </span>
            </div>

            {/* Visual Assembly Pipeline Canvas */}
            <div style={{ backgroundColor: 'var(--color-bg-primary)', padding: '32px 24px', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border-subtle)', marginBottom: '32px' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--color-fg-muted)', marginBottom: '20px' }}>
                ACTIVE EXECUTION FLOW:
              </div>

              <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
                {activeWorkflow.map((step, idx) => (
                  <React.Fragment key={step.id}>
                    <div
                      style={{
                        padding: '16px 20px',
                        backgroundColor: 'var(--color-bg-surface)',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid var(--color-border-medium)',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '6px',
                        minWidth: '160px',
                        position: 'relative',
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--color-accent-primary)' }}>
                          STEP 0{idx + 1}
                        </span>
                        {activeWorkflow.length > 1 && (
                          <button
                            type="button"
                            aria-label={`Remove ${step.label}`}
                            onClick={() => removeBlockFromWorkflow(step.id)}
                            style={{ color: 'var(--color-fg-dim)', fontSize: '0.85rem' }}
                          >
                            &times;
                          </button>
                        )}
                      </div>
                      <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.95rem', color: '#fff' }}>
                        {step.label}
                      </div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--color-fg-muted)' }}>{step.desc}</div>
                    </div>

                    {idx < activeWorkflow.length - 1 && (
                      <span aria-hidden="true" style={{ color: 'var(--color-accent-primary)', fontFamily: 'var(--font-mono)', fontSize: '1.25rem', fontWeight: 700 }}>
                        &rarr;
                      </span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Block Bank: Available blocks to connect */}
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-fg-muted)', marginBottom: '14px' }}>
                CONNECT ADDITIONAL MODULES TO PIPELINE:
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                {AVAILABLE_BLOCKS.map((block) => {
                  const isConnected = activeWorkflow.some((b) => b.id === block.id);
                  return (
                    <button
                      key={block.id}
                      type="button"
                      disabled={isConnected}
                      onClick={() => addBlockToWorkflow(block)}
                      style={{
                        padding: '12px 18px',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px dashed',
                        borderColor: isConnected ? 'var(--color-border-subtle)' : 'var(--color-accent-primary)',
                        backgroundColor: isConnected ? 'transparent' : 'var(--color-accent-subtle)',
                        color: isConnected ? 'var(--color-fg-dim)' : 'var(--color-fg-primary)',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.8rem',
                        cursor: isConnected ? 'default' : 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                      }}
                    >
                      <span>{isConnected ? '✓ LINKED' : '+ ADD'}</span>
                      <span>{block.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
