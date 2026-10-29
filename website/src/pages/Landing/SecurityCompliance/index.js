import React, {useState} from 'react';

const features = [
  {
    num: '01',
    title: 'Your Data Stays Local',
    desc: 'Run AI models directly on your machine. Your conversations, files, and data never leave your desktop unless you choose to share them.',
  },
  {
    num: '02',
    title: 'Local LLM Support',
    desc: 'Use open-source models like Llama, Mistral, or Phi locally. No API keys needed, no usage limits, complete offline capability.',
  },
  {
    num: '03',
    title: 'No Cloud Dependencies',
    desc: 'Ghost Agent runs entirely on your hardware. No accounts, no telemetry, no third-party services required for core functionality.',
  },
  {
    num: '04',
    title: 'Sandboxed Containers',
    desc: 'Every service runs in isolated Docker containers. Your development environment is completely separated from your host system.',
  },
];

export default function SecurityCompliance() {
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <div
      style={{
        padding: '8rem 3rem',
        background: '#121B27',
        position: 'relative',
        overflow: 'hidden',
      }}>
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
            gap: 16,
            marginBottom: 48,
          }}>
          <span
            style={{
              fontFamily: "'Lexend', sans-serif",
              fontSize: '0.65rem',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: '#7A8DA0',
            }}>
            Privacy &amp; Security
          </span>
          <span
            style={{
              flex: 1,
              height: 1,
              background:
                'linear-gradient(90deg, #EA5428 0%, transparent 100%)',
              opacity: 0.3,
            }}
          />
        </div>

        {/* Two-column layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '4rem',
            alignItems: 'start',
          }}>
          {/* Left — headline + shield */}
          <div style={{position: 'sticky', top: '6rem'}}>
            <h2
              style={{
                color: '#DFE7F4',
                fontSize: 'clamp(2.8rem, 6vw, 4.5rem)',
                fontFamily: "'Ubuntu', sans-serif",
                fontWeight: 900,
                letterSpacing: '-0.03em',
                lineHeight: 1.0,
                marginBottom: 24,
              }}>
              Private by design,
              <br />
              <span style={{color: '#EA5428'}}>secure by default</span>
            </h2>

            <p
              style={{
                color: '#ADBFD6',
                fontFamily: "'Lexend', sans-serif",
                fontSize: '0.85rem',
                lineHeight: 1.7,
                marginBottom: 40,
                maxWidth: 400,
              }}>
              Your AI, your data, your machine. Ghost Agent keeps everything
              local — no cloud required, no data leaks.
            </p>

            {/* Shield graphic */}
            <div style={{position: 'relative', width: 120, height: 140}}>
              <svg width="120" height="140" viewBox="0 0 120 140" fill="none">
                <path
                  d="M60 8L16 28V64C16 96 60 132 60 132S104 96 104 64V28L60 8Z"
                  stroke="#EA5428"
                  strokeWidth="1.5"
                  fill="rgba(234,84,40,0.05)"
                />
                <path
                  d="M46 68L56 78L76 58"
                  stroke="#EA5428"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  width: 200,
                  height: 200,
                  transform: 'translate(-50%, -50%)',
                  background:
                    'radial-gradient(circle, rgba(234,84,40,0.12) 0%, transparent 70%)',
                  pointerEvents: 'none',
                }}
              />
            </div>
          </div>

          {/* Right — feature stack */}
          <div>
            {features.map((feat, i) => (
              <div
                key={i}
                onMouseEnter={() => setHoveredItem(i)}
                onMouseLeave={() => setHoveredItem(null)}
                style={{
                  padding: '28px 0',
                  borderBottom:
                    i < features.length - 1 ? '1px solid #2F3C4E' : 'none',
                  transition: 'padding-left 0.3s ease',
                  paddingLeft: hoveredItem === i ? 12 : 0,
                }}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'baseline',
                    gap: 16,
                    marginBottom: 8,
                  }}>
                  <span
                    style={{
                      fontFamily: "'Lexend', sans-serif",
                      fontSize: '0.7rem',
                      color: hoveredItem === i ? '#EA5428' : '#7A8DA0',
                      letterSpacing: '0.1em',
                      transition: 'color 0.3s ease',
                    }}>
                    {feat.num}
                  </span>
                  <h3
                    style={{
                      color: '#DFE7F4',
                      fontFamily: "'Lexend', sans-serif",
                      fontSize: '1rem',
                      fontWeight: 600,
                      margin: 0,
                    }}>
                    {feat.title}
                  </h3>
                </div>
                <p
                  style={{
                    color: '#ADBFD6',
                    fontFamily: "'Lexend', sans-serif",
                    fontSize: '0.825rem',
                    lineHeight: 1.7,
                    margin: 0,
                    paddingLeft: 40,
                  }}>
                  {feat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
