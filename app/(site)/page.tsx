import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { Logos } from "@/components/home/Logos";
import { Metrics } from "@/components/home/Metrics";
import { Platform } from "@/components/home/Platform";
import { HowItWorks } from "@/components/home/HowItWorks";
import { Signal } from "@/components/home/Signal";
import { Cases } from "@/components/home/Cases";
import { Tech } from "@/components/home/Tech";
import { FinalCTA } from "@/components/home/FinalCTA";
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
      <Hero />
      <Logos />
      <div className="section-divider"></div>
      <Metrics />
      <div className="section-divider"></div>
      <Platform />
      <div className="section-divider"></div>
      <HowItWorks />
      <div className="section-divider"></div>
      <Signal />
      <div className="section-divider"></div>
      <Cases />
      <div className="section-divider"></div>
      <Tech />
      <div className="section-divider"></div>
      <FinalCTA />
      <HomeInteractions />
    </>
  );
}
