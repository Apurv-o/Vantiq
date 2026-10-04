import React, { useState, useEffect } from 'react';

export interface CaseStudyData {
  id: string;
  number: string;
  name: string;
  category: string;
  tagline: string;
  accentColor: string;
  // 8 Required Detailed Sections
  overview: string;
  businessChallenge: string;
  productConcept: string;
  keyFeatures: string[];
  interactionDesign: string;
  technicalArchitecture: string[];
  technologyStack: string[];
  outcomeIntendedValue: string;
  visualComposition: React.ReactNode;
}

const CASE_STUDIES: CaseStudyData[] = [
  {
    id: 'nexora',
    number: '01',
    name: 'NEXORA',
    category: 'AI BUSINESS INTELLIGENCE',
    tagline: 'Autonomous Executive Spatial Observatory & Predictive Vector Topography',
    accentColor: '#E66C3A',
    overview:
      'Nexora is a conceptual studio exploration into how autonomous neural reasoning can replace retrospective tabular reporting with a continuous, interactive intelligence landscape. Developed as an advanced interface prototype, it parses multi-million event streams into real-time decision vectors.',
    businessChallenge:
      'Modern enterprise leadership suffers from data fragmentation. Mission-critical telemetry sits trapped across incompatible databases, leaving executives reliant on delayed monthly decks and human synthesis bottlenecks that obscure emergent operational risks.',
    productConcept:
      'A spatial visual command deck where enterprise health is rendered as dynamic topography. Instead of isolated bar charts, dependencies appear as interconnected clusters that reorganize organically as market parameters and supply networks shift.',
    keyFeatures: [
      'Real-time semantic clustering across 40M+ ingested operational events',
      'Context-aware conversational query terminal operating over local vectors',
      'Predictive trend simulation with interactive parameter scrubbing',
      'Autonomous alert synthesizer grading emerging bottleneck severity',
    ],
    interactionDesign:
      'The proposed experience pairs a high-density information HUD with tactile fluid physics. Users zoom seamlessly from high-level company terrain down into micro-transactions without triggering page reloads, accompanied by subtle kinetic audio cues and coordinate tracking.',
    technicalArchitecture: [
      'Multi-threaded Web Worker architecture isolating vector clustering from the main UI thread',
      'Declarative WebGL canvas layer utilizing dynamic Level-of-Detail (LOD) geometries',
      'Sub-50ms vector similarity lookups via local HNSW embedding index',
      'Encrypted local-first memory envelopes safeguarding sensitive financial schemas',
    ],
    technologyStack: ['React 19', 'TypeScript', 'Three.js / WebGL', 'Web Workers', 'Vector DB', 'Canvas 2D API'],
    outcomeIntendedValue:
      'Conceptual outcome: A prototype demonstrating how executive teams could reduce multi-hour cross-functional reporting alignments down to continuous, real-time spatial oversight.',
    visualComposition: (
      <div
        style={{
          height: '280px',
          backgroundColor: '#181916',
          borderRadius: 'var(--radius-md)',
          border: '1px solid var(--color-border-subtle)',
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'radial-gradient(circle at 50% 50%, rgba(230, 108, 58, 0.14) 0%, transparent 70%), linear-gradient(rgba(244, 240, 232, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(244, 240, 232, 0.04) 1px, transparent 1px)',
            backgroundSize: '100% 100%, 28px 28px, 28px 28px',
          }}
        />
        <div style={{ position: 'relative', zIndex: 2, display: 'flex', alignItems: 'center', gap: '20px' }}>
          <div
            style={{
              width: '72px',
              height: '72px',
              borderRadius: '50%',
              border: '1px dashed var(--color-accent-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                width: '28px',
                height: '28px',
                borderRadius: '50%',
                backgroundColor: 'var(--color-accent-primary)',
                boxShadow: '0 0 24px var(--color-accent-primary)',
              }}
            />
          </div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--color-fg-muted)' }}>
            <div>[TOPOLOGY CLUSTER // 08]</div>
            <div style={{ color: 'var(--color-fg-primary)' }}>SIMILARITY: 0.9942</div>
            <div style={{ color: 'var(--color-accent-primary)' }}>STATUS: STREAMING ACTIVE</div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'flowstate',
    number: '02',
    name: 'FLOWSTATE',
    category: 'WORKFLOW AUTOMATION',
    tagline: 'Deterministic Asynchronous Directed Acyclic Graph (DAG) Automation Engine',
    accentColor: '#D4A373',
    overview:
      'Flowstate is a studio exploration into the engineering of fault-tolerant operational pipelines. Designed as a visual orchestrator, it visualizes complex state machines and automatically negotiates failure modes across distributed microservices.',
    businessChallenge:
      'Enterprise workflow tools frequently rely on brittle linear automations that break silently when external APIs fail, resulting in data desynchronization, lost transaction state, and extensive manual remediation.',
    productConcept:
      'An immutable DAG execution environment with visual state introspection. Processes are expressed as mathematically verifiable graphs where each step is individually sandboxed, idempotently retryable, and continuously monitored.',
    keyFeatures: [
      'Visual DAG builder supporting multi-branch conditional forks and race conditions',
      'Cryptographically hashed execution audit trail for strict enterprise compliance',
      'Zero-downtime hot-reloading of live production workflow schemas',
      'Automated dead-letter queue routing with human-in-the-loop inspection portals',
    ],
    interactionDesign:
      'The proposed interface treats workflow execution like an engineering circuit board. Active tasks pulse with luminous currents; clicking any node opens an instant replay timeline of incoming payloads, headers, and stack traces.',
    technicalArchitecture: [
      'Distributed event mesh coordinating microsecond job dispatches over Redis Streams',
      'Wasm-sandboxed expression evaluation engine running user scripts safely in memory',
      'Persistent state machines backed by transactional append-only log databases',
      'Dual WebSocket sync streaming live pipeline metrics directly to the browser DOM',
    ],
    technologyStack: ['Node.js', 'TypeScript', 'WebAssembly', 'Redis Streams', 'WebSockets', 'Tailwind'],
    outcomeIntendedValue:
      'Conceptual outcome: A resilient architecture prototype illustrating how mission-critical back-office processes can achieve near-zero downtime through deterministic failure self-healing.',
    visualComposition: (
      <div
        style={{
          height: '280px',
          backgroundColor: '#181916',
          borderRadius: 'var(--radius-md)',
          border: '1px solid var(--color-border-subtle)',
          position: 'relative',
          overflow: 'hidden',
          padding: '28px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-fg-muted)' }}>
          <span>DAG ENGINE PROTOCOL</span>
          <span style={{ color: '#D4A373' }}>CIRCUIT STATUS: STABLE</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {['INGEST', 'VALIDATE', 'EXECUTE', 'EMIT'].map((step, idx) => (
            <div key={step} style={{ textAlign: 'center', zIndex: 2 }}>
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '8px',
                  backgroundColor: idx <= 2 ? '#2E2B25' : '#1F201C',
                  border: '1px solid',
                  borderColor: idx <= 2 ? '#D4A373' : 'var(--color-border-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  color: '#fff',
                  margin: '0 auto 8px auto',
                }}
              >
                0{idx + 1}
              </div>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--color-fg-muted)' }}>{step}</span>
            </div>
          ))}
        </div>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-fg-muted)', borderTop: '1px solid var(--color-border-subtle)', paddingTop: '12px' }}>
          TRANSACTION LOG // 0 UNRESOLVED EXCEPTIONS
        </div>
      </div>
    ),
  },
  {
    id: 'peoplegrid',
    number: '03',
    name: 'PEOPLEGRID',
    category: 'HR TECHNOLOGY',
    tagline: 'Dynamic Capability Graph & Autonomous Organizational Synergy Mapping',
    accentColor: '#A8B79B',
    overview:
      'PeopleGrid represents a studio concept rethinking enterprise workforce dynamics. Abandoning static reporting trees, it models companies as emergent competency graphs where talent forms fluid cross-functional project pods based on skill adjacency.',
    businessChallenge:
      'Hierarchical organizational charts fail to represent how work actually gets accomplished in complex modern companies, leaving specialized internal knowledge undiscovered and stifling inter-departmental collaboration.',
    productConcept:
      'An interactive constellation interface mapping individual technical and creative proficiencies. Team leads query organizational capabilities using natural language to discover ideal task collaborators based on proven expertise.',
    keyFeatures: [
      'Force-directed dynamic capability graph rendering thousands of personnel nodes',
      'Skill adjacency matrix identifying complementary domain proficiencies',
      'Autonomous squad recommendation engine for new multi-disciplinary initiatives',
      'Privacy-preserving peer endorsement protocols ensuring objective capability verification',
    ],
    interactionDesign:
      'The proposed experience lets users manipulate node physics in real-time. Selecting an engineering discipline highlights adjacent design and product partners through illuminated filaments, providing tactile visual clarity on team interconnectedness.',
    technicalArchitecture: [
      'High-performance D3 layout simulation running off-thread in dedicated Web Workers',
      'Graph database persistence modeling bidirectional capability relationships',
      'Incremental SVG/Canvas hybrid rendering maintaining 60fps at high node counts',
      'Federated identity integration with enterprise Single Sign-On (SAML/OIDC)',
    ],
    technologyStack: ['React 19', 'GraphQL', 'D3.js', 'PostgreSQL', 'Web Workers', 'Tailwind'],
    outcomeIntendedValue:
      'Conceptual outcome: A strategic exploration demonstrating how large distributed organizations can unlock untapped internal capability and foster agile collaboration without restructuring overhead.',
    visualComposition: (
      <div
        style={{
          height: '280px',
          backgroundColor: '#181916',
          borderRadius: 'var(--radius-md)',
          border: '1px solid var(--color-border-subtle)',
          position: 'relative',
          overflow: 'hidden',
          padding: '24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div style={{ position: 'relative', width: '220px', height: '160px' }}>
          <div style={{ position: 'absolute', top: '10px', left: '20px', width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#A8B79B' }} />
          <div style={{ position: 'absolute', top: '80px', left: '100px', width: '22px', height: '22px', borderRadius: '50%', backgroundColor: '#fff', boxShadow: '0 0 16px #fff' }} />
          <div style={{ position: 'absolute', bottom: '10px', left: '40px', width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#A8B79B' }} />
          <div style={{ position: 'absolute', top: '30px', right: '20px', width: '14px', height: '14px', borderRadius: '50%', backgroundColor: '#A8B79B' }} />
          <div style={{ position: 'absolute', bottom: '20px', right: '40px', width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#A8B79B' }} />
          <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} aria-hidden="true">
            <line x1="26" y1="16" x2="111" y2="91" stroke="#A8B79B" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
            <line x1="111" y1="91" x2="46" y2="156" stroke="#A8B79B" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
            <line x1="111" y1="91" x2="207" y2="37" stroke="#A8B79B" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
            <line x1="111" y1="91" x2="186" y2="146" stroke="#A8B79B" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
          </svg>
        </div>
        <div style={{ position: 'absolute', bottom: '16px', right: '24px', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#A8B79B' }}>
          CAPABILITY SYNERGY // POD 04
        </div>
      </div>
    ),
  },
  {
    id: 'orbital',
    number: '04',
    name: 'ORBITAL',
    category: 'FINANCIAL DATA INTELLIGENCE',
    tagline: 'Sub-Millisecond Algorithmic Volumetric Order Book & Liquidity Terrain',
    accentColor: '#E66C3A',
    overview:
      'Orbital is a studio prototype investigating high-density algorithmic market visualization. Built for complex institutional risk environments, it transforms high-frequency tick feeds into a continuous 3D volumetric surface that reveals hidden market microstructures.',
    businessChallenge:
      'Traditional tabular order books and 2D candlestick charts fail to convey market depth velocity. In volatile high-frequency trading regimes, quantitative operators lack intuitive tactile awareness of order clustering and spoofing patterns.',
    productConcept:
      'A real-time WebGL depth landscape where price tiers, bid/ask walls, and cancellation velocity are rendered as an undulating topographical terrain updated with sub-millisecond precision.',
    keyFeatures: [
      '1000 Hz binary WebSocket data parser processing raw L2/L3 market feeds',
      'Hardware-accelerated 3D volumetric depth surface rendered at a steady 120 FPS',
      'Multi-tiered slippage simulator testing simulated algorithmic execution routes',
      'Microsecond historical time-scrubber enabling instant replay of volatile liquidity drains',
    ],
    interactionDesign:
      'Designed around minimal ocular fatigue in multi-monitor setups. Operators tilt and pan the 3D depth terrain using fluid spatial controls, isolating pricing cliffs and algorithmic clusters with single-click crosshair inspections.',
    technicalArchitecture: [
      'Zero-copy binary ArrayBuffer parsing bypassing JavaScript garbage collection overhead',
      'Custom WebGL vertex shaders computing real-time terrain heights directly on the GPU',
      'SharedArrayBuffer multithreading synchronizing tick data between web workers',
      'Strict 60/120fps RAF rendering loop with custom memory pooling',
    ],
    technologyStack: ['Three.js', 'GLSL Shaders', 'WebSockets', 'WebAssembly', 'TypeScript'],
    outcomeIntendedValue:
      'Conceptual outcome: A technical showcase proving that consumer browser technologies can render high-frequency institutional telemetry without dropped frames or visual compromise.',
    visualComposition: (
      <div
        style={{
          height: '280px',
          backgroundColor: '#181916',
          borderRadius: 'var(--radius-md)',
          border: '1px solid var(--color-border-subtle)',
          position: 'relative',
          overflow: 'hidden',
          padding: '28px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-fg-muted)' }}>
          <span>TICK FEED // 1000 HZ</span>
          <span style={{ color: 'var(--color-accent-primary)' }}>DEPTH MAP: SYNCHRONIZED</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'flex-end', height: '120px', gap: '8px' }}>
          {[45, 62, 38, 85, 95, 70, 55, 90, 110, 78, 65, 88].map((h, i) => (
            <div
              key={i}
              style={{
                flex: 1,
                height: `${h}%`,
                backgroundColor: i === 8 ? 'var(--color-accent-primary)' : 'rgba(244, 240, 232, 0.1)',
                borderRadius: '2px',
              }}
            />
          ))}
        </div>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-fg-muted)', display: 'flex', justifyContent: 'space-between' }}>
          <span>VOLUMETRIC LIQUIDITY</span>
          <span style={{ color: 'var(--color-fg-primary)' }}>&Delta; LATENCY 0.0018 MS</span>
        </div>
      </div>
    ),
  },
  {
    id: 'forme',
    number: '05',
    name: 'FORME',
    category: 'DIGITAL COMMERCE',
    tagline: 'High-Art Spatial Flagship with Real-Time Physical Shader Synthesis',
    accentColor: '#F4F0E8',
    overview:
      'Forme is a conceptual exploration merging editorial brutalism with interactive spatial commerce. Designed for luxury brands, it replaces static two-dimensional product photo grids with real-time WebGL material inspection and instantaneous global checkout.',
    businessChallenge:
      'Standard template-based commerce platforms reduce high-craft items into generic cards, stripping away brand equity, material depth, and the emotional resonance essential for luxury consumer engagement.',
    productConcept:
      'A digital flagship curated like an architectural gallery. Customers interact with bespoke glTF product geometry featuring procedural shaders that simulate physical sheen, drape, and structural texture under ambient studio light.',
    keyFeatures: [
      'Photorealistic PBR real-time material shaders with anisotropic reflections',
      'Dynamic light studio simulator allowing customers to shift illumination angles',
      'Edge-rendered headless commerce architecture delivering instantaneous page transitions',
      'One-tap biometric checkout integration with zero redirection friction',
    ],
    interactionDesign:
      'Kinetic typography moves in harmonious cadence with customer scroll. Hovering an item produces gentle three-dimensional orientation tilts, while selecting a product reveals tactile macro-zoom controls with spring-physics easing.',
    technicalArchitecture: [
      'Draco-compressed glTF geometry delivery minimizing 3D asset weight under 1.8MB',
      'Edge network caching strategy ensuring sub-100ms global Time-to-First-Byte',
      'Decoupled headless API layer orchestrating inventory updates via event hooks',
      'CSS custom-property animation engine delivering buttery 120fps interactions',
    ],
    technologyStack: ['React 19', 'Three.js / WebGL', 'Edge Workers', 'Tailwind Tokens', 'Stripe API'],
    outcomeIntendedValue:
      'Conceptual outcome: A proposed flagship experience proving that luxury digital commerce can deliver uncompromised visual grandeur without sacrificing sub-second load times.',
    visualComposition: (
      <div
        style={{
          height: '280px',
          backgroundColor: '#181916',
          borderRadius: 'var(--radius-md)',
          border: '1px solid var(--color-border-subtle)',
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            width: '120px',
            height: '120px',
            border: '1px solid #F4F0E8',
            transform: 'rotate(45deg)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 32px rgba(244, 240, 232, 0.1)',
          }}
        >
          <div style={{ width: '70px', height: '70px', border: '1px dashed var(--color-accent-primary)', transform: 'rotate(45deg)' }} />
        </div>
        <div style={{ position: 'absolute', bottom: '20px', left: '24px', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#F4F0E8' }}>
          SPATIAL COMMERCE GALLERY // FORME
        </div>
      </div>
    ),
  },
  {
    id: 'synapse',
    number: '06',
    name: 'SYNAPSE',
    category: 'ENTERPRISE INTEGRATION',
    tagline: 'Universal Low-Latency Protocol Gateway & Zero-Downtime Contract Mesh',
    accentColor: '#85877E',
    overview:
      'Synapse is a studio architecture exploration into bridging decades-old enterprise mainframe systems with cloud-native microservices. It presents an adaptive proxy model that eliminates the risks of high-cost system rip-and-replace initiatives.',
    businessChallenge:
      'Legacy institutions depend on antiquated mainframes and fragmented protocols (SOAP, raw sockets, EDI) that cannot natively communicate with modern cloud APIs, stalling digital transformation efforts.',
    productConcept:
      'An intelligent edge translation envelope that acts as a universal adapter. Incoming messages in legacy formats are ingested, contract-validated, converted into modern typed JSON/gRPC schemas, and forwarded with sub-millisecond overhead.',
    keyFeatures: [
      'Universal protocol translation supporting SOAP, gRPC, REST, Kafka, and MQTT',
      'Dynamic schema contract validation with automated breaking-change detection',
      'Zero-trust cryptographic payload verification at the enterprise edge',
      'Self-healing circuit breakers rerouting traffic around downed internal nodes',
    ],
    interactionDesign:
      'The engineering console features an interactive pipeline visualizer. Operators view live telemetry pipes with real-time translation latency counters, message payload inspectors, and one-click schema hot-patching tools.',
    technicalArchitecture: [
      'Rust-powered core proxy engine achieving sub-millisecond routing latency',
      'TypeScript orchestration layer providing declarative configuration and routing rules',
      'High-throughput message broker streaming telemetry via Apache Kafka pipelines',
      'Zero-downtime blue/green proxy rollout infrastructure for continuous upgrades',
    ],
    technologyStack: ['Rust', 'TypeScript', 'Apache Kafka', 'GraphQL Mesh', 'Docker', 'OpenAPI'],
    outcomeIntendedValue:
      'Conceptual outcome: An architectural blueprint illustrating how enterprises can modernize their technological capabilities without destabilizing mission-critical legacy backbones.',
    visualComposition: (
      <div
        style={{
          height: '280px',
          backgroundColor: '#181916',
          borderRadius: 'var(--radius-md)',
          border: '1px solid var(--color-border-subtle)',
          position: 'relative',
          overflow: 'hidden',
          padding: '28px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-fg-muted)' }}>
          <span>PROTOCOL TRANSLATION BRIDGE</span>
          <span style={{ color: 'var(--color-fg-primary)' }}>SYNC RATE: 100%</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px' }}>
          <div style={{ padding: '10px 14px', backgroundColor: '#222320', borderRadius: '4px', border: '1px solid var(--color-border-subtle)', fontFamily: 'var(--font-mono)', fontSize: '0.75rem' }}>
            LEGACY MAINFRAME
          </div>
          <div style={{ color: 'var(--color-accent-primary)', fontFamily: 'var(--font-mono)', fontSize: '1rem', fontWeight: 700 }}>
            &harr;
          </div>
          <div style={{ padding: '10px 14px', backgroundColor: 'var(--color-accent-subtle)', borderRadius: '4px', border: '1px solid var(--color-accent-primary)', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-accent-primary)' }}>
            SYNAPSE MESH
          </div>
          <div style={{ color: 'var(--color-accent-primary)', fontFamily: 'var(--font-mono)', fontSize: '1rem', fontWeight: 700 }}>
            &harr;
          </div>
          <div style={{ padding: '10px 14px', backgroundColor: '#222320', borderRadius: '4px', border: '1px solid var(--color-border-subtle)', fontFamily: 'var(--font-mono)', fontSize: '0.75rem' }}>
            CLOUD EDGE
          </div>
        </div>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-fg-muted)' }}>
          ZERO-DOWNTIME CONTRACT VALIDATION: ACTIVE
        </div>
      </div>
    ),
  },
];

export const SelectedWork: React.FC = () => {
  const [activeProject, setActiveProject] = useState<CaseStudyData | null>(null);

  // Scroll to top of section when navigating into a case study
  useEffect(() => {
    if (activeProject) {
      const sectionEl = document.getElementById('selected-work');
      if (sectionEl) {
        const headerOffset = 80;
        const elementPosition = sectionEl.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    }
  }, [activeProject]);

  return (
    <section
      id="selected-work"
      aria-label="Selected Work"
      style={{
        padding: '140px 0',
        backgroundColor: 'var(--color-bg-primary)',
        borderBottom: '1px solid var(--color-border-subtle)',
        position: 'relative',
        minHeight: '800px',
      }}
    >
      <div className="vantiq-container">
        {/* VIEW 1: DETAILED CASE STUDY VIEW */}
        {activeProject ? (
          <article
            aria-label={`${activeProject.name} Detailed Case Study`}
            style={{
              animation: 'fadeIn 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards',
            }}
          >
            {/* Top Navigation & Back Button */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingBottom: '32px',
                borderBottom: '1px solid var(--color-border-subtle)',
                marginBottom: '48px',
                flexWrap: 'wrap',
                gap: '16px',
              }}
            >
              <button
                type="button"
                onClick={() => setActiveProject(null)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '12px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.85rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--color-fg-primary)',
                  padding: '10px 20px',
                  borderRadius: 'var(--radius-pill)',
                  backgroundColor: 'var(--color-bg-surface)',
                  border: '1px solid var(--color-border-medium)',
                  transition: 'all var(--transition-fast)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-accent-primary)';
                  e.currentTarget.style.color = 'var(--color-accent-primary)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-border-medium)';
                  e.currentTarget.style.color = 'var(--color-fg-primary)';
                }}
              >
                <span>&larr;</span>
                <span>BACK TO WORK</span>
              </button>

              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    letterSpacing: '0.14em',
                    color: 'var(--color-accent-primary)',
                    fontWeight: 600,
                    backgroundColor: 'var(--color-accent-subtle)',
                    padding: '4px 12px',
                    borderRadius: 'var(--radius-xs)',
                    border: '1px solid var(--color-border-accent)',
                  }}
                >
                  STUDIO CONCEPT
                </span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--color-fg-dim)' }}>
                  ARCHIVE // {activeProject.number}
                </span>
              </div>
            </div>

            {/* Case Study Header Banner */}
            <div style={{ maxWidth: '1040px', marginBottom: '64px' }}>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.85rem',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'var(--color-accent-primary)',
                  marginBottom: '16px',
                }}
              >
                {activeProject.category}
              </div>

              <h1
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(3rem, 7vw, 5.5rem)',
                  fontWeight: 700,
                  letterSpacing: '-0.04em',
                  lineHeight: 1.02,
                  color: 'var(--color-fg-primary)',
                  marginBottom: '24px',
                }}
              >
                {activeProject.name}
              </h1>

              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 'clamp(1.2rem, 2.4vw, 1.6rem)',
                  color: 'var(--color-fg-secondary)',
                  lineHeight: 1.5,
                  maxWidth: '860px',
                }}
              >
                {activeProject.tagline}
              </p>
            </div>

            {/* Immersive Media / Visual Composition Stage */}
            <div
              style={{
                marginBottom: '80px',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-card)',
              }}
            >
              {activeProject.visualComposition}
            </div>

            {/* 8 Required Detailed Case Study Sections Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
                gap: '32px',
                marginBottom: '80px',
              }}
            >
              {/* 01. Overview */}
              <div className="content-card" style={{ padding: '36px' }}>
                <span className="section-tag">01. OVERVIEW</span>
                <p style={{ color: 'var(--color-fg-primary)', fontSize: '1.05rem', lineHeight: 1.75 }}>
                  {activeProject.overview}
                </p>
              </div>

              {/* 02. Business Challenge */}
              <div className="content-card" style={{ padding: '36px' }}>
                <span className="section-tag">02. BUSINESS CHALLENGE</span>
                <p style={{ color: 'var(--color-fg-primary)', fontSize: '1.05rem', lineHeight: 1.75 }}>
                  {activeProject.businessChallenge}
                </p>
              </div>

              {/* 03. Product Concept */}
              <div className="content-card" style={{ padding: '36px' }}>
                <span className="section-tag">03. PRODUCT CONCEPT</span>
                <p style={{ color: 'var(--color-fg-primary)', fontSize: '1.05rem', lineHeight: 1.75 }}>
                  {activeProject.productConcept}
                </p>
              </div>

              {/* 04. Key Features */}
              <div className="content-card" style={{ padding: '36px' }}>
                <span className="section-tag">04. KEY FEATURES</span>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {activeProject.keyFeatures.map((feat, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'baseline', gap: '10px', fontSize: '0.95rem' }}>
                      <span style={{ color: 'var(--color-accent-primary)', fontFamily: 'var(--font-mono)', fontSize: '0.75rem' }}>
                        &bull;
                      </span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 05. Interaction Design */}
              <div className="content-card" style={{ padding: '36px' }}>
                <span className="section-tag">05. INTERACTION DESIGN</span>
                <p style={{ color: 'var(--color-fg-primary)', fontSize: '1.05rem', lineHeight: 1.75 }}>
                  {activeProject.interactionDesign}
                </p>
              </div>

              {/* 06. Technical Architecture */}
              <div className="content-card" style={{ padding: '36px' }}>
                <span className="section-tag">06. TECHNICAL ARCHITECTURE</span>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {activeProject.technicalArchitecture.map((arch, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'baseline', gap: '10px', fontSize: '0.95rem' }}>
                      <span style={{ color: 'var(--color-accent-primary)', fontFamily: 'var(--font-mono)', fontSize: '0.75rem' }}>
                        &rarr;
                      </span>
                      <span>{arch}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 07. Technology Stack */}
              <div className="content-card" style={{ padding: '36px' }}>
                <span className="section-tag">07. TECHNOLOGY STACK</span>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '12px' }}>
                  {activeProject.technologyStack.map((tech) => (
                    <span
                      key={tech}
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.8rem',
                        color: 'var(--color-fg-primary)',
                        backgroundColor: 'var(--color-bg-primary)',
                        border: '1px solid var(--color-border-medium)',
                        borderRadius: 'var(--radius-pill)',
                        padding: '6px 14px',
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* 08. Outcome / Intended Value */}
              <div className="content-card" style={{ padding: '36px', borderLeft: '4px solid var(--color-accent-primary)' }}>
                <span className="section-tag">08. OUTCOME / INTENDED VALUE</span>
                <p style={{ color: 'var(--color-fg-primary)', fontSize: '1.05rem', lineHeight: 1.75, fontStyle: 'italic' }}>
                  &ldquo;{activeProject.outcomeIntendedValue}&rdquo;
                </p>
              </div>
            </div>

            {/* Bottom Back To Work Bar */}
            <div
              style={{
                borderTop: '1px solid var(--color-border-subtle)',
                paddingTop: '48px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '20px',
              }}
            >
              <button
                type="button"
                onClick={() => setActiveProject(null)}
                className="btn-primary"
                style={{ padding: '14px 32px' }}
              >
                &larr; BACK TO WORK
              </button>

              <a href="#commission" className="btn-secondary" style={{ padding: '14px 32px' }}>
                COMMISSION SIMILAR PROJECT &rarr;
              </a>
            </div>
          </article>
        ) : (
          /* VIEW 2: CURATED PROJECT INDEX */
          <>
            {/* Section Header */}
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
                04 / SELECTED WORK
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
                CASE ARCHIVE &amp;<br />
                <span style={{ color: 'var(--color-accent-primary)' }}>CONCEPTUAL PROTOTYPES.</span>
              </h2>

              <p style={{ fontSize: '1.15rem', color: 'var(--color-fg-secondary)', lineHeight: 1.7, maxWidth: '680px' }}>
                A curated index of studio concepts exploring complex digital systems, intelligent automation, and bespoke interaction paradigms.
              </p>
            </div>

            {/* Project Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))',
                gap: '32px',
              }}
            >
              {CASE_STUDIES.map((project) => (
                <article
                  key={project.id}
                  className="content-card"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    padding: '32px',
                    cursor: 'pointer',
                  }}
                  onClick={() => setActiveProject(project)}
                >
                  <div>
                    {/* Visual Preview Composition */}
                    <div style={{ marginBottom: '28px' }}>{project.visualComposition}</div>

                    {/* Concept Disclaimers & Number */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.7rem',
                          letterSpacing: '0.14em',
                          color: 'var(--color-accent-primary)',
                          fontWeight: 600,
                          backgroundColor: 'var(--color-accent-subtle)',
                          padding: '3px 8px',
                          borderRadius: 'var(--radius-xs)',
                          border: '1px solid var(--color-border-accent)',
                        }}
                      >
                        STUDIO CONCEPT
                      </span>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--color-fg-dim)' }}>
                        REF // {project.number}
                      </span>
                    </div>

                    <div
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.75rem',
                        letterSpacing: '0.1em',
                        color: 'var(--color-fg-muted)',
                        textTransform: 'uppercase',
                        marginBottom: '8px',
                      }}
                    >
                      {project.category}
                    </div>

                    <h3
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '1.85rem',
                        fontWeight: 700,
                        letterSpacing: '-0.02em',
                        color: 'var(--color-fg-primary)',
                        marginBottom: '14px',
                      }}
                    >
                      {project.name}
                    </h3>

                    <p style={{ color: 'var(--color-fg-secondary)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '24px' }}>
                      {project.overview}
                    </p>
                  </div>

                  <div>
                    {/* Tech Stack Pills */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '24px' }}>
                      {project.technologyStack.map((tech) => (
                        <span
                          key={tech}
                          style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.7rem',
                            color: 'var(--color-fg-muted)',
                            backgroundColor: 'rgba(244, 240, 232, 0.05)',
                            border: '1px solid var(--color-border-subtle)',
                            borderRadius: 'var(--radius-pill)',
                            padding: '3px 9px',
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Open-Project Button */}
                    <button
                      type="button"
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        letterSpacing: '0.04em',
                        color: 'var(--color-fg-primary)',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        transition: 'color var(--transition-fast)',
                      }}
                    >
                      <span>VIEW FULL CASE STUDY</span>
                      <span style={{ color: 'var(--color-accent-primary)' }}>&rarr;</span>
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};
