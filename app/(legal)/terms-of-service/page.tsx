import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage, LegalUpdated } from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms that govern your access to and use of the Humanize services.",
  alternates: { canonical: "/terms-of-service" },
};

export default function TermsOfServicePage() {
  return (
    <LegalPage>
      <h1>Terms of Service</h1>
      <LegalUpdated>
        <strong>Last Updated: April 1, 2026</strong>
      </LegalUpdated>
      <p>
        Welcome to Convo! These Terms of Service (&ldquo;Terms&rdquo;) govern
        your access to and use of the Convo platform, website, and services
        (collectively, the &ldquo;Services&rdquo;) operated by Convo
        (&ldquo;Convo,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or
        &ldquo;our&rdquo;) at convo.social.
      </p>
      <p>
        By accessing or using any part of the Services, you agree to be bound
        by these Terms. If you do not agree, do not use the Services.
      </p>
      <p>
        If you are using the Services on behalf of an organization, you
        represent that you have the authority to bind that organization to
        these Terms.
      </p>
      <hr />

      <h2>1. Definitions</h2>
      <ul>
        <li>
          <strong>&ldquo;Account&rdquo;</strong> means your registered account
          for accessing the Services.
        </li>
        <li>
          <strong>&ldquo;Researcher&rdquo;</strong> means a customer who
          commissions, designs, or manages research studies through the
          Services.
        </li>
        <li>
          <strong>&ldquo;Participant&rdquo;</strong> means an individual who
          participates in a research session conducted through the Services.
        </li>
        <li>
          <strong>&ldquo;Study&rdquo;</strong> means a qualitative research
          session, focus group, or interview conducted through the Services.
        </li>
        <li>
          <strong>&ldquo;Research Data&rdquo;</strong> means all content
          generated during a Study, including audio recordings, video
          recordings, transcripts, and AI-generated analysis.
        </li>
        <li>
          <strong>&ldquo;User Content&rdquo;</strong> means any content you
          upload, submit, or transmit through the Services, including Study
          designs, discussion guides, screener questions, and responses
          provided during Studies.
        </li>
        <li>
          <strong>&ldquo;AI Moderator&rdquo;</strong> means the artificial
          intelligence system that facilitates and moderates Studies on the
          Services.
        </li>
      </ul>

      <h2>2. The Services</h2>
      <p>
        Convo provides an AI-powered qualitative research platform that
        enables Researchers to design studies, recruit and screen participants,
        conduct AI-moderated focus groups and interviews, and receive
        structured analysis of research sessions.
      </p>
      <p>
        <strong>AI Moderation Disclosure:</strong> Studies conducted through
        the Services are moderated by an AI system, not a human moderator. By
        using the Services, you acknowledge and consent to interacting with an
        AI Moderator during Studies.
      </p>

      <h2>3. Eligibility</h2>
      <p>
        You must be at least 18 years old to use the Services. By using the
        Services, you represent that you are at least 18 and that the
        information you provide is accurate and complete.
      </p>

      <h2>4. Account Registration and Security</h2>
      <p>
        To access certain features, you must create an Account by providing
        accurate information including your name, email address, and any other
        required details.
      </p>
      <p>You are responsible for:</p>
      <ul>
        <li>Maintaining the confidentiality of your Account credentials</li>
        <li>All activities that occur under your Account</li>
        <li>Notifying us immediately of any unauthorized use</li>
      </ul>
      <p>
        We are not liable for any loss or damage arising from your failure to
        protect your Account credentials.
      </p>

      <h2>5. Researcher Terms</h2>
      <h3>5.1 License to Use the Services</h3>
      <p>
        Subject to your compliance with these Terms, we grant Researchers a
        limited, non-exclusive, non-transferable, revocable license to access
        and use the Services for conducting qualitative research.
      </p>
      <h3>5.2 Study Design and Acceptable Use</h3>
      <p>Researchers are responsible for ensuring that their Studies:</p>
      <ul>
        <li>
          Comply with all applicable laws, regulations, and ethical research
          standards
        </li>
        <li>
          Do not collect sensitive personal information (health, financial,
          etc.) from Participants without appropriate consent and legal basis
        </li>
        <li>
          Do not expose Participants to harmful, deceptive, or abusive content
        </li>
        <li>Do not target or recruit minors (individuals under 18)</li>
      </ul>
      <h3>5.3 Billing and Payment</h3>
      <p>
        Researchers agree to pay all fees associated with their use of the
        Services in accordance with the pricing and billing terms presented at
        the time of purchase. All fees are exclusive of taxes. You are
        responsible for paying all applicable taxes.
      </p>
      <p>
        Fees are non-refundable except as required by law or as expressly
        stated in a separate written agreement.
      </p>
      <h3>5.4 Researcher Data Ownership</h3>
      <ul>
        <li>
          <strong>Study Designs:</strong> Researchers retain ownership of their
          study designs, discussion guides, and research objectives.
        </li>
        <li>
          <strong>Research Data:</strong> Research Data generated during
          Studies is processed and held by Convo. Researchers receive a
          license to access, use, and download Research Data (including
          transcripts, analysis, and insights) for their internal research and
          business purposes.
        </li>
        <li>
          <strong>Aggregated Data:</strong> Convo may use anonymized,
          aggregated, and de-identified data derived from Studies to improve
          the Services, develop new features, and conduct internal research.
          This data will not identify individual Participants or Researchers.
        </li>
      </ul>

      <h2>6. Participant Terms</h2>
      <h3>6.1 Participation</h3>
      <p>
        Participation in Studies is voluntary. By joining a Study, Participants
        consent to:
      </p>
      <ul>
        <li>Interaction with an AI Moderator (not a human)</li>
        <li>Audio and/or video recording of the session</li>
        <li>Transcription and AI-powered analysis of their responses</li>
        <li>
          Sharing of their responses and Research Data with the Researcher who
          commissioned the Study
        </li>
      </ul>
      <h3>6.2 Group Sessions</h3>
      <p>
        Studies may be conducted in a group format where multiple Participants
        are present. Participants acknowledge that:
      </p>
      <ul>
        <li>Other Participants in the session will hear their responses</li>
        <li>
          Convo cannot guarantee that other Participants will maintain
          confidentiality of what is discussed
        </li>
        <li>
          Participants should not share information they are not comfortable
          having others hear
        </li>
      </ul>
      <h3>6.3 Participant Content</h3>
      <p>
        By participating in a Study, Participants grant Convo a limited,
        non-exclusive, worldwide, royalty-free license to use, store,
        reproduce, transcribe, analyze, and distribute their responses solely
        for:
      </p>
      <ul>
        <li>Conducting and delivering the Study to the commissioning Researcher</li>
        <li>Processing and analyzing responses to generate research insights</li>
        <li>Improving the Services using aggregated, de-identified data</li>
        <li>Complying with legal obligations</li>
      </ul>
      <p>
        This license is strictly limited to Service-related and research
        purposes. We will not sell Participant responses or use them for
        advertising or unrelated marketing.
      </p>
      <h3>6.4 Compensation</h3>
      <p>
        Participants may receive compensation for participating in Studies as
        communicated during the recruitment and scheduling process.
        Compensation terms are specific to each Study.
      </p>

      <h2>7. User Content</h2>
      <h3>7.1 Ownership</h3>
      <p>
        You retain all ownership rights in your User Content. We do not claim
        ownership of any User Content you upload or submit through the
        Services.
      </p>
      <h3>7.2 Content Restrictions</h3>
      <p>You may not upload, submit, or transmit content that:</p>
      <ul>
        <li>Infringes any intellectual property or proprietary rights</li>
        <li>Is defamatory, obscene, threatening, abusive, or hateful</li>
        <li>Contains viruses, malware, or harmful code</li>
        <li>Violates any applicable law or regulation</li>
        <li>Promotes illegal activities or discrimination</li>
        <li>Contains private information of others without authorization</li>
      </ul>
      <h3>7.3 Content Removal</h3>
      <p>
        We reserve the right to review, edit, or remove User Content that
        violates these Terms, and to suspend or terminate Accounts that
        violate these Terms.
      </p>

      <h2>8. Intellectual Property</h2>
      <p>
        The Services, including all content, features, functionality,
        software, text, graphics, logos, and trademarks, are owned by Convo or
        its licensors and are protected by United States and international
        intellectual property laws.
      </p>
      <p>You may not:</p>
      <ul>
        <li>Copy, modify, or create derivative works of the Services</li>
        <li>Reverse engineer, decompile, or disassemble the Services</li>
        <li>Rent, lease, sell, sublicense, or distribute the Services</li>
        <li>Use the Services to build a competitive product or service</li>
        <li>Remove or alter any proprietary notices on the Services</li>
      </ul>

      <h2>9. Third-Party Services</h2>
      <p>
        The Services may integrate with or link to third-party services (e.g.,
        payment processors, recruitment platforms, scheduling tools). Your use
        of third-party services is governed by their respective terms and
        privacy policies. We are not responsible for any third-party services.
      </p>

      <h2>10. Prohibited Conduct</h2>
      <p>You may not use the Services to:</p>
      <ul>
        <li>Violate any applicable law or regulation</li>
        <li>Harass, threaten, or abuse other users</li>
        <li>Send spam or unsolicited communications</li>
        <li>Attempt to gain unauthorized access to the Services</li>
        <li>Interfere with or disrupt the Services or connected networks</li>
        <li>Use automated tools (bots, scrapers) without our permission</li>
        <li>Impersonate another person or entity</li>
        <li>Collect personal information of other users without consent</li>
      </ul>

      <h2>11. Termination</h2>
      <h3>11.1 By You</h3>
      <p>
        You may terminate your Account at any time by contacting us at
        support@useconvo.ai.
      </p>
      <h3>11.2 By Us</h3>
      <p>
        We may suspend or terminate your Account at any time, with or without
        notice, if you violate these Terms, fail to pay applicable fees, or if
        we are required to do so by law.
      </p>
      <h3>11.3 Effect of Termination</h3>
      <p>Upon termination:</p>
      <ul>
        <li>Your license to use the Services immediately terminates</li>
        <li>
          We may delete your Account and associated data after a reasonable
          retention period
        </li>
        <li>
          Sections that by their nature should survive will survive, including
          Intellectual Property, Disclaimer of Warranties, Limitation of
          Liability, and Indemnification
        </li>
      </ul>

      <h2>12. Disclaimer of Warranties</h2>
      <p>
        THE SERVICES ARE PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS
        AVAILABLE&rdquo; WITHOUT ANY WARRANTIES OF ANY KIND, EXPRESS OR
        IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
        PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
      </p>
      <p>
        WE DO NOT WARRANT THAT THE SERVICES WILL BE UNINTERRUPTED, ERROR-FREE,
        SECURE, OR FREE OF VIRUSES. WE DO NOT GUARANTEE THE ACCURACY,
        RELIABILITY, OR COMPLETENESS OF ANY RESEARCH DATA, ANALYSIS, OR
        INSIGHTS GENERATED BY THE AI MODERATOR OR ANY OTHER COMPONENT OF THE
        SERVICES.
      </p>
      <p>USE OF THE SERVICES IS AT YOUR OWN RISK.</p>

      <h2>13. Limitation of Liability</h2>
      <p>
        TO THE FULLEST EXTENT PERMITTED BY LAW, CONVO&rsquo;S TOTAL LIABILITY
        FOR ANY CLAIMS ARISING OUT OF OR RELATED TO THESE TERMS OR THE
        SERVICES SHALL NOT EXCEED THE GREATER OF: (A) THE TOTAL AMOUNT YOU
        PAID TO US IN THE 12 MONTHS PRECEDING THE EVENT GIVING RISE TO
        LIABILITY; OR (B) ONE HUNDRED DOLLARS ($100).
      </p>
      <p>
        WE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
        CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOSS OF PROFITS,
        REVENUE, DATA, OR BUSINESS OPPORTUNITIES, EVEN IF WE HAVE BEEN ADVISED
        OF THE POSSIBILITY OF SUCH DAMAGES.
      </p>

      <h2>14. Indemnification</h2>
      <p>
        You agree to indemnify, defend, and hold harmless Convo and its
        officers, directors, employees, and agents from any claims,
        liabilities, damages, losses, costs, and expenses (including
        reasonable attorneys&rsquo; fees) arising out of your use of the
        Services, your violation of these Terms, your User Content, or your
        violation of any rights of another party.
      </p>

      <h2>15. Dispute Resolution</h2>
      <h3>15.1 Informal Resolution</h3>
      <p>
        Before filing a claim, you agree to contact us at legal@useconvo.ai
        and attempt to resolve the dispute informally for at least 30 days.
      </p>
      <h3>15.2 Governing Law</h3>
      <p>
        These Terms are governed by the laws of the State of New York, without
        regard to conflict of laws principles.
      </p>
      <h3>15.3 Jurisdiction</h3>
      <p>
        Any legal action arising out of these Terms shall be filed exclusively
        in the state or federal courts located in New York County, New York,
        and you consent to the personal jurisdiction of such courts.
      </p>

      <h2>16. Changes to Terms</h2>
      <p>
        We may modify these Terms at any time. If we make material changes, we
        will notify you by posting the updated Terms with a new &ldquo;Last
        Updated&rdquo; date and, where appropriate, by email. Your continued
        use of the Services after changes constitutes acceptance. If you do
        not agree to updated Terms, you must stop using the Services.
      </p>

      <h2>17. General Provisions</h2>
      <ul>
        <li>
          <strong>Entire Agreement.</strong> These Terms, together with our{" "}
          <Link href="/privacy-policy">Privacy Policy</Link> and{" "}
          <Link href="/study-privacy">Study Privacy Policy</Link>, constitute
          the entire agreement between you and Convo regarding the Services.
        </li>
        <li>
          <strong>Assignment.</strong> You may not assign these Terms without
          our written consent. We may assign these Terms in connection with a
          merger, acquisition, or sale of assets.
        </li>
        <li>
          <strong>Severability.</strong> If any provision is held invalid, the
          remaining provisions continue in effect.
        </li>
        <li>
          <strong>Waiver.</strong> No waiver of any provision shall be
          effective unless in writing.
        </li>
        <li>
          <strong>Force Majeure.</strong> We are not liable for delays or
          failures due to causes beyond our reasonable control.
        </li>
      </ul>

      <h2>18. Contact Us</h2>
      <p>If you have questions about these Terms, please contact us:</p>
      <p>
        <strong>Convo</strong>
        <br />
        300 West 57th Street, 41st Floor
        <br />
        New York, NY 10019
      </p>
      <p>
        <strong>Email:</strong> support@useconvo.ai
      </p>
    </LegalPage>
  );
}
