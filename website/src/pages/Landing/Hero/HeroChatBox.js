import React, {useState, useRef, useEffect} from 'react';

const CANNED_RESPONSES = [
  {
    keywords: ['container', 'docker', 'start', 'run', 'dev'],
    reply: 'Starting 3 containers...',
    details: [
      '✓ postgres:16 — running',
      '✓ redis:7 — running',
      '✓ nginx:latest — running',
    ],
    footer: 'All containers are up. Ports forwarded to localhost.',
  },
  {
    keywords: ['workflow', 'automat', 'pipeline', 'ci', 'deploy'],
    reply: 'Running workflow...',
    details: [
      '✓ Lint — passed',
      '✓ Test — 42 passed, 0 failed',
      '✓ Build — complete',
    ],
    footer: 'Workflow finished successfully.',
  },
  {
    keywords: ['llm', 'model', 'local', 'ollama', 'llama'],
    reply: 'Checking local models...',
    details: ['✓ llama3.2 — loaded (3.2 GB)', '✓ GPU acceleration — enabled'],
    footer: 'Local LLM ready. You can chat with it directly.',
  },
  {
    keywords: ['hello', 'hi', 'hey', 'sup', 'what'],
    reply:
      "I'm Sulla, your AI desktop assistant. I can manage containers, run workflows, and connect to local LLMs.",
    details: [],
    footer: 'Try asking me to start your dev containers!',
  },
];

const DEFAULT_RESPONSE = {
  reply: 'On it! Let me look into that for you.',
  details: ['✓ Task received', '✓ Processing...'],
  footer: 'Is there anything else you need?',
};

function matchResponse(input) {
  const lower = input.toLowerCase();
  for (const r of CANNED_RESPONSES) {
    if (r.keywords.some(kw => lower.includes(kw))) {
      return r;
    }
  }
  return DEFAULT_RESPONSE;
}

export default function HeroChatBox() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef(null);

  // Show greeting after the app window expand animation completes, typed in like an LLM
  useEffect(() => {
    const greeting = 'Hello! How can I help you today?';
    let charIndex = 0;
    let streamTimer;

    const startTimer = setTimeout(() => {
      setMessages([{role: 'assistant', text: '', streaming: true}]);
      streamTimer = setInterval(() => {
        charIndex++;
        if (charIndex >= greeting.length) {
          clearInterval(streamTimer);
          setMessages([{role: 'assistant', text: greeting}]);
          return;
        }
        setMessages([
          {
            role: 'assistant',
            text: greeting.slice(0, charIndex),
            streaming: true,
          },
        ]);
      }, 30);
    }, 1000);

    return () => {
      clearTimeout(startTimer);
      if (streamTimer) clearInterval(streamTimer);
    };
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, typing]);

  const handleSubmit = e => {
    e.preventDefault();
    const text = input.trim();
    if (!text || typing) return;

    const userMsg = {role: 'user', text};
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setTyping(true);

    const response = matchResponse(text);

    // Simulate brief "thinking" pause, then stream in the reply
    setTimeout(() => {
      const fullText = response.reply;
      let charIndex = 0;
      setTyping(false);

      const streamMsg = () => ({
        role: 'assistant',
        text: fullText.slice(0, charIndex),
        details: charIndex >= fullText.length ? response.details : [],
        footer: charIndex >= fullText.length ? response.footer : undefined,
        streaming: charIndex < fullText.length,
      });

      setMessages(prev => [...prev, streamMsg()]);

      const timer = setInterval(() => {
        charIndex++;
        if (charIndex > fullText.length) {
          clearInterval(timer);
          return;
        }
        setMessages(prev => [...prev.slice(0, -1), streamMsg()]);
      }, 25);
    }, 600 + Math.random() * 400);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        minHeight: '300px',
      }}>
      {/* Messages area */}
      <div
        ref={scrollRef}
        style={{
          flex: 1,
          overflowY: 'auto',
          padding: '20px 24px',
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '0.8rem',
          lineHeight: 1.8,
        }}>
        {messages.map((msg, i) =>
          msg.role === 'assistant' ? (
            <AssistantMessage key={i} msg={msg} />
          ) : (
            <UserMessage key={i} msg={msg} />
          )
        )}
        {typing && <TypingIndicator />}
      </div>

      {/* Input */}
      <form
        onSubmit={handleSubmit}
        style={{
          padding: '12px 16px',
          borderTop: '1px solid #30363d',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          background: '#0d1117',
          borderRadius: '0 0 12px 12px',
        }}>
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Ask Sulla anything..."
          style={{
            flex: 1,
            background: 'transparent',
            border: 'none',
            outline: 'none',
            color: '#e6edf3',
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '0.8rem',
            caretColor: '#5096b3',
          }}
        />
        <button
          type="submit"
          disabled={!input.trim() || typing}
          style={{
            background: input.trim() && !typing ? '#4485a0' : '#21262d',
            border: 'none',
            borderRadius: '6px',
            padding: '6px 12px',
            cursor: input.trim() && !typing ? 'pointer' : 'default',
            display: 'flex',
            alignItems: 'center',
            transition: 'background 0.2s',
          }}>
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke={input.trim() && !typing ? '#fff' : '#6e7681'}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <line x1="22" y1="2" x2="11" y2="13" />
            <polygon points="22 2 15 22 11 13 2 9 22 2" />
          </svg>
        </button>
      </form>
    </div>
  );
}

function AssistantMessage({msg}) {
  return (
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
          background: 'rgba(80,150,179,0.12)',
          border: '1px solid rgba(80,150,179,0.25)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          marginTop: '2px',
          color: '#5096b3',
          fontSize: '14px',
          fontWeight: 700,
        }}>
        S
      </div>
      <div>
        <div
          style={{
            color: '#5096b3',
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
          {msg.text}
          {msg.streaming && (
            <span
              style={{
                display: 'inline-block',
                width: '6px',
                height: '14px',
                background: '#5096b3',
                marginLeft: '2px',
                verticalAlign: 'text-bottom',
                animation: 'heroChatDot 1s step-end infinite',
              }}
            />
          )}
        </div>
        {msg.details && msg.details.length > 0 && (
          <div style={{marginTop: '8px', fontSize: '0.8rem'}}>
            {msg.details.map((d, i) => (
              <div key={i} style={{color: '#6ab0cc'}}>
                {d}
              </div>
            ))}
          </div>
        )}
        {msg.subtext && (
          <div
            style={{
              color: '#6e7681',
              fontSize: '0.75rem',
              marginTop: '10px',
              lineHeight: 1.6,
            }}>
            {msg.subtext}
          </div>
        )}
        {msg.footer && (
          <div
            style={{
              color: '#8b949e',
              fontSize: '0.8rem',
              marginTop: '8px',
            }}>
            {msg.footer}
          </div>
        )}
      </div>
    </div>
  );
}

function UserMessage({msg}) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'flex-end',
        marginBottom: '16px',
      }}>
      <div
        style={{
          background: 'rgba(80,150,179,0.1)',
          border: '1px solid rgba(80,150,179,0.2)',
          borderRadius: '10px',
          padding: '10px 16px',
          color: '#e6edf3',
          fontSize: '0.85rem',
          maxWidth: '80%',
        }}>
        {msg.text}
      </div>
    </div>
  );
}

function TypingIndicator() {
  return (
    <div style={{display: 'flex', gap: '12px', marginBottom: '16px'}}>
      <div
        style={{
          width: '32px',
          height: '32px',
          borderRadius: '8px',
          background: 'rgba(80,150,179,0.12)',
          border: '1px solid rgba(80,150,179,0.25)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          marginTop: '2px',
          color: '#5096b3',
          fontSize: '14px',
          fontWeight: 700,
        }}>
        S
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
          padding: '10px 0',
        }}>
        {[0, 1, 2].map(i => (
          <span
            key={i}
            style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              background: '#5096b3',
              opacity: 0.4,
              animation: `heroChatDot 1.2s ease-in-out ${i * 0.2}s infinite`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
