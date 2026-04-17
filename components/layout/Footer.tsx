import Link from "next/link";
import { Container } from "@/components/ui/Container";
import styles from "./Footer.module.css";

const COLUMNS = [
  {
    title: "Platform",
    links: [
      { href: "#", label: "How it works" },
      { href: "#", label: "Signal Report" },
      { href: "#", label: "Recruitment" },
      { href: "#", label: "Pricing" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { href: "#", label: "CPG & Retail" },
      { href: "#", label: "Healthcare" },
      { href: "#", label: "Enterprise" },
      { href: "#", label: "Use cases" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "#", label: "About" },
      { href: "#", label: "Clients" },
      { href: "#", label: "Research" },
      { href: "/contact-us", label: "Contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.top}>
          <div>
            <div className={styles.brandWordmark}>Humanize</div>
            <div className={styles.brandTagline}>
              Ask your customers before you make the call.
            </div>
          </div>

          <div className={styles.columns}>
            {COLUMNS.map((col) => (
              <div key={col.title} className={styles.col}>
                <div className={styles.colTitle}>{col.title}</div>
                {col.links.map((link) =>
                  link.href.startsWith("/") ? (
                    <Link key={link.label} href={link.href}>
                      {link.label}
                    </Link>
                  ) : (
                    <a key={link.label} href={link.href}>
                      {link.label}
                    </a>
                  ),
                )}
              </div>
            ))}
          </div>
        </div>

        <div className={styles.bottom}>
          <span>© 2026 Humanize</span>
          <div className={styles.legal}>
            <Link href="/privacy-policy">Privacy</Link>
            <Link href="/terms-of-service">Terms</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
