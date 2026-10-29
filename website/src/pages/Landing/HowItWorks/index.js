import React, {useState} from 'react';

export default function HowItWorks() {
  const items = [
    {
      step: '01',
      title: 'Install Ghost Agent',
      desc: 'One command installs everything you need. Run curl -fsSL https://ghostagent.com/install.sh | sh on macOS, Windows, or Linux.',
      href: '/installation_and_setup/first-time-installation-guide',
      linkText: 'Installation docs',
    },
    {
      step: '02',
      title: 'Configure Your AI',
      desc: 'Set up your preferred AI model — Grok, Claude, or local LLMs. Ghost Agent connects to the models you choose.',
      href: '/ai_configuration/choosing-ai-models',
      linkText: 'AI configuration guide',
    },
    {
      step: '03',
      title: 'Automate Everything',
      desc: 'Create workflows with n8n, manage Docker containers, and let your AI assistant handle the rest. All from one app.',
      href: '/getting-started',
      linkText: 'Full walkthrough',
    },
  ];

  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div
      style={{
        padding: '8rem 3rem',
        background: '#121B27',
        position: 'relative',
        overflow: 'hidden',
      }}>
      {/* Radial glow background */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '100%',
          height: '100%',
          background:
            'radial-gradient(circle, rgba(234,84,40,0.08) 0%, transparent 60%)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          maxWidth: 1000,
          margin: '0 auto',
          position: 'relative',
          zIndex: 1,
        }}>
        {/* Section label */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 16,
            marginBottom: 24,
          }}>
          <span
            style={{
              flex: '0 1 80px',
              height: 1,
              background: 'linear-gradient(90deg, transparent, #EA5428)',
            }}
          />
          <span
            style={{
              fontFamily: "'Lexend', sans-serif",
              fontSize: '0.65rem',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: '#7A8DA0',
            }}>
            How It Works
          </span>
          <span
            style={{
              flex: '0 1 80px',
              height: 1,
              background: 'linear-gradient(90deg, #EA5428, transparent)',
            }}
          />
        </div>

        {/* Main headline */}
        <h2
          style={{
            textAlign: 'center',
            color: '#DFE7F4',
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontFamily: "'Ubuntu', sans-serif",
            letterSpacing: '-0.02em',
            lineHeight: 1.1,
            marginBottom: 16,
          }}>
          Three steps to get started
        </h2>

        {/* Subtitle */}
        <p
          style={{
            textAlign: 'center',
            color: '#ADBFD6',
            fontFamily: "'Lexend', sans-serif",
            fontSize: '0.875rem',
            lineHeight: 1.7,
            maxWidth: 540,
            margin: '0 auto 56px auto',
          }}>
          From install to a fully running AI desktop environment in under sixty
          seconds. No complex setup required.
        </p>

        {/* Cards */}
        <div
          style={{
            display: 'flex',
            gap: '2rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}>
          {items.map((item, i) => (
            <div
              key={i}
              onMouseEnter={() => setHoveredCard(i)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                flex: '1 1 280px',
                maxWidth: 320,
                padding: '2.5rem 2rem',
                border: `1px solid ${
                  hoveredCard === i ? '#EA5428' : '#2F3C4E'
                }`,
                borderRadius: 12,
                background: '#1A2535',
                boxShadow:
                  hoveredCard === i
                    ? '0 0 30px rgba(234,84,40,0.1), inset 0 1px 0 rgba(255,255,255,0.03)'
                    : 'inset 0 1px 0 rgba(255,255,255,0.03)',
                transition:
                  'border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease',
                transform:
                  hoveredCard === i ? 'translateY(-4px)' : 'translateY(0)',
                display: 'flex',
                flexDirection: 'column',
              }}>
              <span
                style={{
                  color: '#EA5428',
                  fontFamily: "'Lexend', sans-serif",
                  fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
                  fontWeight: 700,
                  display: 'block',
                  marginBottom: 16,
                  lineHeight: 1,
                }}>
                {item.step}
              </span>
              <h3
                style={{
                  color: '#DFE7F4',
                  fontFamily: "'Lexend', sans-serif",
                  fontSize: '1.1rem',
                  marginBottom: 12,
                  fontWeight: 600,
                }}>
                {item.title}
              </h3>
              <p
                style={{
                  color: '#ADBFD6',
                  fontFamily: "'Lexend', sans-serif",
                  fontSize: '0.875rem',
                  lineHeight: 1.7,
                  marginBottom: 24,
                  flex: 1,
                }}>
                {item.desc}
              </p>
              <a
                href={item.href}
                style={{
                  color: '#EA5428',
                  fontFamily: "'Lexend', sans-serif",
                  fontWeight: 600,
                  fontSize: '0.875rem',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease, text-shadow 0.3s ease',
                  ...(hoveredCard === i
                    ? {
                        color: '#fff',
                        textShadow: '0 0 10px rgba(234,84,40,0.4)',
                      }
                    : {}),
                }}>
                {item.linkText} &rarr;
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
