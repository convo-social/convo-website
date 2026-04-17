import type { Metadata } from "next";
import { SegmentSnippet } from "@/components/analytics/SegmentSnippet";
import { plexMono, plexSans, plexSerif } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Humanize — AI-Moderated Qualitative Research",
    template: "%s — Humanize",
  },
  description:
    "Humanize runs AI-moderated interviews at the speed of a survey, delivering the depth of qualitative research without the cost or wait.",
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
