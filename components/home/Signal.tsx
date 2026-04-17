import Image from "next/image";

export function Signal() {
  return (
    <section className="sec-signal">
      <div className="container">
        <div className="signal-header">
            <h2>The Signal Report, written for every stakeholder.</h2>
            <p className="subhead">The decision, the evidence, and the customer moments behind it. Board-ready without rebuilding a single slide.</p>
        </div>
        <div className="signal-bento">
          <div className="sig-card large" data-sig="drivers">
            <div className="sig-card-title">Decision drivers</div>
            <div className="sig-card-desc">What moved people, what didn't, mapped to the question you actually asked. So you know exactly what to do next.</div>
            <div className="sig-card-widget">
              <div className="sig-drivers-label">What moved people</div>
              <div className="sig-driver-row"><span className="sig-driver-name">Onboarding clarity</span><div className="sig-driver-bar-area"><div className="sig-driver-axis"></div><div className="sig-driver-fill positive sage" data-w="47"></div></div><span className="sig-driver-val">+47</span></div>
              <div className="sig-driver-row"><span className="sig-driver-name">Ease of switching</span><div className="sig-driver-bar-area"><div className="sig-driver-axis"></div><div className="sig-driver-fill positive" data-w="29"></div></div><span className="sig-driver-val">+29</span></div>
              <div className="sig-driver-row"><span className="sig-driver-name">Brand trust</span><div className="sig-driver-bar-area"><div className="sig-driver-axis"></div><div className="sig-driver-fill negative" data-w="8"></div></div><span className="sig-driver-val">-8</span></div>
              <div className="sig-driver-row"><span className="sig-driver-name">Feature gaps</span><div className="sig-driver-bar-area"><div className="sig-driver-axis"></div><div className="sig-driver-fill negative" data-w="19"></div></div><span className="sig-driver-val">-19</span></div>
              <div className="sig-drivers-insight">Onboarding was the strongest signal. Mentioned unprompted in 24 of 30 sessions before any other topic surfaced.</div>
            </div>
          </div>
          <div className="sig-card large">
            <div className="sig-card-title">Participant clips</div>
            <div className="sig-card-desc">Timestamped video moments from every session. The exact second a customer said the thing that changed the room.</div>
            <div className="sig-card-widget">
              <div className="sig-clips">
                <div className="sig-clip-tile"><video loop muted playsInline style={{width: "100%", height: "100%", objectFit: "cover"}}><source src="https://github.com/convo-social/convo-website/releases/download/v1-assets/clip-2.mp4" type="video/mp4" /></video><div className="sig-clip-ts">1:23</div></div>
                <div className="sig-clip-tile"><video loop muted playsInline style={{width: "100%", height: "100%", objectFit: "cover"}}><source src="https://github.com/convo-social/convo-website/releases/download/v1-assets/clip-3.mp4" type="video/mp4" /></video><div className="sig-clip-ts">0:31</div></div>
                <div className="sig-clip-tile center"><video autoPlay loop muted playsInline style={{width: "100%", height: "100%", objectFit: "cover"}}><source src="https://github.com/convo-social/convo-website/releases/download/v1-assets/clip-5.mp4" type="video/mp4" /></video><div className="sig-clip-ts">2:08</div></div>
                <div className="sig-clip-tile"><video loop muted playsInline style={{width: "100%", height: "100%", objectFit: "cover"}}><source src="https://github.com/convo-social/convo-website/releases/download/v1-assets/clip-1.mp4" type="video/mp4" /></video><div className="sig-clip-ts">0:47</div></div>
                <div className="sig-clip-tile"><video loop muted playsInline style={{width: "100%", height: "100%", objectFit: "cover"}}><source src="https://github.com/convo-social/convo-website/releases/download/v1-assets/clip-4.mp4" type="video/mp4" /></video><div className="sig-clip-ts">1:55</div></div>
              </div>
              <div className="sig-clip-caption">"I told three friends about it the week I started using it."</div>
            </div>
          </div>
        </div>
        <div className="sig-bottom-row" style={{marginTop: "var(--ds-card-gap)"}}>
          <div className="sig-card">
            <div className="sig-card-title">Board-ready deck</div>
            <div className="sig-card-desc">Themes, quotes, and resonance scores in a deck your team can present as-is.</div>
            <div className="sig-card-widget">
              <div className="sig-deck-stack">
                <div className="sig-slide back2"></div>
                <div className="sig-slide back1"></div>
                <div className="sig-slide front">
                  <div className="sig-slide-header">Theme 01</div>
                  <div className="sig-slide-title">Onboarding clarity drove 47% of switching intent</div>
                  <div className="sig-slide-bars"><div className="sig-slide-bar" style={{width: "80%"}}></div><div className="sig-slide-bar" style={{width: "55%"}}></div><div className="sig-slide-bar" style={{width: "40%"}}></div></div>
                  <div className="sig-slide-attr">Humanize Signal Report</div>
                </div>
              </div>
              <div className="sig-deck-label">12 slides &middot; Ready</div>
            </div>
          </div>
          <div className="sig-card">
            <div className="sig-card-title">Explore chat</div>
            <div className="sig-card-desc">Ask follow-ups against the full transcript. Dig into any segment or theme.</div>
            <div className="sig-card-widget">
              <div className="sig-chat">
                <div style={{display: "flex", flexDirection: "column", alignItems: "flex-end"}}><div className="sig-chat-msg user">Why did onboarding come up so often?</div></div>
                <div style={{display: "flex", flexDirection: "column", alignItems: "flex-start"}}><div className="sig-chat-msg ai">Across 18 of 30 sessions, participants mentioned <span className="sig-phrase-pill">onboarding friction</span> before being prompted...</div></div>
              </div>
              <div className="sig-chat-input"><span className="sig-chat-input-text">Ask anything about the transcript...</span><div className="sig-chat-send">&rarr;</div></div>
            </div>
          </div>
          <div className="sig-card">
            <div className="sig-card-title">Personas</div>
            <div className="sig-card-desc">Real customer profiles your data revealed, not made-up archetypes.</div>
            <div className="sig-card-widget">
              <div className="sig-personas">
                <div className="sig-persona"><div className="sig-persona-avatar"><Image src="/images/happy-smiling-and-a-portrait-of-woman-at-work-and-2026-03-25-06-52-33-utc.jpg" alt="Cautious sampler" width={36} height={36} /></div><div className="sig-persona-name">Cautious sampler</div></div>
                <div className="sig-persona"><div className="sig-persona-avatar"><Image src="/images/laughing-young-designer-standing-in-an-office-afte-2026-03-09-04-33-22-utc.jpg" alt="Brand loyalist" width={36} height={36} /></div><div className="sig-persona-name">Brand loyalist</div></div>
                <div className="sig-persona"><div className="sig-persona-avatar"><Image src="/images/portrait-woman-and-smile-with-professional-with-p-2026-03-25-05-19-01-utc.jpg" alt="Price switcher" width={36} height={36} /></div><div className="sig-persona-name">Price switcher</div></div>
              </div>
              <div className="sig-personas-label">3 distinct groups &middot; 847 responses</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
