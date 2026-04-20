import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage, LegalUpdated } from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Humanize Privacy Policy — how we collect, use, and protect your personal data.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage>
      <h1>Privacy Policy</h1>
      <LegalUpdated>
        <strong>Last Updated: April 1, 2026</strong>
      </LegalUpdated>
      <p>
        Thank you for visiting Humanize! We value your privacy and want you to
        understand how we collect, use, and protect your personal data when you
        interact with our website, sign up for our services as a customer,
        request demos, receive marketing communications, or otherwise engage
        with us in a non-participant capacity.
      </p>
      <p>
        <strong>Note:</strong> If you are participating in a Humanize research
        study or focus group, please see our separate{" "}
        <Link href="/study-privacy">Humanize Study Privacy Policy</Link> for
        details on how we handle participant data.
      </p>
      <hr />

      <h2>1. Introduction &amp; Contact Information</h2>
      <p>
        Humanize provides an AI-powered qualitative research platform. This
        Privacy Policy (&ldquo;Policy&rdquo;) describes how we collect and
        process personal data from:
      </p>
      <ul>
        <li>Website visitors</li>
        <li>Prospective or existing customers (Researchers)</li>
        <li>
          Anyone engaging with our website or services in a non-participant
          capacity
        </li>
      </ul>
      <p>
        If you have questions or concerns about this Policy or your personal
        data, please contact our Data Protection Officer:
      </p>
      <p>
        <strong>Data Protection Officer:</strong>
        <br />
        Orr Matarasso
        <br />
        300 West 57th Street, 41st Floor
        <br />
        New York, NY 10019
        <br />
        United States
        <br />
        orr@useconvo.ai
      </p>

      <h2>2. Information We Collect</h2>
      <p>
        When you use our website or otherwise interact with us (outside of
        research studies), we may collect:
      </p>
      <h3>2.1 Contact Details</h3>
      <p>
        Name, job title, company name, and work email address — for example,
        when you request a demo, create an account, sign up for updates, or
        contact us.
      </p>
      <h3>2.2 Account Information</h3>
      <p>
        Login credentials, account preferences, billing information, and
        payment details when you subscribe to or purchase the Services.
      </p>
      <h3>2.3 Technical &amp; Usage Data</h3>
      <p>
        IP address, browser type, operating system, device details, pages
        viewed, links clicked, and referring URLs. We collect this data through
        cookies, web beacons, and similar tracking technologies.
      </p>
      <h3>2.4 Marketing &amp; Communication Preferences</h3>
      <p>
        Data you provide when subscribing to newsletters, registering for
        events, or requesting marketing materials.
      </p>
      <h3>2.5 Information from Third Parties</h3>
      <p>
        We may receive personal data from third parties or publicly available
        sources (e.g., LinkedIn, industry events, partner referrals) to support
        our sales and marketing activities.
      </p>

      <h2>3. How We Use Your Information</h2>
      <p>We use your information for the following purposes:</p>
      <ul>
        <li>
          <strong>Provide and Operate the Services:</strong> Maintain your
          account, process payments, deliver research results, and ensure the
          platform functions properly.
        </li>
        <li>
          <strong>Respond to Inquiries &amp; Provide Support:</strong> Fulfill
          demo requests, answer questions, troubleshoot issues, and offer
          customer assistance.
        </li>
        <li>
          <strong>Marketing &amp; Communications:</strong> Send you updates
          about our services, newsletters, or promotional materials, where
          permitted by law or with your consent. You can opt out at any time.
        </li>
        <li>
          <strong>Analytics &amp; Improvements:</strong> Understand how users
          interact with our website and Services, measure campaign performance,
          and improve the user experience.
        </li>
        <li>
          <strong>Security &amp; Fraud Prevention:</strong> Detect,
          investigate, and prevent fraudulent, unauthorized, or illegal
          activity.
        </li>
        <li>
          <strong>Legal Compliance:</strong> Comply with applicable laws,
          regulations, and legal processes.
        </li>
      </ul>

      <h2>4. Cookies and Similar Technologies</h2>
      <p>We and certain third parties use cookies, pixels, and similar technologies to:</p>
      <ul>
        <li>Remember your settings and preferences</li>
        <li>Analyze website traffic and performance</li>
        <li>Measure the effectiveness of our marketing efforts</li>
        <li>Provide more relevant content</li>
      </ul>
      <p>
        You can control cookies through your browser settings. Disabling
        cookies may affect some features or functionality of our website.
      </p>

      <h2>5. Sharing Information with Third Parties</h2>
      <p>We do not sell your personal data. We share it only in limited circumstances:</p>
      <ul>
        <li>
          <strong>Service Providers:</strong> Companies that help us operate
          the Services, including hosting, analytics, email delivery, payment
          processing, and customer support. These providers are authorized to
          use personal data only as necessary to provide services on our
          behalf.
        </li>
        <li>
          <strong>Legal Compliance &amp; Safety:</strong> When required to
          comply with applicable law, protect our rights or the rights of
          others, investigate fraud, or respond to a government request.
        </li>
        <li>
          <strong>Aggregated/De-identified Data:</strong> We may share
          aggregated or de-identified data with partners for analytics or
          research purposes. This data cannot be used to identify you.
        </li>
        <li>
          <strong>Business Transfers:</strong> In connection with a merger,
          acquisition, financing, or sale of all or a portion of our assets. We
          will notify you if a transaction occurs that affects your personal
          data.
        </li>
      </ul>

      <h2>6. Data Storage, Transfers, and Retention</h2>
      <h3>Location of Servers</h3>
      <p>We primarily store data on servers located in the United States.</p>
      <h3>International Transfers</h3>
      <p>
        If you access our website from the EEA, UK, or other regions with data
        transfer restrictions, we rely on lawful transfer mechanisms (e.g.,
        standard contractual clauses) to ensure adequate data protection.
      </p>
      <h3>Retention Period</h3>
      <p>
        We keep personal data only as long as needed for the purposes described
        in this Policy or as required by law. You may request deletion of your
        data by contacting orr@useconvo.ai.
      </p>

      <h2>7. Your Rights and Choices</h2>
      <p>
        Depending on your jurisdiction (e.g., GDPR, CCPA/CPRA), you may have
        certain rights regarding your personal data, including:
      </p>
      <ul>
        <li>
          <strong>Access &amp; Portability:</strong> Request a copy of the
          personal data we hold about you in a structured, commonly used
          format.
        </li>
        <li>
          <strong>Rectification:</strong> Correct any inaccurate or incomplete
          information.
        </li>
        <li>
          <strong>Deletion:</strong> Ask us to delete your personal data where
          legally permitted.
        </li>
        <li>
          <strong>Object/Restrict:</strong> Object to or request restriction of
          certain processing activities.
        </li>
        <li>
          <strong>Withdraw Consent:</strong> Where processing is based on
          consent, you can withdraw it at any time.
        </li>
        <li>
          <strong>Non-Discrimination:</strong> We will not discriminate against
          you for exercising your privacy rights.
        </li>
      </ul>
      <p>
        To exercise your rights, please email orr@useconvo.ai. We will respond
        within the timeframe required by applicable law.
      </p>

      <h2>8. Security Measures</h2>
      <p>
        We employ industry-standard security measures to protect personal data,
        including encryption, access controls, and continuous monitoring.
        However, no method of storage or transmission is completely secure. We
        continuously work to maintain and improve our security protocols.
      </p>

      <h2>9. Children&rsquo;s Data</h2>
      <p>
        Our website and Services are not intended for individuals under the age
        of 16 (or a higher age if mandated by applicable law). We do not
        knowingly collect personal data from children. If you believe we have
        unintentionally collected data from someone under the applicable age,
        please contact us to request deletion.
      </p>

      <h2>10. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time to reflect changes
        in our practices or legal obligations. If we make material changes, we
        will notify you by posting an update on our website or by email. Your
        continued use of our website after any such update constitutes
        acknowledgment of the modified Policy.
      </p>

      <h2>11. Questions, Concerns, or Complaints</h2>
      <p>
        If you have questions about this Policy or how we handle your personal
        data, please contact us at:
      </p>
      <p>
        <strong>Humanize</strong>
        <br />
        Attn: Orr Matarasso, Data Protection Officer
        <br />
        300 West 57th Street, 41st Floor
        <br />
        New York, NY 10019
        <br />
        United States
        <br />
        orr@useconvo.ai
      </p>
      <p>
        If you are in the EU or UK, you may also have the right to lodge a
        complaint with your local data protection authority.
      </p>
    </LegalPage>
  );
}
