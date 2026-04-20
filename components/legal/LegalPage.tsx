import { Container } from "@/components/ui/Container";
import styles from "./LegalPage.module.css";

type LegalPageProps = {
  children: React.ReactNode;
};

export function LegalPage({ children }: LegalPageProps) {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.content}>{children}</div>
      </Container>
    </section>
  );
}

export function LegalUpdated({ children }: { children: React.ReactNode }) {
  return <p className={styles.updated}>{children}</p>;
}

export function LegalSummaryBox({ children }: { children: React.ReactNode }) {
  return <div className={styles.summaryBox}>{children}</div>;
}
