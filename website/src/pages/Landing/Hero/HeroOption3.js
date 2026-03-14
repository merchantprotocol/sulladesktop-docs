import React, {useState, useEffect} from 'react';

/**
 * OPTION 3 — "The Command Center"
 *
 * Full-width dashboard aesthetic. The hero presents Sulla Desktop as a
 * command center: a top headline bar, then a grid of four service cards
 * (AI, Docker, Workflows, LLM) that each animate through boot → running.
 * Below the grid, a single-line status bar shows the overall system state.
 * Minimal, dense, information-rich — like a real ops dashboard.
 */

const keyframes = `
@keyframes opt3Cursor {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}
@keyframes opt3FadeUp {
  0% { opacity: 0; transform: translateY(30px); }
  100% { opacity: 1; transform: translateY(0); }
}
@keyframes opt3DotPulse {
  0%, 100% { opacity: 0.6; }
  50% { opacity: 1; }
}
@keyframes opt3ScanLine {
  0% { top: -2px; }
  100% { top: 100%; }
}
.opt3-cta-primary {
  color: #fff !important;
  text-decoration: none !important;
}
.opt3-cta-primary:hover {
  color: #fff !important;
  text-decoration: none !important;
  background: #3fb950 !important;
  box-shadow: 0 0 24px rgba(63,185,80,0.4) !important;
  transform: translateY(-2px) !important;
}
.opt3-cta-outline:hover {
  border-color: #3fb950 !important;
  color: #3fb950 !important;
  transform: translateY(-2px) !important;
}
.opt3-card:hover {
  border-color: rgba(63,185,80,0.4) !important;
  box-shadow: 0 0 20px rgba(46,160,67,0.1), 0 8px 32px rgba(0,0,0,0.4) !important;
}
@media (max-width: 900px) {
  .opt3-grid { grid-template-columns: 1fr !important; }
  .opt3-headline { font-size: clamp(2rem, 7vw, 3rem) !important; }
  .opt3-status-bar { flex-direction: column !important; gap: 0.5rem !important; }
}
@media (max-width: 600px) {
  .opt3-grid { grid-template-columns: 1fr !important; }
}
`;

const SERVICES = [
  {
    name: 'ai-assistant',
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#3fb950"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path d="M12 2a10 10 0 1 0 10 10" />
        <path d="M12 12l7-7" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    description: 'Chat with AI models locally or via API',
    bootLines: ['Initializing model...', 'Loading weights...', 'Warming up...'],
    runLine: 'Ready — accepting prompts',
  },
  {
    name: 'containers',
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#3fb950"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
        <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
        <line x1="6" y1="6" x2="6.01" y2="6" />
        <line x1="6" y1="18" x2="6.01" y2="18" />
      </svg>
    ),
    description: 'Docker containers managed natively',
    bootLines: [
      'Starting Docker engine...',
      'Pulling images...',
      'Creating network...',
    ],
    runLine: 'Running — 3 containers active',
  },
  {
    name: 'workflows',
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#3fb950"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    description: 'n8n workflow automation built in',
    bootLines: [
      'Loading workflows...',
      'Connecting triggers...',
      'Starting scheduler...',
    ],
    runLine: 'Active — 12 workflows loaded',
  },
  {
    name: 'local-llm',
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#3fb950"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      </svg>
    ),
    description: 'Run LLMs entirely on your hardware',
    bootLines: [
      'Scanning GPU...',
      'Loading llama.cpp...',
      'Allocating VRAM...',
    ],
    runLine: 'Online — llama3 loaded (8B)',
  },
];

function ServiceCard({service, phase}) {
  const isBooting = phase < 3;
  const isRunning = phase >= 3;

  const currentBootLine = isBooting
    ? service.bootLines[Math.min(phase, service.bootLines.length - 1)]
    : null;

  return (
    <div
      className="opt3-card"
      style={{
        background: '#161b22',
        border: `1px solid ${isRunning ? 'rgba(63,185,80,0.25)' : '#30363d'}`,
        borderRadius: '10px',
        padding: '1.5rem',
        transition: 'border-color 0.5s ease, box-shadow 0.5s ease',
        boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
        position: 'relative',
        overflow: 'hidden',
      }}>
      {/* Subtle scan line effect during boot */}
      {isBooting && (
        <div
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            height: '2px',
            background:
              'linear-gradient(90deg, transparent, rgba(63,185,80,0.15), transparent)',
            animation: 'opt3ScanLine 2s linear infinite',
            pointerEvents: 'none',
          }}
        />
      )}

      {/* Header row */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          marginBottom: '1rem',
        }}>
        {service.icon}
        <span
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '0.8rem',
            fontWeight: 600,
            color: '#e6edf3',
            letterSpacing: '0.02em',
          }}>
          {service.name}
        </span>
        <span
          style={{
            marginLeft: 'auto',
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            background: isRunning ? '#3fb950' : '#e3b341',
            boxShadow: isRunning
              ? '0 0 8px rgba(63,185,80,0.5)'
              : '0 0 6px rgba(227,179,65,0.3)',
            animation: isBooting
              ? 'opt3DotPulse 1s ease-in-out infinite'
              : 'none',
            transition: 'background 0.3s, box-shadow 0.3s',
          }}
        />
      </div>

      {/* Description */}
      <p
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '0.75rem',
          color: '#8b949e',
          lineHeight: 1.6,
          margin: '0 0 1rem',
        }}>
        {service.description}
      </p>

      {/* Status line */}
      <div
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '0.7rem',
          lineHeight: 1.6,
          padding: '8px 10px',
          background: '#0d1117',
          borderRadius: '6px',
          border: '1px solid #21262d',
        }}>
        {isRunning ? (
          <span style={{color: '#56d364'}}>✓ {service.runLine}</span>
        ) : (
          <span style={{color: '#e3b341'}}>
            ● {currentBootLine}
            <span
              style={{
                display: 'inline-block',
                width: '6px',
                height: '12px',
                background: '#3fb950',
                animation: 'opt3Cursor 1s step-end infinite',
                verticalAlign: 'text-bottom',
                marginLeft: '4px',
              }}
            />
          </span>
        )}
      </div>
    </div>
  );
}

function HeroOption3() {
  const [phases, setPhases] = useState([0, 0, 0, 0]);
  const [systemStatus, setSystemStatus] = useState('initializing');

  useEffect(() => {
    const cycle = () => {
      setPhases([0, 0, 0, 0]);
      setSystemStatus('initializing');

      const delays = [0, 400, 800, 200];
      const steps = [0, 1, 2, 3]; // boot phases

      steps.forEach(step => {
        delays.forEach((d, i) => {
          setTimeout(() => {
            setPhases(prev => {
              const next = [...prev];
              next[i] = step;
              return next;
            });
          }, step * 1500 + d + 1500);
        });
      });

      setTimeout(() => setSystemStatus('booting'), 1500);
      setTimeout(() => setSystemStatus('loading'), 3500);
      setTimeout(() => setSystemStatus('checking'), 5000);
      setTimeout(() => setSystemStatus('online'), 6200);
    };

    cycle();
    const interval = setInterval(cycle, 12000);
    return () => clearInterval(interval);
  }, []);

  const readyCount = phases.filter(p => p >= 3).length;

  return (
    <>
      <style>{keyframes}</style>
      <div
        style={{
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '8rem 2rem 6rem',
          background: '#0d1117',
          overflow: 'hidden',
        }}>
        {/* Ambient glow */}
        <div
          style={{
            position: 'absolute',
            top: '45%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '1200px',
            height: '900px',
            borderRadius: '50%',
            background:
              'radial-gradient(ellipse, rgba(46,160,67,0.1) 0%, transparent 60%)',
            pointerEvents: 'none',
          }}
        />

        {/* Header */}
        <div
          style={{
            zIndex: 2,
            textAlign: 'center',
            marginBottom: '1.5rem',
            animation: 'opt3FadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) both',
          }}>
          <div
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.6rem',
              fontWeight: 500,
              letterSpacing: '0.35em',
              textTransform: 'uppercase',
              color: '#6e7681',
              marginBottom: '1.5rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
            }}>
            <span
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                background: systemStatus === 'online' ? '#3fb950' : '#e3b341',
                boxShadow:
                  systemStatus === 'online'
                    ? '0 0 10px rgba(63,185,80,0.5)'
                    : '0 0 8px rgba(227,179,65,0.3)',
                transition: 'all 0.3s',
              }}
            />
            Command Center
          </div>

          <h1
            className="opt3-headline"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontWeight: 900,
              fontSize: 'clamp(2.5rem, 7vw, 5rem)',
              lineHeight: 1.05,
              color: '#e6edf3',
              margin: '0 0 1rem',
              letterSpacing: '-0.03em',
            }}>
            Your Desktop,
            <br />
            <em
              style={{
                color: '#3fb950',
                fontStyle: 'italic',
                textShadow: '0 0 60px rgba(63,185,80,0.3)',
              }}>
              Fully Loaded.
            </em>
          </h1>

          <p
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.9rem',
              lineHeight: 1.7,
              color: '#8b949e',
              maxWidth: '520px',
              margin: '0 auto',
            }}>
            Four integrated services. One application. Zero cloud dependency.
          </p>
        </div>

        {/* Cinematic divider */}
        <div
          style={{
            width: '100%',
            maxWidth: '800px',
            height: '1px',
            background:
              'linear-gradient(90deg, transparent 0%, #3fb950 35%, #56d364 50%, #3fb950 65%, transparent 100%)',
            boxShadow:
              '0 0 15px rgba(46,160,67,0.3), 0 0 30px rgba(63,185,80,0.1)',
            margin: '2rem 0 3rem',
            zIndex: 2,
          }}
        />

        {/* Service grid */}
        <div
          className="opt3-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '1.25rem',
            width: '100%',
            maxWidth: '800px',
            zIndex: 2,
            animation: 'opt3FadeUp 1s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both',
          }}>
          {SERVICES.map((service, i) => (
            <ServiceCard
              key={service.name}
              service={service}
              phase={phases[i]}
            />
          ))}
        </div>

        {/* System status bar */}
        <div
          className="opt3-status-bar"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '2rem',
            marginTop: '1.5rem',
            padding: '12px 24px',
            background: '#161b22',
            border: '1px solid #21262d',
            borderRadius: '8px',
            width: '100%',
            maxWidth: '800px',
            zIndex: 2,
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '0.7rem',
            animation: 'opt3FadeUp 1s cubic-bezier(0.16, 1, 0.3, 1) 0.4s both',
          }}>
          <span style={{color: '#6e7681'}}>
            SYSTEM:{' '}
            <span
              style={{
                color: systemStatus === 'online' ? '#3fb950' : '#e3b341',
                fontWeight: 600,
              }}>
              {systemStatus.toUpperCase()}
            </span>
          </span>
          <span style={{color: '#30363d'}}>|</span>
          <span style={{color: '#6e7681'}}>
            SERVICES:{' '}
            <span style={{color: '#3fb950', fontWeight: 600}}>
              {readyCount}/4
            </span>
          </span>
          <span style={{color: '#30363d'}}>|</span>
          <span style={{color: '#6e7681'}}>
            PRIVACY:{' '}
            <span style={{color: '#3fb950', fontWeight: 600}}>LOCAL</span>
          </span>
        </div>

        {/* CTAs */}
        <div
          style={{
            display: 'flex',
            gap: '1rem',
            marginTop: '2.5rem',
            zIndex: 2,
            flexWrap: 'wrap',
            justifyContent: 'center',
            animation: 'opt3FadeUp 1s cubic-bezier(0.16, 1, 0.3, 1) 0.6s both',
          }}>
          <a
            href="/getting-started"
            className="opt3-cta-primary"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '14px 32px',
              background: '#2EA043',
              color: '#fff',
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.85rem',
              fontWeight: 600,
              letterSpacing: '0.05em',
              borderRadius: '8px',
              border: 'none',
              textDecoration: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
            }}>
            Get Started
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
          <a
            href="/overview"
            className="opt3-cta-outline"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '14px 32px',
              background: 'transparent',
              color: '#e6edf3',
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.85rem',
              fontWeight: 400,
              letterSpacing: '0.05em',
              borderRadius: '8px',
              border: '1px solid #30363d',
              textDecoration: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
            }}>
            Read the Docs
          </a>
        </div>

        {/* Stats */}
        <div
          style={{
            display: 'flex',
            gap: '3rem',
            marginTop: '3rem',
            padding: '2rem 0',
            borderTop: '1px solid #21262d',
            zIndex: 2,
            flexWrap: 'wrap',
            justifyContent: 'center',
            animation: 'opt3FadeUp 1s cubic-bezier(0.16, 1, 0.3, 1) 0.8s both',
          }}>
          {[
            {value: '3', label: 'Platforms'},
            {value: '100%', label: 'Local & Private'},
            {value: '1-Click', label: 'Install'},
          ].map(stat => (
            <div key={stat.label} style={{textAlign: 'center'}}>
              <div
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: '2rem',
                  fontWeight: 900,
                  color: '#3fb950',
                  lineHeight: 1,
                  textShadow: '0 0 20px rgba(63,185,80,0.2)',
                }}>
                {stat.value}
              </div>
              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.6rem',
                  color: '#6e7681',
                  textTransform: 'uppercase',
                  letterSpacing: '0.2em',
                  marginTop: '0.5rem',
                }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default HeroOption3;
