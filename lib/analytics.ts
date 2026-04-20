type SegmentAnalytics = {
  track: (event: string, properties?: Record<string, unknown>) => void;
  identify: (userId: string, traits?: Record<string, unknown>) => void;
  page: (name?: string, properties?: Record<string, unknown>) => void;
};

declare global {
  interface Window {
    analytics?: SegmentAnalytics;
  }
}

export function track(event: string, properties?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  window.analytics?.track(event, properties);
}

export function identify(userId: string, traits?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  window.analytics?.identify(userId, traits);
}
