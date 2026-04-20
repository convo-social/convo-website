export function Cases() {
  return (
    <section className="sec-cases">
        <div className="cases-header">
          <div className="cases-header-left">
            <h2>The decisions teams bring us.</h2>
            <p className="subhead">One wrong call costs millions. We help you test every one in days, not quarters.</p>
          </div>
          <div className="cases-arrows">
            <button className="cases-arrow" id="casesLeft" disabled><svg viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6"/></svg></button>
            <button className="cases-arrow" id="casesRight"><svg viewBox="0 0 24 24"><path d="M9 18l6-6-6-6"/></svg></button>
          </div>
        </div>
      <div className="cases-track-wrap" id="casesTrack">
        <div className="cases-track">
          {/* 1. Category switching */}
          <div className="cc">
            <div className="cc-photo">
              <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&q=80" alt="" />
              <div className="cc-stack pos-bl">
                <div className="cc-chip">Lapsed buyer</div>
                <div className="cc-mockup"><div className="cc-mockup-q">Why did your heaviest buyers leave?</div><div className="cc-mockup-quote">"It wasn't the price. I just stopped thinking about you."</div></div>
              </div>
            </div>
            <div className="cc-footer"><div className="cc-cat">Category switching</div><div className="cc-desc">Why did your heaviest buyers leave? Hear it in their words before the next earnings call.</div></div>
          </div>
          {/* 2. Claims testing */}
          <div className="cc">
            <div className="cc-photo">
              <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=80" alt="" />
              <div className="cc-stack pos-tr">
                <div className="cc-chip">n=312 buyers</div>
                <div className="cc-mockup"><div className="cc-mockup-q">Which claim resonates most?</div><div className="cc-mockup-meta" style={{marginTop: "8px", fontSize: "var(--text-nano)"}}><div style={{display: "flex", justifyContent: "space-between", marginBottom: "4px"}}><span>"Clean ingredients"</span><span style={{fontWeight: "600"}}>72%</span></div><div style={{height: "4px", background: "#ebe4d9", borderRadius: "4px", overflow: "hidden"}}><div style={{height: "100%", width: "72%", background: "#c44b25", borderRadius: "4px"}}></div></div><div style={{display: "flex", justifyContent: "space-between", marginTop: "6px", marginBottom: "4px"}}><span>"Science-backed"</span><span style={{fontWeight: "600"}}>41%</span></div><div style={{height: "4px", background: "#ebe4d9", borderRadius: "4px", overflow: "hidden"}}><div style={{height: "100%", width: "41%", background: "#e87b5d", borderRadius: "4px"}}></div></div></div></div>
              </div>
            </div>
            <div className="cc-footer"><div className="cc-cat">Claims testing</div><div className="cc-desc">Which claim drives purchase intent? Rank them with real buyers, not a survey.</div></div>
          </div>
          {/* 3. Packaging & shelf */}
          <div className="cc">
            <div className="cc-photo">
              <img src="https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=600&q=80" alt="" />
              <div className="cc-stack pos-bl">
                <div className="cc-chip">4 of 6 pass</div>
                <div className="cc-mockup"><div className="cc-mockup-q">Does the new design land?</div><div className="cc-mockup-check"><span className="ck">&#10003;</span> Premium</div><div className="cc-mockup-check"><span className="cx">&#10005;</span> Healthy</div><div className="cc-mockup-check"><span className="ck">&#10003;</span> Trustworthy</div><div className="cc-mockup-check"><span className="ck">&#10003;</span> Sustainable</div></div>
              </div>
            </div>
            <div className="cc-footer"><div className="cc-cat">Packaging &amp; shelf impact</div><div className="cc-desc">Does the new design land at shelf? Test with real shoppers, not in a lab.</div></div>
          </div>
          {/* 4. New market entry */}
          <div className="cc">
            <div className="cc-photo">
              <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?w=600&q=80" alt="" />
              <div className="cc-stack pos-tl">
                <div className="cc-chip">Week 1 &rarr; Week 4</div>
                <div className="cc-mockup"><div className="cc-mockup-q">What do first-time buyers notice?</div><div className="cc-mockup-meta" style={{marginTop: "8px"}}><svg width="100" height="32" viewBox="0 0 100 32"><path d="M4 28 C20 24 36 18 52 12 Q68 6 96 4" stroke="#10b981" strokeWidth="2" fill="none" strokeLinecap="round"/><circle cx="96" cy="4" r="3" fill="#10b981"/></svg><div style={{fontSize: "var(--text-micro)", color: "#10b981", marginTop: "2px"}}>+34% unaided recall</div></div></div>
              </div>
            </div>
            <div className="cc-footer"><div className="cc-cat">New market entry</div><div className="cc-desc">Entering a category cold? Learn what registers before you spend the media budget.</div></div>
          </div>
          {/* 5. Creative diagnostics */}
          <div className="cc">
            <div className="cc-photo">
              <img src="https://images.unsplash.com/photo-1556742031-c6961e8560b0?w=600&q=80" alt="" />
              <div className="cc-stack pos-br">
                <div className="cc-chip">Ad recall test</div>
                <div className="cc-mockup"><div className="cc-mockup-q">Why did the ad underperform?</div><div className="cc-mockup-quote">"It felt generic. Like every other brand in the aisle."</div></div>
              </div>
            </div>
            <div className="cc-footer"><div className="cc-cat">Creative diagnostics</div><div className="cc-desc">Why did the campaign underperform? Hear what the audience actually felt in the moment.</div></div>
          </div>
          {/* 6. Subscription & retention */}
          <div className="cc">
            <div className="cc-photo">
              <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80" alt="" />
              <div className="cc-stack pos-tr">
                <div className="cc-chip">Cohort analysis</div>
                <div className="cc-mockup"><div className="cc-mockup-q">When do subscribers drop off?</div><div className="cc-mockup-meta" style={{display: "flex", gap: "4px", marginTop: "8px", alignItems: "flex-end"}}><div style={{textAlign: "center"}}><svg width="14" height="28"><rect y="0" width="14" height="28" rx="2" fill="#c44b25" opacity="0.9"/></svg><div style={{fontSize: "var(--text-pico)", color: "#999", marginTop: "2px"}}>M1</div></div><div style={{textAlign: "center"}}><svg width="14" height="28"><rect y="6" width="14" height="22" rx="2" fill="#c44b25" opacity="0.7"/></svg><div style={{fontSize: "var(--text-pico)", color: "#999", marginTop: "2px"}}>M2</div></div><div style={{textAlign: "center"}}><svg width="14" height="28"><rect y="14" width="14" height="14" rx="2" fill="#c44b25" opacity="0.45"/></svg><div style={{fontSize: "var(--text-pico)", color: "#999", marginTop: "2px"}}>M3</div></div><div style={{textAlign: "center"}}><svg width="14" height="28"><rect y="20" width="14" height="8" rx="2" fill="#c44b25" opacity="0.25"/></svg><div style={{fontSize: "var(--text-pico)", color: "#999", marginTop: "2px"}}>M4</div></div></div></div>
              </div>
            </div>
            <div className="cc-footer"><div className="cc-cat">Subscription &amp; retention</div><div className="cc-desc">What makes subscribers cancel after month three? Find the friction before it hits your P&amp;L.</div></div>
          </div>
          {/* 7. Global launch */}
          <div className="cc">
            <div className="cc-photo">
              <img src="https://images.unsplash.com/photo-1521123845560-14093637aa7d?w=600&q=80" alt="" />
              <div className="cc-stack pos-tl">
                <div className="cc-chip">Same study, all markets</div>
                <div className="cc-mockup"><div className="cc-mockup-q">Does this positioning translate?</div><div className="cc-mockup-meta" style={{display: "flex", flexWrap: "wrap", gap: "4px", marginTop: "8px"}}><span style={{fontSize: "var(--text-micro)", padding: "3px 8px", background: "#f3efe8", borderRadius: "4px", fontWeight: "500"}}>EN</span><span style={{fontSize: "var(--text-micro)", padding: "3px 8px", background: "#f3efe8", borderRadius: "4px", fontWeight: "500"}}>ES</span><span style={{fontSize: "var(--text-micro)", padding: "3px 8px", background: "#f3efe8", borderRadius: "4px", fontWeight: "500"}}>DE</span><span style={{fontSize: "var(--text-micro)", padding: "3px 8px", background: "#f3efe8", borderRadius: "4px", fontWeight: "500"}}>JP</span><span style={{fontSize: "var(--text-micro)", padding: "3px 8px", background: "#f3efe8", borderRadius: "4px", fontWeight: "500"}}>PT-BR</span></div></div>
              </div>
            </div>
            <div className="cc-footer"><div className="cc-cat">Global launch validation</div><div className="cc-desc">Does this positioning translate? Run the same study in twelve languages in one week.</div></div>
          </div>
          {/* 8. Pricing & tier */}
          <div className="cc">
            <div className="cc-photo">
              <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&q=80" alt="" />
              <div className="cc-stack pos-br">
                <div className="cc-chip">Pricing study</div>
                <div className="cc-mockup"><div className="cc-mockup-q">Will this feature justify the upgrade?</div><div className="cc-mockup-meta" style={{marginTop: "8px", fontSize: "var(--text-micro)"}}><div style={{display: "flex", alignItems: "center", gap: "6px"}}><span style={{color: "#10b981", fontWeight: "700"}}>67%</span><span>would upgrade</span></div><div style={{height: "1px", background: "#ebe4d9", margin: "6px 0"}}></div><div style={{display: "flex", alignItems: "center", gap: "6px"}}><span style={{color: "#c44b25", fontWeight: "700"}}>22%</span><span>need more proof</span></div><div style={{height: "1px", background: "#ebe4d9", margin: "6px 0"}}></div><div style={{display: "flex", alignItems: "center", gap: "6px"}}><span style={{color: "#999", fontWeight: "700"}}>11%</span><span>would downgrade</span></div></div></div>
              </div>
            </div>
            <div className="cc-footer"><div className="cc-cat">Pricing &amp; tier validation</div><div className="cc-desc">Does your premium tier deliver enough value to justify the price jump? Ask before you ship.</div></div>
          </div>
          {/* 9. Clinical & regulated */}
          <div className="cc">
            <div className="cc-photo">
              <img src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=600&q=80" alt="" />
              <div className="cc-stack pos-bl">
                <div className="cc-chip">Patient, 34</div>
                <div className="cc-mockup"><div className="cc-mockup-q">Why do patients stop adhering?</div><div className="cc-mockup-quote">"I forget after the first week. Nothing brings me back."</div></div>
              </div>
            </div>
            <div className="cc-footer"><div className="cc-cat">Clinical &amp; regulated audiences</div><div className="cc-desc">Patient adherence, physician preference, caregiver experience? Reach them through vetted panels.</div></div>
          </div>
        </div>
      </div>
    </section>
  );
}
