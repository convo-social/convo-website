import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import styles from "./legal-layout.module.css";

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.root}>
      <Header ctaLabel="Get started" />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
