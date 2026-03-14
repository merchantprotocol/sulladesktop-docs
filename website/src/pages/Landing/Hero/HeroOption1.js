import React, {useState, useEffect, useRef} from 'react';

/**
 * OPTION 1 — "The Cinematic Marquee"
 *
 * A bold, editorial-first hero. Giant Playfair Display headline dominates
 * the viewport. Below it, a single terminal window types out the install
 * command letter-by-letter. A glowing green divider separates headline
 * from a stat ribbon. No corner terminals — pure cinematic editorial.
 */

const keyframes = `
@keyframes opt1Cursor {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}
@keyframes opt1FadeUp {
  0% { opacity: 0; transform: translateY(40px); }
  100% { opacity: 1; transform: translateY(0); }
}
@keyframes opt1LineGrow {
  0% { width: 0; opacity: 0; }
  100% { width: 200px; opacity: 1; }
}
@keyframes opt1GlowPulse {
  0%, 100% { opacity: 0.12; }
  50% { opacity: 0.2; }
}
.opt1-cta-primary {
  color: #fff !important;
  text-decoration: none !important;
}
.opt1-cta-primary:hover {
  color: #fff !important;
  text-decoration: none !important;
  background: #3fb950 !important;
  box-shadow: 0 0 24px rgba(63,185,80,0.4) !important;
  transform: translateY(-2px) !important;
}
.opt1-cta-outline:hover {
  border-color: #3fb950 !important;
  color: #3fb950 !important;
  text-shadow: 0 0 10px rgba(63,185,80,0.3) !important;
  transform: translateY(-2px) !important;
}
@media (max-width: 600px) {
  .opt1-headline { font-size: clamp(2rem, 10vw, 3rem) !important; }
  .opt1-stats { gap: 1.5rem !important; }
}
`;

function HeroOption1() {
  const [typed, setTyped] = useState('');
  const [showOutput, setShowOutput] = useState(false);
  const cmd = 'brew install --cask sulla-desktop';
  const timerRef = useRef(null);

  useEffect(() => {
    let i = 0;
    const cycle = () => {
      setTyped('');
      setShowOutput(false);
      i = 0;
      timerRef.current = setInterval(() => {
        i++;
        if (i <= cmd.length) {
          setTyped(cmd.slice(0, i));
        } else if (i === cmd.length + 8) {
          setShowOutput(true);
        } else if (i > cmd.length + 30) {
          clearInterval(timerRef.current);
          setTimeout(cycle, 3000);
        }
      }, 60);
    };
    cycle();
    return () => clearInterval(timerRef.current);
  }, []);

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
            top: '40%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '1200px',
            height: '800px',
            borderRadius: '50%',
            background:
              'radial-gradient(ellipse, rgba(46,160,67,0.14) 0%, transparent 60%)',
            pointerEvents: 'none',
            animation: 'opt1GlowPulse 6s ease-in-out infinite',
          }}
        />

        {/* Section label */}
        <div
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '0.6rem',
            fontWeight: 500,
            letterSpacing: '0.35em',
            textTransform: 'uppercase',
            color: '#6e7681',
            marginBottom: '2rem',
            zIndex: 2,
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            animation: 'opt1FadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
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

        {/* Main headline */}
        <h1
          className="opt1-headline"
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontWeight: 900,
            fontSize: 'clamp(3rem, 9vw, 7rem)',
            lineHeight: 1.0,
            color: '#e6edf3',
            textAlign: 'center',
            maxWidth: '1000px',
            margin: '0 0 0.5rem',
            zIndex: 2,
            letterSpacing: '-0.03em',
            animation: 'opt1FadeUp 1s cubic-bezier(0.16, 1, 0.3, 1) 0.1s both',
          }}>
          One App.
          <br />
          <em
            style={{
              color: '#3fb950',
              fontStyle: 'italic',
              textShadow: '0 0 60px rgba(63,185,80,0.3)',
            }}>
            Everything AI.
          </em>
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '0.95rem',
            lineHeight: 1.7,
            color: '#8b949e',
            textAlign: 'center',
            maxWidth: '560px',
            margin: '1.5rem 0 2.5rem',
            zIndex: 2,
            animation: 'opt1FadeUp 1s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both',
          }}>
          Local AI assistant, Docker containers, workflow automation, and LLM
          support. One install on macOS, Windows, or Linux.
        </p>

        {/* Glowing green divider */}
        <div
          style={{
            height: '3px',
            background: '#3fb950',
            boxShadow:
              '0 0 12px rgba(46,160,67,0.4), 0 0 40px rgba(46,160,67,0.15)',
            margin: '0 0 3rem',
            animation:
              'opt1LineGrow 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.5s both',
            zIndex: 2,
          }}
        />

        {/* Terminal with typewriter effect */}
        <div
          style={{
            width: '100%',
            maxWidth: '580px',
            zIndex: 2,
            animation: 'opt1FadeUp 1s cubic-bezier(0.16, 1, 0.3, 1) 0.4s both',
          }}>
          <div
            style={{
              background: '#161b22',
              border: '1px solid #30363d',
              borderRadius: '10px',
              overflow: 'hidden',
              boxShadow:
                '0 12px 48px rgba(0,0,0,0.5), 0 4px 16px rgba(0,0,0,0.3)',
            }}>
            {/* Title bar */}
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
                  fontSize: '0.7rem',
                  color: '#6e7681',
                  letterSpacing: '0.05em',
                }}>
                terminal
              </span>
            </div>
            {/* Terminal body */}
            <div
              style={{
                padding: '16px 20px',
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.85rem',
                lineHeight: 1.8,
                minHeight: '100px',
              }}>
              <div>
                <span style={{color: '#3fb950'}}>$</span>{' '}
                <span style={{color: '#e6edf3'}}>{typed}</span>
                {!showOutput && (
                  <span
                    style={{
                      display: 'inline-block',
                      width: '8px',
                      height: '16px',
                      background: '#3fb950',
                      animation: 'opt1Cursor 1s step-end infinite',
                      verticalAlign: 'text-bottom',
                      marginLeft: '2px',
                    }}
                  />
                )}
              </div>
              {showOutput && (
                <>
                  <div style={{color: '#8b949e'}}>
                    =&gt; Installing sulla-desktop...
                  </div>
                  <div style={{color: '#56d364'}}>
                    ✓ Sulla Desktop installed successfully
                  </div>
                  <div style={{color: '#8b949e', marginTop: '4px'}}>
                    <span style={{color: '#3fb950'}}>$</span> sulla start
                  </div>
                  <div style={{color: '#56d364'}}>✓ All services online</div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* CTA buttons */}
        <div
          style={{
            display: 'flex',
            gap: '1rem',
            marginTop: '2.5rem',
            zIndex: 2,
            flexWrap: 'wrap',
            justifyContent: 'center',
            animation: 'opt1FadeUp 1s cubic-bezier(0.16, 1, 0.3, 1) 0.6s both',
          }}>
          <a
            href="/getting-started"
            className="opt1-cta-primary"
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
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
          <a
            href="/overview"
            className="opt1-cta-outline"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
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

        {/* Stats ribbon */}
        <div
          className="opt1-stats"
          style={{
            display: 'flex',
            gap: '3rem',
            marginTop: '4rem',
            padding: '2rem 0',
            borderTop: '1px solid #21262d',
            zIndex: 2,
            flexWrap: 'wrap',
            justifyContent: 'center',
            animation: 'opt1FadeUp 1s cubic-bezier(0.16, 1, 0.3, 1) 0.8s both',
          }}>
          {[
            {value: 'AI', label: 'Local Assistant'},
            {value: 'Docker', label: 'Container Engine'},
            {value: 'n8n', label: 'Workflow Automation'},
            {value: 'LLM', label: 'Local Models'},
          ].map(stat => (
            <div key={stat.label} style={{textAlign: 'center'}}>
              <div
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: '1.8rem',
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

export default HeroOption1;
