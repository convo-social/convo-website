import Image from "next/image";

export function Hero() {
  return (
    <section className="h-hero">
      <div className="grain"></div>

      <div className="h-hero-inner">
        <div className="h-hero-text">
          <div className="h-eyebrow">Consumer intelligence at enterprise scale</div>
          <h1 className="h-headline">Ask your customers<br />before you make the call.</h1>
          <p className="h-sub">The research layer for brands that can't afford to be wrong. Hundreds of customer conversations, run in parallel. Decisions in days, not weeks.</p>
          <div className="h-cta-row">
            <a href="/contact-us" className="btn btn-primary">
              Book a demo
              <svg viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="showcase-wrap">
        <div className="showcase">
          <div className="video-pip">
            <div className="pip-stage" id="pipStage">
              <div className="pip-person active" style={{background: "#000"}}>
                <video autoPlay loop muted playsInline style={{position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover"}}><source src="https://github.com/convo-social/humanize-website/releases/download/v1-assets/pip-businesswoman.mp4" type="video/mp4" /></video>
              </div>
              <div className="pip-person" style={{background: "#000"}}>
                <video autoPlay loop muted playsInline style={{position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover"}}><source src="https://github.com/convo-social/humanize-website/releases/download/v1-assets/pip-smile.mp4" type="video/mp4" /></video>
              </div>
              <div className="pip-person" style={{background: "#000"}}>
                <video autoPlay loop muted playsInline style={{position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover"}}><source src="https://github.com/convo-social/humanize-website/releases/download/v1-assets/pip-webcam.mp4" type="video/mp4" /></video>
              </div>
              <div className="pip-person" style={{background: "#000"}}>
                <video autoPlay loop muted playsInline style={{position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover"}}><source src="https://github.com/convo-social/humanize-website/releases/download/v1-assets/pip-footage.mp4" type="video/mp4" /></video>
              </div>
              <div className="pip-person" style={{background: "#000"}}>
                <video autoPlay loop muted playsInline style={{position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover"}}><source src="https://github.com/convo-social/humanize-website/releases/download/v1-assets/pip-woman-home.mp4" type="video/mp4" /></video>
              </div>
            </div>
            <div className="pip-wave">
              <span></span><span></span><span></span><span></span><span></span>
            </div>
            <div className="pip-meta">
              <div className="pip-rec">
                <span className="pip-rec-dot"></span>
                <span className="pip-rec-label">Live</span>
              </div>
            </div>
          </div>

          <div className="showcase-panel">
            <div className="participants" id="participants">
              <div className="participant active" data-i="0" style={{background: "linear-gradient(135deg, #c47a4a 0%, #6b3a1f 100%)"}}>
                <span className="participant-initials">SR</span>
              </div>
              <div className="participant" data-i="1" style={{background: "linear-gradient(135deg, #6b5a8a 0%, #3a2a5c 100%)"}}>
                <span className="participant-initials">JT</span>
              </div>
              <div className="participant" data-i="2" style={{background: "linear-gradient(135deg, #4a6b8a 0%, #1f3a5c 100%)"}}>
                <span className="participant-initials">MK</span>
              </div>
              <div className="participant" data-i="3" style={{background: "linear-gradient(135deg, #5a8a6b 0%, #2a5c3a 100%)"}}>
                <span className="participant-initials">AL</span>
              </div>
              <div className="participant" data-i="4" style={{background: "linear-gradient(135deg, #8a5a4a 0%, #5c2a1f 100%)"}}>
                <span className="participant-initials">DC</span>
              </div>
              <span className="participant-count">200 live</span>
            </div>

            <div className="question-pill">
              <span className="question-text" id="question">Which packaging design drives intent to purchase?</span>
              <span className="question-arrow">
                <svg width="10" height="10" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </div>

            <div className="slides" id="slides">
              {/* Slide 1: Packaging */}
              <div className="slide active" data-slide="0">
                <div className="slide-body">
                  <div className="concept-grid">
                    <div className="concept winner">
                      <div className="winner-tag">Winner</div>
                      <div className="concept-thumb"><Image src="/images/Gemini_Generated_Image_u07bd8u07bd8u07b.png" alt="Concept A" fill sizes="(max-width: 991px) 40vw, 180px" style={{objectFit: "cover", borderRadius: "inherit"}} /></div>
                      <div className="concept-meta">
                        <span className="concept-name">Concept A</span>
                        <span className="concept-pct">71%</span>
                      </div>
                    </div>
                    <div className="concept">
                      <div className="concept-thumb"><Image src="/images/Gemini_Generated_Image_vfq8xjvfq8xjvfq8.png" alt="Concept B" fill sizes="(max-width: 991px) 40vw, 180px" style={{objectFit: "cover", borderRadius: "inherit"}} /></div>
                      <div className="concept-meta">
                        <span className="concept-name">Concept B</span>
                        <span className="concept-pct">29%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slide-footer">
                  <div className="h-quote">"A looks like real food. B looks like a supplement I'd hide in a drawer."</div>
                </div>
              </div>

              {/* Slide 2: Gen Z vs Millennials */}
              <div className="slide" data-slide="1">
                <div className="slide-body">
                  <div className="compare-header">
                    <div className="legend"><span className="legend-dot genz"></span>Gen Z</div>
                    <div className="legend"><span className="legend-dot mill"></span>Millennials</div>
                  </div>
                  <div className="compare-bars">
                    <div className="compare-row">
                      <div className="compare-label">Post-workout</div>
                      <div className="compare-bar-group">
                        <div className="compare-bar"><div className="compare-track"><div className="compare-fill genz" style={{"--w": "78%"} as React.CSSProperties}></div></div><div className="compare-pct">68%</div></div>
                        <div className="compare-bar"><div className="compare-track"><div className="compare-fill mill" style={{"--w": "48%"} as React.CSSProperties}></div></div><div className="compare-pct">42%</div></div>
                      </div>
                    </div>
                    <div className="compare-row">
                      <div className="compare-label">Meal swap</div>
                      <div className="compare-bar-group">
                        <div className="compare-bar"><div className="compare-track"><div className="compare-fill genz" style={{"--w": "60%"} as React.CSSProperties}></div></div><div className="compare-pct">52%</div></div>
                        <div className="compare-bar"><div className="compare-track"><div className="compare-fill mill" style={{"--w": "82%"} as React.CSSProperties}></div></div><div className="compare-pct">71%</div></div>
                      </div>
                    </div>
                    <div className="compare-row">
                      <div className="compare-label">On the go</div>
                      <div className="compare-bar-group">
                        <div className="compare-bar"><div className="compare-track"><div className="compare-fill genz" style={{"--w": "47%"} as React.CSSProperties}></div></div><div className="compare-pct">41%</div></div>
                        <div className="compare-bar"><div className="compare-track"><div className="compare-fill mill" style={{"--w": "70%"} as React.CSSProperties}></div></div><div className="compare-pct">61%</div></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slide-footer">
                  <div className="signal-footer"><span>Top occasion: post-workout</span><span>Gen Z indexes +26pts</span></div>
                </div>
              </div>

              {/* Slide 3: Emergent themes */}
              <div className="slide" data-slide="2">
                <div className="slide-body">
                  <div className="themes">
                    <div className="theme-row lead">
                      <div className="theme-info">
                        <div className="theme-name">Clean ingredient list</div>
                        <div className="theme-sub">Strongest signal &middot; all segments</div>
                      </div>
                      <div className="theme-count">142</div>
                    </div>
                    <div className="theme-row">
                      <div className="theme-info">
                        <div className="theme-name">Real food texture</div>
                        <div className="theme-sub">Mentioned by repeat buyers</div>
                      </div>
                      <div className="theme-count">98</div>
                    </div>
                    <div className="theme-row">
                      <div className="theme-info">
                        <div className="theme-name">Not chalky or gritty</div>
                        <div className="theme-sub">Top objection to category</div>
                      </div>
                      <div className="theme-count">76</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Slide 4: Customer language (word bubble) */}
              <div className="slide" data-slide="3">
                <div className="slide-body">
                  <div className="phrase-grid">
                    <div className="phrase">"actually tastes like food"</div>
                    <div className="phrase">"not chalky"</div>
                    <div className="phrase">"my pre-meeting fuel"</div>
                    <div className="phrase">"clean ingredients"</div>
                    <div className="phrase">"holds me over"</div>
                  </div>
                </div>
                <div className="slide-footer">
                  <div className="source-row">
                    <div className="avatar"></div>
                    <div className="source-text"><strong>Maya, 28</strong> &middot; used the top phrase first<br />Surfaced from open-ended responses</div>
                  </div>
                </div>
              </div>

              {/* Slide 5: Value drivers (attributes) */}
              <div className="slide" data-slide="4">
                <div className="slide-body">
                  <div className="bars">
                    <div className="bar-item">
                      <div className="bar-label"><span>Clean ingredients</span><span className="bar-pct">38%</span></div>
                      <div className="bar-track"><div className="bar-fill" style={{"--w": "88%"} as React.CSSProperties}></div></div>
                    </div>
                    <div className="bar-item">
                      <div className="bar-label"><span>Taste and texture</span><span className="bar-pct">27%</span></div>
                      <div className="bar-track"><div className="bar-fill" style={{"--w": "63%"} as React.CSSProperties}></div></div>
                    </div>
                    <div className="bar-item">
                      <div className="bar-label"><span>Protein per dollar</span><span className="bar-pct">21%</span></div>
                      <div className="bar-track"><div className="bar-fill" style={{"--w": "49%"} as React.CSSProperties}></div></div>
                    </div>
                  </div>
                </div>
                <div className="slide-footer">
                  <div className="h-quote">"I'll pay more if the ingredients are real. That's the whole point."</div>
                </div>
              </div>
            </div>
          </div>

          <div className="progress" id="progress">
            <button className="progress-tick active" data-index="0" aria-label="Slide 1"></button>
            <button className="progress-tick" data-index="1" aria-label="Slide 2"></button>
            <button className="progress-tick" data-index="2" aria-label="Slide 3"></button>
            <button className="progress-tick" data-index="3" aria-label="Slide 4"></button>
            <button className="progress-tick" data-index="4" aria-label="Slide 5"></button>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
