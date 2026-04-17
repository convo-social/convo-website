import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(__dirname),
  },
  async redirects() {
    return [
      { source: "/index.html", destination: "/", permanent: true },
      {
        source: "/contact-us.html",
        destination: "/contact-us",
        permanent: true,
      },
      {
        source: "/privacy-policy.html",
        destination: "/privacy-policy",
        permanent: true,
      },
      {
        source: "/terms-of-service.html",
        destination: "/terms-of-service",
        permanent: true,
      },
      {
        source: "/study-privacy.html",
        destination: "/study-privacy",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
