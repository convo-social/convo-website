// Temporary token-preview route — deletable after Phase 2 verification.
const colors = [
  "page",
  "beige",
  "dark",
  "dark-surf",
  "accent",
  "muted",
  "mid",
  "divider",
  "coral",
  "accent-slate",
  "accent-sage",
  "accent-violet",
  "accent-brown",
  "accent-teal",
  "h-bg",
  "h-bg-tint",
  "h-ink",
  "h-ink-2",
  "h-gray-1",
  "h-gray-2",
  "h-gray-3",
  "h-gray-4",
  "h-gray-5",
  "h-line",
  "h-white",
  "h-green",
] as const;

const typeSizes = [
  "display",
  "hero",
  "metric",
  "section",
  "title",
  "sub",
  "feature",
  "card",
  "lead",
  "body",
  "small",
  "caption",
  "meta",
  "mini",
  "micro",
  "nano",
  "pico",
] as const;

const radii = ["card", "tag", "pill", "input"] as const;
const families = ["sans", "serif", "mono"] as const;

export default function TokensPage() {
  return (
    <main className="px-6 py-16 max-w-[1320px] mx-auto font-sans">
      <h1 className="text-hero mb-8">Design tokens</h1>

      <section className="mb-16">
        <h2 className="text-section mb-4">Colors</h2>
        <div className="grid grid-cols-4 gap-4">
          {colors.map((c) => (
            <div
              key={c}
              className="border border-divider rounded-card overflow-hidden"
            >
              <div
                className="h-16"
                style={{ background: `var(--${c.startsWith("h-") || c.startsWith("accent-") || c === "coral" ? c : `color-${c}`})` }}
              />
              <div className="p-2 text-meta">{c}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-section mb-4">Typography scale</h2>
        <div className="space-y-4">
          {typeSizes.map((t) => (
            <div key={t} className="flex items-baseline gap-4 border-b border-divider pb-2">
              <span className="text-meta w-24 text-muted uppercase">{t}</span>
              <span className={`text-${t}`}>The quick brown fox jumps — 1234567890</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-section mb-4">Font families</h2>
        <div className="space-y-4">
          {families.map((f) => (
            <div key={f} className="border-b border-divider pb-2">
              <div className="text-meta text-muted uppercase mb-1">font-{f}</div>
              <div className={`font-${f} text-title`}>
                The quick brown fox jumps over the lazy dog
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-section mb-4">Radii</h2>
        <div className="flex gap-4">
          {radii.map((r) => (
            <div key={r} className="text-center">
              <div
                className={`w-24 h-24 bg-beige border border-divider rounded-${r}`}
              />
              <div className="text-meta mt-2">rounded-{r}</div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
