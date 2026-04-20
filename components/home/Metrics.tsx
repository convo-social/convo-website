export function Metrics() {
  return (
    <section className="sec-metrics">
      <div className="container">
        <div className="metrics-header">
          <h2>Designed for the speed categories now move at.</h2>
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
  );
}
