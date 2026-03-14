import React, {useState, useEffect, useRef} from 'react';

/**
 * OPTION 2 — "The Split Terminal" (Desktop App Edition)
 *
 * Two-column hero: left is editorial, right is an animated sequence:
 *   1. Installer window shows download/install progress
 *   2. Installer shrinks to nothing (scale 0)
 *   3. Sulla Desktop app window expands from nothing to LARGER than
 *      the installer was, with logo in the title bar and AI chat
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
  .opt2-badges { justify-content: center !important; }
  .opt2-app-window { max-width: 100% !important; }
}
`;

/* Sulla logo SVG inline — matches terminal-icon.svg */
function SullaLogo({size = 14}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      width={size}
      height={size}
      fill="none"
      style={{flexShrink: 0}}>
      <rect
        x="1.5"
        y="4.5"
        width="29"
        height="23"
        rx="3"
        ry="3"
        stroke="#3FB950"
        strokeWidth="2.5"
        fill="none"
      />
      <polyline
        points="9,13 14,17 9,21"
        stroke="#3FB950"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <line
        x1="17"
        y1="21"
        x2="23"
        y2="21"
        stroke="#3FB950"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

/*
 * Phases:
 * 0 — downloading
 * 1 — installing
 * 2 — ready (checkmarks, about to launch)
 * 3 — installer shrinks to nothing
 * 4 — app expands from nothing (greeting)
 * 5 — user chatting
 */

function HeroOption2() {
  const [phase, setPhase] = useState(0);
  const timeoutsRef = useRef([]);

  useEffect(() => {
    const later = (fn, ms) => {
      const t = setTimeout(fn, ms);
      timeoutsRef.current.push(t);
    };
    const clearAll = () => {
      timeoutsRef.current.forEach(clearTimeout);
      timeoutsRef.current = [];
    };

    const cycle = () => {
      clearAll();
      setPhase(0);
      later(() => setPhase(1), 2200);
      later(() => setPhase(2), 4200);
      later(() => setPhase(3), 5800); // shrink installer
      later(() => setPhase(4), 6600); // expand app
      later(() => setPhase(5), 10000); // user chats
      later(() => cycle(), 16000);
    };
    cycle();
    return () => clearAll();
  }, []);

  const showInstaller = phase <= 3;
  const showApp = phase >= 4;

  // Installer scale: normal for 0-2, shrinks at phase 3
  const installerStyle =
    phase === 3
      ? {
          transform: 'scale(0)',
          opacity: 0,
        }
      : {
          transform: 'scale(1)',
          opacity: 1,
        };

  // App scale: grows from 0 at phase 4+
  const appStyle =
    phase >= 4
      ? {
          transform: 'scale(1)',
          opacity: 1,
        }
      : {
          transform: 'scale(0)',
          opacity: 0,
        };

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
              Your AI-Powered
              <br />
              <em
                style={{
                  color: '#3fb950',
                  fontStyle: 'italic',
                  textShadow: '0 0 60px rgba(63,185,80,0.3)',
                }}>
                Desktop App.
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
              &ldquo;AI assistant, Docker containers, workflow automation, and
              local LLMs — all in one desktop app.&rdquo;
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
                Download
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
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
              className="opt2-badges"
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

          {/* Right — Animated window area */}
          <div
            style={{
              position: 'relative',
              minHeight: '380px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              animation:
                'opt2FadeUp 1s cubic-bezier(0.16, 1, 0.3, 1) 0.3s both',
            }}>
            {/* ── INSTALLER WINDOW ── */}
            {showInstaller && (
              <div
                style={{
                  position: 'absolute',
                  width: '100%',
                  maxWidth: '420px',
                  ...installerStyle,
                  transition:
                    'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.5s ease',
                  transformOrigin: 'center center',
                }}>
                <div
                  style={{
                    background: '#161b22',
                    border: '1px solid #30363d',
                    borderRadius: '10px',
                    overflow: 'hidden',
                    boxShadow:
                      '0 8px 32px rgba(0,0,0,0.4), 0 2px 8px rgba(0,0,0,0.2)',
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
                      installer
                    </span>
                  </div>

                  {/* Installer body */}
                  <div
                    style={{
                      padding: '16px 20px',
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '0.8rem',
                      lineHeight: 1.8,
                      minHeight: '160px',
                    }}>
                    {phase === 0 && (
                      <>
                        <div style={{color: '#8b949e', marginBottom: '4px'}}>
                          Downloading Sulla Desktop...
                        </div>
                        <div style={{color: '#3fb950'}}>
                          ████████░░░░░░░░ 52%
                        </div>
                        <div
                          style={{
                            color: '#6e7681',
                            fontSize: '0.7rem',
                            marginTop: '8px',
                          }}>
                          sulla-desktop-v2.4.0-arm64.dmg
                        </div>
                        <div style={{color: '#6e7681', fontSize: '0.7rem'}}>
                          124 MB of 238 MB — 12s remaining
                        </div>
                      </>
                    )}
                    {phase === 1 && (
                      <>
                        <div style={{color: '#56d364'}}>
                          ✓ Download complete
                        </div>
                        <div style={{color: '#8b949e', marginTop: '8px'}}>
                          Installing Sulla Desktop...
                        </div>
                        <div style={{color: '#8b949e', marginTop: '4px'}}>
                          Configuring AI engine...
                        </div>
                        <div style={{color: '#3fb950', marginTop: '4px'}}>
                          ████████████░░░░ 75%
                        </div>
                      </>
                    )}
                    {phase >= 2 && (
                      <>
                        <div style={{color: '#56d364'}}>
                          ✓ Download complete
                        </div>
                        <div style={{color: '#56d364'}}>
                          ✓ Installation complete
                        </div>
                        <div style={{color: '#56d364'}}>
                          ✓ AI engine configured
                        </div>
                        <div
                          style={{
                            color: '#3fb950',
                            marginTop: '12px',
                            fontWeight: 600,
                          }}>
                          Launching Sulla Desktop...
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* ── DESKTOP APP WINDOW ── */}
            {showApp && (
              <div
                className="opt2-app-window"
                style={{
                  position: 'absolute',
                  width: '115%',
                  maxWidth: '540px',
                  ...appStyle,
                  transition:
                    'transform 0.7s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.5s ease',
                  transformOrigin: 'center center',
                }}>
                <div
                  style={{
                    background: '#161b22',
                    border: '1px solid rgba(63,185,80,0.3)',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    boxShadow:
                      '0 16px 64px rgba(0,0,0,0.5), 0 0 30px rgba(46,160,67,0.08)',
                  }}>
                  {/* App title bar with Sulla logo */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      padding: '12px 16px',
                      background: '#1c2128',
                      borderBottom: '1px solid #30363d',
                    }}>
                    {['#ff5f57', '#febc2e', '#28c840'].map(c => (
                      <span
                        key={c}
                        style={{
                          width: 11,
                          height: 11,
                          borderRadius: '50%',
                          background: c,
                          opacity: 0.85,
                        }}
                      />
                    ))}
                    <div
                      style={{
                        marginLeft: 'auto',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                      }}>
                      <SullaLogo size={16} />
                      <span
                        style={{
                          fontFamily: "'JetBrains Mono', monospace",
                          fontSize: '0.75rem',
                          color: '#3fb950',
                          letterSpacing: '0.05em',
                          fontWeight: 600,
                        }}>
                        Sulla Desktop
                      </span>
                    </div>
                  </div>

                  {/* App body */}
                  <div
                    style={{
                      padding: '20px 24px',
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '0.8rem',
                      lineHeight: 1.8,
                      minHeight: '300px',
                    }}>
                    {/* Phase 4: Greeting */}
                    {phase === 4 && (
                      <div>
                        <div
                          style={{
                            display: 'flex',
                            gap: '12px',
                            marginBottom: '16px',
                          }}>
                          <div
                            style={{
                              width: '32px',
                              height: '32px',
                              borderRadius: '8px',
                              background: 'rgba(63,185,80,0.12)',
                              border: '1px solid rgba(63,185,80,0.25)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              flexShrink: 0,
                              marginTop: '2px',
                            }}>
                            <SullaLogo size={18} />
                          </div>
                          <div>
                            <div
                              style={{
                                color: '#3fb950',
                                fontSize: '0.75rem',
                                fontWeight: 600,
                                marginBottom: '6px',
                              }}>
                              Sulla
                            </div>
                            <div
                              style={{
                                color: '#8b949e',
                                fontSize: '0.85rem',
                                lineHeight: 1.7,
                              }}>
                              Hello! How can I help you today?
                            </div>
                            <div
                              style={{
                                color: '#6e7681',
                                fontSize: '0.75rem',
                                marginTop: '10px',
                                lineHeight: 1.6,
                              }}>
                              I can help you manage containers, run workflows,
                              chat with AI models, or configure your local LLMs.
                            </div>
                          </div>
                        </div>

                        {/* Input prompt */}
                        <div
                          style={{
                            marginTop: '24px',
                            padding: '12px 16px',
                            background: '#0d1117',
                            border: '1px solid #30363d',
                            borderRadius: '8px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                          }}>
                          <span
                            style={{
                              color: '#6e7681',
                              fontSize: '0.8rem',
                            }}>
                            Ask Sulla anything...
                          </span>
                          <span
                            style={{
                              marginLeft: 'auto',
                              display: 'inline-block',
                              width: '7px',
                              height: '15px',
                              background: '#3fb950',
                              animation: 'opt2Cursor 1s step-end infinite',
                            }}
                          />
                        </div>
                      </div>
                    )}

                    {/* Phase 5: User chatting */}
                    {phase === 5 && (
                      <div>
                        {/* Sulla greeting (compact) */}
                        <div
                          style={{
                            display: 'flex',
                            gap: '12px',
                            marginBottom: '16px',
                          }}>
                          <div
                            style={{
                              width: '32px',
                              height: '32px',
                              borderRadius: '8px',
                              background: 'rgba(63,185,80,0.12)',
                              border: '1px solid rgba(63,185,80,0.25)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              flexShrink: 0,
                              marginTop: '2px',
                            }}>
                            <SullaLogo size={18} />
                          </div>
                          <div>
                            <div
                              style={{
                                color: '#3fb950',
                                fontSize: '0.75rem',
                                fontWeight: 600,
                                marginBottom: '6px',
                              }}>
                              Sulla
                            </div>
                            <div
                              style={{
                                color: '#8b949e',
                                fontSize: '0.85rem',
                              }}>
                              Hello! How can I help you today?
                            </div>
                          </div>
                        </div>

                        {/* User message */}
                        <div
                          style={{
                            display: 'flex',
                            justifyContent: 'flex-end',
                            marginBottom: '16px',
                          }}>
                          <div
                            style={{
                              background: 'rgba(63,185,80,0.1)',
                              border: '1px solid rgba(63,185,80,0.2)',
                              borderRadius: '10px',
                              padding: '10px 16px',
                              color: '#e6edf3',
                              fontSize: '0.85rem',
                              maxWidth: '80%',
                            }}>
                            Start my dev containers
                          </div>
                        </div>

                        {/* Sulla response */}
                        <div
                          style={{
                            display: 'flex',
                            gap: '12px',
                          }}>
                          <div
                            style={{
                              width: '32px',
                              height: '32px',
                              borderRadius: '8px',
                              background: 'rgba(63,185,80,0.12)',
                              border: '1px solid rgba(63,185,80,0.25)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              flexShrink: 0,
                              marginTop: '2px',
                            }}>
                            <SullaLogo size={18} />
                          </div>
                          <div>
                            <div
                              style={{
                                color: '#3fb950',
                                fontSize: '0.75rem',
                                fontWeight: 600,
                                marginBottom: '6px',
                              }}>
                              Sulla
                            </div>
                            <div
                              style={{
                                color: '#8b949e',
                                fontSize: '0.85rem',
                                lineHeight: 1.7,
                              }}>
                              Starting 3 containers...
                            </div>
                            <div
                              style={{
                                marginTop: '8px',
                                fontSize: '0.8rem',
                              }}>
                              <div style={{color: '#56d364'}}>
                                ✓ postgres:16 — running
                              </div>
                              <div style={{color: '#56d364'}}>
                                ✓ redis:7 — running
                              </div>
                              <div style={{color: '#56d364'}}>
                                ✓ nginx:latest — running
                              </div>
                            </div>
                            <div
                              style={{
                                color: '#8b949e',
                                fontSize: '0.8rem',
                                marginTop: '8px',
                              }}>
                              All containers are up. Ports forwarded to
                              localhost.
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroOption2;
