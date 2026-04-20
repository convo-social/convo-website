"use client";

import { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import styles from "./Header.module.css";

type HeaderProps = {
  /** CTA label used on the primary "Book a demo" / "Get started" button. */
  ctaLabel?: string;
};

export function Header({ ctaLabel = "Book a demo" }: HeaderProps) {
  const [open, setOpen] = useState(false);

  return (
    <nav className={styles.nav}>
      <Container className={styles.inner}>
        <Link href="/" className={styles.wordmark}>
          Humanize
        </Link>

        <div className={styles.actions}>
          <a
            href="https://convo.build"
            target="_blank"
            rel="noopener"
            className="btn btn-ghost btn-sm"
          >
            Sign in
          </a>
          <Link href="/contact-us" className="btn btn-primary btn-sm">
            {ctaLabel}
          </Link>
        </div>

        <button
          type="button"
          className={styles.toggle}
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
        </button>
      </Container>

      <div className={`${styles.mobile} ${open ? styles.open : ""}`}>
        <div className={styles.mobileButtons}>
          <a
            href="https://convo.build"
            target="_blank"
            rel="noopener"
            className="btn btn-ghost"
          >
            Sign in
          </a>
          <Link
            href="/contact-us"
            className="btn btn-primary"
            onClick={() => setOpen(false)}
          >
            {ctaLabel}
          </Link>
        </div>
      </div>
    </nav>
  );
}
