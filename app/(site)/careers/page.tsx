import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { ArrowRightIcon } from "@/components/ui/ArrowRightIcon";
import { roles } from "@/lib/careers";
import styles from "./careers.module.css";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join Humanize. We're building AI-moderated research — ground floor of an early-stage company.",
  alternates: { canonical: "/careers" },
};

export default function CareersPage() {
  return (
    <section className={styles.section}>
      <Container>
        <header className={styles.header}>
          <div className={styles.eyebrow}>Careers</div>
          <h1 className={styles.title}>Build the future of research.</h1>
          <p className={styles.lede}>
            Humanize powers AI-moderated group conversations with real people —
            the kind of research that used to take weeks, delivered in a day.
            We&rsquo;re a small team. Ground floor, hard problems, no politics.
          </p>
        </header>

        <div className={styles.listWrap}>
          <div className={styles.listTitle}>Open roles</div>

          {roles.length === 0 ? (
            <p className={styles.empty}>
              No open roles right now — but we&rsquo;re always open to
              introductions. Reach out at{" "}
              <a href="mailto:careers@humanize.app">careers@humanize.app</a>.
            </p>
          ) : (
            <ul className={styles.list}>
              {roles.map((role) => {
                const isExternal = role.url.startsWith("http");
                return (
                  <li key={role.title} className={styles.role}>
                    <a
                      href={role.url}
                      className={styles.roleLink}
                      {...(isExternal
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                    >
                      <div>
                        <div className={styles.roleTitle}>{role.title}</div>
                        <div className={styles.roleMeta}>
                          <span>{role.team}</span>
                          <span>{role.location}</span>
                        </div>
                      </div>
                      <div className={styles.arrow}>
                        <ArrowRightIcon />
                      </div>
                    </a>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </Container>
    </section>
  );
}
