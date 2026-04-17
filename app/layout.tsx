import type { Metadata } from "next";
import { SegmentSnippet } from "@/components/analytics/SegmentSnippet";
import { plexMono, plexSans, plexSerif } from "@/lib/fonts";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://humanize.convo.social";
const defaultTitle = "Humanize — AI-Moderated Qualitative Research";
const defaultDescription =
  "Humanize runs AI-moderated interviews at the speed of a survey, delivering the depth of qualitative research without the cost or wait.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: "%s — Humanize",
  },
  description: defaultDescription,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Humanize",
    title: defaultTitle,
    description: defaultDescription,
    url: siteUrl,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Humanize" }],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${plexSans.variable} ${plexMono.variable} ${plexSerif.variable}`}
    >
      <body>
        {children}
        <SegmentSnippet />
      </body>
    </html>
  );
}
