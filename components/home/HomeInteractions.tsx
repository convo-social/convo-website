"use client";

import { useEffect } from "react";
import { runHomeInteractions } from "@/lib/home-interactions";

export function HomeInteractions() {
  useEffect(() => runHomeInteractions(), []);
  return null;
}
