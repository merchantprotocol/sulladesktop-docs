import React, {useState, useEffect} from 'react';

/**
 * OPTION 2 — "The Split Terminal"
 *
 * Two-column hero: left is pure editorial (giant headline, pull-quote,
 * CTA), right is a stacked pair of live terminal windows — one showing
 * installation, one showing running services. The terminals animate
 * through phases independently. Vertical green column divider glows
 * between the two halves.
 */

const keyframes = `
@keyframes opt2Cursor {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}
@keyframes opt2FadeUp {
  0% { opacity: 0; transform: translateY(30px); }
  100% { opacity: 1; transform: translateY(0); }
}
@keyframes opt2LineGrow {
  0% { height: 0; }
  100% { height: 120px; }
}
@keyframes opt2GlowPulse {
  0%, 100% { box-shadow: 0 0 15px rgba(63,185,80,0.3); }
  50% { box-shadow: 0 0 30px rgba(63,185,80,0.5); }
}
.opt2-cta-primary {
  color: #fff !important;
  text-decoration: none !important;
}
.opt2-cta-primary:hover {
  color: #fff !important;
  text-decoration: none !important;
  background: #3fb950 !important;
  box-shadow: 0 0 24px rgba(63,185,80,0.4) !important;
  transform: translateY(-2px) !important;
}
.opt2-cta-outline:hover {
  border-color: #3fb950 !important;
  color: #3fb950 !important;
  transform: translateY(-2px) !important;
}
@media (max-width: 900px) {
  .opt2-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
  .opt2-divider { display: none !important; }
  .opt2-headline { font-size: clamp(2rem, 8vw, 3rem) !important; }
  .opt2-left { text-align: center; }
  .opt2-ctas { justify-content: center !important; }
}
`;

const INSTALL_PHASES = [
  [
    {text: '$ brew install --cask sulla-desktop', color: '#3fb950'},
    {text: '  ==> Downloading sulla-desktop...', color: '#8b949e'},
    {text: '  ████████░░░░░░░░ 52%', color: '#3fb950'},
  ],
  [
    {text: '$ brew install --cask sulla-desktop', color: '#3fb950'},
    {text: '  ==> Downloading sulla-desktop...', color: '#8b949e'},
    {text: '  ████████████████ 100%', color: '#3fb950'},
    {text: '  ==> Installing...', color: '#8b949e'},
  ],
  [
    {text: '$ brew install --cask sulla-desktop', color: '#3fb950'},
    {text: '  ✓ sulla-desktop installed', color: '#56d364'},
    {text: '  ==> Configuring environment...', color: '#8b949e'},
    {text: '  ✓ Ready to launch', color: '#56d364'},
  ],
];

const SERVICE_PHASES = [
  [
    {text: '$ sulla status', color: '#3fb950'},
    {text: '  Waiting for services...', color: '#6e7681'},
  ],
  [
    {text: '$ sulla status', color: '#3fb950'},
    {text: '  ● ai-assistant    starting', color: '#e3b341'},
    {text: '  ● containers      starting', color: '#e3b341'},
    {text: '  ● workflows       starting', color: '#e3b341'},
    {text: '  ● local-llm       starting', color: '#e3b341'},
  ],
  [
    {text: '$ sulla status', color: '#3fb950'},
    {text: '  ✓ ai-assistant    running', color: '#56d364'},
    {text: '  ✓ containers      running', color: '#56d364'},
    {text: '  ✓ workflows       running', color: '#56d364'},
    {text: '  ✓ local-llm       running', color: '#56d364'},
    {text: '', color: 'transparent'},
    {text: '  All services healthy (4/4)', color: '#3fb950'},
  ],
];

function TerminalPane({title, lines}) {
  return (
    <div
      style={{
        background: '#161b22',
        border: '1px solid #30363d',
        borderRadius: '10px',
        overflow: 'hidden',
        boxShadow: '0 8px 32px rgba(0,0,0,0.4), 0 2px 8px rgba(0,0,0,0.2)',
      }}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          padding: '10px 14px',
          background: '#1c2128',
          borderBottom: '1px solid #30363d',
        }}>
        {['#ff5f57', '#febc2e', '#28c840'].map(c => (
          <span
            key={c}
            style={{
              width: 10,
              height: 10,
              borderRadius: '50%',
              background: c,
              opacity: 0.85,
            }}
          />
        ))}
        <span
          style={{
            marginLeft: 'auto',
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '0.65rem',
            color: '#6e7681',
            letterSpacing: '0.05em',
          }}>
          {title}
        </span>
      </div>
      <div
        style={{
          padding: '14px 18px',
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '0.8rem',
          lineHeight: 1.8,
          minHeight: '130px',
        }}>
        {lines.map((line, i) => (
          <div key={i} style={{color: line.color, whiteSpace: 'pre'}}>
            {line.text}
          </div>
        ))}
        <span
          style={{
            display: 'inline-block',
            width: '7px',
            height: '14px',
            background: '#3fb950',
            animation: 'opt2Cursor 1s step-end infinite',
            verticalAlign: 'text-bottom',
            marginLeft: '2px',
          }}
        />
      </div>
    </div>
  );
}

function HeroOption2() {
  const [installIdx, setInstallIdx] = useState(0);
  const [serviceIdx, setServiceIdx] = useState(0);

  useEffect(() => {
    const cycle = () => {
      setInstallIdx(0);
      setServiceIdx(0);
      setTimeout(() => setInstallIdx(1), 2500);
      setTimeout(() => setInstallIdx(2), 5000);
      setTimeout(() => setServiceIdx(1), 5500);
      setTimeout(() => setServiceIdx(2), 8000);
    };
    cycle();
    const interval = setInterval(cycle, 13000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style>{keyframes}</style>
      <div
        style={{
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          background: '#0d1117',
          overflow: 'hidden',
        }}>
        {/* Grid lines background */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `
              linear-gradient(rgba(63,185,80,0.025) 1px, transparent 1px),
              linear-gradient(90deg, rgba(63,185,80,0.025) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
            pointerEvents: 'none',
          }}
        />

        {/* Ambient glow */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '1000px',
            height: '800px',
            borderRadius: '50%',
            background:
              'radial-gradient(ellipse, rgba(46,160,67,0.1) 0%, transparent 60%)',
            pointerEvents: 'none',
          }}
        />

        <div
          className="opt2-grid"
          style={{
            width: '100%',
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '8rem 3rem',
            display: 'grid',
            gridTemplateColumns: '1fr auto 1fr',
            gap: '4rem',
            alignItems: 'center',
            position: 'relative',
            zIndex: 2,
          }}>
          {/* Left — Editorial */}
          <div
            className="opt2-left"
            style={{
              animation: 'opt2FadeUp 1s cubic-bezier(0.16, 1, 0.3, 1) both',
            }}>
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.6rem',
                fontWeight: 500,
                letterSpacing: '0.35em',
                textTransform: 'uppercase',
                color: '#6e7681',
                marginBottom: '2rem',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
              }}>
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: '#3fb950',
                  boxShadow: '0 0 10px rgba(63,185,80,0.5)',
                }}
              />
              Sulla Desktop
            </div>

            <h1
              className="opt2-headline"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontWeight: 900,
                fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                lineHeight: 1.05,
                color: '#e6edf3',
                margin: '0 0 2rem',
                letterSpacing: '-0.02em',
              }}>
              Deploy Your
              <br />
              <em
                style={{
                  color: '#3fb950',
                  fontStyle: 'italic',
                  textShadow: '0 0 60px rgba(63,185,80,0.3)',
                }}>
                AI Desktop.
              </em>
            </h1>

            {/* Pull quote */}
            <div
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontWeight: 700,
                fontStyle: 'italic',
                fontSize: '1.15rem',
                lineHeight: 1.5,
                color: '#e6edf3',
                borderLeft: '3px solid #3fb950',
                paddingLeft: '1.5rem',
                marginBottom: '2rem',
                boxShadow: '-4px 0 20px rgba(46,160,67,0.08)',
              }}>
              &ldquo;AI assistant, containers, workflows, and local LLMs — one
              install, zero cloud dependency.&rdquo;
            </div>

            <p
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.85rem',
                lineHeight: 1.8,
                color: '#8b949e',
                marginBottom: '2.5rem',
                maxWidth: '440px',
              }}>
              Everything runs on your machine. Private, fast, and fully
              integrated. macOS, Windows, and Linux.
            </p>

            {/* CTAs */}
            <div
              className="opt2-ctas"
              style={{
                display: 'flex',
                gap: '1rem',
                flexWrap: 'wrap',
              }}>
              <a
                href="/getting-started"
                className="opt2-cta-primary"
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
                className="opt2-cta-outline"
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

            {/* Platform badges */}
            <div
              style={{
                display: 'flex',
                gap: '10px',
                marginTop: '2rem',
                flexWrap: 'wrap',
              }}>
              {['macOS', 'Windows', 'Linux'].map(p => (
                <span
                  key={p}
                  style={{
                    border: '1px solid #30363d',
                    borderRadius: '20px',
                    padding: '4px 14px',
                    color: '#6e7681',
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '0.65rem',
                    letterSpacing: '0.05em',
                  }}>
                  {p}
                </span>
              ))}
            </div>
          </div>

          {/* Center — Glowing divider */}
          <div
            className="opt2-divider"
            style={{
              width: '2px',
              background:
                'linear-gradient(to bottom, transparent, #3fb950, transparent)',
              animation:
                'opt2LineGrow 1.5s cubic-bezier(0.16, 1, 0.3, 1) 0.3s both, opt2GlowPulse 3s ease-in-out infinite',
              alignSelf: 'stretch',
              maxHeight: '400px',
              margin: 'auto 0',
            }}
          />

          {/* Right — Stacked terminals */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem',
              animation:
                'opt2FadeUp 1s cubic-bezier(0.16, 1, 0.3, 1) 0.3s both',
            }}>
            <TerminalPane title="install" lines={INSTALL_PHASES[installIdx]} />
            <TerminalPane title="services" lines={SERVICE_PHASES[serviceIdx]} />
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroOption2;
