export function Tech() {
  return (
    <section className="sec-tech">
      <div className="container">
        <div className="tech-header">
            <h2>The technology behind modern qualitative research.</h2>
            <p className="subhead">Recruitment, moderation, and synthesis rebuilt from the ground up for modern product and brand teams.</p>
        </div>
        <div className="tech-tab-bar">
          <button className="tech-tab active" data-tech="0">Audience Precision</button>
          <button className="tech-tab" data-tech="1">Conversational Intelligence</button>
          <button className="tech-tab" data-tech="2">Decision Synthesis</button>
        </div>
        <div className="tech-card-outer">
        <div className="tech-stack">
          <div className="tech-box tb1 active">
            <div className="tech-box-left">
              <div className="tech-box-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg></div>
              <div className="tech-box-title">Audience Precision</div>
              <div className="tech-box-pos">The right people in the room is the whole game.</div>
              <div className="tech-box-desc">A five-million-person vetted panel, a custom recruitment engine for hard-to-reach segments, and AI screening that qualifies participants against your exact ICP in minutes. Built to match the panel standards your insights team already uses, at a fraction of the cost.</div>
            </div>
            <div className="tech-box-right">
              <div className="tech-cap-row"><div className="tech-cap-num">01</div><div className="tech-cap-content"><div className="tech-cap-name">AI-Accelerated Screening</div><div className="tech-cap-desc">Screening that qualifies participants against your exact ICP in minutes.</div></div></div>
              <div className="tech-cap-row"><div className="tech-cap-num">02</div><div className="tech-cap-content"><div className="tech-cap-name">Multi-Layer Verification</div><div className="tech-cap-desc">Multi-signal authentication eliminates panel fillers.</div></div></div>
              <div className="tech-cap-row"><div className="tech-cap-num">03</div><div className="tech-cap-content"><div className="tech-cap-name">Niche Audience Access</div><div className="tech-cap-desc">Custom panels for healthcare, B2B, and niche segments.</div></div></div>
              <div className="tech-cap-row"><div className="tech-cap-num">04</div><div className="tech-cap-content"><div className="tech-cap-name">Live Replacement</div><div className="tech-cap-desc">No-shows backfilled in real time. Every session runs full.</div></div></div>
            </div>
          </div>
          <div className="tech-scroll-spacer"></div>
          <div className="tech-box tb2">
            <div className="tech-box-left">
              <div className="tech-box-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg></div>
              <div className="tech-box-title">Conversational Intelligence</div>
              <div className="tech-box-pos">The skill of a senior moderator, in every session.</div>
              <div className="tech-box-desc">AI moderators trained on decades of qualitative methodology, running hundreds of sessions in parallel. Researcher-supervised, not autonomous.</div>
            </div>
            <div className="tech-box-right">
              <div className="tech-cap-row"><div className="tech-cap-num">01</div><div className="tech-cap-content"><div className="tech-cap-name">Adaptive Probing Engine</div><div className="tech-cap-desc">Follows up on vague answers, traces every contradiction.</div></div></div>
              <div className="tech-cap-row"><div className="tech-cap-num">02</div><div className="tech-cap-content"><div className="tech-cap-name">Cross-Session Pattern Detection</div><div className="tech-cap-desc">Spots signals across thirty sessions no human team could.</div></div></div>
              <div className="tech-cap-row"><div className="tech-cap-num">03</div><div className="tech-cap-content"><div className="tech-cap-name">Bias Control Framework</div><div className="tech-cap-desc">Safeguards against leading questions and confirmation bias.</div></div></div>
              <div className="tech-cap-row"><div className="tech-cap-num">04</div><div className="tech-cap-content"><div className="tech-cap-name">Researcher Oversight</div><div className="tech-cap-desc">Senior research lead supervises every study for rigor.</div></div></div>
            </div>
          </div>
          <div className="tech-scroll-spacer"></div>
          <div className="tech-box tb3">
            <div className="tech-box-left">
              <div className="tech-box-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg></div>
              <div className="tech-box-title">Decision Synthesis</div>
              <div className="tech-box-pos">Raw conversation in. Decision out.</div>
              <div className="tech-box-desc">A synthesis layer that turns qualitative data into a decision-ready brief, anchored to your original question.</div>
            </div>
            <div className="tech-box-right">
              <div className="tech-cap-row"><div className="tech-cap-num">01</div><div className="tech-cap-content"><div className="tech-cap-name">Brief-Anchored Analysis</div><div className="tech-cap-desc">Every insight maps back to the question on your brief.</div></div></div>
              <div className="tech-cap-row"><div className="tech-cap-num">02</div><div className="tech-cap-content"><div className="tech-cap-name">Confidence Scoring</div><div className="tech-cap-desc">Signal strength and consistency as a single confidence score.</div></div></div>
              <div className="tech-cap-row"><div className="tech-cap-num">03</div><div className="tech-cap-content"><div className="tech-cap-name">Verbatim Evidence Linking</div><div className="tech-cap-desc">Every claim traced to the exact session moment.</div></div></div>
              <div className="tech-cap-row"><div className="tech-cap-num">04</div><div className="tech-cap-content"><div className="tech-cap-name">Pattern Recognition at Scale</div><div className="tech-cap-desc">ML models identify themes and drivers across the full study.</div></div></div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
