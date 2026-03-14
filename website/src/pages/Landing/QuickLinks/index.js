import React from 'react';

function QuickLinks() {
  return (
    <div className="container">
      <div className="card-wrapper">
        <div className="card">
          <div className="card-content-items">
            <div className="card-content">
              <h4>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#3fb950"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <polyline points="4 17 10 11 4 5" />
                  <line x1="12" y1="19" x2="20" y2="19" />
                </svg>
                Getting Started
              </h4>
              <p>
                Install Sulla Desktop and set up your AI-powered desktop
                environment in minutes.
              </p>
              <ul className="menu__list">
                <li>
                  <a href="/getting-started">Quick Start Guide</a>
                </li>
                <li>
                  <a href="/installation_and_setup/first-time-installation-guide">
                    Installation
                  </a>
                </li>
                <li>
                  <a href="/installation_and_setup/system-requirements-check">
                    System Requirements
                  </a>
                </li>
                <li>
                  <a href="/installation_and_setup/updating-to-latest-version">
                    Updating
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-content-items">
            <div className="card-content">
              <h4>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
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
                AI Configuration
              </h4>
              <p>
                Connect to Grok, Claude, or run local LLMs — configure the AI
                models that work best for your needs.
              </p>
              <ul className="menu__list">
                <li>
                  <a href="/ai_configuration/setting-up-api-keys">
                    API Key Setup
                  </a>
                </li>
                <li>
                  <a href="/ai_configuration/local-llm-setup-ollama">
                    Local LLMs
                  </a>
                </li>
                <li>
                  <a href="/ai_configuration/choosing-ai-models">
                    Choosing AI Models
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-content-items">
            <div className="card-content">
              <h4>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#3fb950"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                </svg>
                Automation &amp; Workflows
              </h4>
              <p>
                Build powerful automations with n8n workflows, schedule tasks,
                and let AI handle repetitive work.
              </p>
              <ul className="menu__list">
                <li>
                  <a href="/automation_and_workflows/creating-your-first-n8n-workflow">
                    Workflow Builder
                  </a>
                </li>
                <li>
                  <a href="/automation_and_workflows/workflow-templates">
                    Workflow Templates
                  </a>
                </li>
                <li>
                  <a href="/automation_and_workflows/connecting-external-services">
                    External Services
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-content-items">
            <div className="card-content">
              <h4>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#3fb950"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <path d="M16 16v6H8v-6" />
                  <path d="M12 2v8" />
                  <rect x="2" y="10" width="20" height="6" rx="2" />
                </svg>
                Extensions
              </h4>
              <p>
                Extend Sulla Desktop with plugins and integrations to customize
                your environment.
              </p>
              <ul className="menu__list">
                <li>
                  <a href="/extensions">Extensions Overview</a>
                </li>
                <li>
                  <a href="/extensions/examples">Extension Examples</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-content-items">
            <div className="card-content">
              <h4>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
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
                Docker &amp; Development
              </h4>
              <p>
                Manage Docker containers, development environments, and services
                all from Sulla Desktop.
              </p>
              <ul className="menu__list">
                <li>
                  <a href="/docker_and_development/docker-desktop-integration">
                    Docker Integration
                  </a>
                </li>
                <li>
                  <a href="/docker_and_development/managing-containers">
                    Managing Containers
                  </a>
                </li>
                <li>
                  <a href="/docker_and_development/development-environment-setup">
                    Dev Environments
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-content-items">
            <div className="card-content">
              <h4>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#3fb950"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                </svg>
                API Reference
              </h4>
              <p>
                Full API documentation for integrating with and extending Sulla
                Desktop programmatically.
              </p>
              <ul className="menu__list">
                <li>
                  <a href="/api/command-server">Command Server API</a>
                </li>
                <li>
                  <a href="/api/openai">OpenAI-Compatible API</a>
                </li>
                <li>
                  <a href="/api/integrations">Integrations</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuickLinks;
