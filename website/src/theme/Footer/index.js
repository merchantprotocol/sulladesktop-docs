/**
 * Custom Footer component for the Sulla Desktop documentation site.
 */
import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mp-footer">
      <div className="mp-footer__accent-bar" />
      <div className="mp-footer__inner">
        {/* Main Grid */}
        <div className="mp-footer__grid">
          {/* Brand + Social */}
          <div className="mp-footer__brand">
            <div className="mp-footer__brand-name">Sulla Desktop</div>
            <div className="mp-footer__brand-vol">AI-Powered Desktop App</div>
            <div className="mp-footer__brand-tagline">
              Docker, automation, and local LLMs.
            </div>
            <div className="mp-footer__social">
              <a
                href="https://github.com/sulla-ai"
                className="mp-footer__social-icon"
                aria-label="GitHub">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://x.com/sulladesktop"
                className="mp-footer__social-icon"
                aria-label="X / Twitter">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Products */}
          <div className="mp-footer__col">
            <div className="mp-footer__col-title">Products</div>
            <div className="mp-footer__col-links">
              <a href="https://github.com/sulla-ai/sulla-desktop">
                Sulla Desktop
              </a>
            </div>
          </div>

          {/* Resources */}
          <div className="mp-footer__col">
            <div className="mp-footer__col-title">Resources</div>
            <div className="mp-footer__col-links">
              <a href="/getting-started">Getting Started</a>
              <a href="/installation_and_setup/first-time-installation-guide">
                Installation
              </a>
              <a href="/ai_configuration/choosing-ai-models">
                AI Configuration
              </a>
              <a href="/extensions">Extensions</a>
            </div>
          </div>

          {/* Community */}
          <div className="mp-footer__col">
            <div className="mp-footer__col-title">Community</div>
            <div className="mp-footer__col-links">
              <a href="https://github.com/sulla-ai/sulla-desktop">GitHub</a>
              <a href="https://github.com/sulla-ai/sulla-desktop/discussions">
                Discussions
              </a>
              <a href="https://github.com/sulla-ai/sulla-desktop/issues">
                Issues
              </a>
            </div>
          </div>

          {/* Connect */}
          <div className="mp-footer__col">
            <div className="mp-footer__col-title">Connect</div>
            <div className="mp-footer__col-connect">
              <a
                href="mailto:info@sulladesktop.com"
                className="mp-footer__email">
                info@sulladesktop.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mp-footer__bottom">
          <div className="mp-footer__copyright">
            &copy; {currentYear} Sulla AI. All rights reserved.
          </div>
          <div className="mp-footer__built">Built with Docusaurus</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
