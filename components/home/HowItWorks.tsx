import Image from "next/image";

export function HowItWorks() {
  return (
    <section className="how">
      <div className="how-inner">
        <div className="how-header">
          <h2>Ask today. Hear back tomorrow.</h2>
          <p className="subhead">No vendor onboarding, no six-week timelines, no deck that arrives after the decision already shipped. One question in, one decision out.</p>
        </div>

        <div className="steps">

          <div className="step-item">
          <div className="step-card step-card-overflow-mobile">
            <div className="visual visual-overflow-mobile">
              <div className="hw-prompt-card">
                <div className="hw-prompt-text" id="hwPromptText" contentEditable="true" spellCheck="false" suppressContentEditableWarning>Why are buyers switching to our competitor?</div>
                <div className="hw-prompt-footer">
                  <button className="hw-prompt-attach">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/></svg>
                    Add files
                  </button>
                  <button className="hw-prompt-send">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/></svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="step-text">
            <div className="step-title"><span className="step-num">1.</span> Brief us on the decision</div>
            <div className="step-desc">Tell us what you're deciding. We turn it into a research plan your team reviews before recruitment begins.</div>
          </div>
          </div>

          <div className="step-item">
          <div className="step-card">
            <div className="visual">
              <div className="featurecode w-embed w-script">

                <div className="ds-canvas" id="ds-main-canvas">
                  <div className="ds-stage">

                    <div className="ds-card ds-center-card ds-anim">
                      <div className="ds-title">Define the Mission</div>
                      <div className="ds-desc">What do we need to learn from these participants? Keep goals sharp and actionable.</div>
                      <div style={{display: "flex", flexDirection: "column", gap: "0.5rem", marginTop: "0.5rem"}}>
                        <input type="text" className="ds-input" id="ds-goal-1" placeholder="Goal 1: Discover pain points..." />
                        <input type="text" className="ds-input" id="ds-goal-2" placeholder="Goal 2: Validate new flow..." />
                      </div>
                      <button className="ds-btn" id="ds-recruit-btn">Recruit Participants</button>
                    </div>

                    <div className="ds-card ds-float ds-float-3 ds-anim ds-delay-3">
                      <div className="ds-label" style={{marginBottom: "0.5rem"}}>Target Demographics</div>
                      <div className="ds-avatar-row">
                        <Image src="/images/happy-smiling-and-a-portrait-of-woman-at-work-and-2026-03-25-06-52-33-utc.jpg" className="ds-avatar" alt="Participant" width={32} height={32} />
                        <Image src="/images/laughing-young-designer-standing-in-an-office-afte-2026-03-09-04-33-22-utc.jpg" className="ds-avatar" alt="Participant" width={32} height={32} />
                        <Image src="/images/portrait-woman-and-smile-with-professional-with-p-2026-03-25-05-19-01-utc.jpg" className="ds-avatar" alt="Participant" width={32} height={32} />
                      </div>
                      <div className="ds-tags" id="ds-tags-container">
                        <div className="ds-tag" id="ds-tag-1">Gen Z</div>
                        <div className="ds-tag" id="ds-tag-2">Millennials</div>
                        <div className="ds-tag" id="ds-tag-3">Urban</div>
                        <div className="ds-tag" id="ds-tag-4">High-Tech</div>
                        <div className="ds-tag" id="ds-tag-5">Remote</div>
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            </div>
          </div>
          <div className="step-text">
            <div className="step-title"><span className="step-num">2.</span> We recruit the exact audience</div>
            <div className="step-desc">Five million vetted panelists plus custom recruitment for segments traditional research can't reach.</div>
          </div>
          </div>

          <div className="step-item">
          <div className="step-card">
            <div className="visual">
              <div className="featurecode w-embed w-script">

                <div className="fg-canvas" id="focus-room-module">
                  <div className="fg-wrapper">

                    {/* Video Frame Background */}
                    <div className="fg-video-frame">
                      <div className="fg-video-block"></div>
                      <div className="fg-video-block"></div>
                      <div className="fg-video-block"></div>
                      <div className="fg-video-block"></div>
                    </div>

                    <div className="ai-mod-bar state-thinking" id="ai-bar-container">
                      <div className="ai-state-icon">
                        <div className="audio-wave">
                          <div className="wave-bar"></div>
                          <div className="wave-bar"></div>
                          <div className="wave-bar"></div>
                          <div className="wave-bar"></div>
                        </div>
                        <div className="thinking-dots">
                          <div className="dot"></div>
                          <div className="dot"></div>
                          <div className="dot"></div>
                        </div>
                      </div>
                      <div className="ai-text-area">
                        <span id="ai-moderator-text" className="ai-text"></span><span className="ai-cursor"></span>
                      </div>
                    </div>

                    <div className="fg-card card-1">
                      <div className="fg-card-title">Quote</div>
                      <div className="fg-card-insight"></div>
                    </div>

                    <div className="fg-card card-2">
                      <div className="fg-card-title">Key Insight</div>
                      <div className="fg-card-text"></div>
                    </div>

                    <div className="fg-card card-3">
                      <div className="fg-card-title" style={{color: "var(--success)"}}>Group Consensus</div>
                      <div className="fg-card-text"></div>
                      <div className="fg-progress-track">
                        <div className="fg-progress-fill"></div>
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            </div>
          </div>
          <div className="step-text">
            <div className="step-title"><span className="step-num">3.</span> AI runs the rooms in parallel</div>
            <div className="step-desc">Hundreds of conversations at once, each one probing contradictions and following threads a survey would miss.</div>
          </div>
          </div>

          <div className="step-item">
          <div className="step-card">
            <div className="visual">
              <div className="featurecode w-embed w-script">
                <div className="insight-canvas" id="insight-canvas-trigger">

                  <div className="hero-cluster">

                    <div className="float-card chart-card delay-1">
                      <div className="chart-title">Why this concept wins</div>

                      <div className="bar-row">
                        <div className="bar-labels"><span>Stands out</span><span>78%</span></div>
                        <div className="bar-track"><div className="bar-fill" style={{"--target-width": "78%", "--bar-color": "#c44b25", background: "var(--bar-color)"} as React.CSSProperties}></div></div>
                      </div>

                      <div className="bar-row">
                        <div className="bar-labels"><span>Feels premium</span><span>66%</span></div>
                        <div className="bar-track"><div className="bar-fill" style={{"--target-width": "66%", "--bar-color": "#e87b5d", background: "var(--bar-color)"} as React.CSSProperties}></div></div>
                      </div>

                      <div className="bar-row">
                        <div className="bar-labels"><span>Clear message</span><span>61%</span></div>
                        <div className="bar-track"><div className="bar-fill" style={{"--target-width": "61%", "--bar-color": "#f1a28a", background: "var(--bar-color)"} as React.CSSProperties}></div></div>
                      </div>
                    </div>

                    <div className="float-card quote-card delay-2">
                      <div className="quote-text">"I just abandon the cart if there's no moneyback guarantee."</div>
                    </div>

                    <div className="status-tag agree-tag delay-3">
                      <div className="tag-dot"></div>
                      85% agree
                    </div>

                    <div className="video-card delay-0">
                      <div className="video-prompt">Can you explain what gave you that impression?</div>

                      <div className="video-player-mock">
                        <video autoPlay loop muted playsInline>
                          <source src="https://github.com/convo-social/convo-website/releases/download/v1-assets/woman-talking.mp4" type="video/mp4" />
                        </video>
                      </div>
                    </div>

                  </div>

                </div>

              </div>
            </div>
          </div>
          <div className="step-text">
            <div className="step-title"><span className="step-num">4.</span> Signal Report in 48 hours</div>
            <div className="step-desc">A written decision with the evidence, the dissent, and the unedited moments where the room changed.</div>
          </div>
          </div>

        </div>
      </div>
    </section>
  );
}
