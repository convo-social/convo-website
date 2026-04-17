import type { Metadata } from "next";
import Image from "next/image";
import { HomeInteractions } from "@/components/home/HomeInteractions";
import "./home.css";

export const metadata: Metadata = {
  title: "Humanize — AI-Moderated Qualitative Research",
  description:
    "Humanize runs AI-moderated interviews at the speed of a survey, delivering the depth of qualitative research without the cost or wait.",
};

export default function Home() {
  return (
    <>

<section className="h-hero">
  <div className="grain"></div>

  <div className="h-hero-inner">
    <div className="h-hero-text">
      <div className="h-eyebrow">Consumer intelligence at enterprise scale</div>
      <h1 className="h-headline">Ask your customers<br />before you make the call.</h1>
      <p className="h-sub">The research layer for brands that can't afford to be wrong. Hundreds of moderated consumer conversations, run in parallel, returned as a decision with the evidence behind it. In days, not weeks.</p>
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
            <video autoPlay loop muted playsInline style={{position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover"}}><source src="https://github.com/convo-social/convo-website/releases/download/v1-assets/pip-businesswoman.mp4" type="video/mp4" /></video>
          </div>
          <div className="pip-person" style={{background: "#000"}}>
            <video autoPlay loop muted playsInline style={{position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover"}}><source src="https://github.com/convo-social/convo-website/releases/download/v1-assets/pip-smile.mp4" type="video/mp4" /></video>
          </div>
          <div className="pip-person" style={{background: "#000"}}>
            <video autoPlay loop muted playsInline style={{position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover"}}><source src="https://github.com/convo-social/convo-website/releases/download/v1-assets/pip-webcam.mp4" type="video/mp4" /></video>
          </div>
          <div className="pip-person" style={{background: "#000"}}>
            <video autoPlay loop muted playsInline style={{position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover"}}><source src="https://github.com/convo-social/convo-website/releases/download/v1-assets/pip-footage.mp4" type="video/mp4" /></video>
          </div>
          <div className="pip-person" style={{background: "#000"}}>
            <video autoPlay loop muted playsInline style={{position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover"}}><source src="https://github.com/convo-social/convo-website/releases/download/v1-assets/pip-woman-home.mp4" type="video/mp4" /></video>
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

<section className="sec-logos">
  <div className="logos-eyebrow">Trusted by</div>
  <div className="logos-scroll-wrap">
    <div className="logos-track" id="logosTrack">
      <span className="logo-item"><img src="/images/div.marquee-logo-2.png" alt="Merciv" /></span>
      <span className="logo-item"><img src="/images/div.marquee-logo.png" alt="Cognify" /></span>
      <span className="logo-item"><img src="/images/2div.marquee-logo.png" alt="Mozi Wash" /></span>
      <span className="logo-item"><img src="/images/contour.png" alt="Contour" /></span>
      <span className="logo-item"><img src="/images/div.marquee-logo-1.png" alt="DrinkOver" /></span>
      <span className="logo-item"><img src="/images/CC-Logo_Left_Coloured_png-01-1-1.png" alt="CareCognitics" /></span>
    </div>
  </div>
</section>

<div className="section-divider"></div>

<section className="sec-metrics">
  <div className="container">
    <div className="metrics-header">
      <h2>Built for the cadence consumer brands now operate at.</h2>
      <p>Categories shift in weeks. Research designed for quarters cannot keep up. We engineered a system that can.</p>
    </div>
    <div className="metrics-grid">
      <div className="metric-card" data-metric="21">
        <div className="metric-card-num"><span className="metric-count">0</span><span className="metric-card-unit">&times;</span></div>
        <div className="metric-card-caption">faster than agency cycles</div>
      </div>
      <div className="metric-card" data-metric="90">
        <div className="metric-card-num"><span className="metric-count">0</span><span className="metric-card-unit">%</span></div>
        <div className="metric-card-caption">lower cost per study</div>
      </div>
      <div className="metric-card" data-metric="250">
        <div className="metric-card-num"><span className="metric-count">0</span><span className="metric-card-unit">+</span></div>
        <div className="metric-card-caption">sessions running in parallel</div>
      </div>
    </div>
  </div>
</section>

<div className="section-divider"></div>

<section className="platform">
  <div className="pl-header">
    <h2>A new category of consumer research, built for enterprise.</h2>
    <p className="subhead">For decades, qualitative research forced a choice between depth, scale, and speed. We designed the first system without those constraints.</p>
  </div>

  <div className="pl-row">
    <div className="pl-visual">

      {/* PANEL 2: Scale */}
      <div className="pl-panel" data-panel="2">
        <div className="visual-chrome">
          <div className="chrome-left"><span className="pl-live-dot"></span> Live study feed &middot; 12 active this week</div>
          <div className="chrome-right">Q2 2026</div>
        </div>
        <div className="panel-body">
          <div className="feed-mask">
            <div className="feed-track" id="feed-track">
              {/* Set A */}
              <div className="feed-row"><span className="pl-status"></span><span className="study-name">Beverage line extension</span><span className="pl-meta">240 ppl &middot; 4h ago</span></div>
              <div className="feed-row live"><span className="pl-status"></span><span className="study-name">CPG ingredient transparency</span><span className="pl-meta">195 ppl &middot; <span className="live-tag">live now</span></span></div>
              <div className="feed-row"><span className="pl-status"></span><span className="study-name">Premium pet food positioning</span><span className="pl-meta">110 ppl &middot; 1d ago</span></div>
              <div className="feed-row live"><span className="pl-status"></span><span className="study-name">SaaS pricing tier reaction</span><span className="pl-meta">85 ppl &middot; <span className="live-tag">live now</span></span></div>
              <div className="feed-row"><span className="pl-status"></span><span className="study-name">Fashion subscription unboxing</span><span className="pl-meta">270 ppl &middot; 3d ago</span></div>
              <div className="feed-row"><span className="pl-status"></span><span className="study-name">Wine club acquisition messaging</span><span className="pl-meta">130 ppl &middot; queued</span></div>
              <div className="feed-row"><span className="pl-status"></span><span className="study-name">Cookware brand voice test</span><span className="pl-meta">165 ppl &middot; 5h ago</span></div>
              <div className="feed-row live"><span className="pl-status"></span><span className="study-name">Skincare ingredient education</span><span className="pl-meta">380 ppl &middot; <span className="live-tag">live now</span></span></div>
              <div className="feed-row"><span className="pl-status"></span><span className="study-name">Frozen meal occasion mapping</span><span className="pl-meta">220 ppl &middot; 2d ago</span></div>
              <div className="feed-row"><span className="pl-status"></span><span className="study-name">Direct-to-consumer mattress trial</span><span className="pl-meta">95 ppl &middot; yesterday</span></div>
              <div className="feed-row"><span className="pl-status"></span><span className="study-name">Hot sauce flavor preference</span><span className="pl-meta">145 ppl &middot; 6h ago</span></div>
              <div className="feed-row live"><span className="pl-status"></span><span className="study-name">Streaming service onboarding</span><span className="pl-meta">410 ppl &middot; <span className="live-tag">live now</span></span></div>
              <div className="feed-row"><span className="pl-status"></span><span className="study-name">Children's snack packaging</span><span className="pl-meta">180 ppl &middot; queued</span></div>
              <div className="feed-row"><span className="pl-status"></span><span className="study-name">Tea brand competitive positioning</span><span className="pl-meta">75 ppl &middot; 2d ago</span></div>
              <div className="feed-row"><span className="pl-status"></span><span className="study-name">Athletic recovery product test</span><span className="pl-meta">230 ppl &middot; 1d ago</span></div>
              {/* Set A repeats */}
              <div className="feed-row"><span className="pl-status"></span><span className="study-name">Beverage line extension</span><span className="pl-meta">240 ppl &middot; 4h ago</span></div>
              <div className="feed-row live"><span className="pl-status"></span><span className="study-name">CPG ingredient transparency</span><span className="pl-meta">195 ppl &middot; <span className="live-tag">live now</span></span></div>
              <div className="feed-row"><span className="pl-status"></span><span className="study-name">Premium pet food positioning</span><span className="pl-meta">110 ppl &middot; 1d ago</span></div>
              <div className="feed-row live"><span className="pl-status"></span><span className="study-name">SaaS pricing tier reaction</span><span className="pl-meta">85 ppl &middot; <span className="live-tag">live now</span></span></div>
              <div className="feed-row"><span className="pl-status"></span><span className="study-name">Fashion subscription unboxing</span><span className="pl-meta">270 ppl &middot; 3d ago</span></div>
              <div className="feed-row"><span className="pl-status"></span><span className="study-name">Wine club acquisition messaging</span><span className="pl-meta">130 ppl &middot; queued</span></div>
              <div className="feed-row"><span className="pl-status"></span><span className="study-name">Cookware brand voice test</span><span className="pl-meta">165 ppl &middot; 5h ago</span></div>
              <div className="feed-row live"><span className="pl-status"></span><span className="study-name">Skincare ingredient education</span><span className="pl-meta">380 ppl &middot; <span className="live-tag">live now</span></span></div>
              <div className="feed-row"><span className="pl-status"></span><span className="study-name">Frozen meal occasion mapping</span><span className="pl-meta">220 ppl &middot; 2d ago</span></div>
              <div className="feed-row"><span className="pl-status"></span><span className="study-name">Direct-to-consumer mattress trial</span><span className="pl-meta">95 ppl &middot; yesterday</span></div>
              <div className="feed-row"><span className="pl-status"></span><span className="study-name">Hot sauce flavor preference</span><span className="pl-meta">145 ppl &middot; 6h ago</span></div>
              <div className="feed-row live"><span className="pl-status"></span><span className="study-name">Streaming service onboarding</span><span className="pl-meta">410 ppl &middot; <span className="live-tag">live now</span></span></div>
              <div className="feed-row"><span className="pl-status"></span><span className="study-name">Children's snack packaging</span><span className="pl-meta">180 ppl &middot; queued</span></div>
              <div className="feed-row"><span className="pl-status"></span><span className="study-name">Tea brand competitive positioning</span><span className="pl-meta">75 ppl &middot; 2d ago</span></div>
              <div className="feed-row"><span className="pl-status"></span><span className="study-name">Athletic recovery product test</span><span className="pl-meta">230 ppl &middot; 1d ago</span></div>
            </div>
          </div>
        </div>
        <div className="visual-foot">
          <div className="pl-bars"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div>
          48 studies run this quarter &middot; 12 live now
        </div>
      </div>

      {/* PANEL 1: Conversation (Depth) */}
      <div className="pl-panel active" data-panel="1">
        <div className="visual-chrome">
          <div className="chrome-left"><span className="pl-live-dot"></span> 6 participants &middot; top highlights</div>
          <div className="chrome-right">45 mins</div>
        </div>
        <div className="panel-body">
          <div className="conv-body">
            <div className="speakers">
              <div className="speaker"><div className="pl-avatar"><video autoPlay loop muted playsInline style={{position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover"}}><source src="https://github.com/convo-social/convo-website/releases/download/v1-assets/video-marcus.mp4" type="video/mp4" /></video></div><div className="label">Marcus</div></div>
              <div className="speaker"><div className="pl-avatar"><video autoPlay loop muted playsInline style={{position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover"}}><source src="https://github.com/convo-social/convo-website/releases/download/v1-assets/video-sofia.mp4" type="video/mp4" /></video></div><div className="label">Sofia</div></div>
              <div className="speaker"><div className="pl-avatar"><video autoPlay loop muted playsInline style={{position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover"}}><source src="https://github.com/convo-social/convo-website/releases/download/v1-assets/video-james.mp4" type="video/mp4" /></video></div><div className="label">James</div></div>
              <div className="speaker"><div className="pl-avatar"><video autoPlay loop muted playsInline style={{position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover"}}><source src="https://github.com/convo-social/convo-website/releases/download/v1-assets/video-macy.mp4" type="video/mp4" /></video></div><div className="label">Macy</div></div>
              <div className="speaker"><div className="pl-avatar"><video autoPlay loop muted playsInline style={{position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover"}}><source src="https://github.com/convo-social/convo-website/releases/download/v1-assets/video-david.mp4" type="video/mp4" /></video></div><div className="label">David</div></div>
              <div className="speaker"><div className="pl-avatar"><video autoPlay loop muted playsInline style={{position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover"}}><source src="https://github.com/convo-social/convo-website/releases/download/v1-assets/video-nina.mp4" type="video/mp4" /></video></div><div className="label">Nina</div></div>
            </div>
            <div className="caption-area">
              <div className="caption-track">
                {/* Set A */}
                <div className="caption-line"><span className="who">Marcus</span><span>"I'd buy it but the size is wrong for my household."</span></div>
                <div className="caption-line"><span className="who">Macy</span><span>"Exactly, it's not a value issue. It's a commitment issue."</span></div>
                <div className="caption-line"><span className="who">Sofia</span><span>"Same. I'd try a smaller pack first before committing."</span></div>
                <div className="caption-line"><span className="who">James</span><span>"For me it's the storage. I don't have room for the bulk size."</span></div>
                <div className="caption-line"><span className="who">David</span><span>"And honestly, the packaging looks like a warehouse product."</span></div>
                <div className="caption-line"><span className="who">Nina</span><span>"That's the thing, it doesn't feel like something I'd put on my counter."</span></div>
                <div className="caption-line"><span className="who">Marcus</span><span>"Right, the smaller version would actually fit my life."</span></div>
                <div className="caption-line"><span className="who">Macy</span><span>"I'd pay more per ounce for the smaller one, no question."</span></div>
                <div className="caption-line"><span className="who">Sofia</span><span>"Same here. It's about trying it without the commitment."</span></div>
                <div className="caption-line"><span className="who">James</span><span>"If they offered a starter size I'd buy today."</span></div>
                {/* Set A repeats */}
                <div className="caption-line"><span className="who">Marcus</span><span>"I'd buy it but the size is wrong for my household."</span></div>
                <div className="caption-line"><span className="who">Macy</span><span>"Exactly, it's not a value issue. It's a commitment issue."</span></div>
                <div className="caption-line"><span className="who">Sofia</span><span>"Same. I'd try a smaller pack first before committing."</span></div>
                <div className="caption-line"><span className="who">James</span><span>"For me it's the storage. I don't have room for the bulk size."</span></div>
                <div className="caption-line"><span className="who">David</span><span>"And honestly, the packaging looks like a warehouse product."</span></div>
                <div className="caption-line"><span className="who">Nina</span><span>"That's the thing, it doesn't feel like something I'd put on my counter."</span></div>
                <div className="caption-line"><span className="who">Marcus</span><span>"Right, the smaller version would actually fit my life."</span></div>
                <div className="caption-line"><span className="who">Macy</span><span>"I'd pay more per ounce for the smaller one, no question."</span></div>
                <div className="caption-line"><span className="who">Sofia</span><span>"Same here. It's about trying it without the commitment."</span></div>
                <div className="caption-line"><span className="who">James</span><span>"If they offered a starter size I'd buy today."</span></div>
              </div>
            </div>
          </div>
        </div>
        <div className="visual-foot">
          <div className="pl-bars"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div>
          6/250 participants &middot; 45 mins
        </div>
      </div>

      {/* PANEL 3: Live Market View (Speed) */}
      <div className="pl-panel" data-panel="3">
        <div className="visual-chrome">
          <div className="chrome-left"><span className="pl-live-dot"></span> Live market view &middot; premium skincare</div>
          <div className="chrome-right">Week of Apr 14</div>
        </div>
        <div className="panel-body">
          <div className="lmv-body">
            <div className="lmv-metrics">
              <div className="lmv-metric-card">
                <div className="lmv-metric-label">Questions asked</div>
                <div className="lmv-metric-num">14</div>
                <div className="lmv-metric-sub">this quarter</div>
              </div>
              <div className="lmv-metric-card">
                <div className="lmv-metric-label">Themes surfaced</div>
                <div className="lmv-metric-num">23</div>
                <div className="lmv-metric-sub">this quarter</div>
              </div>
              <div className="lmv-metric-card">
                <div className="lmv-metric-label">Sessions live now</div>
                <div className="lmv-metric-num">287 <span className="lmv-coral-dot"></span></div>
                <div className="lmv-metric-sub lmv-coral">streaming</div>
              </div>
            </div>
            <div className="lmv-questions">
              <div className="lmv-q-card">
                <div className="lmv-q-left">
                  <div className="lmv-q-time" style={{display: "none"}}>Mon &middot; 7 hrs</div>
                  <div className="lmv-q-question">Is the new packaging landing with our heavy buyers?</div>
                  <div className="lmv-q-answer">Yes, but only in-store. Online-first buyers are flat, they can't tell it apart from the old design in thumbnails.</div>
                </div>
                <div className="lmv-q-viz">
                  <svg width="60" height="24" viewBox="0 0 60 24"><rect x="0" y="6" width="12" height="18" rx="2" fill="var(--pl-ink)" opacity="0.7"/><rect x="16" y="10" width="12" height="14" rx="2" fill="var(--pl-ink)" opacity="0.45"/><rect x="32" y="2" width="12" height="22" rx="2" fill="var(--pl-ink)" opacity="0.85"/><rect x="48" y="8" width="12" height="16" rx="2" fill="var(--pl-ink)" opacity="0.55"/></svg>
                  <div className="lmv-q-viz-label lmv-green">142 sessions</div>
                </div>
              </div>
              <div className="lmv-q-card">
                <div className="lmv-q-left">
                  <div className="lmv-q-time" style={{display: "none"}}>Tue &middot; 25 hrs</div>
                  <div className="lmv-q-question">Why are heavy buyers switching to the $40 competitor?</div>
                  <div className="lmv-q-answer">Three months of positioning, invalidated this week. It's not price. It's the ingredient story we stopped telling.</div>
                </div>
                <div className="lmv-q-viz">
                  <svg width="60" height="24" viewBox="0 0 60 24"><path d="M4 6 C16 8 28 12 40 16 Q50 20 56 22" stroke="var(--pl-ink)" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.6"/><circle cx="56" cy="22" r="2.5" fill="var(--pl-ink)" opacity="0.6"/></svg>
                  <div className="lmv-q-viz-label lmv-coral">&minus;12 pts loyalty</div>
                </div>
              </div>
              <div className="lmv-q-card">
                <div className="lmv-q-left">
                  <div className="lmv-q-time" style={{display: "none"}}>Wed &middot; 19 hrs</div>
                  <div className="lmv-q-question">Does our Gen Z messaging land outside coastal markets?</div>
                  <div className="lmv-q-answer">In Texas and the Midwest, no. The "clean girl" aesthetic reads as coastal to them. Southern buyers skew to warmth and ritual.</div>
                </div>
                <div className="lmv-q-viz">
                  <svg width="60" height="24" viewBox="0 0 60 24"><rect x="0" y="4" width="16" height="20" rx="2" fill="var(--pl-ink)" opacity="0.75"/><rect x="22" y="10" width="16" height="14" rx="2" fill="var(--pl-ink)" opacity="0.45"/><rect x="44" y="8" width="16" height="16" rx="2" fill="var(--pl-ink)" opacity="0.55"/></svg>
                  <div className="lmv-q-viz-label">3 regions</div>
                </div>
              </div>
              <div className="lmv-q-card lmv-q-active">
                <div className="lmv-q-left">
                  <div className="lmv-q-time" style={{display: "none"}}>Thu &middot; 3 hrs in</div>
                  <div className="lmv-q-question">Should we launch the refill program this quarter?</div>
                  <div className="lmv-q-answer">Early signal: sustainability messaging outperforms savings 2:1 with repeat buyers. 88 more sessions incoming.</div>
                </div>
                <div className="lmv-q-viz">
                  <svg width="60" height="24" viewBox="0 0 60 24"><path d="M4 18 C12 16 20 14 28 10 Q40 4 56 2" stroke="#C47A4A" strokeWidth="1.5" fill="none" strokeLinecap="round"/><circle cx="56" cy="2" r="2.5" fill="#C47A4A"/></svg>
                  <div className="lmv-q-viz-label lmv-coral">62% answering now</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="visual-foot" style={{justifyContent: "space-between"}}>
          <span>4 questions &middot; 14 hrs avg turnaround</span>
          <span style={{display: "flex", alignItems: "center", gap: "6px", color: "var(--pl-green)"}}><span className="pl-live-dot"></span> Always on</span>
        </div>
      </div>

    </div>

    <div className="pl-cards">
      <div className="pl-card active" data-card="1">
        <span className="pl-card-num">Depth</span>
        <h3 className="pl-card-title">What people mean, not what they type.</h3>
        <p className="pl-card-body">Group conversation surfaces the second-order answer, the one that only emerges when a participant hears someone else say the opposite. Surveys cannot reach it.</p>
      </div>
      <div className="pl-card" data-card="2">
        <span className="pl-card-num">Scale</span>
        <h3 className="pl-card-title">For every bet, not just the big ones.</h3>
        <p className="pl-card-body">Legacy economics force you to pick your battles. Humanize runs at a price point where testing every SKU, every market, every claim is defensible.</p>
      </div>
      <div className="pl-card" data-card="3">
        <span className="pl-card-num">Speed</span>
        <h3 className="pl-card-title">Real-time market truth. For the first time.</h3>
        <p className="pl-card-body">By the time the report lands, the campaign shipped and the category moved. We are the only layer that captures the market while the decision is still on the table.</p>
      </div>
    </div>
  </div>
</section>

<div className="section-divider"></div>

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

<div className="section-divider"></div>

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

<div className="section-divider"></div>

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
        <div className="cc-footer"><div className="cc-cat">Creative diagnostics</div><div className="cc-desc">Your campaign underperformed. Hear what the audience actually felt in the moment.</div></div>
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
        <div className="cc-footer"><div className="cc-cat">Clinical &amp; regulated audiences</div><div className="cc-desc">Patient adherence, physician preference, caregiver experience. Vetted panels.</div></div>
      </div>
    </div>
  </div>
</section>

<div className="section-divider"></div>

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

<div className="section-divider"></div>

<section className="sec-final-cta" id="ctaWallSection">
  <div className="cta-wall-wrap">
    <div className="cta-wall" id="ctaWall">
      <div className="cta-wall-tile"><video loop muted playsInline style={{width: "100%", height: "100%", objectFit: "cover"}}><source src="https://github.com/convo-social/convo-website/releases/download/v1-assets/footer-1.mp4" type="video/mp4" /></video></div>
      <div className="cta-wall-tile"><video loop muted playsInline style={{width: "100%", height: "100%", objectFit: "cover"}}><source src="https://github.com/convo-social/convo-website/releases/download/v1-assets/footer-2.mp4" type="video/mp4" /></video></div>
      <div className="cta-wall-tile"><video loop muted playsInline style={{width: "100%", height: "100%", objectFit: "cover"}}><source src="https://github.com/convo-social/convo-website/releases/download/v1-assets/footer-3.mp4" type="video/mp4" /></video></div>
      <div className="cta-wall-tile"><video loop muted playsInline style={{width: "100%", height: "100%", objectFit: "cover"}}><source src="https://github.com/convo-social/convo-website/releases/download/v1-assets/footer-4.mp4" type="video/mp4" /></video></div>
      <div className="cta-wall-tile"><video loop muted playsInline style={{width: "100%", height: "100%", objectFit: "cover"}}><source src="https://github.com/convo-social/convo-website/releases/download/v1-assets/footer-5.mp4" type="video/mp4" /></video></div>
      <div className="cta-wall-tile"><video loop muted playsInline style={{width: "100%", height: "100%", objectFit: "cover"}}><source src="https://github.com/convo-social/convo-website/releases/download/v1-assets/footer-6.mp4" type="video/mp4" /></video></div>
      <div className="cta-wall-tile"><video loop muted playsInline style={{width: "100%", height: "100%", objectFit: "cover"}}><source src="https://github.com/convo-social/convo-website/releases/download/v1-assets/footer-7.mp4" type="video/mp4" /></video></div>
      <div className="cta-wall-tile"><video loop muted playsInline style={{width: "100%", height: "100%", objectFit: "cover"}}><source src="https://github.com/convo-social/convo-website/releases/download/v1-assets/footer-8.mp4" type="video/mp4" /></video></div>
      <div className="cta-wall-tile"><video loop muted playsInline style={{width: "100%", height: "100%", objectFit: "cover"}}><source src="https://github.com/convo-social/convo-website/releases/download/v1-assets/footer-9.mp4" type="video/mp4" /></video></div>
      <div className="cta-wall-tile"><video loop muted playsInline style={{width: "100%", height: "100%", objectFit: "cover"}}><source src="https://github.com/convo-social/convo-website/releases/download/v1-assets/footer-10.mp4" type="video/mp4" /></video></div>
      <div className="cta-wall-tile"><video loop muted playsInline style={{width: "100%", height: "100%", objectFit: "cover"}}><source src="https://github.com/convo-social/convo-website/releases/download/v1-assets/footer-11.mp4" type="video/mp4" /></video></div>
      <div className="cta-wall-tile"><video loop muted playsInline style={{width: "100%", height: "100%", objectFit: "cover"}}><source src="https://github.com/convo-social/convo-website/releases/download/v1-assets/footer-12.mp4" type="video/mp4" /></video></div>
      <div className="cta-wall-tile"><video loop muted playsInline style={{width: "100%", height: "100%", objectFit: "cover"}}><source src="https://github.com/convo-social/convo-website/releases/download/v1-assets/footer-13.mp4" type="video/mp4" /></video></div>
      <div className="cta-wall-tile"><video loop muted playsInline style={{width: "100%", height: "100%", objectFit: "cover"}}><source src="https://github.com/convo-social/convo-website/releases/download/v1-assets/footer-14.mp4" type="video/mp4" /></video></div>
      <div className="cta-wall-tile"><video loop muted playsInline style={{width: "100%", height: "100%", objectFit: "cover"}}><source src="https://github.com/convo-social/convo-website/releases/download/v1-assets/footer-15.mp4" type="video/mp4" /></video></div>
      <div className="cta-wall-tile"><video loop muted playsInline style={{width: "100%", height: "100%", objectFit: "cover"}}><source src="https://github.com/convo-social/convo-website/releases/download/v1-assets/footer-16.mp4" type="video/mp4" /></video></div>
      <div className="cta-wall-tile"><video loop muted playsInline style={{width: "100%", height: "100%", objectFit: "cover"}}><source src="https://github.com/convo-social/convo-website/releases/download/v1-assets/footer-17.mp4" type="video/mp4" /></video></div>
      <div className="cta-wall-tile"><video loop muted playsInline style={{width: "100%", height: "100%", objectFit: "cover"}}><source src="https://github.com/convo-social/convo-website/releases/download/v1-assets/footer-18.mp4" type="video/mp4" /></video></div>
      <div className="cta-wall-tile"><video loop muted playsInline style={{width: "100%", height: "100%", objectFit: "cover"}}><source src="https://github.com/convo-social/convo-website/releases/download/v1-assets/footer-19.mp4" type="video/mp4" /></video></div>
      <div className="cta-wall-tile"><video loop muted playsInline style={{width: "100%", height: "100%", objectFit: "cover"}}><source src="https://github.com/convo-social/convo-website/releases/download/v1-assets/footer-20.mp4" type="video/mp4" /></video></div>
      <div className="cta-wall-tile"><video loop muted playsInline style={{width: "100%", height: "100%", objectFit: "cover"}}><source src="https://github.com/convo-social/convo-website/releases/download/v1-assets/footer-21.mp4" type="video/mp4" /></video></div>
      <div className="cta-wall-tile"><video loop muted playsInline style={{width: "100%", height: "100%", objectFit: "cover"}}><source src="https://github.com/convo-social/convo-website/releases/download/v1-assets/footer-22.mp4" type="video/mp4" /></video></div>
    </div>
  </div>
  <div className="cta-text">
    <div className="cta-text-headline">Don't guess. Ask your customers.</div>
    <div className="cta-text-body">Humanize is deployed by enterprise insights, brand, and innovation teams who need real consumer evidence on the cadence of real decisions. Talk to our team to get set up right away.</div>
    <div className="cta-text-row">
      <a href="/contact-us" className="btn btn-primary">Book a demo <svg viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></a>
    </div>
  </div>
</section>

<HomeInteractions />
    </>
  );
}
